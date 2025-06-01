
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
  }, []);

  // Track video interactions
  const trackVideoInteraction = useCallback((action: string, properties: TrackingData = {}) => {
    analytics.track('Video Interaction', {
      action: action,
      ...properties
    });
  }, []);

  // Track conversion events
  const trackConversion = useCallback((conversionType: string, properties: TrackingData = {}) => {
    analytics.trackConversion(conversionType, properties);
  }, []);

  // A/B testing hook
  const useABTest = useCallback((testName: string, variants: string[]) => {
    return analytics.getVariant(testName, variants);
  }, []);

  return {
    track: analytics.track.bind(analytics),
    trackPageSection,
    trackButtonClick,
    trackFormInteraction,
    trackVideoInteraction,
    trackConversion,
    useABTest,
    identify: analytics.identify.bind(analytics),
    setUserProperties: analytics.setUserProperties.bind(analytics),
    getSessionData: analytics.getSessionData.bind(analytics),
  };
};

// Hook for automatic section tracking
export const useTrackSection = (sectionName: string, additionalProps: TrackingData = {}) => {
  const { trackPageSection } = useAnalytics();

  useEffect(() => {
    trackPageSection(sectionName, additionalProps);
  }, [sectionName, trackPageSection]);
};
