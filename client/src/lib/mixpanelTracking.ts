import mixpanel from "mixpanel-browser";

// Initialize Mixpanel
const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN || "79f20bfb126b3ffe57192638f36ee883";

// Production domain whitelist
const PRODUCTION_DOMAINS = ["commercial.touchstoneeducation.com"];

const isProductionDomain = (): boolean => {
  const currentDomain = window.location.hostname;
  return PRODUCTION_DOMAINS.includes(currentDomain);
};

const shouldTrack = isProductionDomain();

if (shouldTrack) {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: import.meta.env.DEV,
    track_pageview: false, // We'll handle this manually
    persistence: "localStorage",
    save_referrer: true,
    cross_subdomain_cookie: false,
    secure_cookie: true,
    ip: true,
  });
} else {
  console.log(`[Mixpanel] Tracking disabled for domain: ${window.location.hostname}`);
}

interface TrackingData {
  [key: string]: any;
}

interface UTMData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_id?: string;
  gclid?: string;
  fbclid?: string;
  tag?: string;
  hyros_tag?: string;
}

class MixpanelTracker {
  private sessionId: string;
  private userId: string;
  private utmData: UTMData = {};
  private funnelStartTime: number;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.funnelStartTime = Date.now();

    if (shouldTrack) {
      this.captureUTMParams();
      this.initializeUser();
      this.trackFunnelStep('Landing Page Visit', 1);
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private captureUTMParams(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams: UTMData = {};

    // Capture all UTM and tracking parameters
    const paramKeys = [
      "utm_source", "utm_medium", "utm_campaign", "utm_term", 
      "utm_content", "utm_id", "gclid", "fbclid", "tag", "hyros_tag"
    ];

    paramKeys.forEach((param) => {
      const value = urlParams.get(param);
      if (value) {
        utmParams[param] = value;
      }
    });

    console.log('🔍 UTM parameters captured from URL:', utmParams);

    if (Object.keys(utmParams).length > 0) {
      // Store fresh UTM data
      this.utmData = utmParams;
      localStorage.setItem("utm_params", JSON.stringify(utmParams));

      // Register with Mixpanel for all future events
      if (shouldTrack) {
        mixpanel.register(utmParams);
      }

      console.log('✅ UTM parameters stored and registered with Mixpanel');
    } else {
      // Check for existing UTM data
      const existingUTM = localStorage.getItem('utm_params');
      if (existingUTM) {
        try {
          this.utmData = JSON.parse(existingUTM);
          console.log('📦 Using existing UTM parameters:', this.utmData);
          if (shouldTrack) {
            mixpanel.register(this.utmData);
          }
        } catch (e) {
          console.warn('Failed to parse existing UTM params:', e);
          this.utmData = {};
        }
      } else {
        console.log('ℹ️ No UTM parameters found');
        this.utmData = {};
      }
    }
  }

  private initializeUser(): void {
    // Get or create user ID
    let userId = localStorage.getItem("mixpanel_user_id");
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("mixpanel_user_id", userId);
    }
    this.userId = userId;

    // Identify user in Mixpanel
    mixpanel.identify(userId);

    // Set user properties
    const userProps: TrackingData = {
      $created: new Date().toISOString(),
      referrer: document.referrer,
      landing_page: window.location.href,
      user_agent: navigator.userAgent,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      ...this.utmData
    };

    mixpanel.people.set(userProps);
  }

  // Core funnel tracking methods
  public trackFunnelStep(stepName: string, stepOrder: number, properties: TrackingData = {}): void {
    const timestamp = Date.now();
    const timeFromStart = timestamp - this.funnelStartTime;

    this.track("Funnel Step", {
      step_name: stepName,
      step_order: stepOrder,
      time_from_start: timeFromStart,
      session_id: this.sessionId,
      funnel_type: 'webinar_registration',
      ...properties,
    });

    console.log(`📊 Funnel Step ${stepOrder}: ${stepName}`);
  }

