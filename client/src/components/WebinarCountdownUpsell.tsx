import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CountdownTimer } from './ui/countdown';

type WebinarCountdownUpsellProps = {
  webinarDate: Date;
  limitedSpots?: number;
  spotsTaken?: number;
};

export default function WebinarCountdownUpsell({
  webinarDate,
  limitedSpots = 100,
  spotsTaken = 78
}: WebinarCountdownUpsellProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [spotsRemaining, setSpotsRemaining] = useState(limitedSpots - spotsTaken);
  const [showLiveIndicator, setShowLiveIndicator] = useState(false);

  useEffect(() => {
    // Show component after user has been on the page for 15 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    // Random live indicator blinking
    const blinkInterval = setInterval(() => {
      setShowLiveIndicator(prev => !prev);
    }, 1000);

    // Simulate spots being taken
    const spotsInterval = setInterval(() => {
      setSpotsRemaining(prev => {
        // Don't go below 5 spots to maintain urgency
        if (prev <= 5) return prev;
        return prev - 1;
      });
    }, 45000); // Every 45 seconds, reduce available spots by 1

    return () => {
      clearTimeout(timer);
      clearInterval(blinkInterval);
      clearInterval(spotsInterval);
    };
  }, []);

  const progressPercentage = (spotsTaken / limitedSpots) * 100;

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 right-0 left-0 z-40 bg-white border-t border-neutral-200 shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-3 sm:mb-0">
                <div className="flex items-center">
                  <div className="relative mr-2">
                    <span className={`flex h-3 w-3 ${showLiveIndicator ? 'opacity-100' : 'opacity-40'}`}>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                  <span className="text-sm font-semibold">Webinar starts in:</span>
                </div>
                <CountdownTimer 
                  targetDate={webinarDate} 
                  size="small"
                  className="text-primary font-bold"
                />
              </div>
              
              <div className="mb-3 sm:mb-0 text-center sm:text-left">
                <p className="text-sm font-medium mb-1">Only <span className="text-primary font-bold">{spotsRemaining} spots</span> remaining</p>
                <div className="w-full bg-neutral-100 rounded-full h-2.5 mb-1">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-in-out" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-neutral-500">{spotsTaken} people have already registered</p>
              </div>
              
              <div>
                <a 
                  href="#register" 
                  className="conversion-btn py-2 px-4 text-sm w-full sm:w-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#register')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Reserve Your Spot
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}