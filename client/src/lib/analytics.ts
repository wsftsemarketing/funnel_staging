import mixpanel from 'mixpanel-browser';

// Mixpanel configuration
const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN || '79f20bfb126b3ffe57192638f36ee883';

// Production domain whitelist
const PRODUCTION_DOMAINS = [
  'commercial.touchstoneeducation.com',
  'touchstoneeducation.com' // Add any other production domains
];

// Check if current domain is production
const isProductionDomain = (): boolean => {
  const currentDomain = window.location.hostname;
  return PRODUCTION_DOMAINS.includes(currentDomain);
};

// Only initialize Mixpanel on production domains
const shouldInitializeMixpanel = isProductionDomain();

if (shouldInitializeMixpanel) {
  // Initialize Mixpanel
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: import.meta.env.DEV,
    track_pageview: true,
    persistence: 'localStorage',
    property_blacklist: ['$current_url', '$initial_referrer', '$referrer'],
    save_referrer: true,
    cross_subdomain_cookie: false,
    secure_cookie: true,
    ip: false, // Respect privacy
  });
} else {
  console.log(`[Analytics] Skipping Mixpanel initialization for domain: ${window.location.hostname}`);
}

// Types for better TypeScript support
interface TrackingData {
  [key: string]: any;
}

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_id?: string;
  gclid?: string; // Google Ads
  fbclid?: string; // Facebook Ads
  hyros_tag?: string; // Hyros tracking
}

interface SessionData {
  session_id: string;
  session_start: number;
  page_views: number;
  scroll_depth: number;
  time_on_page: number;
  referrer: string;
  landing_page: string;
}

interface CohortData {
  cohort_id: string;
  cohort_type: 'time' | 'behavior' | 'source';
  cohort_value: string;
  registration_date: string;
  first_visit_date: string;
}

interface EngagementData {
  webinar_attendance: number;
  webinar_completion_rate: number;
  email_engagement_score: number;
  page_revisit_count: number;
  total_time_on_site: number;
  key_page_time: number;
  form_interactions: number;
  video_watch_time: number;
}

interface PredictiveMetrics {
  purchase_likelihood: number;
  churn_probability: number;
  engagement_trend: 'increasing' | 'stable' | 'decreasing';
  optimal_contact_time: string;
  lead_score: number;
}

interface FunnelStep {
  step_name: string;
  step_order: number;
  timestamp: number;
  session_id: string;
  time_from_previous: number;
}

class Analytics {
  private sessionData: SessionData;
  private scrollDepth = 0;
  private timeOnPage = 0;
  private pageStartTime = Date.now();
  private scrollTimer: NodeJS.Timeout | null = null;
  private isExitIntentTracked = false;
  private cohortData: CohortData | null = null;
  private engagementData: EngagementData;
  private funnelSteps: FunnelStep[] = [];
  private behavioralTriggers: Set<string> = new Set();

  constructor() {
    this.sessionData = this.initializeSession();
    this.captureUTMParams();
    this.initializeEngagementData();
    this.initializeCohortData();
    
    // Only set up tracking on production domains
    if (shouldInitializeMixpanel) {
      this.setupAutomaticTracking();
      this.identifyUser();
      this.setupBehavioralTriggers();
    } else {
      console.log(`[Analytics] Analytics disabled for development/staging domain: ${window.location.hostname}`);
    }
  }

