
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';

interface CookieConsentModalProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function CookieConsentModal({ onAccept, onDecline }: CookieConsentModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEating, setIsEating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      // Delay showing the modal slightly
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsEating(true);
    localStorage.setItem('cookie-consent', 'accepted');
    
    // Trigger CookieYes acceptance if available
    if (window.cookieyes) {
      window.cookieyes.acceptAll();
    }
    
    setTimeout(() => {
      setIsVisible(false);
      onAccept?.();
    }, 1500);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    
    // Trigger CookieYes decline if available
    if (window.cookieyes) {
      window.cookieyes.rejectAll();
    }
    
    setIsVisible(false);
    onDecline?.();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-blue-200 overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>

              {/* Cookie Monster Character */}
              <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 p-6 text-center">
                <motion.div
                  animate={isEating ? { 
                    scale: [1, 1.1, 1], 
                    rotate: [0, -5, 5, 0] 
                  } : { 
                    y: [0, -5, 0] 
                  }}
                  transition={{ 
                    duration: isEating ? 0.5 : 2, 
                    repeat: isEating ? 3 : Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl mb-2"
                >
                  🍪👹
                </motion.div>
                
                {isEating && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-4xl">
                      {"NOM NOM NOM!".split("").map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-yellow-300 font-bold"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                <h3 className="text-white font-bold text-lg">
                  Me Want Cookies! 🍪
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Me Cookie Monster! Me love cookies, and this website uses cookies too! 
                  They help make your experience better and remember your preferences.
                </p>
                
                <div className="flex items-center gap-2 mb-4 p-3 bg-blue-50 rounded-lg">
                  <Cookie className="h-4 w-4 text-blue-600" />
                  <span className="text-xs text-gray-600">
                    We use essential and analytics cookies to improve your experience
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleAccept}
                    disabled={isEating}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    {isEating ? "NOM NOM!" : "Me Accept! 🍪"}
                  </Button>
                  
                  <Button
                    onClick={handleDecline}
                    disabled={isEating}
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    No Cookies
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-3 text-center">
                  You can change your mind anytime in settings
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Extend window type for CookieYes
declare global {
  interface Window {
    cookieyes?: {
      acceptAll: () => void;
      rejectAll: () => void;
      showBanner: () => void;
    };
  }
}