  public trackRegistrationSubmission(formData: TrackingData = {}): void {
    this.trackFunnelStep('Registration Form Submitted', 2, {
      form_name: 'webinar_registration',
      webinar_hash: 'y86q9a7p',
      ...formData
    });
  }

  public trackConfirmationPageView(): void {
    this.trackFunnelStep('Confirmation Page Viewed', 3, {
      page_type: 'confirmation'
    });
  }

  public trackWebinarJoin(): void {
    this.trackFunnelStep('Webinar Joined', 4, {
      event_type: 'webinar_join'
    });
  }

  public trackVideoProgress(progressPercent: number, watchTime: number): void {
    this.track("Video Progress", {
      progress_percent: progressPercent,
      watch_time_seconds: watchTime,
      session_id: this.sessionId,
      funnel_step: 5,
      event_type: 'video_progress'
    });

    // Track milestone events
    const milestones = [25, 50, 75, 90, 100];
    milestones.forEach((milestone) => {
      if (progressPercent >= milestone && !localStorage.getItem(`video_${milestone}_tracked`)) {
        localStorage.setItem(`video_${milestone}_tracked`, "true");
        this.trackFunnelStep(`Video Watched ${milestone}%`, 5, {
          milestone_percent: milestone,
          watch_time_seconds: watchTime
        });
      }
    });
  }

  // General tracking method
  public track(eventName: string, properties: TrackingData = {}): void {
    if (!shouldTrack) {
      console.log(`[Mixpanel] Track blocked for domain: ${window.location.hostname} - Event: ${eventName}`);
      return;
    }

    const eventProps = {
      ...properties,
      session_id: this.sessionId,
      user_id: this.userId,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title,
      ...this.utmData // Include UTM data in every event
    };

    mixpanel.track(eventName, eventProps);
    console.log(`📈 Event tracked: ${eventName}`, eventProps);
  }

