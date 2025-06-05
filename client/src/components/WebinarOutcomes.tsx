import React from "react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import {
  User2,
  BadgePoundSterling,
  BookOpenCheck,
  ArrowRight,
} from "lucide-react";

const scrollToRegistration = () => {
  const element = document.getElementById("register");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function WebinarOutcomes() {
  return (
    <section id="agenda" className="py-12 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 v">
            About The <Highlight type="primary">Webinar</Highlight>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-6">
            Looking to get into commercial property to maximise your returns,
            without needing any prior experience? Join our commercial property
            expert and host Paul Smith, to find out how.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Icon List */}
          <div className="md:col-span-5">
            <h3 className="text-xl md:text-2xl font-bold mb-6 v">
              Agenda Preview:
            </h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Long-Term, Hassle-Free Tenants
                  </h4>
                  <p className="text-gray-600">
                    How to get long-term tenants who pay ALL your refurbishment
                    bills (and pay to put your property back exactly how they
                    found it when they leave!).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BadgePoundSterling className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Virtually Zero Competition
                  </h4>
                  <p className="text-gray-600">
                    Why there is so little competition from other investors with
                    this type of strategy, and how you can take advantage of
                    this to secure your own properties.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpenCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Proven Case Studies
                  </h4>
                  <p className="text-gray-600">
                    Real-life case studies with proof and examples in many areas
                    across the UK, showing exactly how everyday people are
                    building 6-figure businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats with CTA */}
          <div className="md:col-span-7">
            <div className="mt-8 bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1">Case Study</h4>
              <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">12%+</p>
                  <p className="text-xs text-gray-500">Potiential Yield</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">£65k</p>
                  <p className="text-xs text-gray-500">Annual Income</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-xs text-gray-500">Property Needed</p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={scrollToRegistration}
                  className="bg-[#e3bc31] hover:bg-[#d4a929] w-full inline-block uppercase font-bold"
                >
                  Watch Free Training Now {" "}
                  <ArrowRight className="ml-2 inline-block" size={18} />
                </Button>
              </div>
            </div>
            <div className="items-center ">
             <a href="https://www.cpduk.co.uk/providers/touchstone-education" target="_blank" rel="noopener noreferrer">  
               <img className="mt-6 max-w-16 mx-auto grayscale opacity-50" src="https://www.servicesforeducation.co.uk/wp-content/uploads/2021/07/CPDcertified-438x400.png" alt="CPD Certified" ></img>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
