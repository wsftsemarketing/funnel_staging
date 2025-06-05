import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Star, StarHalf, ChevronLeft, ChevronRight, TrendingUp, PoundSterling, ArrowRight, BarChart4 } from "lucide-react";

const scrollToRegistration = () => {
  const element = document.getElementById('register');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Case studies with ROI metrics
const caseStudies = [
  {
    name: "Ben Roberts",
    property: "The Old Fire Station, Worcester",
    image: "https://i.ibb.co/XfXc4WDx/Screenshot-2025-06-05-at-12-04-36-pm.png",
    roi: "",
    investment: "",
    monthlyIncome: "",
    quote: "Touchstone's strategies helped me take my development projects to the next level. The Old Fire Station wouldn't have been possible without their guidance.",
    story: "Ben Roberts transitioned from a 25-year career with the British Army to become a full-time professional property developer in 2014. Since then, he has gained extensive experience in the field. Despite being a seasoned property developer, he joined Wealth Academy at a critical point in his career. Ben's flagship project, the Old Fire Station in Worcester, is a landmark building that has been meticulously restored. With commercial space on the ground floor and 28 apartments spread across the upper three floors, the completed development is valued at £10 million."
  },
  {
    name: "Iurie Dontu",
    property: "Commercial Conversion, Staffordshire",
    image: "https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d961242afc6a852002709_Screenshot%202025-05-21%20at%209.59.52%E2%80%AFam.png",
    roi: "30%+ net",
    investment: "~£800k",
    monthlyIncome: "£11,666",
    quote: null,
    story: "After attending a Touchstone event in London, Iurie pivoted from flipping to commercial property. His biggest success is a school converted into an ApartHotel, generating high income with minimal overhead using a PLO strategy."
  },
  {
    name: "Ian Schaff",
    property: "Historic Hotel Conversion, UK",
    image: "https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d965b35f16a56ff459c03_Screenshot%202025-05-21%20at%2010.01.11%E2%80%AFam.png",
    roi: "83% valuation uplift",
    investment: "£400k",
    monthlyIncome: "£6,667",
    quote: null,
    story: "Ian converted an 1880s hotel into a multi-income asset using delayed completion and exchange-for-£1 strategies learned via CPBO. The project now delivers 12 income streams and tripled in value."
  },
  {
    name: "Greg McKenzie",
    property: "Mixed Shops & Units, Scotland",
    image: "https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d950da17a1645a3afcf5c_Screenshot%202025-05-21%20at%209.55.37%E2%80%AFam.png",
    roi: "13% yield",
    investment: "£175k",
    monthlyIncome: "£1,916",
    quote: null,
    story: "Greg negotiated a discounted deal on a portfolio of shops and storage units, bought for £175k and fully let. This low-risk deal contributes to his total commercial income exceeding £13k per month."
  },
  {
    name: "Greg McKenzie",
    property: "Industrial Estate, Scotland",
    image: "https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d950da17a1645a3afcf5c_Screenshot%202025-05-21%20at%209.55.37%E2%80%AFam.png",
    roi: "95% post-debt income",
    investment: "£1.2m",
    monthlyIncome: "£13,917",
    quote: null,
    story: "Greg had no prior experience in commercial property before joining Touchstone. Within 12 months, he secured three commercial sites including a 12 unit industrial estate. The strategy, backed by Touchstone's training, helped him grow to £167,000 in annual rental income and build over £200,000 in equity."
  },
];

export default function CaseStudies() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const trustpilotRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);

  const titleInView = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const caseStudiesInView = useIntersectionObserver(caseStudiesRef, { threshold: 0.1 });
  const trustpilotInView = useIntersectionObserver(trustpilotRef, { threshold: 0.1 });

  const nextCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCaseStudy = caseStudies[activeCaseStudy];
  const showStats = currentCaseStudy.roi || currentCaseStudy.investment || currentCaseStudy.monthlyIncome;
  const showQuote = currentCaseStudy.quote;

  return (
    <section id="case-studies" className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* TrustPilot Style Rating Box with 4.5 stars */}
        <div 
          ref={trustpilotRef}
          className={`flex items-center justify-center mb-12 transform transition-all duration-700 ${
            trustpilotInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-xl px-4 py-6 shadow-lg flex flex-col md:w-1/3 items-center max-w-2xl w-full">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="flex items-center mb-2">
                <div className="text-[#00b67a] flex">
                  <Star className="w-5 h-5" fill="#00b67a" />
                  <Star className="w-5 h-5" fill="#00b67a" />
                  <Star className="w-5 h-5" fill="#00b67a" />
                  <Star className="w-5 h-5" fill="#00b67a" />
                  <StarHalf className="w-5 h-5" fill="#00b67a" />
                </div>
                <span className="ml-2 text-neutral-700 font-bold"><Highlight type="glow">4.4 out of 5</Highlight></span>
              </div>
              <p className="text-neutral-500 text-sm text-center md:text-left">Based on <strong>2,000+ reviews</strong> on Trustpilot</p>
            </div>
          </div>
        </div>
        {/* Section title */}
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-6 transform transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-3 py-1 mb-6 text-sm font-bold text-primary uppercase tracking-wide">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 capitalize">Hear from our {" "}<Highlight type="primary"> community</Highlight> 
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Thousands of investors have transformed their property portfolios after attending our commercial property edge webinar. Take a look at some of their projects.
          </p>
        </div>

        {/* Success Case Studies - Carousel */}
        <div className="mb-6">

          <div 
            ref={caseStudiesRef}
            className={`relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-700 min-h-[600px] ${
              caseStudiesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full" 
              style={{ transform: `translateX(-${activeCaseStudy * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="w-full flex-shrink-0 min-h-[600px]">
                  <div className="bg-white overflow-hidden h-full min-h-[600px]">
                    <div className="p-8 flex flex-col h-full min-h-[600px]">
                      <div className="text-primary text-sm font-bold inline-block mb-3">
                        <Highlight type="marker">CASE STUDY #{index + 1}</Highlight>
                      </div>
                      <h4 className="text-2xl font-bold mb-2">{study.name}</h4>
                      <p className="text-neutral-600 mb-4">{study.property}</p>

                      <p className="text-neutral-700 mb-8">{study.story}</p>

                      {/* Bento Box Style Stats */}
                      {showStats ? (
                        <div className="relative rounded-xl overflow-hidden grid grid-cols-2 auto-rows-fr gap-2 md:gap-3">
                          <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl">
                            <div className="absolute bottom-2 right-2 rounded-full bg-white/70 w-8 h-8 flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-primary" />
                            </div>
                            <div className="text-sm text-neutral-500 mb-2">Return on Investment</div>
                            <div className="text-3xl font-bold text-primary">{study.roi}</div>
                          </div>

                          <div className="relative bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-xl">
                            <div className="absolute bottom-2 right-2 rounded-full bg-white/70 w-8 h-8 flex items-center justify-center">
                              <PoundSterling className="w-4 h-4 text-secondary" />
                            </div>
                            <div className="text-sm text-neutral-500 mb-2">Total Investment</div>
                            <div className="text-3xl font-bold text-secondary">{study.investment}</div>
                          </div>

                          <div className="relative bg-gradient-to-br from-green-600/10 to-green-600/5 p-6 rounded-xl">
                            <div className="absolute bottom-2 right-2 rounded-full bg-white/70 w-8 h-8 flex items-center justify-center">
                              <BarChart4 className="w-4 h-4 text-neutral-700" />
                            </div>
                            <div className="text-sm text-neutral-500 mb-2">Monthly Cash Flow</div>
                            <div className="text-3xl font-bold text-green-600">
                              {study.monthlyIncome}
                            </div>
                          </div>

                          {/* Property Images */}
                          <div className="relative bg-white p-0 rounded-xl overflow-hidden">
                            {/* Blurred background image */}
                            <div 
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ 
                                backgroundImage: `url(${study.image})`,
                                filter: 'blur(8px)',
                                transform: 'scale(1.1)'
                              }}
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/30" />

                            {/* Main image container */}
                            <div className="relative h-full flex items-center justify-center p-0 md:p-0">
                              <img 
                                src={study.image}
                                alt={`${study.property} - Exterior`}
                                className="w-full h-full md:max-h-full md:max-w-full object-cover md:object-contain rounded-lg shadow-lg" 
                              />
                            </div>

                            {/* Property label with gradient backdrop */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                              <div className="text-sm font-bold text-white">📍 {study.property}</div>
                            </div>
                          </div>

                          {/* Property Images */}

                        </div>
                      ) : showQuote ? (
                        <div className="relative rounded-xl overflow-hidden p-6 bg-neutral-100">
                          <div className="text-lg italic text-neutral-700">
                            "{study.quote}"
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={prevCaseStudy}
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 left-3 transform -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-md z-10"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous case study</span>
            </Button>

            <Button 
              onClick={nextCaseStudy}
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 right-3 transform -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-md z-10"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next case study</span>
            </Button>
          </div>

          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveCaseStudy(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeCaseStudy ? 'bg-primary' : 'bg-neutral-300'}`}
                  aria-label={`Go to case study ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={scrollToRegistration}
            className="conversion-btn inline-block uppercase"
          >
            Watch Free Training Now{" "}
            <ArrowRight className="ml-2 inline-block" size={18} />
          </button>
          {/* <p className="mt-4 text-sm text-muted-foreground">Limited spots available – Register now before it's full</p> */}
        </div>
      </div>
    </section>
  );
}