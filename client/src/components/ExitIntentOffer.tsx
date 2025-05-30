import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

/**
 * ExitIntentOffer Component
 * 
 * An exit-intent popup that detects when users are about to leave the page
 * and presents a special last-chance offer to encourage registration.
 * This component combines pattern interruption with value-add incentives.
 */
export default function ExitIntentOffer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Generate a unique session ID to track this browser session
    const newSessionId = Math.random().toString(36).substring(2, 15);
    setSessionId(newSessionId);
    
    // Check if we've shown this popup in this session
    const hasShownPopup = localStorage.getItem(`exitPopupShown_${newSessionId}`);
    if (hasShownPopup) {
      setHasShown(true);
    }
  }, []);

  useEffect(() => {
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves to the top of the browser
      if (e.clientY <= 5) {
        setIsVisible(true);
        setHasShown(true);
        
        // Mark as shown in this session
        localStorage.setItem(`exitPopupShown_${sessionId}`, 'true');
      }
    };

    // Mobile/tablet alternative - trigger after 45 seconds of inactivity
    let inactivityTimer: NodeJS.Timeout;
    
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem(`exitPopupShown_${sessionId}`, 'true');
      }, 45000);
    };

    const handleUserActivity = () => {
      resetInactivityTimer();
    };

    // Set up exit intent detection
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Set up inactivity detection
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);
    document.addEventListener('click', handleUserActivity);
    document.addEventListener('scroll', handleUserActivity);
    
    // Start inactivity timer
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
      document.removeEventListener('click', handleUserActivity);
      document.removeEventListener('scroll', handleUserActivity);
      clearTimeout(inactivityTimer);
    };
  }, [hasShown, sessionId]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleRegisterNow = () => {
    document.querySelector('#register')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          {/* Modal wrapper - using flex for perfect centering */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md md:max-w-xl relative bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 z-0"></div>
              
              {/* Close button */}
              <button 
                onClick={handleClose}
                className="absolute top-2 right-2 z-10 text-neutral-500 hover:text-neutral-700 p-2 bg-white/80 rounded-full"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="relative z-10 p-4 md:p-8">
                {/* VIP badge */}
                <div className="absolute -top-3 -right-3 bg-secondary text-white py-1 px-3 rounded-full text-xs font-bold transform rotate-12 shadow-md hidden md:block">
                  SPECIAL OFFER
                </div>
                
                <div className="text-center mb-4 md:mb-6">
                  <div className="inline-block px-2 py-1 bg-secondary text-white rounded-full text-xs font-bold mb-2 md:hidden">
                    SPECIAL OFFER
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold mb-2">Wait! We'd Like to Offer You</h3>
                  <div className="flex justify-center mb-2">
                    <span className="text-3xl md:text-4xl font-black text-primary">VIP Access</span>
                  </div>
                  <p className="text-neutral-600 text-sm md:text-base">
                    Before you go, we're offering VIP access to registrants who sign up today.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-neutral-100 shadow-sm p-3 md:p-4 mb-4 md:mb-6 text-sm md:text-base">
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary md:w-5 md:h-5">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base md:text-lg">VIP Access Includes:</h4>
                      <ul className="space-y-1 md:space-y-2 mt-1 md:mt-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1 md:mr-2 mt-0.5 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm md:text-base">Front-Row Seating in the Webinar</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1 md:mr-2 mt-0.5 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm md:text-base">Extended Q&A Access with Paul Smith</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1 md:mr-2 mt-0.5 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm md:text-base">Exclusive "Commercial Property Risk Assessment Checklist"</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1 md:mr-2 mt-0.5 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm md:text-base">30-Minute Strategy Call (Limited to First 20 VIPs)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <Button
                    onClick={handleRegisterNow}
                    variant="default"
                    className="flex-1 py-3 md:py-6 text-base md:text-lg"
                  >
                    <span className="drop-shadow-sm">Register with VIP Access</span>
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-xs md:text-sm text-neutral-500">
                    <span className="inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      VIP access is 100% free but strictly limited to spots available
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Countdown/animation at bottom */}
              <div className="relative h-2 bg-primary/10">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 15 }}
                  className="absolute h-full bg-primary"
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}