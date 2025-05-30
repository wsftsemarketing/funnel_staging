import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Building, Users, Award } from "lucide-react";

export default function Presenter() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const imageInView = useIntersectionObserver(imageRef, { threshold: 0.1 });
  const contentInView = useIntersectionObserver(contentRef, { threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className={`relative transform transition-all duration-700 ${
              imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Property expert image */}
            <img 
              src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Property expert from Touchstone Education" 
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-6 right-6 bg-white py-2 px-4 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                <span className="font-medium text-neutral-900">Certified Property Expert</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className={`transform transition-all duration-700 delay-300 ${
              contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium">
              Meet Your Host
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <Highlight type="primary">Paul Smith</Highlight>
            </h2>
            <p className="text-lg text-neutral-700 mb-6">
              With over 15 years of experience in commercial real estate and property development, John has helped thousands of investors build successful property portfolios across England.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Building size={20} />
                </div>
                <div>
                  <h4 className="font-bold">£250M+ in Property Transactions</h4>
                  <p className="text-neutral-600">Managed and advised on major commercial deals</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold">10,000+ Students Mentored</h4>
                  <p className="text-neutral-600">Helped investors at all experience levels</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Industry-Recognized Expert</h4>
                  <p className="text-neutral-600">Featured in Property Week, Financial Times</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => scrollToSection("register")} 
              className="rounded-full shadow-lg shadow-primary/30 transform hover:-translate-y-1 transition-transform"
              size="lg"
            >
              Join John's Webinar <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
