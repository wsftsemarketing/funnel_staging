import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    text: "Touchstone have been excellent, the ops team, and the question and answer sessions are invaluable! I recently had a 1-2-1 with Wendy Caddis, she was brilliant, straight away she discussed options with me and gave me a way forward. I look forward to working with her again soon. Thank you all at Touchstone 👏☘️.",
    name: "Wendy",
    role: "Touchstone Education Student",
    location: "IE",
    rating: 5,
    link: "https://uk.trustpilot.com/reviews/684133a996093cfe771adb64"
  },
  {
    text: "My 1-1 session with Geraldine was very encouraging. She was genuinely interested in my progress and able to highlight and offer insight into my skill set. This was only my 2nd coaching session, but i found it be to valuable. Geraldine showed me an excellent way to step out of my comfort zone and take the next step in my property journey. I found her to be highly engaging and listened to my ideas for next phase of my journey to flesh out.",
    name: "Yvonne Bullen",
    role: "Touchstone Education Student",
    location: "GB",
    rating: 5,
    link: "https://uk.trustpilot.com/reviews/6840ade68f8000911c1e6fd0"
  },
  {
    text: "I'm excited to share how John has been a huge help in my journey with property investments. His dedication and deep knowledge have been crucial in guiding me through my property journey. \n Today's 1-2-1 session was really eye-opening. John gave me clear and practical advice that improved my understanding and plans. He has a real talent for making complex ideas simple and easy to follow. John doesn’t just fix immediate issues; he also prepares you for future challenges with confidence. He genuinely wants to help others succeed, and you can see this in the enthusiasm and personal attention he gives in every 1-2-1 session. \n If you're starting or want to grow in the property world, I highly recommend John. His guidance is more than helpful; it changes the game. Thank you, John, for your consistent support and expertise!.",
    name: "Sirjana",
    role: "Touchstone Education Student",
    location: "GB",
    rating: 5,
    link: "https://uk.trustpilot.com/reviews/683e038992e8f2a21b3fb0ab"
  },
  {
    text: "Touchstone Education are very helpful, friendly and professional with a wealth of knowledge! They have weekly Q&A's with 2 of the coaches, where all questions raised are answered and discussed as topics interactively during the hour plus long calls, giving insightful advice on their experiences etc. The operations team are quick to get back to you with any issues as well and reached out to me when I hadn't logged in for a week because of holiday which I thought was good. You also get a monthly 1-2-1 with a choice of one of the coaches to act as a mentor / accountability coach, I joined in March, I've had two 1-2-1 with Geraldine Murphy, lovely lady, gives you achievable targets to meet, gives you the drive to work harder and very easy to speak to! So far my journey has been great, just need to keep working at it!",
    name: "Ryan Moore",
    role: "Touchstone Education Student",
    location: "GB",
    rating: 5,
    link: "https://uk.trustpilot.com/reviews/683d8635dcd41b5bea40a8f4"
  },
  {
    text: "My wife and I joined the Touchstone Wealth program in early 2024 after the 2-day “Wealth through Property” workshop. Since joining we have made use of the online courses (brilliant), in-person deal clinics (just blooming superb), on-line weekly Q&A sessions (always informative), and multiple 1-2-1 coaching sessions. I’d like to call out a few coaches for a special mention: Beth Bird has been incredible thanks to her “can do” attitude and down to earth style of coaching. In fact, it was Beth’s testimonial that convinced us to sign up to the program all those months ago. She’s just inspirational. John Davidson just has so, so much experience in pretty much every property strategy you can think of. What’s more, he is always so eager to share his expertise with everyone. He is a simply a stand-out coach. Rob Cottingham is relatively new in the Touchstone team but wow what a stunning journey so far. In just a few months he has grown a hugely successful property business and manages to spare time to help coach and mentor others. Thank you to the entire Touchstone team. I was initially sceptical but am totally convinced that they can and will help any budding property investors to succeed. Onwards and upwards!",
    name: "Clinton Perry",
    role: "Touchstone Education Student",
    location: "GB",
    rating: 5,
    link: "https://uk.trustpilot.com/reviews/6839e6fa75dd946438984863"
  },
  {
    text: "The energy of the two days was really good. Abi and Gordie gave really good insight into a lot of strategies around property investment and the starting points for each strategy. I was able to take away some great ideas and starting points in my new journey as a property investor. The biggest takeaway (asides signing up for the Wealth Academy!) was how much I need to open my eyes up to what I’m doing. The pensions section made my blood boil so I’m so pleased to be aware and now part of the Academy to truly understand the intricacies of this to have a more prosperous life).",
    name: "Dan",
    role: "Touchstone Education Student",
    location: "GB",
    rating: 5,
    link: "https://uk.trustpilot.com/reviews/6821878edc92e3f038bebde2"
  },
  {
    text: "I have just had my first 1:1 with Beth Bird, prior to the meeting I was feeling very overwhelmed and unsure of my direction. Having now completed my initial 1:1 I have a clear direction, my confidence has grown exponentially and I cannot wait to get started on this exciting journey. The information and advise I have received from Beth was excellent and she has most definitely set me up for success. I cannot recommend Beth enough she is an excellent coach.",
    name: "Scott Burns",
    role: "Touchstone Education Student",
    location: "GB",
    rating: 5,
    link: "https://uk.trustpilot.com/reviews/68232992bbd347684b1a364b"
  },
  {
    text: "I just wanted to say a big thank you to John Davidson for an uplifting and supportive 1:1 last week. John gently reminded me of the value in looking back at how far I've come, not just how far there is to go—something that will stay with me when progress feels slow. Thank you John, for your kindness, insight, and encouragement when I needed it most. You're a genuine pleasure to talk to and an absolute credit to Touchstone. A big shout out to Indy, Dee and Chris also, all of whom have been great and provided support at various 1:1s :).",
    name: "Rebecca",
    role: "Touchstone Education Student",
    location: "GB",
    rating: 5,
    link: "https://uk.trustpilot.com/reviews/68222d7f173a63868383309d"
  },
  {
    text: "This event was excellent. Very well presented, informative, and inspiring. It opened up all the options for property investment, most of which, I was totally unaware of. I thought this was going to be a long two days sitting in front of the computer screen, but it was far from it. So interesting, and I would recommend Touchstone to anyone with an interest in generating wealth from property.",
    name: "Graham Sawyer",
    role: "Bespoke Furniture Business Owner",
    location: "GB",
    rating: 5,
    link: "https://uk.trustpilot.com/reviews/6821b88fecd612e4048a5b91"
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
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
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
                      </a>
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
              Watch Free Training Now{" "}
              <ArrowRight className="ml-2 inline-block" size={18} />
            </button>
            {/* <p className="mt-4 text-sm text-muted-foreground mb--4">Limited spots available – Register now before it's full</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}