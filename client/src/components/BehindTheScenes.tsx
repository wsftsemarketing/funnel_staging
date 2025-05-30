import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Highlight } from "@/components/ui/highlight";
import { Play, ChevronRight, Eye } from "lucide-react";

export default function BehindTheScenes() {
  const [activePreview, setActivePreview] = useState("office-tour");
  
  return (
    <section id="behind-the-scenes" className="py-12 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            Behind-The-Scenes <Highlight type="primary">Sneak Peek</Highlight>
          </h2>
          <p className="text-gray-600 mb-6">
            Get an exclusive preview of what to expect during our commercial property masterclass
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs 
            defaultValue="office-tour" 
            className="w-full"
            onValueChange={setActivePreview}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full md:w-auto">
                <TabsTrigger value="office-tour">Office Tour</TabsTrigger>
                <TabsTrigger value="deal-walkthrough">Deal Walkthrough</TabsTrigger>
                <TabsTrigger value="webinar-preview">Webinar Preview</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Office Tour Content */}
            <TabsContent value="office-tour" className="mt-2">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
                  {/* Placeholder Video/GIF - In a real implementation this would be an actual video */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all duration-200 shadow-lg">
                          <Play className="w-6 h-6 text-primary ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Visit Our Investment Headquarters</h3>
                  <p className="text-gray-700 mb-6">
                    Take a virtual tour of our office where we analyze, structure, and close some of the UK's most profitable commercial property deals. See the environment where our experts work daily to identify prime investment opportunities.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Meet The Team</h4>
                        <p className="text-gray-600 text-sm">Get to know the property experts who will guide your investment journey</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Deal Research Center</h4>
                        <p className="text-gray-600 text-sm">See our property research hub where we identify high-ROI opportunities</p>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        variant="outline" 
                        className="group"
                        onClick={() => window.location.href = '#registration'}
                      >
                        <span>Register to See the Full Tour</span>
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Deal Walkthrough Content */}
            <TabsContent value="deal-walkthrough" className="mt-2">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Commercial Property Deal Walkthrough</h3>
                  <p className="text-gray-700 mb-6">
                    See exactly how we structured a £1.5M commercial property deal that generates £95,000 in annual passive income. We'll walk you through the entire process from finding the property to closing the deal.
                  </p>
                  
                  <Card className="border-0 shadow-sm bg-gray-50 mb-6">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Purchase Price</p>
                          <p className="text-lg font-bold">£1,500,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Annual Income</p>
                          <p className="text-lg font-bold text-primary">£95,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">ROI</p>
                          <p className="text-lg font-bold text-secondary">22.4%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Full Acquisition Strategy</h4>
                        <p className="text-gray-600 text-sm">Our step-by-step approach to acquiring high-value commercial properties</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Financing Structure</h4>
                        <p className="text-gray-600 text-sm">How we secured funding with minimal personal capital investment</p>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button onClick={() => window.location.href = '#registration'}>
                        Join Our Webinar for the Full Breakdown
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
                  {/* Placeholder Video/GIF - In a real implementation this would be an actual video */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all duration-200 shadow-lg">
                          <Play className="w-6 h-6 text-primary ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Webinar Preview Content */}
            <TabsContent value="webinar-preview" className="mt-2">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7">
                  <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md mb-4">
                    {/* Placeholder Video/GIF - In a real implementation this would be an actual video */}
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all duration-200 shadow-lg">
                            <Play className="w-6 h-6 text-primary ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden shadow-sm relative cursor-pointer hover:opacity-90 transition-opacity">
                      <img src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Webinar slide" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden shadow-sm relative cursor-pointer hover:opacity-90 transition-opacity">
                      <img src="https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Webinar slide" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden shadow-sm relative cursor-pointer hover:opacity-90 transition-opacity">
                      <img src="https://images.pexels.com/photos/7821879/pexels-photo-7821879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Webinar slide" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-bold mb-4">Inside The Webinar Experience</h3>
                  <p className="text-gray-700 mb-6">
                    Get a sneak peek at what our Commercial Property Webinar looks like. We've assembled some highlights from previous sessions to give you a taste of the valuable content we'll cover.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Interactive Deal Analysis</h4>
                        <p className="text-gray-600 text-sm">See how we break down real commercial property deals live</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Q&A Sessions</h4>
                        <p className="text-gray-600 text-sm">Get your specific questions answered by our property experts</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Downloadable Resources</h4>
                        <p className="text-gray-600 text-sm">Access valuable templates and guides shared during the webinar</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mb-6">
                    <p className="text-sm text-gray-700 italic">
                      "The content in this webinar completely changed my approach to property investing. I've since acquired two commercial properties generating 18% and 22% ROI respectively."
                    </p>
                    <p className="text-sm font-medium mt-2">— Mark Thompson, Manchester</p>
                  </div>
                  
                  <Button onClick={() => window.location.href = '#registration'}>
                    Register Now for Full Access
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}