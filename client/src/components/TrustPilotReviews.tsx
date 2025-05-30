import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    text: "I have just had my first 1:1 with Beth Bird, prior to the meeting I was feeling very overwhelmed and unsure of my direction. Having now completed my initial 1:1 I have a clear direction, my confidence has grown exponentially and I cannot wait to get started on this exciting journey. The information and advise I have received from Beth was excellent and she has most definitely set me up for success. I cannot recommend Beth enough she is an excellent coach.",
    name: "Scott Burns",
    role: "Touchstone Education Student",
    location: "GB",
    rating: 5
  },
  {
    text: "I just wanted to say a big thank you to John Davidson for an uplifting and supportive 1:1 last week. John gently reminded me of the value in looking back at how far I've come, not just how far there is to go—something that will stay with me when progress feels slow. Thank you John, for your kindness, insight, and encouragement when I needed it most. You're a genuine pleasure to talk to and an absolute credit to Touchstone. A big shout out to Indy, Dee and Chris also, all of whom have been great and provided support at various 1:1s :).",
    name: "Rebecca",
    role: "Touchstone Education Student",
    location: "GB",
    rating: 5
  },
  {
    text: "This event was excellent. Very well presented, informative, and inspiring. It opened up all the options for property investment, most of which, I was totally unaware of. I thought this was going to be a long two days sitting in front of the computer screen, but it was far from it. So interesting, and I would recommend Touchstone to anyone with an interest in generating wealth from property.",
    name: "Graham Sawyer",
    role: "Bespoke Furniture Business Owner",
    location: "GB",
    rating: 5
  }
];

export default function TrustPilotReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonialsInView = useIntersectionObserver(testimonialsRef, { threshold: 0.1 });
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToRegistration = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="trustpilot-reviews" className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        
        {/* TrustPilot-style Testimonials */}
        <div className="mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What Our Students Say</h2>
          
          <div 
            ref={testimonialsRef}
            className={`relative transform transition-all duration-700 delay-200 ${
              testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4">
                    <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col border border-neutral-100">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <img className="w-1/3 sm:w-1/5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/2560px-Trustpilot_Logo_%282022%29.svg.png" alt="Trustpilot logo" />
                        </div>
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4" style={{ fill: "#00b67a", stroke: "none" }} />
                          ))}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-neutral-700 mb-3 line-clamp-6">"{testimonial.text}"</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-neutral-500">{testimonial.role}</p>
                        </div>
                        <div className="flex items-center text-xs bg-neutral-100 px-2 py-1 rounded">
                          <span className="uppercase">{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={prevTestimonial}
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full bg-white shadow-md focus:outline-none text-neutral-700 hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button 
              onClick={nextTestimonial}
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full bg-white shadow-md focus:outline-none text-neutral-700 hover:text-primary transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-primary' : 'bg-neutral-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
           
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={scrollToRegistration}
              className="conversion-btn inline-block uppercase"
            >
              Watch now{" "}
              <ArrowRight className="ml-2 inline-block" size={18} />
            </button>
            {/* <p className="mt-4 text-sm text-muted-foreground mb--4">Limited spots available – Register now before it's full</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}