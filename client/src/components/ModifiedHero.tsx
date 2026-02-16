
import { useRef } from "react";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { ArrowRight, Clock, CheckCircle, Award } from "lucide-react";
import { useMixpanelTracking } from "@/hooks/useMixpanelTracking";

export default function ModifiedHero() {
  const { trackButtonClick } = useMixpanelTracking();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });

  const scrollToRegistration = () => {
    trackButtonClick('Modified Hero CTA', 'Secondary Hero Section');
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section data-section="modified-hero" className="relative py-12 md:py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto text-center transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-[1.05] tracking-tight capitalize">
            <Highlight type="secondary">Maximise</Highlight> Your Commercial
            Property <Highlight type="green">Returns</Highlight>
          </h2>

          <p className="text-lg md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto font-medium">
            Join our exclusive live webinar to discover advanced strategies for{" "}
            <span className="font-extrabold text-primary">
              <Highlight type="marker">10–15% returns </Highlight>
            </span>{" "}
            and securing long-term leases with commercial property.
          </p>

          <div className="mb-8">
            <button
              onClick={scrollToRegistration}
              className="conversion-btn w-full md:w-auto text-center py-4 px-8 mb-6 uppercase text-lg"
            >
              Join Live Webinar Now <ArrowRight className="ml-2 inline-block" size={20} />
            </button>

            <div className="flex justify-center gap-6 items-center">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-foreground/70">90 Minutes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-foreground/70">Live Q&A Included</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-foreground/70">CPD Accredited</span>
              </div>
            </div>
          </div>

          {/* Presenter Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-neutral-50 rounded-xl p-6 md:p-8">
            <img
              src="https://touchstoneeducation.com/hs-fs/hubfs/touchstone%20paul%20smith.png"
              alt="Paul Smith"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white object-cover shadow-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                With Paul Smith
              </h3>
              <p className="text-foreground/80 mb-2">Commercial Property Expert & Investor</p>
              <p className="text-sm text-foreground/60 max-w-md">
                Over 20 years of experience in commercial property investment, 
                having helped thousands build successful property portfolios
              </p>
            </div>
            
            {/* Stats highlight */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200">
              <div className="text-center">
                <div className="font-black text-2xl md:text-3xl text-green-600">
                  12%+
                </div>
                <p className="font-bold text-sm">Avg. Student ROI</p>
                <p className="text-xs text-foreground/70">From first deal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
