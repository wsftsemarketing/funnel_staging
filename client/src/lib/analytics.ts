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

class Analytics {
  private sessionData: SessionData;
  private scrollDepth = 0;
  private timeOnPage = 0;
  private pageStartTime = Date.now();
  private scrollTimer: NodeJS.Timeout | null = null;
  private isExitIntentTracked = false;

  constructor() {
    this.sessionData = this.initializeSession();
    this.captureUTMParams();
    
    // Only set up tracking on production domains
    if (shouldInitializeMixpanel) {
      this.setupAutomaticTracking();
      this.identifyUser();
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

  // Get current session data
  public getSessionData(): SessionData {
    return { ...this.sessionData };
  }
}

// Create global analytics instance
export const analytics = new Analytics();

// Export for external use
export default analytics;
