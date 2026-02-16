
import { useState, useRef, useEffect } from "react";
import { Highlight } from "@/components/ui/highlight";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { useMixpanelTracking } from "@/hooks/useMixpanelTracking";
import { ArrowRight, HelpCircle } from "lucide-react";

const scrollToRegistration = () => {
  const element = document.getElementById('register');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const equityReleaseFaqs = [
  {
    question: "Is this webinar really free?",
    answer: "Yes, absolutely! This webinar is completely free to attend. We believe in providing value first and helping you understand the potential of equity release for property investment. There are no hidden costs or mandatory purchases."
  },
  {
    question: "Do I need to own my home outright to benefit from this?",
    answer: "Not at all! Whether you own your home outright or still have a mortgage, you can potentially access your equity. We'll show you various strategies that work for different situations, including remortgaging options and equity release products suitable for your circumstances."
  },
  {
    question: "What if I'm approaching retirement - is this still relevant?",
    answer: "Absolutely! In fact, many of our most successful students are approaching or already in retirement. We'll cover age-appropriate strategies including pension-led funding, later-life lending options, and how to create passive income streams that complement your retirement planning."
  },
  {
    question: "How much equity do I need in my home to get started?",
    answer: "This varies depending on your strategy, but generally, having £100,000+ in equity opens up good opportunities. However, we'll show you methods that work with smaller amounts too, and how to maximize what you have through strategic property investment."
  },
  {
    question: "Will I receive a recording if I can't attend live?",
    answer: "Yes! All registered attendees will receive access to the full recording within 24 hours of the live webinar, plus exclusive bonus materials including our Equity Release Property Investment Guide and calculators to help you get started."
  },
  {
    question: "Is property investment risky with my home as security?",
    answer: "This is an excellent question and exactly what we'll address in detail. We'll cover risk mitigation strategies, conservative approaches, and how to protect your primary residence while building wealth. Safety and security are our top priorities when using home equity."
  },
  {
    question: "Do I need prior property investment experience?",
    answer: "Not at all! This webinar is designed for complete beginners through to experienced investors. We start with the basics of equity release and build up to advanced strategies. Many of our most successful students started with zero property experience."
  },
  {
    question: "Will this affect my ability to pass my home to my children?",
    answer: "Great question! We'll show you strategies that can actually increase the inheritance you leave behind. By using your equity wisely to build a property portfolio, you could potentially leave your family much more wealth than just your primary residence."
  }
];

export default function EquityReleaseFAQ() {
  const { track, trackSectionView } = useMixpanelTracking();
  const titleRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const titleInView = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const accordionInView = useIntersectionObserver(accordionRef, { threshold: 0.1 });

  // Track section view
  useEffect(() => {
    trackSectionView('Equity Release FAQ');
  }, [trackSectionView]);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-4xl mx-auto text-center mb-8 transform transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold text-primary bg-primary/5 rounded-full border border-primary/10">
            <HelpCircle className="w-3 h-3 mr-1" />
            QUESTIONS & ANSWERS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <Highlight type="primary">Common Questions</Highlight> About Using Home Equity
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get answers to the most frequently asked questions about equity release and property investment strategies.
          </p>
        </div>

        <div 
          ref={accordionRef}
          className={`max-w-4xl mx-auto space-y-4 transform transition-all duration-700 delay-200 ${
            accordionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {equityReleaseFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-neutral-50 rounded-xl shadow-sm overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger 
                  className="px-6 py-4 hover:no-underline text-left"
                  onClick={() => {
                    track('Equity Release FAQ Interaction', {
                      question: faq.question,
                      question_index: index,
                      action: 'expand'
                    });
                  }}
                >
                  <span className="font-bold text-neutral-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              track('CTA Clicked', {
                cta_type: 'primary',
                button_location: 'equity_release_faq_section',
                button_text: 'Register For Free Masterclass',
                context: 'after_faq_review'
              });
              scrollToRegistration();
            }}
            className="conversion-btn inline-flex items-center text-lg font-bold"
          >
            Register For Free Masterclass
            <ArrowRight className="ml-3 w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-neutral-500 max-w-md mx-auto">
            Still have questions? Join the webinar and ask Paul directly during the live Q&A session.
          </p>
        </div>
      </div>
    </section>
  );
}
