import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { CheckCircle } from "lucide-react";

export default function Agenda() {
  const titleRef = useRef<HTMLDivElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);
  const item4Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const titleInView = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const item1InView = useIntersectionObserver(item1Ref, { threshold: 0.1 });
  const item2InView = useIntersectionObserver(item2Ref, { threshold: 0.1 });
  const item3InView = useIntersectionObserver(item3Ref, { threshold: 0.1 });
  const item4InView = useIntersectionObserver(item4Ref, { threshold: 0.1 });
  const ctaInView = useIntersectionObserver(ctaRef, { threshold: 0.1 });
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="agenda" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-amber-500/10 text-amber-500 font-medium">
            Webinar Agenda
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            <Highlight type="amber">What you'll learn</Highlight> in this exclusive session
          </h2>
          <p className="text-lg text-neutral-700">
            Our comprehensive 90-minute webinar covers everything you need to know about successful commercial property investing in England's current market.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2"></div>
            
            {/* Agenda Item 1 */}
            <div 
              ref={item1Ref}
              className={`relative mb-12 transform transition-all duration-700 ${
                item1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <span className="text-sm font-medium text-neutral-500">Part 1 • 15 minutes</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">Market Overview & Current Trends</h3>
                  <p className="text-neutral-700">
                    A comprehensive analysis of England's commercial property market in 2023, including key regions, property types, and market dynamics.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white rounded-xl shadow-sm p-4">
                    <ul className="text-neutral-700">
                      <li className="mb-2 flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Post-pandemic market recovery analysis</span>
                      </li>
                      <li className="mb-2 flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Regional hotspots and emerging areas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Risk assessment and opportunity mapping</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Agenda Item 2 */}
            <div 
              ref={item2Ref}
              className={`relative mb-12 transform transition-all duration-700 ${
                item2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right order-2 md:order-none">
                  <div className="bg-white rounded-xl shadow-sm p-4">
                    <ul className="text-neutral-700">
                      <li className="mb-2 flex items-start md:flex-row-reverse">
                        <CheckCircle size={18} className="text-primary mt-1 ml-2 md:mr-0 flex-shrink-0" />
                        <span>Identifying undervalued commercial assets</span>
                      </li>
                      <li className="mb-2 flex items-start md:flex-row-reverse">
                        <CheckCircle size={18} className="text-primary mt-1 ml-2 md:mr-0 flex-shrink-0" />
                        <span>Creative financing solutions in today's market</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <CheckCircle size={18} className="text-primary mt-1 ml-2 md:mr-0 flex-shrink-0" />
                        <span>Value-add strategies for maximum ROI</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-1 md:order-none">
                  <span className="text-sm font-medium text-neutral-500">Part 2 • 25 minutes</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">Acquisition & Investment Strategies</h3>
                  <p className="text-neutral-700">
                    Learn proven approaches to finding, evaluating, and acquiring commercial properties with strong growth potential.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Agenda Item 3 */}
            <div 
              ref={item3Ref}
              className={`relative mb-12 transform transition-all duration-700 ${
                item3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <span className="text-sm font-medium text-neutral-500">Part 3 • 20 minutes</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">Asset Management Excellence</h3>
                  <p className="text-neutral-700">
                    Strategies for optimizing your commercial property portfolio's performance through effective management techniques.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white rounded-xl shadow-sm p-4">
                    <ul className="text-neutral-700">
                      <li className="mb-2 flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Tenant retention and lease optimization</span>
                      </li>
                      <li className="mb-2 flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Cost-effective property improvements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>Building a reliable management team</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Agenda Item 4 */}
            <div 
              ref={item4Ref}
              className={`relative transform transition-all duration-700 ${
                item4InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right order-2 md:order-none">
                  <div className="bg-white rounded-xl shadow-sm p-4">
                    <ul className="text-neutral-700">
                      <li className="mb-2 flex items-start md:flex-row-reverse">
                        <CheckCircle size={18} className="text-primary mt-1 ml-2 md:mr-0 flex-shrink-0" />
                        <span>Real case studies from successful investors</span>
                      </li>
                      <li className="mb-2 flex items-start md:flex-row-reverse">
                        <CheckCircle size={18} className="text-primary mt-1 ml-2 md:mr-0 flex-shrink-0" />
                        <span>Step-by-step implementation plan</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <CheckCircle size={18} className="text-primary mt-1 ml-2 md:mr-0 flex-shrink-0" />
                        <span>Exclusive resources and next steps</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-1 md:order-none">
                  <span className="text-sm font-medium text-neutral-500">Part 4 • 30 minutes</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">Implementation & Q&A Session</h3>
                  <p className="text-neutral-700">
                    Get your specific questions answered and receive guidance on implementing these strategies in your own portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={ctaRef}
            className={`mt-16 text-center transform transition-all duration-700 delay-200 ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button 
              onClick={() => scrollToSection("register")} 
              className="rounded-full shadow-lg shadow-primary/30 transform hover:-translate-y-1 transition-transform"
              size="lg"
            >
              Secure Your Spot Now <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
