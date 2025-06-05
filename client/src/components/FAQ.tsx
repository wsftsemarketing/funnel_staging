import { useState, useRef } from "react";
import { Highlight } from "@/components/ui/highlight";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { ArrowRight } from "lucide-react";



const scrollToRegistration = () => {
  const element = document.getElementById('register');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


const faqs = [
  {
    question: "Will the webinar be recorded?",
    answer: "Yes, and you will have instant access to a replay of the webinar after registration. This ensures you can review the content at your own pace and refer back to it whenever you need."
  },
  {
    question: "Do I need to have existing property investments?",
    answer: "No, this webinar is valuable whether you're just starting out or already have a property portfolio. We'll cover strategies that apply to investors at various stages of their journey, from finding your first property to scaling your portfolio."
  },
  {
    question: "What makes this webinar different from others?",
    answer: "This isn't just another theory-heavy webinar. Our commercial property training is led by Paul Smith, 'The Money Making Expert'. Paul is a real-world property investor who famously turned £170 into a multi-million-pound portfolio. You're learning from someone with a proven, verifiable track record in the UK property market. We focus exclusively on practical, actionable strategies that are generating significant returns right now, providing you with resources and tools you can implement immediately after the webinar to replicate our students' success."
  },
];

export default function FAQ() {
  const titleRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  
  const titleInView = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const accordionInView = useIntersectionObserver(accordionRef, { threshold: 0.1 });

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-6 transform transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-3 py-1 mb-6 text-sm font-bold text-primary uppercase tracking-wide">
            QUESTIONS & ANSWERS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 capitalize">
            <Highlight type="primary">Frequently</Highlight> asked questions
          </h2>
          <p className="text-lg text-neutral-700">
          </p>
        </div>
        
        <div 
          ref={accordionRef}
          className={`max-w-3xl mx-auto space-y-6 transform transition-all duration-700 delay-200 ${
            accordionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-neutral-100 rounded-xl shadow-sm overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="font-bold text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-neutral-700">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={scrollToRegistration}
            className="conversion-btn inline-block uppercase"
          >
            Watch Free Training Now{" "}
            <ArrowRight className="ml-2 inline-block" size={18} />
          </button>
          {/* <p className="mt-4 text-sm text-muted-foreground mb--4">Limited spots available – Register now before it's full</p> */}
        </div>
      </div>
    </section>
  );
}
