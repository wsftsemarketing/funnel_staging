import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface VideoThumbnailProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  presenterName: string;
  presenterImage?: string;
  presenterTitle: string;
  roiPercentage: string;
}

export default function VideoThumbnail({
  imageUrl,
  title,
  subtitle,
  presenterName,
  presenterImage,
  presenterTitle,
  roiPercentage
}: VideoThumbnailProps) {
  const [showWebinarForm, setShowWebinarForm] = useState(false);
  
  // Function to open the WebinarJam form
  const openWebinarForm = () => {
    setShowWebinarForm(true);
  };
  
  // Effect to create and mount WebinarJam form when showWebinarForm becomes true
  useEffect(() => {
    if (!showWebinarForm) return;
    
    // Create container if it doesn't exist
    let container = document.getElementById('webinarjam-container');
    
    if (!container) {
      // Create container element
      container = document.createElement('div');
      container.id = 'webinarjam-container';
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.backgroundColor = 'rgba(0,0,0,0.7)';
      container.style.zIndex = '9999';
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'center';
      container.style.padding = '20px';
      
      // Create form wrapper
      const formWrapper = document.createElement('div');
      formWrapper.className = 'wj-embed-wrapper';
      formWrapper.setAttribute('data-webinar-hash', 'y86q9a7p');
      formWrapper.style.backgroundColor = 'white';
      formWrapper.style.borderRadius = '8px';
      formWrapper.style.padding = '20px';
      formWrapper.style.maxWidth = '600px';
      formWrapper.style.width = '100%';
      formWrapper.style.position = 'relative';
      
      // Create close button
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '10px';
      closeBtn.style.right = '10px';
      closeBtn.style.background = 'none';
      closeBtn.style.border = 'none';
      closeBtn.style.fontSize = '24px';
      closeBtn.style.cursor = 'pointer';
      closeBtn.addEventListener('click', () => {
        document.body.removeChild(container);
        setShowWebinarForm(false);
      });
      
      // Create script element
      const script = document.createElement('script');
      script.src = 'https://event.webinarjam.com/register/y86q9a7p/embed-form?formButtonText=Register&formAccentColor=%2329b6f6&formAccentOpacity=0.95&formBgColor=%23ffffff&formBgOpacity=1';
      
      // Append elements
      formWrapper.appendChild(closeBtn);
      formWrapper.appendChild(script);
      container.appendChild(formWrapper);
      if (document.body) {
        document.body.appendChild(container);
      }
    }
    
    // Cleanup function
    return () => {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, [showWebinarForm]);

  return (
    <div 
      className="relative cursor-pointer group"
      onClick={openWebinarForm}
    >
      {/* Video thumbnail style */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        {/* Semi-transparent overlay for video effect */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 z-10"></div>
        
        {/* Main video thumbnail image */}
        <img 
          src={imageUrl} 
          alt={`${title} - ${presenterName}`} 
          className="w-full object-cover aspect-video" 
        />
        
        {/* Large play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/80 rounded-full flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center transform translate-x-1">
              <Play className="h-8 w-8 text-white fill-white" />
            </div>
          </div>
        </div>
        
        {/* Video content overlay */}
        <div className="absolute bottom-0 left-0 right-0 py-6 px-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 text-white">
          <div className="md:flex md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-bold mb-3">
                FREE WEBINAR
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                {title}
              </h2>
              <p className="text-xl text-white/90 mt-2 max-w-2xl font-medium">
                {subtitle}
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              {presenterImage && (
                <img 
                  src={presenterImage} 
                  alt={presenterName} 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover hidden md:block"
                />
              )}
              <div>
                <p className="text-lg font-bold">With {presenterName}</p>
                <p className="text-white/80 text-sm">{presenterTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Watch now button */}
      <div className="absolute top-5 right-5 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg z-30 flex items-center transform transition-transform group-hover:scale-105">
        <span>Watch Now</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
      
      {/* ROI highlight card */}
      <div className="absolute -top-4 -right-4 bg-white p-3 rounded-md shadow-lg border border-neutral-100">
        <div className="flex items-center gap-3">
          <div className="font-black text-3xl text-accent">{roiPercentage}%</div>
          <div>
            <p className="font-bold text-sm">Average ROI</p>
            <p className="text-xs text-foreground/70">For students</p>
          </div>
        </div>
      </div>
    </div>
  );
}