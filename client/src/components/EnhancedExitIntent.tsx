import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

/**
 * EnhancedExitIntent Component
 * 
 * A sophisticated exit-intent popup that combines several psychological triggers:
 * - Social proof with live counter
 * - Countdown timer for urgency
 * - Value-added bonus offers
 * - Loss aversion messaging
 * - Personalized feel with dynamic elements
 */
export default function EnhancedExitIntent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [selectedBonus, setSelectedBonus] = useState<number | null>(null);
  
  // Countdown state
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [liveViewers, setLiveViewers] = useState(17);
  const [recentSignups, setRecentSignups] = useState<string[]>([
    "Sarah from Manchester",
    "James from London",
    "Emma from Birmingham"
  ]);

  useEffect(() => {
    // Check if we've shown this popup before
    const hasShownPopup = localStorage.getItem('enhancedExitPopupShown');
    if (hasShownPopup) {
      setHasShown(true);
    }

    // Only set up event listeners if we haven't shown the popup yet
    if (!hasShown) {
      const handleMouseLeave = (e: MouseEvent) => {
        // Only trigger when mouse moves to the top of the browser
        if (e.clientY <= 5) {
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem('enhancedExitPopupShown', 'true');
        }
      };

      // Mobile/tablet detection - trigger after 35 seconds
      const timer = setTimeout(() => {
        if (!hasShown) {
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem('enhancedExitPopupShown', 'true');
        }
      }, 35000);

      // Desktop exit intent detection
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [hasShown]);

  // Countdown timer effect
  useEffect(() => {
    if (!isVisible) return;

    // Start countdown
    const countdownInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Simulate fluctuating live viewers
    const viewersInterval = setInterval(() => {
      setLiveViewers(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(12, prev + change);
      });
    }, 3000);

    // Simulate recent signups
    const signupInterval = setInterval(() => {
      const locations = ["London", "Glasgow", "Leeds", "Cardiff", "Bristol", "Edinburgh", "Liverpool"];
      const names = ["Michael", "David", "Sophie", "Charlotte", "William", "Oliver", "Emily"];
      
      // Generate a random signup
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const newSignup = `${randomName} from ${randomLocation}`;
      
      setRecentSignups(prev => {
        const updated = [newSignup, ...prev];
        if (updated.length > 3) updated.pop();
        return updated;
      });
    }, 8000);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(viewersInterval);
      clearInterval(signupInterval);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBonusSelect = (index: number) => {
    setSelectedBonus(index);
  };

  const handleRegisterNow = () => {
    // Show confirmation toast
    if (selectedBonus !== null) {
      const bonusTitles = [
        "Commercial Property Valuation Guide",
        "Commercial Tenant Screening Checklist",
        "Commercial Lease Negotiation Framework"
      ];
      
      toast({
        title: "Bonus Reserved!",
        description: `Your ${bonusTitles[selectedBonus]} will be available after registration.`,
      });
    }
    
    // Scroll to registration form
    document.querySelector('#register')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    setIsVisible(false);
  };

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const bonusOptions = [
    {
      title: "Commercial Property Valuation Guide",
      description: "Discover the exact formula professionals use to accurately value commercial properties.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      title: "Commercial Tenant Screening Checklist",
      description: "Our proven 15-point screening process to find reliable commercial tenants.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      title: "Commercial Lease Negotiation Framework",
      description: "The step-by-step negotiation framework used by top property investors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
          <path d="m15 9-6 6"></path>
          <path d="m9 9 6 6"></path>
        </svg>
      )
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Main modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="w-[95%] max-w-xl z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Premium border effect with gradient */}
            <div className="p-0.5 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent">
              <div className="bg-white rounded-xl shadow-2xl relative">
                {/* Animated confetti background effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl opacity-10">
                  <div className="absolute -inset-[10px]" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.1), transparent 70%)' }}></div>
                </div>
                
                {/* Close button */}
                <button 
                  onClick={handleClose}
                  className="absolute top-2 right-2 z-20 text-neutral-500 hover:text-neutral-700 p-2 bg-white/80 rounded-full"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                {/* Content area */}
                <div className="p-6 md:p-8">
                  {/* Header section */}
                  <div className="text-center mb-6">
                    <div className="inline-block px-3 py-1 mb-3 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                      EXCLUSIVE VIP OFFER
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Wait! You're Leaving Without Your <span className="text-primary">Special Bonus</span></h3>
                    
                    <p className="text-neutral-600 text-sm md:text-base mb-2">
                      We're offering VIP webinar access plus your choice of one premium resource to registrants right now.
                    </p>
                    
                    {/* Live indicators */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mt-4 mb-2">
                      {/* Countdown timer */}
                      <div className="flex items-center bg-neutral-50 rounded-lg px-3 py-1.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                        <span className="text-sm font-semibold">Offer expires in: </span>
                        <span className="text-primary font-bold ml-1">{formatTime(timeLeft)}</span>
                      </div>
                      
                      {/* Live viewers counter */}
                      <div className="flex items-center bg-neutral-50 rounded-lg px-3 py-1.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                        <span className="text-sm">
                          <span className="font-semibold">{liveViewers}</span> people viewing this offer
                        </span>
                      </div>
                    </div>
                    
                    {/* Recent signups ticker */}
                    <div className="bg-neutral-50 rounded-lg p-2 mt-4 max-w-sm mx-auto overflow-hidden relative">
                      <div className="flex items-center text-xs text-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-1">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="font-medium"
                        >
                          Recent registration: {recentSignups[0]}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Choose your bonus section */}
                  <div className="mb-6">
                    <h4 className="text-center text-lg font-semibold mb-4">Choose Your Free Bonus:</h4>
                    
                    <div className="space-y-3">
                      {bonusOptions.map((bonus, index) => (
                        <button 
                          key={index}
                          type="button"
                          className={`
                            border rounded-lg p-3 cursor-pointer transition-all w-full text-left
                            ${selectedBonus === index 
                              ? 'border-primary bg-primary/5 shadow-md' 
                              : 'border-neutral-200 hover:border-primary/50 hover:bg-neutral-50'}
                          `}
                          onClick={() => handleBonusSelect(index)}
                          aria-pressed={selectedBonus === index}
                        >
                          <div className="flex items-start">
                            <div className={`
                              w-5 h-5 rounded-full border flex-shrink-0 mr-3 mt-0.5
                              flex items-center justify-center
                              ${selectedBonus === index ? 'bg-primary border-primary' : 'border-neutral-300'}
                            `}>
                              {selectedBonus === index && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <h5 className="font-semibold text-base">{bonus.title}</h5>
                                <div className={`text-primary mt-0.5 ${selectedBonus === index ? 'text-primary' : 'text-neutral-400'}`}>
                                  {bonus.icon}
                                </div>
                              </div>
                              <p className="text-sm text-neutral-600 mt-1">{bonus.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA button */}
                  <Button
                    onClick={handleRegisterNow}
                    disabled={selectedBonus === null}
                    className={`
                      w-full py-6 text-lg font-semibold ${selectedBonus === null 
                        ? 'bg-neutral-300 cursor-not-allowed' 
                        : 'bg-primary hover:bg-primary/90 transition-transform hover:translate-y-[-2px]'}
                    `}
                  >
                    {selectedBonus === null 
                      ? 'Select a Bonus to Continue' 
                      : 'Register Now & Claim Your Bonus'}
                  </Button>
                  
                  {/* Trust indicators */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-neutral-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Your information is secure and will not be shared
                    </p>
                    
                    <div className="flex justify-center space-x-3 mt-3">
                      <div className="flex items-center text-xs text-neutral-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Free Access
                      </div>
                      <div className="flex items-center text-xs text-neutral-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Instant Delivery
                      </div>
                      <div className="flex items-center text-xs text-neutral-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Limited Availability
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Premium border effect for the bottom of the modal */}
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}