  private initializeSession(): SessionData {
    const sessionId = this.getOrCreateSessionId();
    const existingSession = localStorage.getItem('analytics_session');
    
    if (existingSession) {
      const parsed = JSON.parse(existingSession);
      return {
        ...parsed,
        page_views: parsed.page_views + 1,
        time_on_page: 0
      };
    }

    return {
      session_id: sessionId,
      session_start: Date.now(),
      page_views: 1,
      scroll_depth: 0,
      time_on_page: 0,
      referrer: document.referrer || 'direct',
      landing_page: window.location.href
    };
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('session_id', sessionId);
    }
    return sessionId;
  }

  private captureUTMParams(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams: UTMParams = {};
    
    // Capture UTM parameters
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'gclid', 'fbclid'].forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        utmParams[param as keyof UTMParams] = value;
      }
    });

    // Capture Hyros tags if present
    const hyrosTag = urlParams.get('tag') || urlParams.get('hyros_tag');
    if (hyrosTag) {
      utmParams.hyros_tag = hyrosTag;
    }

    // Store UTM data in localStorage for attribution
    if (Object.keys(utmParams).length > 0) {
      localStorage.setItem('utm_params', JSON.stringify(utmParams));
      
      if (shouldInitializeMixpanel) {
        mixpanel.register(utmParams);
      }
    }
  }

  private identifyUser(): void {
    // Check if user has been identified before
    let userId = localStorage.getItem('user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('user_id', userId);
    }
    
    if (!shouldInitializeMixpanel) {
      console.log(`[Analytics] User identification skipped for domain: ${window.location.hostname}`);
      return;
    }
    
    mixpanel.identify(userId);
    
    // Set user properties
    const utmParams = localStorage.getItem('utm_params');
    const userProps: TrackingData = {
      $created: new Date().toISOString(),
      referrer: this.sessionData.referrer,
      landing_page: this.sessionData.landing_page,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
    };

    if (utmParams) {
      Object.assign(userProps, JSON.parse(utmParams));
    }

    mixpanel.people.set(userProps);
  }

  private setupAutomaticTracking(): void {
    this.trackPageView();
    this.trackScrollDepth();
    this.trackTimeOnPage();
    this.trackClicks();
    this.trackExitIntent();
    this.trackFormSubmissions();
  }

  private trackPageView(): void {
    const pageData = {
      page_title: document.title,
      page_url: window.location.href,
      page_path: window.location.pathname,
      referrer: document.referrer,
      session_id: this.sessionData.session_id,
      page_views_in_session: this.sessionData.page_views,
      ...this.getBaseEventData()
    };

    this.track('Page Viewed', pageData);
  }

  private trackScrollDepth(): void {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 90, 100];
    const trackedMilestones = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = Math.round((scrollTop / (docHeight - winHeight)) * 100);

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        this.scrollDepth = maxScroll;
        
        // Track milestone achievements
        milestones.forEach(milestone => {
          if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
            trackedMilestones.add(milestone);
            this.track('Scroll Depth Milestone', {
              scroll_depth: milestone,
              session_id: this.sessionData.session_id,
              ...this.getBaseEventData()
            });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  private trackTimeOnPage(): void {
    const updateTime = () => {
      this.timeOnPage = Math.round((Date.now() - this.pageStartTime) / 1000);
      this.sessionData.time_on_page = this.timeOnPage;
      localStorage.setItem('analytics_session', JSON.stringify(this.sessionData));
    };

    // Update every 10 seconds
    setInterval(updateTime, 10000);

    // Track when user leaves
    window.addEventListener('beforeunload', () => {
      updateTime();
      this.track('Page Exit', {
        time_on_page: this.timeOnPage,
        scroll_depth: this.scrollDepth,
        session_id: this.sessionData.session_id,
        ...this.getBaseEventData()
      });
    });

    // Track when page becomes hidden (tab switch, etc.)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        updateTime();
        this.track('Page Hidden', {
          time_on_page: this.timeOnPage,
          scroll_depth: this.scrollDepth,
          session_id: this.sessionData.session_id,
          ...this.getBaseEventData()
        });
      }
    });
  }

  private trackClicks(): void {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const trackingData = this.getElementTrackingData(target);
      
      if (trackingData) {
        this.track('Element Clicked', {
          ...trackingData,
          session_id: this.sessionData.session_id,
          time_on_page: this.timeOnPage,
          scroll_depth: this.scrollDepth,
          ...this.getBaseEventData()
        });
      }
    });
  }

  private trackExitIntent(): void {
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseY = e.clientY;
    });

    document.addEventListener('mouseout', (e) => {
      if (e.clientY <= 0 && mouseY <= 0 && !this.isExitIntentTracked) {
        this.isExitIntentTracked = true;
        this.track('Exit Intent Detected', {
          time_on_page: this.timeOnPage,
          scroll_depth: this.scrollDepth,
          session_id: this.sessionData.session_id,
          ...this.getBaseEventData()
        });
      }
    });
  }

  private trackFormSubmissions(): void {
    // Track forms with data-track="form" attribute
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form.dataset.track === 'form' || form.classList.contains('track-form')) {
        const formData = new FormData(form);
        const formFields: TrackingData = {};
        
        for (const [key, value] of formData.entries()) {
          if (typeof value === 'string' && !key.toLowerCase().includes('password')) {
            formFields[key] = value;
          }
        }

        this.track('Form Submitted', {
          form_id: form.id || 'unknown',
          form_name: form.name || form.dataset.name || 'unknown',
          form_fields: Object.keys(formFields),
          ...formFields,
          session_id: this.sessionData.session_id,
          time_on_page: this.timeOnPage,
          scroll_depth: this.scrollDepth,
          ...this.getBaseEventData()
        });
      }
    });

    // Track external webinar form submissions (WebinarJam)
    this.trackExternalFormSubmissions();
  }

  private trackExternalFormSubmissions(): void {
    // Monitor for WebinarJam form submissions
    const originalSubmit = HTMLFormElement.prototype.submit;
    HTMLFormElement.prototype.submit = function() {
      if (this.action.includes('webinarjam') || this.classList.contains('webinarjam')) {
        analytics.track('Webinar Registration', {
          form_type: 'external_webinarjam',
          form_action: this.action,
          session_id: analytics.sessionData.session_id,
          time_on_page: analytics.timeOnPage,
          scroll_depth: analytics.scrollDepth,
          ...analytics.getBaseEventData()
        });
      }
      return originalSubmit.call(this);
    };

    // Also monitor for successful redirects (common with external forms)
    window.addEventListener('beforeunload', (event) => {
      const currentUrl = window.location.href;
      if (currentUrl.includes('thank') || currentUrl.includes('success') || currentUrl.includes('registered')) {
        this.track('Registration Success', {
          redirect_url: currentUrl,
          session_id: this.sessionData.session_id,
          ...this.getBaseEventData()
        });
      }
    });
  }

  private getElementTrackingData(element: HTMLElement): TrackingData | null {
    // Check if element or parent has tracking attributes
    let currentElement: HTMLElement | null = element;
    
    while (currentElement && currentElement !== document.body) {
      const trackType = currentElement.dataset.track;
      const trackEvent = currentElement.dataset.trackEvent;
      const trackProperties = currentElement.dataset.trackProperties;
      
      if (trackType || trackEvent) {
        const data: TrackingData = {
          element_type: currentElement.tagName.toLowerCase(),
          element_id: currentElement.id || undefined,
          element_class: currentElement.className || undefined,
          element_text: currentElement.textContent?.trim().substring(0, 100) || undefined,
          track_type: trackType || 'click',
          track_event: trackEvent || 'Element Clicked'
        };

        // Parse additional properties if provided
        if (trackProperties) {
          try {
            const additionalProps = JSON.parse(trackProperties);
            Object.assign(data, additionalProps);
          } catch (e) {
            console.warn('Invalid tracking properties JSON:', trackProperties);
          }
        }

        return data;
      }
      
      currentElement = currentElement.parentElement;
    }

    // Auto-track common elements
    if (element.tagName === 'BUTTON' || element.tagName === 'A' || element.type === 'submit') {
      return {
        element_type: element.tagName.toLowerCase(),
        element_id: element.id || undefined,
        element_class: element.className || undefined,
        element_text: element.textContent?.trim().substring(0, 100) || undefined,
        track_type: 'auto',
        track_event: 'Auto Click Tracked'
      };
    }

    return null;
  }

  private getBaseEventData(): TrackingData {
    const utmParams = localStorage.getItem('utm_params');
    return {
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      ...(utmParams ? JSON.parse(utmParams) : {})
    };
  }

  // Public methods for manual tracking
  public track(eventName: string, properties: TrackingData = {}): void {
    if (!shouldInitializeMixpanel) {
      console.log(`[Analytics] Track blocked for domain: ${window.location.hostname} - Event: ${eventName}`);
      return;
    }
    
    mixpanel.track(eventName, {
      ...properties,
      session_id: this.sessionData.session_id,
      ...this.getBaseEventData()
    });
  }

  public identify(userId: string, traits: TrackingData = {}): void {
    if (!shouldInitializeMixpanel) {
      console.log(`[Analytics] Identify blocked for domain: ${window.location.hostname}`);
      return;
    }
    
    mixpanel.identify(userId);
    mixpanel.people.set(traits);
    localStorage.setItem('user_id', userId);
  }

  public setUserProperties(properties: TrackingData): void {
    if (!shouldInitializeMixpanel) {
      console.log(`[Analytics] Set user properties blocked for domain: ${window.location.hostname}`);
      return;
    }
    
    mixpanel.people.set(properties);
  }

  public trackRevenue(amount: number, properties: TrackingData = {}): void {
    if (!shouldInitializeMixpanel) {
      console.log(`[Analytics] Revenue tracking blocked for domain: ${window.location.hostname}`);
      return;
    }
    
    this.track('Revenue', {
      amount,
      currency: 'GBP',
      ...properties
    });
    
    mixpanel.people.track_charge(amount, {
      $time: new Date(),
      ...properties
    });
  }

  public trackConversion(conversionType: string, properties: TrackingData = {}): void {
    this.track('Conversion', {
      conversion_type: conversionType,
      session_id: this.sessionData.session_id,
      time_to_conversion: this.timeOnPage,
      scroll_depth_at_conversion: this.scrollDepth,
      ...properties,
      ...this.getBaseEventData()
    });
  }

  // A/B Testing support
  public getVariant(testName: string, variants: string[]): string {
    const userId = localStorage.getItem('user_id') || 'anonymous';
    const hash = this.simpleHash(userId + testName);
    const variantIndex = hash % variants.length;
    const variant = variants[variantIndex];
    
    // Track assignment
    this.track('A/B Test Assignment', {
      test_name: testName,
      variant: variant,
      session_id: this.sessionData.session_id
    });
    
    return variant;
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  // Initialize engagement tracking
  private initializeEngagementData(): void {
    const stored = localStorage.getItem('engagement_data');
    this.engagementData = stored ? JSON.parse(stored) : {
      webinar_attendance: 0,
      webinar_completion_rate: 0,
      email_engagement_score: 0,
      page_revisit_count: 1,
      total_time_on_site: 0,
      key_page_time: 0,
      form_interactions: 0,
      video_watch_time: 0
    };
  }

  // Initialize cohort tracking
  private initializeCohortData(): void {
    let cohort = localStorage.getItem('cohort_data');
    if (!cohort) {
      const now = new Date();
      const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      
      const source = this.getTrafficSource();
      
      this.cohortData = {
        cohort_id: `${weekStart.getFullYear()}-W${Math.ceil(weekStart.getDate() / 7)}`,
        cohort_type: 'time',
        cohort_value: monthStart.toISOString().slice(0, 7), // YYYY-MM
        registration_date: now.toISOString(),
        first_visit_date: now.toISOString()
      };
      
      localStorage.setItem('cohort_data', JSON.stringify(this.cohortData));
    } else {
      this.cohortData = JSON.parse(cohort);
    }
  }

  // Get traffic source for cohort analysis
  private getTrafficSource(): string {
    const utmParams = localStorage.getItem('utm_params');
    if (utmParams) {
      const params = JSON.parse(utmParams);
      return params.utm_source || params.hyros_tag || 'direct';
    }
    return document.referrer ? 'referral' : 'direct';
  }

  // Setup behavioral triggers and alerts
  private setupBehavioralTriggers(): void {
    // High engagement detection
    setInterval(() => {
      this.checkHighEngagementTriggers();
    }, 30000); // Check every 30 seconds

    // Exit intent with high engagement
    document.addEventListener('mouseout', (e) => {
      if (e.clientY <= 0 && this.calculateEngagementScore() > 70 && !this.behavioralTriggers.has('high_intent_exit')) {
        this.behavioralTriggers.add('high_intent_exit');
        this.triggerBehavioralAlert('High Intent Exit Detected', {
          engagement_score: this.calculateEngagementScore(),
          time_on_site: this.timeOnPage,
          recommendation: 'Show premium offer or personal consultation'
        });
      }
    });
  }

  // Check for high engagement behavioral triggers
  private checkHighEngagementTriggers(): void {
    const engagementScore = this.calculateEngagementScore();
    const timeOnSite = this.timeOnPage;
    
    // VIP user identification
    if (engagementScore > 80 && timeOnSite > 300 && !this.behavioralTriggers.has('vip_identified')) {
      this.behavioralTriggers.add('vip_identified');
      this.triggerBehavioralAlert('VIP User Identified', {
        engagement_score: engagementScore,
        time_on_site: timeOnSite,
        recommendation: 'Prioritize for personal outreach'
      });
    }
    
    // At-risk user detection
    if (engagementScore < 30 && timeOnSite > 120 && !this.behavioralTriggers.has('at_risk_detected')) {
      this.behavioralTriggers.add('at_risk_detected');
      this.triggerBehavioralAlert('At-Risk User Detected', {
        engagement_score: engagementScore,
        time_on_site: timeOnSite,
        recommendation: 'Show exit intent offer or social proof'
      });
    }
    
    // High intent behavior
    if (this.scrollDepth > 75 && timeOnSite > 180 && this.engagementData.form_interactions > 1 && !this.behavioralTriggers.has('high_intent')) {
      this.behavioralTriggers.add('high_intent');
      this.triggerBehavioralAlert('High Intent Behavior', {
        engagement_score: engagementScore,
        scroll_depth: this.scrollDepth,
        form_interactions: this.engagementData.form_interactions,
        recommendation: 'Show limited time offer or schedule call CTA'
      });
    }
  }

  // Trigger behavioral alert
  private triggerBehavioralAlert(alertType: string, data: TrackingData): void {
    this.track('Behavioral Alert Triggered', {
      alert_type: alertType,
      trigger_data: data,
      session_id: this.sessionData.session_id,
      user_segment: this.getUserSegment(),
      ...this.getBaseEventData()
    });
  }

  // Calculate engagement score (0-100)
  private calculateEngagementScore(): number {
    const weights = {
      timeOnSite: 0.2,
      scrollDepth: 0.15,
      pageViews: 0.15,
      formInteractions: 0.2,
      videoTime: 0.15,
      pageRevisits: 0.15
    };
    
    const normalizedMetrics = {
      timeOnSite: Math.min(this.timeOnPage / 600, 1), // Max 10 minutes
      scrollDepth: this.scrollDepth / 100,
      pageViews: Math.min(this.sessionData.page_views / 10, 1), // Max 10 pages
      formInteractions: Math.min(this.engagementData.form_interactions / 5, 1), // Max 5 interactions
      videoTime: Math.min(this.engagementData.video_watch_time / 1800, 1), // Max 30 minutes
      pageRevisits: Math.min(this.engagementData.page_revisit_count / 5, 1) // Max 5 revisits
    };
    
    const score = Object.entries(normalizedMetrics).reduce((total, [key, value]) => {
      return total + (value * weights[key as keyof typeof weights]);
    }, 0);
    
    return Math.round(score * 100);
  }

  // Get user segment based on behavior
  private getUserSegment(): string {
    const engagementScore = this.calculateEngagementScore();
    const source = this.getTrafficSource();
    
    if (engagementScore > 80) return 'vip';
    if (engagementScore > 60) return 'high_intent';
    if (engagementScore > 40) return 'engaged';
    if (engagementScore > 20) return 'casual';
    return 'low_engagement';
  }

  // Calculate predictive metrics
  private calculatePredictiveMetrics(): PredictiveMetrics {
    const engagementScore = this.calculateEngagementScore();
    const timeOnSite = this.timeOnPage;
    const source = this.getTrafficSource();
    const dayOfWeek = new Date().getDay();
    const hourOfDay = new Date().getHours();
    
    // Purchase likelihood based on engagement and behavior
    let purchaseLikelihood = 0;
    if (engagementScore > 70) purchaseLikelihood += 40;
    if (timeOnSite > 300) purchaseLikelihood += 25;
    if (this.engagementData.form_interactions > 2) purchaseLikelihood += 20;
    if (this.scrollDepth > 80) purchaseLikelihood += 15;
    
    // Churn probability (inverse of engagement)
    const churnProbability = Math.max(0, 100 - engagementScore);
    
    // Engagement trend
    const recentEngagement = this.calculateRecentEngagementTrend();
    
    // Optimal contact time (based on current activity)
    const optimalTime = this.calculateOptimalContactTime(dayOfWeek, hourOfDay, engagementScore);
    
    return {
      purchase_likelihood: Math.min(purchaseLikelihood, 100),
      churn_probability: churnProbability,
      engagement_trend: recentEngagement,
      optimal_contact_time: optimalTime,
      lead_score: Math.round((purchaseLikelihood + (100 - churnProbability)) / 2)
    };
  }

  // Calculate recent engagement trend
  private calculateRecentEngagementTrend(): 'increasing' | 'stable' | 'decreasing' {
    const currentScore = this.calculateEngagementScore();
    const historicalScore = this.getHistoricalEngagementScore();
    
    if (currentScore > historicalScore + 10) return 'increasing';
    if (currentScore < historicalScore - 10) return 'decreasing';
    return 'stable';
  }

  // Get historical engagement score
  private getHistoricalEngagementScore(): number {
    const stored = localStorage.getItem('historical_engagement');
    return stored ? JSON.parse(stored).average_score || 50 : 50;
  }

  // Calculate optimal contact time
  private calculateOptimalContactTime(dayOfWeek: number, hour: number, engagement: number): string {
    if (engagement > 70) return 'immediate';
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour <= 17) return 'business_hours';
    if (hour >= 18 && hour <= 21) return 'evening';
    return 'next_business_day';
  }

  // Advanced funnel tracking
  public trackFunnelStep(stepName: string, stepOrder: number, properties: TrackingData = {}): void {
    const now = Date.now();
    const previousStep = this.funnelSteps[this.funnelSteps.length - 1];
    const timeFromPrevious = previousStep ? now - previousStep.timestamp : 0;
    
    const funnelStep: FunnelStep = {
      step_name: stepName,
      step_order: stepOrder,
      timestamp: now,
      session_id: this.sessionData.session_id,
      time_from_previous: timeFromPrevious
    };
    
    this.funnelSteps.push(funnelStep);
    
    this.track('Funnel Step Completed', {
      ...funnelStep,
      ...properties,
      total_funnel_time: now - this.sessionData.session_start,
      funnel_progress: stepOrder,
      cohort_data: this.cohortData,
      engagement_score: this.calculateEngagementScore(),
      predictive_metrics: this.calculatePredictiveMetrics(),
      ...this.getBaseEventData()
    });
    
    // Check for funnel drop-off alerts
    if (timeFromPrevious > 300000 && previousStep) { // 5 minutes
      this.triggerBehavioralAlert('Funnel Drop-off Risk', {
        previous_step: previousStep.step_name,
        current_step: stepName,
        time_delay: timeFromPrevious,
        recommendation: 'Send re-engagement message or offer assistance'
      });
    }
  }

  // Cohort analysis tracking
  public trackCohortEvent(eventName: string, properties: TrackingData = {}): void {
    this.track(eventName, {
      ...properties,
      cohort_data: this.cohortData,
      cohort_week: this.cohortData?.cohort_id,
      cohort_month: this.cohortData?.cohort_value,
      cohort_source: this.getTrafficSource(),
      days_since_first_visit: this.getDaysSinceFirstVisit(),
      user_segment: this.getUserSegment(),
      engagement_score: this.calculateEngagementScore(),
      ...this.getBaseEventData()
    });
  }

  // Get days since first visit
  private getDaysSinceFirstVisit(): number {
    if (!this.cohortData) return 0;
    const firstVisit = new Date(this.cohortData.first_visit_date);
    const now = new Date();
    return Math.floor((now.getTime() - firstVisit.getTime()) / (1000 * 60 * 60 * 24));
  }

  // Update engagement metrics
  public updateEngagementMetric(metric: keyof EngagementData, value: number): void {
    this.engagementData[metric] = value;
    localStorage.setItem('engagement_data', JSON.stringify(this.engagementData));
    
    // Track significant engagement increases
    if (metric === 'webinar_completion_rate' && value > 80) {
      this.triggerBehavioralAlert('High Webinar Engagement', {
        completion_rate: value,
        recommendation: 'Priority follow-up for course enrollment'
      });
    }
  }

  // Revenue attribution with cohort analysis
  public trackRevenueWithAttribution(amount: number, properties: TrackingData = {}): void {
    const attributionData = {
      ...properties,
      cohort_data: this.cohortData,
      attribution_source: this.getTrafficSource(),
      customer_lifetime_value: this.calculateCustomerLTV(amount),
      time_to_purchase: this.getDaysSinceFirstVisit(),
      engagement_score_at_purchase: this.calculateEngagementScore(),
      funnel_completion_time: this.funnelSteps.length > 0 ? 
        Date.now() - this.funnelSteps[0].timestamp : 0,
      ...this.getBaseEventData()
    };
    
    this.track('Revenue with Attribution', {
      amount,
      currency: 'GBP',
      ...attributionData
    });
    
    if (shouldInitializeMixpanel) {
      mixpanel.people.track_charge(amount, {
        $time: new Date(),
        ...attributionData
      });
    }
  }

  // Calculate customer LTV
  private calculateCustomerLTV(currentPurchase: number): number {
    const stored = localStorage.getItem('customer_purchases');
    const purchases = stored ? JSON.parse(stored) : [];
    purchases.push(currentPurchase);
    localStorage.setItem('customer_purchases', JSON.stringify(purchases));
    
    return purchases.reduce((total: number, amount: number) => total + amount, 0);
  }

  // Advanced user segmentation
  public identifyUserSegment(): string {
    const segment = this.getUserSegment();
    const source = this.getTrafficSource();
    const daysSinceFirst = this.getDaysSinceFirstVisit();
    
    this.setUserProperties({
      user_segment: segment,
      traffic_source: source,
      days_since_first_visit: daysSinceFirst,
      engagement_score: this.calculateEngagementScore(),
      cohort_data: this.cohortData,
      predictive_metrics: this.calculatePredictiveMetrics()
    });
    
    return segment;
  }

  // Get current session data
  public getSessionData(): SessionData {
    return { ...this.sessionData };
  }

  // Get engagement data
  public getEngagementData(): EngagementData {
    return { ...this.engagementData };
  }

  // Get cohort data
  public getCohortData(): CohortData | null {
    return this.cohortData ? { ...this.cohortData } : null;
  }

  // Get predictive metrics
  public getPredictiveMetrics(): PredictiveMetrics {
    return this.calculatePredictiveMetrics();
  }

  // Get funnel progress
  public getFunnelProgress(): FunnelStep[] {
    return [...this.funnelSteps];
  }
}

// Create global analytics instance
export const analytics = new Analytics();

// Export for external use
export default analytics;
