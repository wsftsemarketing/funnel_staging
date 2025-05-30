import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

/**
 * A simpler exit-intent popup that detects when users are about to leave the page
 * and presents a special offer to encourage registration.
 */
export default function SimpleExitIntent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if we've shown this popup before
    const hasShownPopup = localStorage.getItem('exitPopupShown');
    if (hasShownPopup) {
      setHasShown(true);
    }

    // Only set up event listeners if we haven't shown the popup yet
    if (!hasShown) {
      // Mobile/tablet detection - trigger after 45 seconds
      const timer = setTimeout(() => {
        if (!hasShown) {
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem('exitPopupShown', 'true');
        }
      }, 45000);

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[90%] max-w-md md:max-w-xl z-10 bg-white rounded-xl shadow-xl overflow-hidden relative"
          >
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

            {/* Content */}
            <div className="p-6 text-center">
              <div className="inline-block px-2 py-1 bg-primary text-white rounded-full text-xs font-bold mb-4">
                SPECIAL OFFER
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Before You Go...</h3>
              <p className="text-lg font-bold text-primary mb-4">
                Get VIP Access to Our Webinar!
              </p>
              
              <p className="text-sm text-neutral-600 mb-6">
                Register now to receive priority access to Q&A and exclusive property investment resources.
              </p>
              
              <Button 
                onClick={handleRegisterNow} 
                variant="default"
                className="w-full py-6 text-base"
              >
                Register with VIP Access
              </Button>
              
              <p className="mt-4 text-xs text-neutral-500">
                Limited availability - Secure your spot now!
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}