
import { useState, useRef } from "react";
import { Play, Clock, CheckCircle, Award, ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { useMixpanelTracking } from "@/hooks/useMixpanelTracking";

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  vimeoId: string;
  outcomes: string[];
}

const videos: Video[] = [
  {
    id: "1",
    title: "Create Financial Freedom from Just One Commercial Property Deal",
    description: "Learn how one deal can transform your financial future",
    duration: "18 mins",
    thumbnail: "https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d9361c04b429e996beafc_2%20(2).png",
    vimeoId: "placeholder1",
    outcomes: [
      "How to structure your first commercial deal",
      "Understanding property financing options", 
      "Calculating potential returns accurately",
      "Risk mitigation strategies for beginners"
    ]
  },
  {
    id: "2", 
    title: "The True Cost of Anything",
    description: "Understanding the real costs behind every investment decision",
    duration: "15 mins",
    thumbnail: "https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d9361c04b429e996beafc_2%20(2).png",
    vimeoId: "placeholder2",
    outcomes: [
      "Hidden costs in commercial property deals",
      "Tax implications and strategies",
      "Ongoing maintenance and management costs",
      "Exit strategy planning and costs"
    ]
  },
  {
    id: "3",
    title: "What One Work Saves You Tens",
    description: "The power of proper due diligence in commercial property",
    duration: "22 mins", 
    thumbnail: "https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d9361c04b429e996beafc_2%20(2).png",
    vimeoId: "placeholder3",
    outcomes: [
      "Essential due diligence checklist",
      "Property inspection best practices",
      "Legal considerations and documentation",
      "Avoiding costly mistakes before purchase"
    ]
  },
  {
    id: "4",
    title: "Decision Time",
    description: "Making confident investment decisions with the right framework",
    duration: "20 mins",
    thumbnail: "https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d9361c04b429e996beafc_2%20(2).png", 
    vimeoId: "placeholder4",
    outcomes: [
      "Investment decision framework",
      "Comparing multiple opportunities",
      "When to walk away from a deal",
      "Building your investment portfolio strategy"
    ]
  }
];

export default function VideoSeriesHero() {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const { trackButtonClick } = useMixpanelTracking();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });

  const scrollToRegistration = () => {
    trackButtonClick('Video Series CTA', 'Hero Video Section');
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
    trackButtonClick('Video Selected', `Video ${video.id}: ${video.title}`);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
    trackButtonClick('Video Play', `Video ${selectedVideo.id}: ${selectedVideo.title}`);
  };

  return (
    <section data-section="video-series-hero" className="relative pt-6 md:pt-8 pb-8 md:pb-16 overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-7xl mx-auto transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-4 py-2 mb-4 text-sm font-bold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
              FREE VIDEO SERIES
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-[1.05] tracking-tight">
              Paul Smith's <span className="text-primary">Commercial Property</span> Masterclass Series
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-6 max-w-3xl mx-auto font-medium">
              Watch 4 exclusive training videos and discover the exact strategies used by successful commercial property investors
            </p>
          </div>

          {/* Main Video and Selection Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  {!isPlaying ? (
                    <>
                      <img 
                        src={selectedVideo.thumbnail} 
                        alt={selectedVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button
                          onClick={handlePlayVideo}
                          className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform transition-transform hover:scale-110 group"
                        >
                          <Play className="h-8 w-8 text-primary fill-primary ml-1 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <iframe
                      src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}?autoplay=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                  <p className="text-white/90 mb-3">{selectedVideo.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{selectedVideo.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Free Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Selection + Outcomes */}
            <div className="space-y-6">
              {/* Video Selection Grid */}
              <div>
                <h3 className="text-lg font-bold mb-4">Choose Your Video</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                  {videos.map((video) => (
                    <button
                      key={video.id}
                      onClick={() => handleVideoSelect(video)}
                      className={`text-left p-3 rounded-lg border-2 transition-all ${
                        selectedVideo.id === video.id
                          ? "border-primary bg-primary/5"
                          : "border-neutral-200 hover:border-primary/50 hover:bg-neutral-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-primary">{video.id}</span>
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-sm leading-tight mb-1">{video.title}</h4>
                          <p className="text-xs text-foreground/60">{video.duration}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Video Outcomes */}
              <div className="bg-neutral-50 rounded-lg p-4">
                <h4 className="font-bold mb-3 text-primary">What You'll Learn:</h4>
                <ul className="space-y-2">
                  {selectedVideo.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Want to Take Your Knowledge Even Further?
            </h2>
            <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
              Join Paul's live webinar for an exclusive deep-dive session with Q&A, advanced strategies, and personal guidance
            </p>
            <button
              onClick={scrollToRegistration}
              className="conversion-btn inline-flex items-center text-lg px-8 py-4"
            >
              Reserve My Free Webinar Spot <ArrowRight className="ml-2" size={20} />
            </button>
            <p className="mt-4 text-sm text-foreground/60">
              90 minutes • Live Q&A • Replay access included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
