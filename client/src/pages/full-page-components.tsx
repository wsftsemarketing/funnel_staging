import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Presenter from "@/components/Presenter";
import Agenda from "@/components/Agenda";
import MarketDashboard from "@/components/MarketDashboard";
import Testimonials from "@/components/Testimonials";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Presenter />
      <Agenda />
      <MarketDashboard />
      <Testimonials />
      <RegistrationForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
