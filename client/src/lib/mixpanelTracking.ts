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
    // Enable session replay and heatmaps explicitly
    record_sessions_percent: 100, // Record 100% of sessions
    record_block_class: '', // Don't block any elements
    record_collect_fonts: true,
    record_idle_timeout_ms: 900000, // 15 minutes (900,000 ms)
    record_max_ms: 1800000, // 30 minutes max session length
    // Heatmap configuration - enable for all traffic
    track_links_timeout: 300,
    autotrack: true, // Enable automatic click tracking for heatmaps
    heatmaps: true, // Explicitly enable heatmaps
    heatmaps_record_all_selector: '*', // Record heatmaps for all elements
    // Content recording settings - don't anonymize anything
    record_mask_text_selector: '', // Don't mask any text
    record_block_selector: '', // Don't block any selectors
    record_mask_input_selector: '', // Don't mask any inputs
  });

  // Enable session replay and heatmaps explicitly
  mixpanel.register({
    '$session_recording_enabled': true,
    '$heatmaps_enabled': true
  });

  console.log(`[Mixpanel] Tracking enabled with session replay (50%) and heatmaps for: ${window.location.hostname}`);
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
    // Get or create user ID - but preserve existing one across sessions
    let userId = localStorage.getItem("mixpanel_user_id");
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("mixpanel_user_id", userId);
      console.log('🆔 New user ID created:', userId);
    } else {
      console.log('🆔 Existing user ID found:', userId);
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

  // New tracking methods for missing funnel events
  public trackFormInteractionStart(): void {
    this.track("Form Interaction Started", {
      form_type: 'webinar_registration',
      session_id: this.sessionId,
      event_type: 'form_start'
    });
  }

  public trackFormSubmission(formName: string, properties: TrackingData = {}): void {
    this.track("Registration Form Submitted", {
      form_name: formName,
      form_type: 'webinar_registration',
      session_id: this.sessionId,
      event_type: 'form_submission',
      ...properties
    });
  }

  public trackButtonClick(buttonText: string, location: string, properties: TrackingData = {}): void {
    this.track("Button Click", {
      button_text: buttonText,
      button_location: location,
      session_id: this.sessionId,
      event_type: 'button_click',
      ...properties
    });
  }

  public trackFormInteraction(interactionType: string, properties: TrackingData = {}): void {
    this.track("Form Interaction", {
      interaction_type: interactionType,
      session_id: this.sessionId,
      event_type: 'form_interaction',
      ...properties
    });
  }

  public trackConversion(conversionType: string, properties: TrackingData = {}): void {
    this.track("Conversion", {
      conversion_type: conversionType,
      session_id: this.sessionId,
      event_type: 'conversion',
      ...properties
    });
  }

  public trackCalendarAdd(calendarType: string): void {
    this.track("Calendar Event Added", {
      calendar_type: calendarType,
      event_type: 'calendar_add',
      session_id: this.sessionId
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

  // Cross-domain URL generation for WebinarJam (with redirect tracking)
  public generateCrossDomainUrl(baseUrl: string, additionalParams: Record<string, string> = {}): string {
    const url = this.buildCrossDomainUrl(baseUrl, additionalParams);

    // Track the redirect
    this.track('Webinar Redirect', {
      destination: 'webinarjam',
      destination_url: baseUrl,
      cross_domain_data: JSON.parse(localStorage.getItem('mp_cross_domain_data') || '{}')
    });

    return url;
  }

  // Build cross-domain URL without tracking redirect event
  public buildCrossDomainUrl(baseUrl: string, additionalParams: Record<string, string> = {}): string {
    console.log('🔍 Building cross-domain URL for:', baseUrl);

    // Ensure userId is available
    if (!this.userId) {
      this.userId = localStorage.getItem("mixpanel_user_id") || `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("mixpanel_user_id", this.userId);
    }

    // Force update session ID to ensure freshness
    this.sessionId = this.generateSessionId();

    // Re-check for fresh UTM parameters from current URL
    const currentUrlParams = new URLSearchParams(window.location.search);
    const freshUtmData: UTMData = {};

    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id", "gclid", "fbclid", "tag", "hyros_tag"];
    utmKeys.forEach((key) => {
      const value = currentUrlParams.get(key);
      if (value) {
        freshUtmData[key] = value;
        this.utmData[key] = value; // Update instance data
      }
    });

    // Update localStorage with fresh UTM data if found
    if (Object.keys(freshUtmData).length > 0) {
      const updatedUtmData = { ...this.utmData, ...freshUtmData };
      localStorage.setItem("utm_params", JSON.stringify(updatedUtmData));
      this.utmData = updatedUtmData;
      console.log('🔄 Updated UTM data with fresh parameters:', updatedUtmData);
    }

    const crossDomainData = {
      mp_id: this.userId,
      mp_session: this.sessionId,
      mp_source: this.utmData.utm_source || 'direct',
      mp_medium: this.utmData.utm_medium || 'organic', 
      mp_campaign: this.utmData.utm_campaign || 'webinar',
      mp_term: this.utmData.utm_term,
      mp_content: this.utmData.utm_content,
      mp_utm_id: this.utmData.utm_id,
      mp_gclid: this.utmData.gclid,
      mp_fbclid: this.utmData.fbclid,
      mp_tag: this.utmData.tag,
      mp_hyros_tag: this.utmData.hyros_tag,
      mp_timestamp: Date.now(),
      ...additionalParams
    };

    // Clean undefined values
    Object.keys(crossDomainData).forEach(key => {
      if (crossDomainData[key] === undefined) {
        delete crossDomainData[key];
      }
    });

    console.log('🔗 Cross-domain data:', crossDomainData);

    // Store for WebinarJam to pick up (multiple storage methods for reliability)
    localStorage.setItem('mp_cross_domain_data', JSON.stringify(crossDomainData));
    localStorage.setItem('webinar_tracking_backup', JSON.stringify(crossDomainData));
    sessionStorage.setItem('mp_cross_domain_data', JSON.stringify(crossDomainData));

    // Generate URL with tracking parameters
    const trackingParams = new URLSearchParams();
    Object.entries(crossDomainData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        trackingParams.append(key, String(value));
      }
    });

    const finalUrl = `${baseUrl}?${trackingParams.toString()}`;
    console.log('✅ Final tracking URL:', finalUrl);
    return finalUrl;
  }

  // Start session recording manually (if needed)
  public startSessionRecording(): void {
    if (!shouldTrack) return;

    mixpanel.start_session_recording();
    console.log('🎥 Session recording started');
  }

  // Stop session recording
  public stopSessionRecording(): void {
    if (!shouldTrack) return;

    mixpanel.stop_session_recording();
    console.log('⏹️ Session recording stopped');
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

  // Restore UTM data from URL parameters (useful for confirmation pages)
  public restoreUTMFromUrl(urlParams: Record<string, string>): void {
    const utmKeys = [
      "utm_source", "utm_medium", "utm_campaign", "utm_term", 
      "utm_content", "utm_id", "gclid", "fbclid", "tag", "hyros_tag"
    ];

    const extractedUtm: UTMData = {};
    let hasNewData = false;

    utmKeys.forEach((key) => {
      const value = urlParams[key];
      if (value) {
        extractedUtm[key] = value;
        hasNewData = true;
      }
    });

    if (hasNewData) {
      // Merge with existing UTM data
      const existingUtm = this.utmData;
      this.utmData = { ...existingUtm, ...extractedUtm };

      // Update localStorage
      localStorage.setItem("utm_params", JSON.stringify(this.utmData));

      // Re-register with Mixpanel
      if (shouldTrack) {
        mixpanel.register(extractedUtm);
      }

      console.log('🔄 UTM data restored from URL:', extractedUtm);
      console.log('✅ Complete UTM data:', this.utmData);
    }
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

// Generate confirmation page tracking snippet
export const generateConfirmationPageScript = (): string => {
  return `
    <script>
    (function() {
      console.log('[CPBO Confirmation] Initializing tracking...');

      // Get cross-domain data from localStorage or URL params
      const urlParams = new URLSearchParams(window.location.search);
      const storedData = localStorage.getItem('mp_cross_domain_data');

      let trackingData = {};
      if (storedData) {
        try {
          trackingData = JSON.parse(storedData);
          console.log('[CPBO Confirmation] Found stored cross-domain data:', trackingData);
        } catch (e) {
          console.warn('[CPBO Confirmation] Failed to parse stored tracking data');
        }
      }

      // Override with URL params if available
      ['mp_id', 'mp_session', 'mp_source', 'mp_medium', 'mp_campaign', 'mp_term', 'mp_content', 'mp_utm_id', 'mp_gclid', 'mp_fbclid', 'mp_tag', 'mp_hyros_tag'].forEach(param => {
        const value = urlParams.get(param);
        if (value) trackingData[param] = value;
      });

      // Store the tracking data for WebinarJam live page to pick up
      localStorage.setItem('wj_tracking_data', JSON.stringify(trackingData));

      // Load Mixpanel first, then track
      const script = document.createElement('script');
      script.src = 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js';
      script.onload = function() {
        // Initialize Mixpanel with same user ID to maintain identity
        if (typeof mixpanel !== 'undefined') {
          mixpanel.init('${MIXPANEL_TOKEN}', {
            debug: false,
            track_pageview: false,
            persistence: 'localStorage'
          });

          // CRITICAL: Identify the same user to maintain identity chain
          if (trackingData.mp_id) {
            mixpanel.identify(trackingData.mp_id);
            console.log('[CPBO Confirmation] User identified with existing ID:', trackingData.mp_id);
          }

          // Register UTM properties for all future events
          const utmProperties = {};
          if (trackingData.mp_source) utmProperties.utm_source = trackingData.mp_source;
          if (trackingData.mp_medium) utmProperties.utm_medium = trackingData.mp_medium;
          if (trackingData.mp_campaign) utmProperties.utm_campaign = trackingData.mp_campaign;
          if (trackingData.mp_term) utmProperties.utm_term = trackingData.mp_term;
          if (trackingData.mp_content) utmProperties.utm_content = trackingData.mp_content;
          if (trackingData.mp_utm_id) utmProperties.utm_id = trackingData.mp_utm_id;
          if (trackingData.mp_gclid) utmProperties.gclid = trackingData.mp_gclid;
          if (trackingData.mp_fbclid) utmProperties.fbclid = trackingData.mp_fbclid;
          if (trackingData.mp_tag) utmProperties.tag = trackingData.mp_tag;
          if (trackingData.mp_hyros_tag) utmProperties.hyros_tag = trackingData.mp_hyros_tag;

          if (Object.keys(utmProperties).length > 0) {
            mixpanel.register(utmProperties);
            console.log('[CPBO Confirmation] UTM properties registered:', utmProperties);
          }

          // Track CPBO Registration Confirmed event
          mixpanel.track('CPBO Reg Confirmed', {
            step_name: 'CPBO Registration Confirmed',
            step_order: 2,
            funnel_type: 'webinar_registration',
            page_type: 'confirmation',
            page_url: window.location.href,
            session_id: trackingData.mp_session || 'unknown',
            user_id: trackingData.mp_id || 'unknown',
            utm_source: trackingData.mp_source || 'direct',
            utm_medium: trackingData.mp_medium || 'organic',
            utm_campaign: trackingData.mp_campaign || 'webinar',
            utm_term: trackingData.mp_term,
            utm_content: trackingData.mp_content,
            utm_id: trackingData.mp_utm_id,
            gclid: trackingData.mp_gclid,
            fbclid: trackingData.mp_fbclid,
            tag: trackingData.mp_tag,
            hyros_tag: trackingData.mp_hyros_tag,
            has_utms: Object.keys(utmProperties).length > 0,
            timestamp: new Date().toISOString()
          });

          // Also track as Funnel Step for consistency
          mixpanel.track('Funnel Step', {
            step_name: 'CPBO Registration Confirmed',
            step_order: 2,
            funnel_type: 'webinar_registration',
            page_type: 'confirmation',
            page_url: window.location.href,
            session_id: trackingData.mp_session || 'unknown',
            user_id: trackingData.mp_id || 'unknown',
            utm_source: trackingData.mp_source || 'direct',
            utm_medium: trackingData.mp_medium || 'organic',
            utm_campaign: trackingData.mp_campaign || 'webinar',
            utm_term: trackingData.mp_term,
            utm_content: trackingData.mp_content,
            utm_id: trackingData.mp_utm_id,
            gclid: trackingData.mp_gclid,
            fbclid: trackingData.mp_fbclid,
            tag: trackingData.mp_tag,
            hyros_tag: trackingData.mp_hyros_tag,
            has_utms: Object.keys(utmProperties).length > 0,
            timestamp: new Date().toISOString()
          });

          console.log('[CPBO Confirmation] Registration confirmation tracked with preserved user identity and UTM data');
        }
      };
      script.onerror = function() {
        console.error('[CPBO Confirmation] Failed to load Mixpanel script');
      };
      document.head.appendChild(script);
    })();
    </script>
  `;
};

// WebinarJam script for live page tracking
export const generateWebinarJamScript = (): string => {
  return `
    <script>
    (function() {
      // Check if we're on a WebinarJam live page
      if (window.location.hostname.includes('event.webinarjam.com') && 
          window.location.pathname.includes('/live/')) {

        console.log('[WebinarJam Live] Initializing tracking...');

        // Get cross-domain data from URL params or localStorage (multiple sources)
        const urlParams = new URLSearchParams(window.location.search);
        const storedData = localStorage.getItem('mp_cross_domain_data');
        const wjTrackingData = localStorage.getItem('wj_tracking_data');

        let trackingData = {};

        // Try multiple data sources in priority order
        if (wjTrackingData) {
          try {
            trackingData = JSON.parse(wjTrackingData);
            console.log('[WebinarJam Live] Found WebinarJam tracking data:', trackingData);
          } catch (e) {
            console.warn('[WebinarJam Live] Failed to parse WebinarJam tracking data');
          }
        } else if (storedData) {
          try {
            trackingData = JSON.parse(storedData);
            console.log('[WebinarJam Live] Found cross-domain tracking data:', trackingData);
          } catch (e) {
            console.warn('[WebinarJam Live] Failed to parse stored tracking data');
          }
        }

        // Override with URL params if available
        ['mp_id', 'mp_session', 'mp_source', 'mp_medium', 'mp_campaign', 'mp_term', 'mp_content', 'mp_utm_id', 'mp_gclid', 'mp_fbclid', 'mp_tag', 'mp_hyros_tag'].forEach(param => {
          const value = urlParams.get(param);
          if (value) trackingData[param] = value;
        });

        console.log('[WebinarJam Live] Final tracking data:', trackingData);

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

            // CRITICAL: Identify the same user to maintain identity chain
            if (trackingData.mp_id) {
              mixpanel.identify(trackingData.mp_id);
              console.log('[WebinarJam Live] User identified with existing ID:', trackingData.mp_id);
            }

            // Register UTM properties for all future events
            const utmProperties = {};
            ['mp_source', 'mp_medium', 'mp_campaign', 'mp_term', 'mp_content', 'mp_utm_id', 'mp_gclid', 'mp_fbclid', 'mp_tag', 'mp_hyros_tag'].forEach(key => {
              if (trackingData[key]) {
                const cleanKey = key.replace('mp_', '');
                utmProperties[cleanKey === 'source' ? 'utm_source' : cleanKey === 'medium' ? 'utm_medium' : cleanKey === 'campaign' ? 'utm_campaign' : cleanKey === 'term' ? 'utm_term' : cleanKey === 'content' ? 'utm_content' : cleanKey === 'utm_id' ? 'utm_id' : cleanKey === 'gclid' ? 'gclid' : cleanKey === 'fbclid' ? 'fbclid' : cleanKey === 'tag' ? 'tag' : 'hyros_tag'] = trackingData[key];
              }
            });

            if (Object.keys(utmProperties).length > 0) {
              mixpanel.register(utmProperties);
              console.log('[WebinarJam Live] UTM properties registered:', utmProperties);
            }

            // Track webinar join with preserved user identity and UTM data
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
              utm_term: trackingData.mp_term,
              utm_content: trackingData.mp_content,
              utm_id: trackingData.mp_utm_id,
              gclid: trackingData.mp_gclid,
              fbclid: trackingData.mp_fbclid,
              tag: trackingData.mp_tag,
              hyros_tag: trackingData.mp_hyros_tag,
              has_utms: Object.keys(utmProperties).length > 0,
              timestamp: new Date().toISOString()
            });

            console.log('[WebinarJam Live] Webinar join tracked with preserved user identity and UTM data');

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
                      user_id: trackingData.mp_id || 'unknown',
                      funnel_step: 5,
                      event_type: 'video_progress',
                      utm_source: trackingData.mp_source || 'direct',
                      utm_medium: trackingData.mp_medium || 'organic',
                      utm_campaign: trackingData.mp_campaign || 'webinar',
                      utm_term: trackingData.mp_term,
                      utm_content: trackingData.mp_content,
                      utm_id: trackingData.mp_utm_id,
                      gclid: trackingData.mp_gclid,
                      fbclid: trackingData.mp_fbclid,
                      tag: trackingData.mp_tag,
                      hyros_tag: trackingData.mp_hyros_tag
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
                user_id: trackingData.mp_id || 'unknown',
                final_progress: lastProgressTracked,
                utm_source: trackingData.mp_source || 'direct',
                utm_medium: trackingData.mp_medium || 'organic',
                utm_campaign: trackingData.mp_campaign || 'webinar',
                utm_term: trackingData.mp_term,
                utm_content: trackingData.mp_content,
                utm_id: trackingData.mp_utm_id,
                gclid: trackingData.mp_gclid,
                fbclid: trackingData.mp_fbclid,
                tag: trackingData.mp_tag,
                hyros_tag: trackingData.mp_hyros_tag
              });
            });
          }
        };
        script.onerror = function() {
          console.error('[WebinarJam Live] Failed to load Mixpanel script');
        };
        document.head.appendChild(script);
      }
    })();
    </script>
  `;
};

// Export for use in components
export default mixpanelTracker;