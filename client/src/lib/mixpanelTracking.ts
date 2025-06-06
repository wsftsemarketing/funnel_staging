import mixpanel from "mixpanel-browser";

// Initialize Mixpanel
const MIXPANEL_TOKEN =
  import.meta.env.VITE_MIXPANEL_TOKEN || "79f20bfb126b3ffe57192638f36ee883";

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
    track_pageview: true,
    persistence: "localStorage",
    save_referrer: true,
    cross_subdomain_cookie: false,
    secure_cookie: true,
    ip: true,
    autocapture: {
      pageview: "current_url_path", // assuming this is just for commercial
      click: true, // click tracking enabled
      input: true,
      scroll: true,
      submit: true,
      capture_text_content: true,
      record_mask_text_selector: ":password, [type='password'], [type='email'], [name*='phone'], [name*='mobile'], [name*='firstname'], [name*='lastname'], [name*='name'], [name*='company']", // Mask sensitive form fields
      record_block_selector: "", // Unmask images and videos
      record_idle_timeout_ms: 600000, // 10 minutes of inactivity before stopping recording
    },
    record_sessions_percent: 25, // Session Replay enabled, recording 25% of all sessions
    record_heatmap_data: true, // Enable Heatmap data collection
  });
} else {
  console.log(
    `[Mixpanel] Tracking disabled for domain: ${window.location.hostname}`,
  );
}

interface TrackingData {
  [key: string]: any;
}

interface SectionData {
  name: string;
  enterTime: number;
  scrollDepth: number;
  totalTime: number;
  element?: HTMLElement;
}

class MixpanelTracker {
  private sessionId: string;
  private pageStartTime: number;
  private sections: Map<string, SectionData> = new Map();
  private funnelSteps: Array<{
    step: string;
    timestamp: number;
    order: number;
  }> = [];
  private maxScrollDepth = 0;
  private isExitTracked = false;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.pageStartTime = Date.now();

    if (shouldTrack) {
      this.initializeTracking();
      this.captureUTMParams();
      this.identifyUser();
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking(): void {
    this.trackPageView();
    this.setupScrollTracking();
    this.setupExitTracking();
    this.setupSectionObserver();
  }

  private captureUTMParams(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData: TrackingData = {};

    // Capture all UTM and tracking parameters
    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "utm_id",
      "gclid",
      "fbclid",
      "tag",
      "hyros_tag",
    ].forEach((param) => {
      const value = urlParams.get(param);
      if (value) {
        utmData[param] = value;
      }
    });

    if (Object.keys(utmData).length > 0) {
      localStorage.setItem("utm_params", JSON.stringify(utmData));
      mixpanel.register(utmData);
    }
  }

  private identifyUser(): void {
    let userId = localStorage.getItem("mixpanel_user_id");
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("mixpanel_user_id", userId);
    }

    mixpanel.identify(userId);

