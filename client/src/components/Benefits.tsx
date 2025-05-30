
import { useRef, useCallback, memo } from "react";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Highlight } from "@/components/ui/highlight";

// Define benefit item type for better type safety
interface BenefitItem {
  title: string;
  description: string;
}

// Memoized benefit card component to prevent unnecessary re-renders
const BenefitCard = memo(({ title, description, index }: BenefitItem & { index: number }) => (
  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
    <div className="flex items-start mb-4">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
        <CheckCircle className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm">{description}</p>
      </div>
    </div>
  </div>
));

// Predefined benefits data to avoid recreating on each render
const BENEFITS_DATA: BenefitItem[] = [
  {
    title: "Market Analysis",
    description: "Learn how to identify profitable commercial properties in any market condition"
  },
  {
    title: "Deal Structuring",
    description: "Master creative financing strategies to maximize returns with minimal capital"
  },
  {
    title: "Risk Mitigation",
    description: "Discover proven techniques to protect your investments and ensure steady income"
  },
  {
    title: "Tenant Strategy",
    description: "Attract and retain quality commercial tenants for long-term stability"
  },
  {
    title: "Value Addition",
    description: "Simple ways to increase property value without major renovations"
  },
  {
    title: "Portfolio Scaling",
    description: "Blueprint for growing from one property to a profitable portfolio"
  }
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });

  // Memoize the scroll function to prevent recreation on each render
  const scrollToRegistration = useCallback(() => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What You'll <Highlight type="primary">Learn</Highlight>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {BENEFITS_DATA.map((benefit, index) => (
              <BenefitCard 
                key={index}
                index={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={scrollToRegistration}
              className="conversion-btn inline-block"
            >
              Reserve Your Spot <ArrowRight className="ml-2 inline-block" size={18} />
            </button>
            <p className="mt-4 text-sm text-neutral-500">Limited spots available – Register now before it's full</p>
          </div>
        </div>
      </div>
    </section>
  );
}
