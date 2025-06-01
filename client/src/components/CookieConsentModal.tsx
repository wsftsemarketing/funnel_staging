
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./ui/logo";

interface CookieConsentModalProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function CookieConsentModal({ onAccept, onDecline }: CookieConsentModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Show modal immediately for prototype purposes
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    // Simply close the modal - no backend functionality
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    // Simply close the modal - no backend functionality
    setIsVisible(false);
    onDecline?.();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <>
          {/* Background overlay with blur */}
          <motion.div
            key="backdrop"
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
            key="modal"
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
                  We use cookies to enhance your experience and provide personalised content.
                </p>
                
                {/* Show More/Less Button */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors mb-3 font-medium"
                >
                  {showDetails ? (
                    <>
                      <ChevronUp className="w-3 h-3" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3" />
                      Show More Details
                    </>
                  )}
                </button>

                {/* Expandable Cookie Details */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      key="cookie-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 mb-3 overflow-hidden"
                    >
                      {/* Analytics Cookies */}
                      <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 border border-primary/15">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h5 className="text-xs font-semibold text-primary">Analytics Cookies</h5>
                          <span className="text-xs bg-primary/15 text-primary px-2 py-0.5 rounded-full">Optional</span>
                        </div>
                        <p className="text-xs text-primary/90 leading-relaxed">
                          Help us understand visitor behaviour and improve our webinar experience through anonymous usage statistics.
                        </p>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 border border-primary/15">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h5 className="text-xs font-semibold text-primary">Marketing Cookies</h5>
                          <span className="text-xs bg-primary/15 text-primary px-2 py-0.5 rounded-full">Optional</span>
                        </div>
                        <p className="text-xs text-primary/90 leading-relaxed">
                          Enable personalised content and targeted advertising related to property investments.
                        </p>
                      </div>

                      {/* Functional Cookies */}
                      <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 border border-primary/15">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h5 className="text-xs font-semibold text-primary">Functional Cookies</h5>
                          <span className="text-xs bg-primary/15 text-primary px-2 py-0.5 rounded-full">Optional</span>
                        </div>
                        <p className="text-xs text-primary/90 leading-relaxed">
                          Remember your preferences and provide enhanced features like live chat and webinar reminders.
                        </p>
                      </div>

                      {/* Cookie Expiry Info */}
                      <div className="mt-3 p-2 bg-secondary/8 rounded-lg border border-secondary/20">
                        <p className="text-xs text-secondary/90 text-center">
                          Cookies expire after 12 months. You can change preferences anytime in your browser settings.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>                

                {/* Prototype Mode Notice 
                <div className="bg-gradient-to-r from-blue-50/80 to-primary/5 rounded-lg p-3 border border-blue-100/50">
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    <strong>Prototype Mode:</strong> Buttons are non-functional and for demonstration purposes only.
                  </p>
                </div>
                */}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="relative px-6 pb-6">
            <div className="flex gap-3 mb-3">
              <Button
                onClick={handleAccept}
                className="flex-1 font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white text-xs py-2.5 rounded-lg shadow-lg shadow-primary/20 transition-all duration-200"
                size="sm"
              >
                Accept All Cookies
              </Button>

              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 font-semibold border-neutral-200 bg-white/60 backdrop-blur-sm hover:bg-secondary/20 hover:text-secondary hover:border-secondary/20 text-xs py-2.5 rounded-lg transition-all duration-200"
                size="sm"
              >
                Essential Cookies Only
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
        </>
      )}
    </AnimatePresence>
  );
}


