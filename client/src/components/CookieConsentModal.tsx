
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
      {/* Background blur overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
      />
      
      <div className="fixed inset-0 z-50 flex items-end justify-end p-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white rounded-xl shadow-2xl border border-neutral-200 max-w-md w-full pointer-events-auto overflow-hidden"
        >
          {/* Header with Cookie Monster */}
          <div className="relative bg-gradient-to-br from-primary/8 via-primary/5 to-secondary/8 p-6 border-b border-neutral-100">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Premium branding header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
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
                    src="https://i.ibb.co/xtZ7s7T8/Cookie-Monster.png"
                    alt="Cookie Monster"
                    className="w-16 h-16 rounded-full object-cover object-top border-3 border-primary/40 shadow-lg"
                    style={{ objectPosition: '50% 20%' }}
                    onError={(e) => {
                      // Fallback to Cookie icon if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center border-3 border-primary/30 shadow-lg">
                    <Cookie className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-1 tracking-tight">
                    <span className="text-primary">Touchstone</span>
                    <span className="text-secondary ml-1">Education</span>
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="px-2 py-1 bg-primary/15 rounded-full">
                      <span className="text-xs font-bold text-primary tracking-wide">COMMERCIAL PROPERTY</span>
                    </div>
                    <span className="text-lg">🍪</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="hidden sm:flex flex-col items-end space-y-1">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"></div>
                <div className="w-8 h-1 bg-gradient-to-r from-secondary to-primary rounded-full opacity-40"></div>
                <div className="w-6 h-1 bg-primary/30 rounded-full"></div>
              </div>
            </div>

            {/* NOM NOM animation */}
            <AnimatePresence>
              {showNomText && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: -10 }}
                  className="absolute top-4 left-24 bg-white rounded-xl px-4 py-2 shadow-xl border-2 border-primary/20"
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-foreground mb-2">
                <Highlight type="primary">Cookie Preferences</Highlight>
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We use cookies to enhance your learning experience and provide personalized content about commercial property investment strategies.
              </p>
            </div>

            {/* Visual cookie types with bento-style layout */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm font-bold text-green-800">Essential</span>
                </div>
                <p className="text-xs text-green-700">Required for basic functionality</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📊</span>
                  </div>
                  <span className="text-sm font-bold text-blue-800">Analytics</span>
                </div>
                <p className="text-xs text-blue-700">Help us improve your experience</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button
                onClick={handleAccept}
                disabled={isEating}
                className="flex-1 font-bold py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isEating ? (
                  <span className="flex items-center">
                    <span className="animate-bounce mr-2">🍪</span>
                    NOM NOM!
                  </span>
                ) : (
                  "Accept All Cookies"
                )}
              </Button>
              
              <Button
                onClick={handleDecline}
                disabled={isEating}
                variant="outline"
                className="flex-1 font-semibold py-3 border-2 border-neutral-300 hover:border-primary/50 hover:bg-primary/5"
              >
                Essential Only
              </Button>
            </div>

            {/* Footer links */}
            <div className="text-center space-y-2">
              <p className="text-xs text-neutral-500">
                You can change preferences in our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </a>
              </p>
              
              {/* Dev mode localStorage clear tip */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
                  <strong>Dev tip:</strong> Clear localStorage with{" "}
                  <code className="bg-yellow-100 px-1 rounded font-mono">
                    localStorage.removeItem('cookieConsent')
                  </code>{" "}
                  to test this modal again
                </div>
              )}
            </div>
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