  // Cross-domain URL generation for WebinarJam
  public generateCrossDomainUrl(baseUrl: string, additionalParams: Record<string, string> = {}): string {
    console.log('🔍 Generating cross-domain URL for:', baseUrl);

    // Ensure userId is available
    if (!this.userId) {
      this.userId = localStorage.getItem("mixpanel_user_id") || `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("mixpanel_user_id", this.userId);
    }

    const crossDomainData = {
      mp_id: this.userId,
      mp_session: this.sessionId,
      mp_source: this.utmData.utm_source || 'direct',
      mp_medium: this.utmData.utm_medium || 'organic',
      mp_campaign: this.utmData.utm_campaign || 'webinar',
      mp_timestamp: Date.now(),
      ...additionalParams
    };

    console.log('🔗 Cross-domain data:', crossDomainData);

    // Store for WebinarJam to pick up
    localStorage.setItem('mp_cross_domain_data', JSON.stringify(crossDomainData));

    // Track the redirect
    this.track('Webinar Redirect', {
      destination: 'webinarjam',
      destination_url: baseUrl,
      cross_domain_data: crossDomainData
    });

    // Generate URL with tracking parameters
    const trackingParams = new URLSearchParams();
    Object.entries(crossDomainData).forEach(([key, value]) => {
      trackingParams.append(key, String(value));
    });

    const finalUrl = `${baseUrl}?${trackingParams.toString()}`;
    console.log('✅ Final tracking URL:', finalUrl);
    return finalUrl;
  }

  // Get current tracking data
  public getTrackingData(): Record<string, any> {
    return {
      userId: this.userId,
      sessionId: this.sessionId,
      utmData: this.utmData,
      funnelStartTime: this.funnelStartTime
    };
  }

  // Clear tracking data (for testing)
  public clearTrackingData(): void {
    const keysToRemove = [
      'utm_params', 'mixpanel_user_id', 'mp_cross_domain_data',
      'video_25_tracked', 'video_50_tracked', 'video_75_tracked', 
      'video_90_tracked', 'video_100_tracked'
    ];

    keysToRemove.forEach(key => localStorage.removeItem(key));
    console.log('🧹 Tracking data cleared');
  }
}

// Create global instance
export const mixpanelTracker = new MixpanelTracker();

// WebinarJam script for live page tracking
export const generateWebinarJamScript = (): string => {
  return `
    <script>
    (function() {
      // Check if we're on a WebinarJam live page
      if (window.location.hostname.includes('event.webinarjam.com') && 
          window.location.pathname.includes('/live/')) {
        
        console.log('[WebinarJam Live] Initializing tracking...');
        
        // Get cross-domain data from URL params or localStorage
        const urlParams = new URLSearchParams(window.location.search);
        const storedData = localStorage.getItem('mp_cross_domain_data');
        
        let trackingData = {};
        if (storedData) {
          try {
            trackingData = JSON.parse(storedData);
          } catch (e) {
            console.warn('[WebinarJam Live] Failed to parse stored tracking data');
          }
        }
        
        // Override with URL params if available
        ['mp_id', 'mp_session', 'mp_source', 'mp_medium', 'mp_campaign'].forEach(param => {
          const value = urlParams.get(param);
          if (value) trackingData[param] = value;
        });
        
        // Load Mixpanel
        const script = document.createElement('script');
        script.src = 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js';
        script.onload = function() {
          if (typeof mixpanel !== 'undefined') {
            mixpanel.init('${MIXPANEL_TOKEN}', {
              debug: false,
              track_pageview: false,
              persistence: 'localStorage'
            });
            
            // Track webinar join
            mixpanel.track('Webinar Joined', {
              step_name: 'Webinar Joined',
              step_order: 4,
              funnel_type: 'webinar_registration',
              webinar_url: window.location.href,
              session_id: trackingData.mp_session || 'unknown',
              user_id: trackingData.mp_id || 'unknown',
              utm_source: trackingData.mp_source || 'direct',
              utm_medium: trackingData.mp_medium || 'organic',
              utm_campaign: trackingData.mp_campaign || 'webinar',
              timestamp: new Date().toISOString()
            });
            
            console.log('[WebinarJam Live] Webinar join tracked');
            
            // Track video progress if available
            let lastProgressTracked = 0;
            const trackProgress = () => {
              // Try to get video element (WebinarJam uses various video players)
              const video = document.querySelector('video') || 
                           document.querySelector('.vjs-tech') ||
                           document.querySelector('[data-testid="video"]');
              
              if (video && video.duration && video.currentTime) {
                const progress = Math.round((video.currentTime / video.duration) * 100);
                
                // Track every 25% milestone
                const milestones = [25, 50, 75, 90, 100];
                milestones.forEach(milestone => {
                  if (progress >= milestone && lastProgressTracked < milestone) {
                    mixpanel.track('Video Progress', {
                      progress_percent: milestone,
                      watch_time_seconds: Math.round(video.currentTime),
                      session_id: trackingData.mp_session || 'unknown',
                      funnel_step: 5,
                      event_type: 'video_progress',
                      utm_source: trackingData.mp_source || 'direct',
                      utm_medium: trackingData.mp_medium || 'organic',
                      utm_campaign: trackingData.mp_campaign || 'webinar'
                    });
                    
                    console.log('[WebinarJam Live] Video progress tracked:', milestone + '%');
                    lastProgressTracked = milestone;
                  }
                });
              }
            };
            
            // Check for video progress every 30 seconds
            setInterval(trackProgress, 30000);
            
            // Also track on page unload
            window.addEventListener('beforeunload', () => {
              trackProgress(); // Final progress check
              mixpanel.track('Webinar Session End', {
                session_id: trackingData.mp_session || 'unknown',
                final_progress: lastProgressTracked,
                utm_source: trackingData.mp_source || 'direct',
                utm_medium: trackingData.mp_medium || 'organic',
                utm_campaign: trackingData.mp_campaign || 'webinar'
              });
            });
          }
        };
        document.head.appendChild(script);
      }
    })();
    </script>
  `;
};

// Export for use in components
export default mixpanelTracker;