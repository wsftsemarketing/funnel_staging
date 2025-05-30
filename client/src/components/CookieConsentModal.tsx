
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./ui/logo";

interface CookieConsentModalProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function CookieConsentModal({ onAccept, onDecline }: CookieConsentModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    // Also check if CookieYes has already handled consent
    const cookieYesConsent = document.cookie.includes('cookieyes-consent');
    
    if (!cookieChoice && !cookieYesConsent) {
      // Show banner immediately
      setIsVisible(true);
    }
  }, []);

  // Listen for CookieYes events if available
  useEffect(() => {
    const handleCookieYesAccept = () => {
      localStorage.setItem('cookieConsent', 'accepted');
      setIsVisible(false);
      onAccept?.();
    };

    const handleCookieYesReject = () => {
      localStorage.setItem('cookieConsent', 'declined');
      setIsVisible(false);
      onDecline?.();
    };

    // Listen for CookieYes events
    window.addEventListener('cookieyes_consent_update', handleCookieYesAccept);
    window.addEventListener('cookieyes_consent_reject', handleCookieYesReject);

    return () => {
      window.removeEventListener('cookieyes_consent_update', handleCookieYesAccept);
      window.removeEventListener('cookieyes_consent_reject', handleCookieYesReject);
    };
  }, [onAccept, onDecline]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');

    // Trigger CookieYes acceptance if available
    if (window.cookieyes) {
      if (typeof window.cookieyes.acceptAll === 'function') {
        window.cookieyes.acceptAll();
      } else if (typeof window.cookieyes.setConsentValue === 'function') {
        window.cookieyes.setConsentValue('all', true);
      }
    }

    // Set cookie manually as fallback
    document.cookie = 'cookieyes-consent=accepted; path=/; max-age=31536000; SameSite=Lax';

    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');

    // Trigger CookieYes decline if available
    if (window.cookieyes) {
      if (typeof window.cookieyes.rejectAll === 'function') {
        window.cookieyes.rejectAll();
      } else if (typeof window.cookieyes.setConsentValue === 'function') {
        window.cookieyes.setConsentValue('all', false);
      }
    }

    // Set cookie manually as fallback
    document.cookie = 'cookieyes-consent=declined; path=/; max-age=31536000; SameSite=Lax';

    setIsVisible(false);
    onDecline?.();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {/* Background overlay with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        style={{ zIndex: 9998 }}
        onClick={handleClose}
      />

      {/* Bottom banner style positioned in corner */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          x: [0, -10, 10, -10, 10, -5, 5, -2, 2, 0] // Shake animation
        }}
        exit={{ opacity: 0, y: 100, scale: 0.95 }}
        transition={{ 
          duration: 0.4, 
          ease: "easeOut",
          x: { duration: 0.8, delay: 0.2 } // Shake starts after slide-in
        }}
        className="fixed bottom-4 right-4 z-50 max-w-md w-full pointer-events-auto"
        style={{ zIndex: 9999 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden relative">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/50 to-primary/5 pointer-events-none" />
          
          {/* Header with Cookie Monster and close button */}
          <div className="relative p-6">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600 transition-all duration-200 p-1.5 rounded-full hover:bg-white/60 backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start space-x-4 pr-8">
              {/* Cookie Monster Mascot */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-white/50 shadow-sm overflow-hidden">
                  <img 
                    src="https://i.scdn.co/image/ab6761610000e5eba3a7cba23d68a4e73c3b8155" 
                    alt="Cookie Monster" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-sm text-foreground">Cookie Settings</h3>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                  We use cookies to enhance your experience and provide personalized content about commercial property investment.
                </p>
                
                {/* Clean info box */}
                <div className="bg-gradient-to-r from-blue-50/80 to-primary/5 rounded-lg p-3 border border-blue-100/50">
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Essential cookies are required for basic functionality, while analytics cookies help us understand how visitors interact with our site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="relative px-6 pb-6">
            <div className="flex flex-col gap-2 mb-3">
              <Button
                onClick={handleAccept}
                className="w-full font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white text-xs py-2.5 rounded-lg shadow-lg shadow-primary/20 transition-all duration-200"
                size="sm"
              >
                Accept All
              </Button>

              <Button
                onClick={handleDecline}
                variant="outline"
                className="w-full font-semibold border-neutral-200 bg-white/60 backdrop-blur-sm hover:bg-white/80 text-xs py-2.5 rounded-lg transition-all duration-200"
                size="sm"
              >
                Essential Only
              </Button>
            </div>

            <p className="text-xs text-neutral-500 text-center">
              <a href="/privacy-policy" className="text-primary hover:text-primary/80 hover:underline transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Extended window object for TypeScript with more CookieYes methods
declare global {
  interface Window {
    cookieyes?: {
      acceptAll?: () => void;
      rejectAll?: () => void;
      setConsentValue?: (category: string, value: boolean) => void;
      getConsentValue?: (category: string) => boolean;
      openPreferences?: () => void;
    };
  }
}
