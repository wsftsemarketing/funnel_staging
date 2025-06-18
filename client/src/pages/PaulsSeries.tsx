
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoSeriesHero from "@/components/VideoSeriesHero";
import ModifiedHero from "@/components/ModifiedHero";
import CaseStudies from "@/components/CaseStudies";
import WebinarOutcomes from "@/components/WebinarOutcomes";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import TrustPilotReviews from "@/components/TrustPilotReviews";
import Footer from "@/components/Footer";
import SocialProofNotifications from "@/components/SocialProofNotifications";
import { mixpanelTracker } from "@/lib/mixpanelTracking";

export default function PaulsSeries() {
  // Track landing page visit for version B
  useEffect(() => {
    mixpanelTracker.trackFunnelStep('Landing Page Visit - Version B', 1);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <VideoSeriesHero />
      <ModifiedHero />
      <WebinarOutcomes />
      <CaseStudies />
      <RegistrationForm />
      <FAQ />
      <TrustPilotReviews />
      <SocialProofNotifications />
      <Footer />
    </div>
  );
}
