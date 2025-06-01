import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Highlight } from "@/components/ui/highlight";
import { LockIcon, Calendar } from "lucide-react";
import { useTrackSection, useAnalytics } from "@/hooks/useAnalytics";

export default function RegistrationForm() {
  useTrackSection('Registration Form');
  const { trackFormInteraction, trackConversion } = useAnalytics();

  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const contentInView = useIntersectionObserver(contentRef, { threshold: 0.1 });

  return (
    <section id="register" className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              ref={contentRef}
              className={`transform transition-all duration-700 ${
                contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-block py-1 mb-6 text-sm font-bold text-primary uppercase tracking-wide">
                FREE WEBINAR
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 capitalize">
                Your <Highlight type="primary">6-Figure</Highlight> Payday
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">In this free webinar, we'll show you exactly how commercial property students are securing 10–15 year leases, and pulling in strong income, without lifting a paintbrush.
              </p>
            </div>
            <div 
              ref={formRef}
              className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-700 delay-300"
            >
              <h3 className="text-2xl font-bold mb-2">Watch Now</h3>
              <p className="text-md md:text-sm text-neutral-600 max-w-2xl mx-auto">Register below to {" "} <span className="font-extrabold text-primary"> <Highlight type="marker">immediately access</Highlight> </span>{" "} the webinar, and get the exact steps to start your commercial property business.
                </p>
              <div id="registration-form">
                <div 
                  className="wj-embed-wrapper" 
                  data-webinar-hash="y86q9a7p"
                  ref={(el) => {
                    if (el && !el.querySelector('script')) {
                      const script = document.createElement('script');
                      script.src = 'https://event.webinarjam.com/register/y86q9a7p/embed-form?formButtonText=WATCH NOW&formAccentColor=%23e3bc31&formAccentOpacity=100&formBgColor=%23ffffff&formBgOpacity=1';
                      el.appendChild(script);
                    }
                  }}
                ></div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary h-4 w-4" />
                  <span className="text-neutral-700 text-sm">You'll receive your webinar link after registration.</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <LockIcon className="text-primary h-4 w-4" />
                    <span className="text-neutral-700 text-sm">Your information is secure and will not be shared.</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}