
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
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
      {/* Bottom banner style positioned in corner */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-4 right-4 z-50 max-w-md w-full pointer-events-auto"
        style={{ zIndex: 9999 }} // Ensure it's above CookieYes elements
      >
        <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden">
          {/* Header with close button */}
          <div className="relative p-4">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 transition-colors p-1 rounded-full hover:bg-neutral-100"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start space-x-3 pr-8">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-foreground mb-1">Cookie Settings</h3>
                <p className="text-xs text-primary font-medium mb-2">Touchstone Education</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We use cookies to enhance your experience and provide personalized content about commercial property investment.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-4 pb-4">
            <div className="flex gap-2 mb-2">
              <Button
                onClick={handleAccept}
                className="flex-1 font-semibold bg-primary hover:bg-primary/90 text-white text-xs py-2"
                size="sm"
              >
                Accept All
              </Button>

              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 font-semibold border-neutral-300 hover:bg-neutral-50 text-xs py-2"
                size="sm"
              >
                Essential Only
              </Button>
            </div>

            <p className="text-xs text-neutral-500 text-center">
              <a href="/privacy-policy" className="text-primary hover:underline">
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
