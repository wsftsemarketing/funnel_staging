
import { useEffect, useCallback } from 'react';
import { analytics } from '@/lib/analytics';

interface TrackingData {
  [key: string]: any;
}

export const useAnalytics = () => {
  // Track component mount
  const trackPageSection = useCallback((sectionName: string, properties: TrackingData = {}) => {
    analytics.track('Section Viewed', {
      section_name: sectionName,
      ...properties
    });
  }, []);

  // Track button clicks with context
  const trackButtonClick = useCallback((buttonName: string, properties: TrackingData = {}) => {
    analytics.track('Button Clicked', {
      button_name: buttonName,
      ...properties
    });
  }, []);

  // Track form interactions
  const trackFormInteraction = useCallback((formName: string, action: string, properties: TrackingData = {}) => {
    analytics.track('Form Interaction', {
      form_name: formName,
      action: action,
      ...properties
    });
    
    // Update engagement metrics
    analytics.updateEngagementMetric('form_interactions', 
      analytics.getEngagementData().form_interactions + 1);
  }, []);

  // Track video interactions
  const trackVideoInteraction = useCallback((action: string, properties: TrackingData = {}) => {
    analytics.track('Video Interaction', {
      action: action,
      ...properties
    });
    
    // Update video watch time if provided
    if (properties.watch_time) {
      analytics.updateEngagementMetric('video_watch_time', 
        analytics.getEngagementData().video_watch_time + properties.watch_time);
    }
  }, []);

  // Track conversion events
  const trackConversion = useCallback((conversionType: string, properties: TrackingData = {}) => {
    analytics.trackConversion(conversionType, properties);
  }, []);

  // A/B testing hook
  const useABTest = useCallback((testName: string, variants: string[]) => {
    return analytics.getVariant(testName, variants);
  }, []);

  // Cohort tracking
  const trackCohortEvent = useCallback((eventName: string, properties: TrackingData = {}) => {
    analytics.trackCohortEvent(eventName, properties);
  }, []);

  // Funnel tracking
  const trackFunnelStep = useCallback((stepName: string, stepOrder: number, properties: TrackingData = {}) => {
    analytics.trackFunnelStep(stepName, stepOrder, properties);
  }, []);

  // Revenue with attribution
  const trackRevenueWithAttribution = useCallback((amount: number, properties: TrackingData = {}) => {
    analytics.trackRevenueWithAttribution(amount, properties);
  }, []);

  // Webinar specific tracking
  const trackWebinarEvent = useCallback((eventType: 'register' | 'attend' | 'complete' | 'drop_off', properties: TrackingData = {}) => {
    const eventName = `Webinar ${eventType.charAt(0).toUpperCase() + eventType.slice(1)}`;
    
    // Update engagement metrics
    if (eventType === 'attend') {
      analytics.updateEngagementMetric('webinar_attendance', 1);
    } else if (eventType === 'complete' && properties.completion_rate) {
      analytics.updateEngagementMetric('webinar_completion_rate', properties.completion_rate);
    }
    
    analytics.trackCohortEvent(eventName, {
      ...properties,
      webinar_type: 'commercial_property_strategies'
    });
  }, []);

  // Lead scoring
  const getLeadScore = useCallback(() => {
    return analytics.getPredictiveMetrics().lead_score;
  }, []);

  // User segmentation
  const getUserSegment = useCallback(() => {
    return analytics.identifyUserSegment();
  }, []);

  // Engagement score
  const getEngagementScore = useCallback(() => {
    return analytics.getEngagementData();
  }, []);

  // Predictive analytics
  const getPredictiveMetrics = useCallback(() => {
    return analytics.getPredictiveMetrics();
  }, []);

  return {
    // Core tracking
    track: analytics.track.bind(analytics),
    trackPageSection,
    trackButtonClick,
    trackFormInteraction,
    trackVideoInteraction,
    trackConversion,
    useABTest,
    identify: analytics.identify.bind(analytics),
    setUserProperties: analytics.setUserProperties.bind(analytics),
    
    // Advanced features
    trackCohortEvent,
    trackFunnelStep,
    trackRevenueWithAttribution,
    trackWebinarEvent,
    
    // Analytics insights
    getLeadScore,
    getUserSegment,
    getEngagementScore,
    getPredictiveMetrics,
    
    // Data access
    getSessionData: analytics.getSessionData.bind(analytics),
    getEngagementData: analytics.getEngagementData.bind(analytics),
    getCohortData: analytics.getCohortData.bind(analytics),
    getFunnelProgress: analytics.getFunnelProgress.bind(analytics),
  };
};

// Hook for automatic section tracking
export const useTrackSection = (sectionName: string, additionalProps: TrackingData = {}) => {
  const { trackPageSection } = useAnalytics();

  useEffect(() => {
    trackPageSection(sectionName, additionalProps);
  }, [sectionName, trackPageSection]);
};
