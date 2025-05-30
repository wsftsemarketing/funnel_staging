import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { ArrowRight, Users, Calendar, Star, Clock } from "lucide-react";

export default function FinalCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useIntersectionObserver(ctaRef, { threshold: 0.1 });

  const scrollToRegistration = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set webinar date to a week from now
  const webinarDate = new Date();
  webinarDate.setDate(webinarDate.getDate() + 7);

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ctaRef}
          className={`max-w-5xl mx-auto transform transition-all duration-700 ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <Highlight type="primary" animated>Maximise</Highlight> Your Property Returns?
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              Join our exclusive webinar and discover how to generate <span className="font-bold text-primary">12-22% ROI</span> in today's commercial property market.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left column - details */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 mb-6 bg-primary/10 text-primary rounded-full text-sm font-bold">
                    FREE WEBINAR
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Your 6-Figure Commercial Property Payday
                  </h3>

                  <p className="text-neutral-600 mb-6">
                    Learn the exact strategy our students use to find, fund, and profit from commercial properties without any prior knowledge or experience.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 mr-4">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">Next Live Webinar</h4>
                        <p className="text-neutral-500">
                          {webinarDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} • 7:00 PM BST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5 mr-4">
                        <Clock className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold">90 Minutes + Strategy Breakdown</h4>
                        <p className="text-neutral-500">
                          With full replay access for registered attendees
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-green-600/10 flex items-center justify-center shrink-0 mt-0.5 mr-4">
                        <Star className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Rated 4.5/5</h4>
                        <p className="text-neutral-500">
                          By previous attendees we've trained
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <button 
                    onClick={scrollToRegistration}
                    className="conversion-btn w-full text-center py-4"
                  >
                    Secure Your Spot <ArrowRight className="ml-2 inline-block" size={18} />
                  </button>
                  <p className="mt-4 text-sm text-center text-neutral-500">
                    <span className="font-semibold text-red-500">Only 100 spots available.</span> Registration closes soon!
                  </p>
                </div>
                <div className="mt-6 mb-0 bg-white rounded-lg shadow border border-neutral-100 overflow-hidden m-auto">
                  <div className="grid grid-cols-2 divide-x divide-neutral-100">
                    <div className="p-3 sm:p-2 flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-2 sm:mr-3 flex-shrink-0">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-neutral-500">Next Webinar</div>
                        <div className="font-bold text-sm sm:text-base truncate">
                          {webinarDate.toLocaleDateString("en-GB", {
                            month: "short",
                            day: "numeric",
                          })}
                          , 7PM
                        </div>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-2 sm:mr-3 flex-shrink-0">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-neutral-500">
                          Limited Capacity
                        </div>
                        <div className="font-bold text-sm sm:text-base truncate">
                          100 Spots Only
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - image */}
              <div className="relative block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/90 z-10"></div>
                <img 
                  src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png"
                  alt="Commercial property webinar" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center z-20 p-8 text-white">
                  <div className="text-center">
                    <div className="font-black text-6xl mb-2">15%+</div>
                    <p className="text-xl font-bold mb-6">Average ROI for Our Students</p>
                    <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
                    <p className="italic">"The strategies taught in this webinar helped me secure my first commercial property deal with an 18% return."</p>
                    <p className="mt-2 font-medium">— Demo Quote., Manchester</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}