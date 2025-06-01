import { useRef } from "react";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { useTrackSection, useAnalytics } from "@/hooks/useAnalytics";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });
  const { trackButtonClick } = useAnalytics();

  const webinarDate = new Date();
  webinarDate.setDate(webinarDate.getDate() + 7);

  const scrollToRegistration = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-6 md:pt-6 pb-8 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-bold text-primary uppercase tracking-wide">
            FREE WEBINAR
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[1.05] tracking-tight capitalize">
            <Highlight type="secondary">Maximise</Highlight> Your Commercial
            Property <Highlight type="green">Returns</Highlight>
          </h1>

          <p className="text-lg md:text-2xl text-foreground/90 mb-6 max-w-2xl mx-auto font-medium">
            Watch our free webinar to discover how investors are locking in{" "}
            <span className="font-extrabold text-primary">
              <Highlight type="marker">10–15% returns </Highlight>
            </span>{" "}
            and securing long-term incomes with commercial property.
          </p>

          <div className="mb-4 max-w-xl mx-auto">
            <button
              onClick={scrollToRegistration}
              className="conversion-btn w-full text-center py-4 mb-4 uppercase"
            >
              Watch now <ArrowRight className="ml-2 inline-block" size={18} />
            </button>

            <div className="flex justify-center gap-4 items-center mb-10">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-primary mr-1" />
                <span className="text-sm text-foreground/70">90 Minutes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-1" />
                <span className="text-sm text-foreground/70">
                  Replay Access
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            onClick={scrollToRegistration}
            className="relative cursor-pointer group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-ring/40 to-ring/20 z-10 group-hover:opacity-75 transition-opacity"></div>

              <img
                src="https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d9361c04b429e996beafc_2%20(2).png"
                alt="Paul Smith commercial property webinar"
                className="w-full object-cover aspect-video"
              />

              <div className="absolute bottom-0 left-0 right-0 py-6 px-4 bg-gradient-to-t from-ring/80 via-ring/40 to-transparent z-20 text-white">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="mb-0 flex-grow">
                    <div className="inline-block px-2 py-1 bg-[#fff]/20 text-white rounded-full text-xs font-bold mb-2">
                      FREE WEBINAR
                    </div>
                    <h2 className="text-lg md:text-2xl font-black text-white leading-tight">
                      The £100K Deal Blueprint
                    </h2>
                    <p className="text-sm md:text-lg text-white/90 mb-2 max-w-md font-medium">
                      How to Find, Fund and Profit from Commercial Properties
                      without any Past Knowledge or Experience.
                    </p>
                  </div>

                  <div className="flex items-center md:justify-end">
                    <img
                      src="https://touchstoneeducation.com/hs-fs/hubfs/touchstone%20paul%20smith.png"
                      alt="Paul Smith"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                    />
                    <div className="text-left md:text-left max-w-full ml-3">
                      <p className="text-sm md:text-lg font-bold">
                        With Paul Smith
                      </p>
                      <p className="text-xs md:text-sm text-white/80">
                        Commercial Property Expert
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI stats box positioned outside the thumbnail container for proper layering */}
            <div className="absolute -top-4 -right-2 bg-white p-3 rounded-md shadow-lg border border-neutral-100 z-50">
              <div className="flex items-center gap-3">
                <div className="font-black text-3xl text-green-600/90">
                  12%+
                </div>
                <div>
                  <p className="font-bold text-sm">Avg. Yield</p>
                  <p className="text-xs text-foreground/70">From day one</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={scrollToRegistration}
                className="conversion-btn inline-block uppercase"
              >
                Watch now <ArrowRight className="ml-2 inline-block" size={18} />
              </button>
              {/* <p className="mt-4 text-sm text-muted-foreground">
                Limited spots available – Register now before it's full
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}