import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Highlight } from "@/components/ui/highlight";
import { useTrackSection } from "@/hooks/useAnalytics";
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Building, 
  ShieldCheck, 
  Users, 
  Presentation,
  LineChart
} from "lucide-react";

export default function WebinarAgenda() {
  useTrackSection('Webinar Agenda');
  
  return (
    <section id="agenda" className="py-12 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About The <Highlight type="primary">Webinar</Highlight>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-6">
            Discover how to build a sustainable property business with our comprehensive commercial property masterclass
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center bg-primary/5 px-4 py-2 rounded-full">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">On-demand access</span>
            </div>
            <div className="flex items-center bg-primary/5 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">90-minute masterclass</span>
            </div>
            <div className="flex items-center bg-primary/5 px-4 py-2 rounded-full">
              <Presentation className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">Real strategies included</span>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Main Headline */}
          <div className="md:col-span-5">
            <Card className="h-full border-0 shadow-md overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h3 className="text-xl font-bold mb-4 leading-tight">
                  How To Create A Hands-Free 6 Figure Business With Just ONE Property
                </h3>
                <p className="text-white/90 text-sm mb-4 italic">
                  …Without Needing Money To Invest or Having To Be "Bob The Builder"
                </p>
                
                <div className="mt-6 flex justify-center">
                  <LineChart className="h-24 w-24 text-white/80" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6">
                  Our commercial property training has helped hundreds of everyday people build sustainable passive income streams. Register for the free webinar to get the exact steps.
                </p>
                
                <Button 
                  className="w-full md:hidden sm:block"
                  onClick={() => window.location.href = '#registration'}
                >
                  Reserve Your Spot Now
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Agenda Details */}
          <div className="md:col-span-7">
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Long-Term, Hassle-Free Tenants</h4>
                  <p className="text-gray-600">
                    How to get long-term tenants who pay ALL your refurbishment bills (and pay to put your property back exactly how they found it when they leave!)
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Virtually Zero Competition</h4>
                  <p className="text-gray-600">
                    Why there is so little competition from other investors with this type of Property business, and how you can capitalise on this overlooked opportunity
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Proven UK Case Studies</h4>
                  <p className="text-gray-600">
                    Real-life case studies with proof and examples in many different UK areas, showing exactly how everyday people are building 6-figure businesses
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA with Stats */}
            <div className="mt-8 bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">12–15%+</p>
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
                  variant="secondary"
                  size="sm"
                  className="w-full text-sm"
                  onClick={() => window.location.href = '#registration'}
                >
                  Reserve Your Spot Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}