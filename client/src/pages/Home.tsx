import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import WebinarOutcomes from "@/components/WebinarOutcomes";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import TrustPilotReviews from "@/components/TrustPilotReviews";
import Footer from "@/components/Footer";
import CookieConsentModal from "@/components/CookieConsentModal";
import { mixpanelTracker } from "@/lib/mixpanelTracking";

// Note: The following components are kept in the codebase but not currently used on the homepage
import SocialProofNotifications from "@/components/SocialProofNotifications";
// import WebinarCountdownUpsell from "@/components/WebinarCountdownUpsell";
// import SpotReservationTimer from "@/components/SpotReservationTimer";
// import SocialShareIncentive from "@/components/SocialShareIncentive";
// import SimpleExitIntent from "@/components/SimpleExitIntent";
// import EnhancedExitIntent from "@/components/EnhancedExitIntent";

export default function Home() {
  // Track landing page visit once when component mounts
  useEffect(() => {
    mixpanelTracker.trackFunnelStep('Landing Page Visit', 1);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WebinarOutcomes />
      <CaseStudies />
      <RegistrationForm />
      <FAQ />
      <TrustPilotReviews />
      <SocialProofNotifications />
      {/* <CookieConsentModal /> */}
      <Footer /> 

      {/* Note: The following conversion components have been temporarily disabled
          but remain in the component directory for future use:

          - SocialProofNotifications (live registration alerts)
          - WebinarCountdownUpsell (countdown timer)
          - SpotReservationTimer (spot reservation popup)
          - SocialShareIncentive (social share incentive popup)
          - SimpleExitIntent (basic exit intent popup)
          - EnhancedExitIntent (advanced exit intent popup with bonus selection)
      */}
    </div>
  );
}