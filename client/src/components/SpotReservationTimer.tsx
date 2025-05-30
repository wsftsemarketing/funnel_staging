import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

/**
 * SpotReservationTimer Component
 * 
 * A specialized component that creates a sense of urgency by "reserving" a spot
 * for the user temporarily. This uses psychological triggers of scarcity and
 * loss aversion to encourage immediate registration.
 */
export default function SpotReservationTimer() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show the component after 30 seconds on the page
    const showTimer = setTimeout(() => {
      // Only show if user hasn't already interacted with it
      if (!hasInteracted) {
        setIsVisible(true);
      }
    }, 30000);

    return () => clearTimeout(showTimer);
  }, [hasInteracted]);

  useEffect(() => {
    if (!isVisible) return;

    // Start the countdown
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [isVisible]);

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleReserveClick = () => {
    // Scroll to registration form
    document.querySelector('#register')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Mark as interacted so it doesn't show again
    setHasInteracted(true);
    setIsVisible(false);
  };

  const handleCloseClick = () => {
    setHasInteracted(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
    >
      <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 p-6 mx-4">
        <button 
          onClick={handleCloseClick}
          className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
            </svg>
          </div>
          
          <h3 className="text-xl font-bold mb-2">Your Spot is Reserved!</h3>
          <p className="text-neutral-600 mb-4">
            We've temporarily reserved your spot for the webinar, but it will be released to someone else in:
          </p>
          
          <div className="bg-neutral-50 rounded-lg p-4 mb-4">
            <div className="text-3xl font-bold text-primary">{formatTime(timeRemaining)}</div>
            <div className="text-sm text-neutral-500">minutes : seconds</div>
          </div>
          
          <p className="text-sm text-neutral-500 mb-6">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-yellow-500">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              22 others looking at this webinar right now
            </span>
          </p>
          
          <Button 
            onClick={handleReserveClick} 
            className="w-full py-6 text-lg font-semibold"
          >
            Register Now & Secure Your Spot
          </Button>
        </div>
      </div>
    </motion.div>
  );
}