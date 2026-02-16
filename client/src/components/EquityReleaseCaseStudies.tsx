
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { useMixpanelTracking } from "@/hooks/useMixpanelTracking";
import { Star, StarHalf, ChevronLeft, ChevronRight, TrendingUp, PoundSterling, ArrowRight, BarChart4, Home, Calendar } from "lucide-react";

const scrollToRegistration = () => {
  const element = document.getElementById('register');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Equity release case studies with premium styling
const equityReleaseCaseStudies = [
  {
    name: "Margaret & James",
    age: "Retired Couple, 68 & 72",
    location: "Surrey",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    homeValue: "£850,000",
    equityReleased: "£340,000",
    monthlyIncome: "£2,833",
    story: "Margaret and James used equity release to unlock £340,000 from their Surrey home. They invested this into a buy-to-let portfolio of three rental properties, generating substantial monthly income while still living in their family home."
  },
  {
    name: "Robert Thompson",
    age: "Widower, 74",
    location: "Manchester",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    homeValue: "£425,000",
    equityReleased: "£170,000",
    monthlyIncome: "£1,416",
    story: "After his wife passed, Robert wanted to secure his financial future. He released equity from his Manchester home and invested in commercial property, creating a steady income stream for his retirement years."
  },
  {
    name: "Patricia Wilson",
    age: "Divorcee, 65",
    location: "Brighton",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    homeValue: "£650,000",
    equityReleased: "£260,000",
    monthlyIncome: "£2,166",
    story: "Following her divorce, Patricia needed financial independence. She released equity from her Brighton property and built a portfolio of serviced accommodation units, creating multiple income streams."
  },
  {
    name: "David & Susan",
    age: "Married Couple, 69 & 66",
    location: "Yorkshire",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    homeValue: "£720,000",
    equityReleased: "£288,000",
    monthlyIncome: "£2,400",
    story: "David and Susan wanted to help their children while securing their own future. They used equity release to invest in property development, generating income while preserving their family home."
  }
];

export default function EquityReleaseCaseStudies() {
  const { track, trackFunnelStep, trackSectionView } = useMixpanelTracking();

  // Track section view
  useEffect(() => {
    trackSectionView('Equity Release Case Studies');
  }, [trackSectionView]);

  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const trustpilotRef = useRef<HTMLDivElement>(null);

  // Touch and mouse handling for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const titleRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);

  const titleInView = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const caseStudiesInView = useIntersectionObserver(caseStudiesRef, { threshold: 0.1 });
  const trustpilotInView = useIntersectionObserver(trustpilotRef, { threshold: 0.1 });

  const nextCaseStudy = () => {
    const newIndex = (activeCaseStudy + 1) % equityReleaseCaseStudies.length;
    setActiveCaseStudy(newIndex);

    track('Equity Release Case Study Navigation', {
      action: 'next',
      from_case_study: equityReleaseCaseStudies[activeCaseStudy].name,
      to_case_study: equityReleaseCaseStudies[newIndex].name,
      case_study_index: newIndex,
      navigation_method: 'next_button'
    });
  };

  const prevCaseStudy = () => {
    const newIndex = (activeCaseStudy - 1 + equityReleaseCaseStudies.length) % equityReleaseCaseStudies.length;
    setActiveCaseStudy(newIndex);

    track('Equity Release Case Study Navigation', {
      action: 'previous', 
      from_case_study: equityReleaseCaseStudies[activeCaseStudy].name,
      to_case_study: equityReleaseCaseStudies[newIndex].name,
      case_study_index: newIndex,
      navigation_method: 'previous_button'
    });
  };

  // Swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextCaseStudy();
    } else if (isRightSwipe) {
      prevCaseStudy();
    }
  };

  // Mouse drag handling for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextCaseStudy();
    } else if (isRightSwipe) {
      prevCaseStudy();
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const currentCaseStudy = equityReleaseCaseStudies[activeCaseStudy];

  return (
    <section id="equity-release-case-studies" data-section="equity-release-case-studies" className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* TrustPilot Style Rating Box */}
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
            Real Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 capitalize">
            How UK Homeowners are Building{" "}
            <Highlight type="primary">Wealth</Highlight> Through Equity Release
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover how homeowners over 55 are using equity release to unlock the hidden wealth in their homes and create substantial monthly income streams.
          </p>
        </div>

        {/* Case Studies Carousel */}
        <div className="mb-6">
          <div 
            ref={caseStudiesRef}
            className={`relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-700 min-h-[600px] ${
              caseStudiesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full" 
              style={{ transform: `translateX(-${activeCaseStudy * 100}%)` }}
            >
              {equityReleaseCaseStudies.map((study, index) => (
                <div key={`equity-study-${index}-${activeCaseStudy}`} className="w-full flex-shrink-0 min-h-[600px]">
                  <div className="bg-white overflow-hidden h-full min-h-[600px]">
                    <div className="p-8 flex flex-col h-full min-h-[600px]">
                      <div className="text-primary text-sm font-bold inline-block mb-3">
                        <Highlight type="marker">SUCCESS STORY #{index + 1}</Highlight>
                      </div>
                      <h4 className="text-2xl font-bold mb-2">{study.name}</h4>
                      <p className="text-neutral-600 mb-1">{study.age}</p>
                      <p className="text-neutral-500 text-sm mb-6 flex items-center">
                        <Home className="w-4 h-4 mr-1" />
                        {study.location}
                      </p>

                      <p className="text-neutral-700 mb-8 leading-relaxed">{study.story}</p>

                      {/* Bento Box Style Stats - Premium Layout */}
                      <div className="relative rounded-xl overflow-hidden grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-3 mb-6">
                        <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-4 md:p-6 rounded-xl">
                          <div className="absolute top-2 right-2 rounded-full bg-white/70 w-8 h-8 flex items-center justify-center">
                            <Home className="w-4 h-4 text-primary" />
                          </div>
                          <div className="text-xs md:text-sm text-neutral-500 mb-1 md:mb-2">Home Value</div>
                          <div className="text-lg md:text-2xl font-bold text-primary">{study.homeValue}</div>
                        </div>

                        <div className="relative bg-gradient-to-br from-secondary/5 to-secondary/10 p-4 md:p-6 rounded-xl">
                          <div className="absolute top-2 right-2 rounded-full bg-white/70 w-8 h-8 flex items-center justify-center">
                            <PoundSterling className="w-4 h-4 text-secondary" />
                          </div>
                          <div className="text-xs md:text-sm text-neutral-500 mb-1 md:mb-2">Equity Released</div>
                          <div className="text-lg md:text-2xl font-bold text-secondary">{study.equityReleased}</div>
                        </div>

                        <div className="relative bg-gradient-to-br from-green-600/10 to-green-600/5 p-4 md:p-6 rounded-xl">
                          <div className="absolute top-2 right-2 rounded-full bg-white/70 w-8 h-8 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          </div>
                          <div className="text-xs md:text-sm text-neutral-500 mb-1 md:mb-2">Monthly Income</div>
                          <div className="text-lg md:text-2xl font-bold text-green-600">{study.monthlyIncome}</div>
                        </div>

                        {/* Portrait Image */}
                        <div className="relative bg-white p-0 rounded-xl overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ 
                              backgroundImage: `url(${study.image})`,
                              filter: 'blur(8px)',
                              transform: 'scale(1.1)'
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20" />

                          <div className="relative h-full flex items-center justify-center p-0">
                            <img 
                              src={study.image}
                              alt={`${study.name} - Success Story`}
                              className="w-full h-full object-cover rounded-lg shadow-lg" 
                            />
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                            <div className="text-xs font-bold text-white">{study.name}</div>
                            <div className="text-xs text-white/80">{study.location}</div>
                          </div>
                        </div>
                      </div>

                      {/* Key Benefit Call-out */}
                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4 border border-primary/10">
                        <div className="flex items-center text-sm font-medium text-primary mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          Key Benefit
                        </div>
                        <p className="text-neutral-700 text-sm leading-relaxed">
                          Still living in their family home while generating{" "}
                          <span className="font-bold text-primary">{study.monthlyIncome}</span> monthly income from property investments.
                        </p>
                      </div>
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
              {equityReleaseCaseStudies.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    if (index !== activeCaseStudy) {
                      track('Equity Release Case Study Navigation', {
                        action: 'direct_select',
                        from_case_study: equityReleaseCaseStudies[activeCaseStudy].name,
                        to_case_study: equityReleaseCaseStudies[index].name,
                        case_study_index: index,
                        navigation_method: 'dot_navigation'
                      });
                      setActiveCaseStudy(index);
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeCaseStudy ? 'bg-primary' : 'bg-neutral-300'}`}
                  aria-label={`Go to case study ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              track('CTA Clicked', {
                cta_type: 'primary',
                button_location: 'equity_release_case_studies_section',
                button_text: 'Discover Your Equity Release Options',
                current_case_study: currentCaseStudy.name,
                case_study_index: activeCaseStudy
              });
              trackFunnelStep('Equity Release Case Studies CTA Clicked', 4);
              scrollToRegistration();
            }}
            className="conversion-btn inline-block uppercase"
          >
            Discover Your Equity Release Options{" "}
            <ArrowRight className="ml-2 inline-block" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
