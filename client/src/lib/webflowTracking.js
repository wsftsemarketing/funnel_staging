
// Webflow-Compatible Mixpanel Tracking Script
// Add this to your Webflow site's custom code section

(function() {
  // Configuration
  const MIXPANEL_TOKEN = 'YOUR_MIXPANEL_TOKEN_HERE';
  const PRODUCTION_DOMAINS = ['yourdomain.com']; // Add your domains
  
  // Check if we should track
  const shouldTrack = PRODUCTION_DOMAINS.includes(window.location.hostname);
  
  if (!shouldTrack) {
    console.log('[Mixpanel] Tracking disabled for this domain');
    return;
  }

  // Load Mixpanel
  (function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<l.length;h++)c(e,l[h]);a._i.push([b,d,g])};a.__SV=1.2})(document,window.mixpanel||[]);

  // Initialize Mixpanel
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    persistence: 'localStorage',
    save_referrer: true,
    secure_cookie: true,
    ip: false
  });

  // Simple tracker object
  const tracker = {
    sessionId: 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    pageStartTime: Date.now(),
    maxScrollDepth: 0,
    sections: new Map(),
    funnelSteps: [],
    isExitTracked: false,

    // Initialize tracking
    init: function() {
      this.captureUTMParams();
      this.identifyUser();
      this.trackPageView();
      this.setupScrollTracking();
      this.setupExitTracking();
      this.setupSectionTracking();
      this.setupButtonTracking();
      this.setupFormTracking();
    },

    // Track an event
    track: function(eventName, properties) {
      properties = properties || {};
      const utmParams = localStorage.getItem('utm_params');
      
      mixpanel.track(eventName, Object.assign({
        session_id: this.sessionId,
        timestamp: new Date().toISOString(),
        page_url: window.location.href
      }, properties, utmParams ? JSON.parse(utmParams) : {}));
    },

    // Capture UTM parameters
    captureUTMParams: function() {
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {};
      
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'gclid', 'fbclid', 'tag', 'hyros_tag'].forEach(function(param) {
        const value = urlParams.get(param);
        if (value) {
          utmData[param] = value;
        }
      });

      if (Object.keys(utmData).length > 0) {
        localStorage.setItem('utm_params', JSON.stringify(utmData));
        mixpanel.register(utmData);
      }
    },

    // Identify user
    identifyUser: function() {
      let userId = localStorage.getItem('mixpanel_user_id');
      if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('mixpanel_user_id', userId);
      }
      
      mixpanel.identify(userId);
      
      const utmParams = localStorage.getItem('utm_params');
      const userProps = {
        $created: new Date().toISOString(),
        referrer: document.referrer,
        landing_page: window.location.href,
        user_agent: navigator.userAgent,
        screen_resolution: screen.width + 'x' + screen.height,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language
      };

      if (utmParams) {
        Object.assign(userProps, JSON.parse(utmParams));
      }

      mixpanel.people.set(userProps);
    },

    // Track page view
    trackPageView: function() {
      const utmParams = localStorage.getItem('utm_params');
      this.track('Page Viewed', Object.assign({
        page_title: document.title,
        page_url: window.location.href,
        page_path: window.location.pathname,
        referrer: document.referrer
      }, utmParams ? JSON.parse(utmParams) : {}));
    },

    // Setup scroll tracking
    setupScrollTracking: function() {
      const self = this;
      let ticking = false;
      
      function updateScrollDepth() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = Math.round((scrollTop / (docHeight - winHeight)) * 100);

        if (scrollPercent > self.maxScrollDepth) {
          self.maxScrollDepth = scrollPercent;
          
          const milestones = [25, 50, 75, 90, 100];
          milestones.forEach(function(milestone) {
            if (scrollPercent >= milestone && !localStorage.getItem('scroll_' + milestone + '_tracked')) {
              localStorage.setItem('scroll_' + milestone + '_tracked', 'true');
              self.track('Scroll Milestone', {
                scroll_depth: milestone,
                time_on_page: self.getTimeOnPage()
              });
            }
          });
        }
        
        ticking = false;
      }

      function onScroll() {
        if (!ticking) {
          requestAnimationFrame(updateScrollDepth);
          ticking = true;
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
    },

    // Setup exit tracking
    setupExitTracking: function() {
      const self = this;
      
      function trackExit() {
        if (!self.isExitTracked) {
          self.isExitTracked = true;
          
          const exitData = {
            event: 'Page Exit',
            properties: {
              time_on_page: self.getTimeOnPage(),
              max_scroll_depth: self.maxScrollDepth,
              session_id: self.sessionId,
              sections_viewed: Array.from(self.sections.keys()),
              funnel_progress: self.funnelSteps.length,
              exit_type: 'beforeunload',
              timestamp: new Date().toISOString()
            }
          };

          if (navigator.sendBeacon) {
            const payload = JSON.stringify(exitData);
            navigator.sendBeacon('https://api.mixpanel.com/track?data=' + btoa(payload) + '&api_key=' + MIXPANEL_TOKEN);
          }
        }
      }

      // Track tab visibility changes
      document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
          self.track('Tab Hidden', {
            time_on_page: self.getTimeOnPage(),
            max_scroll_depth: self.maxScrollDepth
          });
        } else {
          self.track('Tab Visible', {
            time_on_page: self.getTimeOnPage()
          });
        }
      });

      window.addEventListener('beforeunload', trackExit);
      window.addEventListener('pagehide', trackExit);
    },

    // Setup section tracking (using Intersection Observer)
    setupSectionTracking: function() {
      const self = this;
      
      if (!('IntersectionObserver' in window)) return;

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          const sectionName = entry.target.getAttribute('data-section') || 
                             entry.target.id || 
                             entry.target.className.split(' ')[0];
          
          if (entry.isIntersecting) {
            self.enterSection(sectionName);
          } else {
            self.exitSection(sectionName);
          }
        });
      }, {
        threshold: [0.1, 0.5, 0.9],
        rootMargin: '0px'
      });

      // Observe sections
      const sections = document.querySelectorAll('[data-section], section[id], .section');
      sections.forEach(function(section) {
        observer.observe(section);
      });
    },

    // Setup button tracking
    setupButtonTracking: function() {
      const self = this;
      
      document.addEventListener('click', function(event) {
        const element = event.target;
        
        // Track buttons and links
        if (element.tagName === 'BUTTON' || element.tagName === 'A' || element.getAttribute('role') === 'button') {
          const buttonText = element.textContent.trim().substring(0, 100);
          const buttonLocation = self.getElementLocation(element);
          
          self.track('Button Clicked', {
            button_text: buttonText,
            button_location: buttonLocation,
            time_on_page: self.getTimeOnPage()
          });
        }
      });
    },

    // Setup form tracking
    setupFormTracking: function() {
      const self = this;
      
      document.addEventListener('submit', function(event) {
        const form = event.target;
        if (form.tagName === 'FORM') {
          const formName = form.getAttribute('data-form-name') || 
                          form.name || 
                          form.id || 
                          'unknown_form';
          
          self.track('Form Submitted', {
            form_name: formName,
            time_on_page: self.getTimeOnPage()
          });
        }
      });
    },

    // Section enter
    enterSection: function(sectionName) {
      if (!sectionName || sectionName === 'undefined') return;

      const now = Date.now();
      this.sections.set(sectionName, {
        name: sectionName,
        enterTime: now,
        totalTime: 0
      });

      this.track('Section Entered', {
        section_name: sectionName,
        time_on_page: this.getTimeOnPage()
      });
    },

    // Section exit
    exitSection: function(sectionName) {
      const section = this.sections.get(sectionName);
      if (!section) return;

      const timeInSection = Date.now() - section.enterTime;
      section.totalTime += timeInSection;

      this.track('Section Exited', {
        section_name: sectionName,
        time_in_section: timeInSection,
        total_time_in_section: section.totalTime
      });

      this.sections.delete(sectionName);
    },

    // Track funnel step
    trackFunnelStep: function(stepName, stepOrder, properties) {
      const timestamp = Date.now();
      const previousStep = this.funnelSteps[this.funnelSteps.length - 1];
      const timeFromPrevious = previousStep ? timestamp - previousStep.timestamp : 0;

      this.funnelSteps.push({
        step: stepName,
        timestamp: timestamp,
        order: stepOrder
      });

      this.track('Funnel Step', Object.assign({
        step_name: stepName,
        step_order: stepOrder,
        time_from_previous: timeFromPrevious,
        total_funnel_time: timestamp - this.pageStartTime
      }, properties || {}));
    },

    // Get time on page
    getTimeOnPage: function() {
      return Math.round((Date.now() - this.pageStartTime) / 1000);
    },

    // Get element location context
    getElementLocation: function(element) {
      const section = element.closest('[data-section], section[id], .section');
      if (section) {
        return section.getAttribute('data-section') || section.id || 'unknown_section';
      }
      return 'unknown_location';
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      tracker.init();
    });
  } else {
    tracker.init();
  }

  // Expose tracker globally for manual tracking
  window.webflowTracker = tracker;

})();

// Usage Examples:
// webflowTracker.track('Custom Event', { custom_property: 'value' });
// webflowTracker.trackFunnelStep('Registration Completed', 3);
