import { memo } from "react";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { Logo } from "@/components/ui/logo";

// Memoized social media icons to prevent unnecessary re-renders
const SocialIcons = memo(() => (
  <div className="flex space-x-4">
    <a
      href="https://www.facebook.com/YourTouchstoneEducation/"
      className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors"
    >
      <Facebook size={18} />
    </a>
    <a
      href="https://www.linkedin.com/company/touchstoneeducation"
      className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors"
    >
      <Linkedin size={18} />
    </a>
    <a
      href="https://www.instagram.com/touchstoneeducation/"
      className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors"
    >
      <Instagram size={18} />
    </a>
    <a
      href="https://www.youtube.com/@PaulSmithTouchstoneEducation"
      className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors"
    >
      <Youtube size={18} />
    </a>
  </div>
));

// Memoized quick links section
const QuickLinks = memo(() => (
  <div>
    <h3 className="text-lg font-bold mb-6">Quick Links</h3>
    <ul className="space-y-3">
      <li>
        <a
          href="#"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          About the Webinar
        </a>
      </li>
      <li>
        <a
          href="#agenda"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Agenda
        </a>
      </li>
      <li>
        <a
          href="#testimonials"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Testimonials
        </a>
      </li>
      <li>
        <a
          href="#register"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Register
        </a>
      </li>
    </ul>
  </div>
));

// Memoized resources section
const ResourceLinks = memo(() => (
  <div>
    <h3 className="text-lg font-bold mb-6">Resources</h3>
    <ul className="space-y-3">
      <li>
        <a
          href="#"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Property Blog
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Success Stories
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Investment Calculator
        </a>
      </li>
    </ul>
  </div>
));

// Memoized contact section
const ContactInfo = memo(() => (
  <div>
    <h3 className="text-lg font-bold mb-6">Contact Us</h3>
    <ul className="space-y-3">
      <li className="flex items-start">
        <MapPin className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
        <span className="text-neutral-400">
          Industrial ring 3 9491 Ruggell Liechtenstein
        </span>
      </li>
      <li className="flex items-center">
        <Phone className="text-primary h-5 w-5 mr-3 flex-shrink-0" />
        <a
          href="tel:+41435881287"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          +41 43 588 12 87
        </a>
      </li>
      <li className="flex items-center">
        <Mail className="text-primary h-5 w-5 mr-3 flex-shrink-0" />
        <a
          href="mailto:office@touchstoneeducation.com"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          office@touchstoneeducation.com
        </a>
      </li>
    </ul>
  </div>
));

// Memoized copyright section
const CopyrightSection = memo(() => {
  // Use a memoized current year to avoid unnecessary renders
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-neutral-500 text-sm mb-4 md:mb-0">
        &copy; {currentYear} Touchstone Education. All rights reserved.
      </p>
      <div className="flex space-x-6">
        <a
          href="https://touchstoneeducation.com/privacy-policy"
          className="text-neutral-500 hover:text-white text-sm transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="https://touchstoneeducation.com/competition-terms-and-conditions"
          className="text-neutral-500 hover:text-white text-sm transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="https://touchstoneeducation.com/privacy-policy#cookies-and-web-beacons"
          className="text-neutral-500 hover:text-white text-sm transition-colors"
        >
          Cookie Policy
        </a>
      </div>
    </div>
  );
});

// Main footer component
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-6 border-b border-neutral-700">
          <div>
            <div className="mb-6">
              <Logo variant="white" size="md" />
            </div>
            <p className="text-neutral-400 mb-6">
              Empowering property investors with education, strategies, and
              community since 2005.
            </p>
            <SocialIcons />
          </div>

          {/* <QuickLinks />

          <ResourceLinks /> */}

          <ContactInfo />
        </div>

        <CopyrightSection />
      </div>
    </footer>
  );
}