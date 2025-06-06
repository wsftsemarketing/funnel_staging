
// WebinarJam Tracking Snippets
// Copy and paste these into your WebinarJam pages

// ==========================================
// SNIPPET 1: Thank You Page Tracking
// Place this on the WebinarJam registration thank you page
// ==========================================

// <script>
(function() {
  // Primary: Get tracking data from localStorage
  let trackingData = {};
  try {
    const storedData = localStorage.getItem('mp_cross_domain_data');
    if (storedData) {
      trackingData = JSON.parse(storedData);
    }
  } catch (e) {
    console.warn('Could not parse cross-domain tracking data');
  }

  // Fallback: Get tracking parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const mpId = trackingData.mp_id || urlParams.get('mp_id');
  const mpSession = trackingData.mp_session || urlParams.get('mp_session');
  const mpSource = trackingData.mp_source || urlParams.get('mp_source');
  const mpMedium = trackingData.mp_medium || urlParams.get('mp_medium');
  const mpCampaign = trackingData.mp_campaign || urlParams.get('mp_campaign');
  const email = urlParams.get('email');

  if (!mpId || !mpSession) return;

  // Initialize Mixpanel with same token
  !function(c,b,a,_){c[a]=c[a]||[];for(var d=0;d<c[a].length;d++){var e=c[a][d];if(e){var f=b.createElement("script");f.type="text/javascript";f.async=!0;f.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";b.getElementsByTagName("head")[0].appendChild(f);break}}c[a].push(["init","79f20bfb126b3ffe57192638f36ee883"]);c[a].push(["identify",mpId])}(window,document,"mixpanel");

  mixpanel.track('WebinarJam Registration Confirmed', {
    mp_id: mpId,
    session_id: mpSession,
    utm_source: mpSource,
    utm_medium: mpMedium,
    utm_campaign: mpCampaign,
    email: email,
    page_type: 'thank_you',
    platform: 'webinarjam',
    funnel_step: 3,
    timestamp: new Date().toISOString()
  });
})();
// </script>

// ==========================================
// SNIPPET 2: Webinar Room Entry Tracking  
// Place this on the actual webinar page when it loads
// ==========================================

// <script>
(function() {
  // Primary: Get tracking data from localStorage
  let trackingData = {};
  try {
    const storedData = localStorage.getItem('mp_cross_domain_data');
    if (storedData) {
      trackingData = JSON.parse(storedData);
    }
  } catch (e) {
    console.warn('Could not parse cross-domain tracking data');
  }

  // Fallback: Get tracking parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const mpId = trackingData.mp_id || urlParams.get('mp_id');
  const mpSession = trackingData.mp_session || urlParams.get('mp_session');
  const mpSource = trackingData.mp_source || urlParams.get('mp_source');
  const mpMedium = trackingData.mp_medium || urlParams.get('mp_medium');
  const mpCampaign = trackingData.mp_campaign || urlParams.get('mp_campaign');
  const email = urlParams.get('email');

  if (!mpId || !mpSession) return;

  // Initialize Mixpanel
  !function(c,b,a,_){c[a]=c[a]||[];for(var d=0;d<c[a].length;d++){var e=c[a][d];if(e){var f=b.createElement("script");f.type="text/javascript";f.async=!0;f.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";b.getElementsByTagName("head")[0].appendChild(f);break}}c[a].push(["init","79f20bfb126b3ffe57192638f36ee883"]);c[a].push(["identify",mpId])}(window,document,"mixpanel");

  let webinarStartTime = Date.now();
  let lastHeartbeat = Date.now();
  let totalWatchTime = 0;
  let isActive = true;

  // Track webinar entry
  mixpanel.track('Webinar Room Entered', {
    mp_id: mpId,
    session_id: mpSession,
    utm_source: mpSource,
    utm_medium: mpMedium,
    utm_campaign: mpCampaign,
    email: email,
    page_type: 'webinar_room',
    platform: 'webinarjam',
    funnel_step: 4,
    timestamp: new Date().toISOString()
  });

  // Track viewing engagement every 30 seconds
  const heartbeatInterval = setInterval(function() {
    if (isActive) {
      totalWatchTime += 30;
      const watchPercentage = Math.round((totalWatchTime / 5400) * 100); // 90 minutes = 5400 seconds

      mixpanel.track('Webinar Heartbeat', {
        mp_id: mpId,
        session_id: mpSession,
        watch_time_seconds: totalWatchTime,
        watch_percentage: Math.min(watchPercentage, 100),
        platform: 'webinarjam',
        timestamp: new Date().toISOString()
      });

      // Track milestones
      if (watchPercentage >= 25 && !localStorage.getItem('webinar_25_tracked')) {
        localStorage.setItem('webinar_25_tracked', 'true');
        mixpanel.track('Webinar Milestone - 25%', {
          mp_id: mpId,
          session_id: mpSession,
          watch_time_seconds: totalWatchTime,
          platform: 'webinarjam'
        });
      }

      if (watchPercentage >= 50 && !localStorage.getItem('webinar_50_tracked')) {
        localStorage.setItem('webinar_50_tracked', 'true');
        mixpanel.track('Webinar Milestone - 50%', {
          mp_id: mpId,
          session_id: mpSession,
          watch_time_seconds: totalWatchTime,
          platform: 'webinarjam'
        });
      }

      if (watchPercentage >= 75 && !localStorage.getItem('webinar_75_tracked')) {
        localStorage.setItem('webinar_75_tracked', 'true');
        mixpanel.track('Webinar Milestone - 75%', {
          mp_id: mpId,
          session_id: mpSession,
          watch_time_seconds: totalWatchTime,
          platform: 'webinarjam'
        });
      }

      if (watchPercentage >= 90 && !localStorage.getItem('webinar_90_tracked')) {
        localStorage.setItem('webinar_90_tracked', 'true');
        mixpanel.track('Webinar Milestone - 90%', {
          mp_id: mpId,
          session_id: mpSession,
          watch_time_seconds: totalWatchTime,
          platform: 'webinarjam'
        });
      }
    }
  }, 30000); // Every 30 seconds

  // Track when user becomes inactive/active
  if (typeof document !== 'undefined' && document) {
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        isActive = false;
        mixpanel.track('Webinar Tab Hidden', {
          mp_id: mpId,
          session_id: mpSession,
          watch_time_seconds: totalWatchTime,
          platform: 'webinarjam'
        });
      } else {
        isActive = true;
        mixpanel.track('Webinar Tab Visible', {
          mp_id: mpId,
          session_id: mpSession,
          watch_time_seconds: totalWatchTime,
          platform: 'webinarjam'
        });
      }
    });
  }

  // Track when user leaves webinar
  if (typeof window !== 'undefined' && window) {
    window.addEventListener('beforeunload', function() {
      mixpanel.track('Webinar Room Exited', {
        mp_id: mpId,
        session_id: mpSession,
        total_watch_time: totalWatchTime,
        watch_percentage: Math.round((totalWatchTime / 5400) * 100),
        platform: 'webinarjam',
        timestamp: new Date().toISOString()
      });
    });
  }

})();
// </script>
