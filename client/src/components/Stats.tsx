
import { useRef } from "react";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { PoundSterling, TrendingUp, Users, Clock } from "lucide-react";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <PoundSterling className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold mb-2">£250M+</div>
            <p className="text-sm text-neutral-600">Property Deals Closed</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold mb-2">12-22%</div>
            <p className="text-sm text-neutral-600">Average ROI</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <p className="text-sm text-neutral-600">Investors Trained</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold mb-2">90 min</div>
            <p className="text-sm text-neutral-600">Value-Packed Session</p>
          </div>
        </div>
      </div>
    </section>
  );
}
