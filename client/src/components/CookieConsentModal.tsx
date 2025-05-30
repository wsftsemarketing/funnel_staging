
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";

interface CookieConsentModalProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function CookieConsentModal({ onAccept, onDecline }: CookieConsentModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEating, setIsEating] = useState(false);
  const [showNomText, setShowNomText] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (!cookieChoice) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsEating(true);
    setShowNomText(true);
    
    // Store consent
    localStorage.setItem('cookieConsent', 'accepted');
    
    // Trigger CookieYes acceptance if available
    if (window.cookieyes && typeof window.cookieyes.acceptAll === 'function') {
      window.cookieyes.acceptAll();
    }
    
    // Hide modal after animation
    setTimeout(() => {
      setIsVisible(false);
      onAccept?.();
    }, 2000);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    
    // Trigger CookieYes decline if available
    if (window.cookieyes && typeof window.cookieyes.rejectAll === 'function') {
      window.cookieyes.rejectAll();
    }
    
    setIsVisible(false);
    onDecline?.();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-end p-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white rounded-xl shadow-2xl border border-neutral-200 max-w-md w-full pointer-events-auto overflow-hidden"
        >
          {/* Header with Cookie Monster */}
          <div className="relative bg-gradient-to-r from-primary/5 to-secondary/5 p-6 border-b border-neutral-100">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-4">
              <motion.div 
                className="flex-shrink-0"
                animate={isEating ? { 
                  scale: [1, 1.1, 1], 
                  rotate: [0, -5, 5, 0] 
                } : {}}
                transition={{ 
                  duration: 0.6, 
                  repeat: isEating ? 3 : 0,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="https://i.imgur.com/YourCookieMonsterImageURL.jpg" // Replace with actual uploaded image URL
                  alt="Cookie Monster"
                  className="w-16 h-16 rounded-full object-cover"
                  onError={(e) => {
                    // Fallback to Cookie icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Cookie className="w-8 h-8 text-primary" />
                </div>
              </motion.div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  <Highlight type="primary">Cookie Time!</Highlight>
                </h3>
                <p className="text-sm text-neutral-600">
                  Me want cookies! 🍪
                </p>
              </div>
            </div>

            {/* NOM NOM animation */}
            <AnimatePresence>
              {showNomText && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: -10 }}
                  className="absolute top-2 left-20 bg-white rounded-lg px-3 py-1 shadow-lg border border-neutral-200"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.1,
                      repeat: 5,
                      repeatType: "reverse"
                    }}
                    className="text-sm font-bold text-primary"
                  >
                    NOM NOM NOM! 🍪
                  </motion.span>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-neutral-700 mb-4 leading-relaxed">
              We use <strong>essential and analytics cookies</strong> to improve your experience and help us understand how you use our site. 
              These help us serve you better content about commercial property investment strategies.
            </p>

            <div className="bg-neutral-50 rounded-lg p-4 mb-6 border border-neutral-100">
              <div className="flex items-start space-x-3">
                <Cookie className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-1">What we track:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Essential site functionality</li>
                    <li>• Anonymous usage analytics</li>
                    <li>• Performance improvements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAccept}
                disabled={isEating}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300 hover:translate-y-[-2px] shadow-sm hover:shadow-md"
              >
                {isEating ? "NOM NOM! 🍪" : "Accept All Cookies"}
              </Button>
              
              <Button
                onClick={handleDecline}
                disabled={isEating}
                variant="outline"
                className="flex-1 border-2 border-neutral-200 hover:border-primary/40 bg-white hover:bg-neutral-50 text-neutral-700 font-semibold"
              >
                Essential Only
              </Button>
            </div>

            <p className="text-xs text-neutral-500 mt-4 text-center">
              You can change your preferences anytime in our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// Extend window object for TypeScript
declare global {
  interface Window {
    cookieyes?: {
      acceptAll: () => void;
      rejectAll: () => void;
    };
  }
}
