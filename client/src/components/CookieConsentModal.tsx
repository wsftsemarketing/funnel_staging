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
    if (!cookieChoice) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');

    // Trigger CookieYes acceptance if available
    if (window.cookieyes && typeof window.cookieyes.acceptAll === 'function') {
      window.cookieyes.acceptAll();
    }

    setIsVisible(false);
    onAccept?.();
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

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl border border-neutral-200 max-w-sm w-full pointer-events-auto"
        >
          {/* Header */}
          <div className="relative p-6 pb-4">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Cookie Settings</h3>
                <p className="text-xs text-primary font-medium">Touchstone Education</p>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              We use cookies to enhance your experience and provide personalized content about commercial property investment.
            </p>
          </div>

          {/* Actions */}
          <div className="px-6 pb-6">
            <div className="flex gap-2">
              <Button
                onClick={handleAccept}
                className="flex-1 font-semibold bg-primary hover:bg-primary/90 text-white"
                size="sm"
              >
                Accept All
              </Button>

              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 font-semibold border-neutral-300 hover:bg-neutral-50"
                size="sm"
              >
                Essential Only
              </Button>
            </div>

            <p className="text-xs text-neutral-500 text-center mt-3">
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