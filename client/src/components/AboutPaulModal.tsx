import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Highlight } from "@/components/ui/highlight";
import { Star, Award, Home, TrendingUp } from "lucide-react";

interface AboutPaulModalProps {
  className?: string;
}

export default function AboutPaulModal({ className }: AboutPaulModalProps) {
  const [open, setOpen] = useState(false);
  
  // Demo profile information - replace with actual data
  const profile = {
    name: "Paul Smith",
    title: "Commercial Property Expert",
    photo: "https://www.paulsmithtouchstoneeducation.com/wp-content/uploads/2020/10/Paul-Smith-Touchstone-Education.png", // Replace with actual photo
    bio: "Paul Smith is one of the UK’s most respected commercial property educators. With over 40 years of experience, Paul has helped hundreds of investors build successful property portfolios. He has built a property empire valued at over £30 million with more than 100 properties, which include a diverse portfolio of commercial assets, residential investments, HMOs, and serviced accommodations. As Touchstone Education's lead expert, he specialises in identifying high-ROI opportunities in the UK commercial property market.",
    achievements: [
      "Built a £30M+ commercial property portfolio",
      "Completed 35+ successful commercial conversions",
      "Mentored 1,200+ property investors",
    ],
    stats: [
      { icon: TrendingUp, label: "Average Client ROI", value: "12%" },
      { icon: Home, label: "Properties Acquired", value: "120+" },
      { icon: Award, label: "Industry Awards", value: "7" }
    ]
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={`relative group ${className}`}>
        <div className="relative">
          {/* Profile image with border */}
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-secondary/70 transition-all duration-300 group-hover:border-secondary hover: shadow-xs">
            <img 
              src={profile.photo} 
              alt={profile.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Label badge */}
          <div className="absolute -right-2 -bottom-1 bg-white text-foregroud font-bold text-[10px] px-3 py-0.5 rounded-full shadow-sm whitespace-nowrap font-bold transition-all duration-300 transform group-hover:scale-105">
            About Paul
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-xl rounded-xl p-0 overflow-auto h-5/6 bg-neutral-50">
        <DialogHeader className="sr-only">
          <DialogTitle>About Paul Smith</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 bg-gradient-to-br from-neutral-50 to-white">
          {/* Photo and basic info section */}
          <div className="p-6 flex flex-col items-center md:items-start">
            <div className="mb-4 w-24 h-24 rounded-full overflow-hidden border-4 border-secondary">
              <img 
                src={profile.photo} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p className="text-sm text-neutral-500 mb-4">{profile.title}</p>
            
            <div className="flex items-center mb-6">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
              ))}
              <span className="ml-2 text-sm font-medium">Expert Trainer</span>
            </div>
            
            <p className="text-sm text-neutral-600">
              {profile.bio}
            </p>
          </div>
          
          {/* Achievements and stats section */}
          <div className="bg-neutral-50/70 p-6">
            <h4 className="font-bold mb-3 text-neutral-800">
              <Highlight type="primary">Key</Highlight> Achievements
            </h4>
            
            <ul className="mb-8 space-y-2">
              {profile.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="text-primary mr-2 font-bold">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold mb-3 text-neutral-800">
              <Highlight type="secondary">Property</Highlight> Success
            </h4>
            
            <div className="grid grid-cols-1 gap-3">
              {profile.stats.map((stat, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">{stat.label}</p>
                    <p className="font-bold text-sm">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-neutral-100 to-neutral-50 py-3 px-6 text-center">
          <h4 className="font-bold mb-3 text-neutral-800">Featured In</h4>
          <div className="flex justify-center items-center space-x-6 space-y-3 flex-wrap">
            <img 
              src="https://logos-world.net/wp-content/uploads/2023/04/The-Guardian-Logo.png" 
              alt="The Guardian" 
              className="h-6 object-contain"
            />
            <img 
              src="https://thefedonline.com/wp-content/uploads/the-sunday-times-logo.png" 
              alt="The Sunday Times" 
              className="h-6 object-contain"
            />
            <img 
              src="https://logos-download.com/wp-content/uploads/2021/01/The_Scotsman_Logo.png" 
              alt="The Scotsman" 
              className="h-6 object-contain"
            />
            <img 
              src="https://heraldandtimes.myshopify.com/cdn/shop/collections/HERALDmastheadnew.png" 
              alt="The Herald" 
              className="h-6 object-contain"
            />
            <img 
              src="https://wildaid.org/wp-content/uploads/2020/03/Independent-logo.png" 
              alt="Independent" 
              className="h-6 object-contain"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-neutral-100 to-neutral-50 py-3 px-6 text-center">
          <p className="text-sm text-neutral-600">
            Join Paul's next webinar to learn his proven system for commercial property investment
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}