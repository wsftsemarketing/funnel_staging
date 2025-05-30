import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import PropertyInvestmentCalculator from "@/components/PropertyInvestmentCalculator";
import SocialProofWall from "@/components/SocialProofWall";
import BehindTheScenes from "@/components/BehindTheScenes";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import MarketDashboard from "@/components/MarketDashboard";
import About from "@/components/About";
import Agenda from "@/components/Agenda";
import Presenter from "@/components/Presenter";
import VideoThumbnail from "@/components/VideoThumbnail";
import EmailTemplate from "@/pages/EmailTemplate";
import EmailTemplate2 from "@/pages/EmailTemplate2";
import EmailTemplate3 from "@/pages/EmailTemplate3";
import EmailTemplate4 from "@/pages/EmailTemplate4";
import EmailTemplate5 from "@/pages/EmailTemplate5";
import WebinarAgenda from "@/components/WebinarAgenda";
import ValueProp3Col from "@/components/ValueProp3Col";

export default function Sections() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <About />
      <Agenda />
      <MarketDashboard />
      <Presenter />
<WebinarAgenda />
      <VideoThumbnail />
      <Hero />
      <ValueProp3Col />
      <Stats />
      <Benefits />
      <ROICalculator />
      <Testimonials />
      <SocialProofWall />
      <RegistrationForm />
      <FAQ />
      <BehindTheScenes />
      <PropertyInvestmentCalculator />
      <FinalCTA />
      <EmailTemplate />
    <Footer />
      <EmailTemplate2 />
      <EmailTemplate3 />
      <EmailTemplate4 />
      <EmailTemplate5 />
      <WhatsAppChat />
      
    </div>
  );
}