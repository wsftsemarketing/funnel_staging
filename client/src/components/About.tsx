import { useRef } from "react";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { 
  Lightbulb, 
  TrendingUp, 
  ArrowRight,
  ChartBarIcon,
  CheckCircle
} from "lucide-react";

export default function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const titleInView = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const card1InView = useIntersectionObserver(card1Ref, { threshold: 0.1 });
  const card2InView = useIntersectionObserver(card2Ref, { threshold: 0.1 });
  const card3InView = useIntersectionObserver(card3Ref, { threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm text-secondary uppercase tracking-wide font-bold">
            Why you should attend
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-none tracking-tight">
            <Highlight type="primary">Exclusive</Highlight> Commercial 
            Property <Highlight type="accent">Insights</Highlight>
          </h2>
          <p className="text-base md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Get direct access to proven strategies that have helped investors achieve <span className="font-bold text-primary">12-22% ROI</span> in today's challenging property market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          <div 
            ref={card1Ref}
            className={`premium-card p-6 md:p-8 transform transition-all duration-700 delay-100 ${
              card1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-md flex items-center justify-center mb-4">
              <Lightbulb strokeWidth={2} size={22} />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Knowledge</h3>
            <p className="text-foreground/70 mb-6">
              Get insider strategies from professionals with £250M+ in successful commercial property transactions across England.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Commercial property selection tactics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Investment validation framework</span>
              </li>
            </ul>
          </div>
          
          <div 
            ref={card2Ref}
            className={`premium-card p-6 md:p-8 transform transition-all duration-700 delay-200 ${
              card2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-md flex items-center justify-center mb-4">
              <TrendingUp strokeWidth={2} size={22} />
            </div>
            <h3 className="text-xl font-bold mb-3">Market Analysis</h3>
            <p className="text-foreground/70 mb-6">
              Access exclusive market data and projections that reveal emerging opportunities in commercial property across England.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Region-specific opportunity mapping</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Growth projections for 2025-2026</span>
              </li>
            </ul>
          </div>
          
          <div 
            ref={card3Ref}
            className={`premium-card p-6 md:p-8 transform transition-all duration-700 delay-300 ${
              card3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 18V7"/><path d="M12 18v-5"/><path d="M16 18v-3"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">ROI Maximization</h3>
            <p className="text-foreground/70 mb-6">
              Learn practical methods to increase your investment returns and minimize risk with our proven commercial property framework.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Financing optimization strategies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Risk mitigation techniques</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Conversion-focused element */}
        <div className="mt-16 text-center">
          <a href="#register" className="conversion-btn inline-block">
            Secure Your Spot <ArrowRight className="ml-2 inline-block" size={18} />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Limited spots available – Register now before it's full</p>
        </div>
      </div>
    </section>
  );
}