    const utmParams = localStorage.getItem("utm_params");
    const userProps: TrackingData = {
      $created: new Date().toISOString(),
      referrer: document.referrer,
      landing_page: window.location.href,
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

  private trackPageView(): void {
    const utmParams = localStorage.getItem("utm_params");
    this.track("Page Viewed", {
      page_title: document.title,
      page_url: window.location.href,
      page_path: window.location.pathname,
      referrer: document.referrer,
      session_id: this.sessionId,
      ...(utmParams ? JSON.parse(utmParams) : {}),
    });
  }

  private setupScrollTracking(): void {
    let ticking = false;

    const updateScrollDepth = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = Math.round(
        (scrollTop / (docHeight - winHeight)) * 100,
      );

      if (scrollPercent > this.maxScrollDepth) {
        this.maxScrollDepth = scrollPercent;

        // Track scroll milestones
        const milestones = [25, 50, 75, 90, 100];
        milestones.forEach((milestone) => {
          if (
            scrollPercent >= milestone &&
            !localStorage.getItem(`scroll_${milestone}_tracked`)
          ) {
            localStorage.setItem(`scroll_${milestone}_tracked`, "true");
            this.track("Scroll Milestone", {
              scroll_depth: milestone,
              session_id: this.sessionId,
              time_on_page: this.getTimeOnPage(),
            });
          }
        });
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDepth);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  private setupExitTracking(): void {
    // Track page exits (tab close, navigation away)
    const trackExit = () => {
      if (!this.isExitTracked) {
        this.isExitTracked = true;
        this.trackSectionExits();

        // Use sendBeacon for reliable exit tracking
        const exitData = {
          event: "Page Exit",
          properties: {
            time_on_page: this.getTimeOnPage(),
            max_scroll_depth: this.maxScrollDepth,
            session_id: this.sessionId,
            sections_viewed: Array.from(this.sections.keys()),
            funnel_progress: this.funnelSteps.length,
            exit_type: "beforeunload",
            timestamp: new Date().toISOString(),
          },
        };

        if (navigator.sendBeacon && shouldTrack) {
          const payload = JSON.stringify(exitData);
          navigator.sendBeacon(
            `https://api.mixpanel.com/track?data=${btoa(payload)}&api_key=${MIXPANEL_TOKEN}`,
          );
        }
      }
    };

    // Track tab visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.track("Tab Hidden", {
          time_on_page: this.getTimeOnPage(),
          max_scroll_depth: this.maxScrollDepth,
          session_id: this.sessionId,
        });
      } else {
        this.track("Tab Visible", {
          time_on_page: this.getTimeOnPage(),
          session_id: this.sessionId,
        });
      }
    });

    // Track page unload
    window.addEventListener("beforeunload", trackExit);
    window.addEventListener("pagehide", trackExit);
  }

  private setupSectionObserver(): void {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName =
            entry.target.getAttribute("data-section") ||
            entry.target.id ||
            entry.target.className.split(" ")[0];

          if (entry.isIntersecting) {
            this.enterSection(sectionName, entry.target as HTMLElement);
          } else {
            this.exitSection(sectionName);
          }
        });
      },
      {
        threshold: [0.1, 0.5, 0.9],
        rootMargin: "0px",
      },
    );

    // Auto-observe sections with data-section attribute or common section selectors
    const sectionSelectors = [
      "[data-section]",
      "section[id]",
      ".hero",
      ".case-studies",
      ".webinar-outcomes",
      ".registration",
      ".faq",
      ".testimonials",
    ];

    sectionSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        observer.observe(element);
      });
    });
  }

  private enterSection(sectionName: string, element: HTMLElement): void {
    if (!sectionName || sectionName === "undefined") return;

    const now = Date.now();
    this.sections.set(sectionName, {
      name: sectionName,
      enterTime: now,
      scrollDepth: 0,
      totalTime: 0,
      element,
    });

    this.track("Section Entered", {
      section_name: sectionName,
      time_on_page: this.getTimeOnPage(),
      session_id: this.sessionId,
      scroll_depth: this.maxScrollDepth,
    });
  }

  private exitSection(sectionName: string): void {
    const section = this.sections.get(sectionName);
    if (!section) return;

    const timeInSection = Date.now() - section.enterTime;
    section.totalTime += timeInSection;

    this.track("Section Exited", {
      section_name: sectionName,
      time_in_section: timeInSection,
      total_time_in_section: section.totalTime,
      session_id: this.sessionId,
      scroll_depth: this.maxScrollDepth,
    });

    this.sections.delete(sectionName);
  }

  private trackSectionExits(): void {
    // Track exit data for all active sections
    this.sections.forEach((section, sectionName) => {
      const timeInSection = Date.now() - section.enterTime;
      this.track("Section Exit on Page Leave", {
        section_name: sectionName,
        time_in_section: timeInSection,
        session_id: this.sessionId,
      });
    });
  }

  private getTimeOnPage(): number {
    return Math.round((Date.now() - this.pageStartTime) / 1000);
  }

  // Public methods
  public track(eventName: string, properties: TrackingData = {}): void {
    if (!shouldTrack) {
      console.log(
        `[Mixpanel] Track blocked for domain: ${window.location.hostname} - Event: ${eventName}`,
      );
      return;
    }

    const utmParams = localStorage.getItem("utm_params");
    mixpanel.track(eventName, {
      ...properties,
      session_id: this.sessionId,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      ...(utmParams ? JSON.parse(utmParams) : {}),
    });
  }

  public trackFunnelStep(
    stepName: string,
    stepOrder: number,
    properties: TrackingData = {},
  ): void {
    const timestamp = Date.now();
    const previousStep = this.funnelSteps[this.funnelSteps.length - 1];
    const timeFromPrevious = previousStep
      ? timestamp - previousStep.timestamp
      : 0;

    this.funnelSteps.push({
      step: stepName,
      timestamp,
      order: stepOrder,
    });

    this.track("Funnel Step", {
      step_name: stepName,
      step_order: stepOrder,
      time_from_previous: timeFromPrevious,
      total_funnel_time: timestamp - this.pageStartTime,
      session_id: this.sessionId,
      ...properties,
    });
  }

  public trackConversion(
    conversionType: string,
    properties: TrackingData = {},
  ): void {
    this.track("Conversion", {
      conversion_type: conversionType,
      time_to_convert: this.getTimeOnPage(),
      max_scroll_depth: this.maxScrollDepth,
      session_id: this.sessionId,
      ...properties,
    });
  }

  public trackButtonClick(
    buttonText: string,
    location: string,
    properties: TrackingData = {},
  ): void {
    this.track("Button Clicked", {
      button_text: buttonText,
      button_location: location,
      time_on_page: this.getTimeOnPage(),
      session_id: this.sessionId,
      ...properties,
    });
  }

  public trackFormSubmission(
    formName: string,
    properties: TrackingData = {},
  ): void {
    this.track("Form Submitted", {
      form_name: formName,
      time_on_page: this.getTimeOnPage(),
      session_id: this.sessionId,
      ...properties,
    });
  }

  // Cross-domain tracking helper - stores data in localStorage for WebinarJam
  public generateCrossDomainUrl(baseUrl: string, additionalParams: Record<string, string> = {}): string {
    const mixpanelId = localStorage.getItem('mixpanel_user_id') || 'unknown';
    const utmParams = localStorage.getItem('utm_params') || '{}';
    const utmData = JSON.parse(utmParams);

    // Store cross-domain tracking data in localStorage for WebinarJam to pick up
    const crossDomainData = {
      mp_id: mixpanelId,
      mp_session: this.sessionId,
      mp_source: utmData.utm_source || 'direct',
      mp_medium: utmData.utm_medium || 'organic',
      mp_campaign: utmData.utm_campaign || 'webinar',
      mp_timestamp: Date.now(),
      ...additionalParams
    };

    // Store in localStorage (primary method)
    localStorage.setItem('mp_cross_domain_data', JSON.stringify(crossDomainData));

    // Also add as URL params as fallback
    const trackingParams = new URLSearchParams(crossDomainData);
    return `${baseUrl}?${trackingParams.toString()}`;
  }

  // Get cross-domain tracking data
  public getCrossDomainData(): Record<string, string> {
    const mixpanelId = localStorage.getItem('mixpanel_user_id') || 'unknown';
    const utmParams = localStorage.getItem('utm_params') || '{}';
    const utmData = JSON.parse(utmParams);

    return {
      mp_id: mixpanelId,
      mp_session: this.sessionId,
      mp_source: utmData.utm_source || 'direct',
      mp_medium: utmData.utm_medium || 'organic',
      mp_campaign: utmData.utm_campaign || 'webinar'
    };
  }

  // Track form interactions
  public trackFormInteraction(interactionType: string, properties: TrackingData = {}): void {
    this.track('Form Interaction', {
      interaction_type: interactionType,
      time_on_page: this.getTimeOnPage(),
      session_id: this.sessionId,
      ...properties
    });
  }
}

// Create global instance
export const mixpanelTracker = new MixpanelTracker();

// Export for use in components
export default mixpanelTracker;