import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { PieChart, BarChart, LineChart, ChevronUp, ChevronDown } from "lucide-react";

export default function MarketDashboard() {
  const [region, setRegion] = useState<string>("all");
  const [propertyType, setPropertyType] = useState<string>("all");
  
  const titleRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  const titleInView = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const dashboardInView = useIntersectionObserver(dashboardRef, { threshold: 0.1 });
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium">
            Exclusive Preview
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            <Highlight type="blue">Interactive Market</Highlight> Intelligence Dashboard
          </h2>
          <p className="text-lg text-neutral-700">
            Get a sneak peek at the kind of market intelligence we'll share during the webinar. Explore key commercial property metrics across England's regions.
          </p>
        </div>
        
        <div 
          ref={dashboardRef}
          className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 delay-200 ${
            dashboardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="p-6 md:p-8 bg-neutral-50 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Commercial Property Market Snapshot</h3>
                <p className="text-neutral-600">Updated insights on England's top commercial markets</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="london">London</SelectItem>
                      <SelectItem value="southeast">South East</SelectItem>
                      <SelectItem value="northwest">North West</SelectItem>
                      <SelectItem value="midlands">Midlands</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="All Property Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">All Property Types</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="mixed">Mixed Use</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-neutral-600 font-medium">Avg. Yield</h4>
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    <div className="flex items-center">
                      <ChevronUp size={14} />
                      <span>0.5% YoY</span>
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">5.8%</div>
                <div className="h-16">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-neutral-100 rounded-md"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full rounded-md overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-t from-primary/20 to-primary/5"></div>
                      <div className="absolute bottom-0 left-0 w-full" style={{ height: '70%' }}>
                        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full">
                          <path d="M0,10 Q10,8 20,12 T40,15 T60,10 T80,8 T100,11" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-neutral-600 font-medium">Vacancy Rate</h4>
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    <div className="flex items-center">
                      <ChevronDown size={14} />
                      <span>1.2% YoY</span>
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">7.2%</div>
                <div className="h-16">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-neutral-100 rounded-md"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full rounded-md overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-t from-secondary/20 to-secondary/5"></div>
                      <div className="absolute bottom-0 left-0 w-full" style={{ height: '65%' }}>
                        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full">
                          <path d="M0,15 Q15,13 30,10 T50,12 T70,8 T100,7" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-neutral-600 font-medium">Avg. Price/sqft</h4>
                  <div className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                    <div className="flex items-center">
                      <ChevronUp size={14} />
                      <span>3.8% YoY</span>
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">£435</div>
                <div className="h-16">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-neutral-100 rounded-md"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full rounded-md overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-t from-amber-500/20 to-amber-500/5"></div>
                      <div className="absolute bottom-0 left-0 w-full" style={{ height: '75%' }}>
                        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full">
                          <path d="M0,12 Q10,13 30,10 T50,7 T70,5 T100,8" fill="none" stroke="#F59E0B" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-neutral-600 font-medium">ROI Potential</h4>
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    High
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">14.2%</div>
                <div className="h-16">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-neutral-100 rounded-md"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full rounded-md overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-t from-primary/20 to-primary/5"></div>
                      <div className="absolute bottom-0 left-0 w-full" style={{ height: '80%' }}>
                        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full">
                          <path d="M0,15 Q20,10 40,5 T60,12 T80,8 T100,6" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-neutral-50 rounded-xl p-6">
              <h4 className="font-medium mb-4">Regional Opportunity Map</h4>
              <div className="bg-white rounded-lg p-3 md:p-4">
                <div className="relative aspect-[16/9] bg-neutral-100 rounded overflow-hidden">
                  {/* Map of England */}
                  <img 
                    src="https://images.unsplash.com/photo-1589210031049-27a8a8080e42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675" 
                    alt="Map of England showing commercial property opportunity zones" 
                    className="w-full h-full object-cover opacity-70"
                  />
                  
                  {/* Interactive map markers */}
                  <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group">
                    <span className="text-xs text-white font-bold">1</span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-48 bg-white p-3 rounded-lg shadow-lg mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="font-bold mb-1">London</div>
                      <div className="text-sm text-neutral-600">Prime office space showing 6.2% yields with strong recovery trends.</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/3 left-2/3 w-6 h-6 bg-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group">
                    <span className="text-xs text-white font-bold">2</span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-48 bg-white p-3 rounded-lg shadow-lg mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="font-bold mb-1">Manchester</div>
                      <div className="text-sm text-neutral-600">Industrial units showing exceptional 8.4% yields with low vacancy.</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-2/3 left-1/5 w-6 h-6 bg-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group">
                    <span className="text-xs text-white font-bold">3</span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-48 bg-white p-3 rounded-lg shadow-lg mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="font-bold mb-1">Bristol</div>
                      <div className="text-sm text-neutral-600">Mixed-use developments showing strong 7.8% returns with growing demand.</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-neutral-600 mb-4">During the webinar, you'll get access to our full interactive market intelligence dashboard with real-time data.</p>
                <Button 
                  onClick={() => scrollToSection("register")} 
                  className="rounded-full"
                >
                  Reserve My Access <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
