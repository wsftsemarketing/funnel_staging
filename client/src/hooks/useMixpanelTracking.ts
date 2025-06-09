
import { useEffect, useCallback } from 'react';
import { mixpanelTracker } from '@/lib/mixpanelTracking';

interface TrackingData {
  [key: string]: any;
}

export const useMixpanelTracking = () => {
  // Track section viewing
  const trackSectionView = useCallback((sectionName: string, properties: TrackingData = {}) => {
    mixpanelTracker.track('Section Viewed', {
      section_name: sectionName,
      ...properties
    });
  }, []);

  // Track button clicks
  const trackButtonClick = useCallback((buttonText: string, location: string, properties: TrackingData = {}) => {
    mixpanelTracker.trackButtonClick(buttonText, location, properties);
  }, []);

  // Track form submissions
  const trackFormSubmission = useCallback((formName: string, properties: TrackingData = {}) => {
    mixpanelTracker.trackFormSubmission(formName, properties);
  }, []);

  // Track funnel progression
  const trackFunnelStep = useCallback((stepName: string, stepOrder: number, properties: TrackingData = {}) => {
    mixpanelTracker.trackFunnelStep(stepName, stepOrder, properties);
  }, []);

  // Track conversions
  const trackConversion = useCallback((conversionType: string, properties: TrackingData = {}) => {
    mixpanelTracker.trackConversion(conversionType, properties);
  }, []);

  // Track form interactions
  const trackFormInteraction = useCallback((interactionType: string, properties: TrackingData = {}) => {
    mixpanelTracker.trackFormInteraction(interactionType, properties);
  }, []);

  // General event tracking
  const track = useCallback((eventName: string, properties: TrackingData = {}) => {
    mixpanelTracker.track(eventName, properties);
  }, []);

  // Session recording controls
  const startSessionRecording = useCallback(() => {
    mixpanelTracker.startSessionRecording();
  }, []);

  const stopSessionRecording = useCallback(() => {
    mixpanelTracker.stopSessionRecording();
  }, []);

  return {
    track,
    trackSectionView,
    trackButtonClick,
    trackFormSubmission,
    trackFunnelStep,
    trackConversion,
    trackFormInteraction,
    startSessionRecording,
    stopSessionRecording
  };
};

// Hook for automatic section tracking
export const useTrackSection = (sectionName: string, additionalProps: TrackingData = {}) => {
  const { trackSectionView } = useMixpanelTracking();

  useEffect(() => {
    trackSectionView(sectionName, additionalProps);
  }, [sectionName, trackSectionView]);
};
