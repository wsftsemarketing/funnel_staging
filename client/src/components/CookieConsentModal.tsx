import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieConsentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simple timer to show the modal after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Trigger animation after render
      setTimeout(() => setIsAnimating(true), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    console.log("Accept clicked - prototype only");
    handleClose();
  };

  const handleDecline = () => {
    console.log("Decline clicked - prototype only");
    handleClose();
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .cookie-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          z-index: 999998;
          opacity: 0;
          transition: all 0.4s ease-out;
          pointer-events: auto;
        }

        .cookie-modal-backdrop.animate-in {
          opacity: 1;
        }

        .cookie-modal-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999999;
          width: 100%;
          pointer-events: auto;
          transform: translateY(100%) scale(0.95);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cookie-modal-container.animate-in {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        @media (min-width: 768px) {
          .cookie-modal-container {
            bottom: 1.5rem;
            right: 1.5rem;
            left: auto;
            max-width: 28rem;
          }
        }

        .cookie-modal-bounce {
          animation: bounce 0.6s ease-out 0.3s;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }

        .cookie-details-expand {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease-out;
        }

        .cookie-details-expand.show {
          opacity: 1;
          max-height: 800px;
        }
      `}</style>

      <div
        className={`cookie-modal-backdrop ${isAnimating ? "animate-in" : ""}`}
        onClick={handleClose}
      />

      <div
        className={`cookie-modal-container ${isAnimating ? "animate-in cookie-modal-bounce" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-t-2xl md:rounded-2xl shadow-2xl border-t border-white/20 md:border border-white/20 overflow-hidden relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white/60 to-primary/8 pointer-events-none" />

          {/* Header */}
          <div className="relative p-5 md:p-6">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600 transition-all duration-200 p-1.5 rounded-full hover:bg-white/60 backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start space-x-4 pr-8">
              {/* Cookie Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-white/50 shadow-sm flex items-center justify-center">
                  <Cookie className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Cookie Preferences
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                  This is a visual prototype demonstrating cookie consent functionality for commercial property investment content.
                </p>

                <div className="bg-gradient-to-r from-blue-50/80 to-primary/5 rounded-lg p-3 border border-blue-100/50">
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    <strong>Prototype Mode:</strong> Buttons are non-functional and for demonstration purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="relative px-5 pb-5 md:px-6 md:pb-6">
            <div className="flex flex-col gap-3 mb-3">
              <Button
                onClick={handleAccept}
                className="w-full font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white py-3 rounded-lg shadow-lg shadow-primary/20 transition-all duration-200"
              >
                Accept All Cookies
              </Button>

              <Button
                onClick={handleDecline}
                variant="outline"
                className="w-full font-semibold border-neutral-200 bg-white/60 backdrop-blur-sm hover:bg-white/80 py-3 rounded-lg transition-all duration-200"
              >
                Essential Only
              </Button>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-neutral-600 hover:text-primary transition-colors mb-2 underline underline-offset-2"
              >
                {showDetails ? "Hide Details" : "View Cookie Details"}
              </button>

              <p className="text-xs text-neutral-500">
                <span className="text-primary">Prototype demonstration</span> • Non-functional
              </p>
            </div>

            {/* Expandable Details */}
            <div className={`cookie-details-expand ${showDetails ? "show" : ""}`}>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  Cookie Categories
                </h4>

                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-green-50 to-green-100/30 rounded-lg p-3 border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <h5 className="text-sm font-semibold text-green-800">Essential Cookies</h5>
                      <span className="text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded-full">Required</span>
                    </div>
                    <p className="text-xs text-green-700 leading-relaxed">
                      Necessary for basic website functionality and security.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100/30 rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <h5 className="text-sm font-semibold text-blue-800">Analytics Cookies</h5>
                      <span className="text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full">Optional</span>
                    </div>
                    <p className="text-xs text-blue-700 leading-relaxed">
                      Help us understand visitor behavior and improve our property investment content.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100/30 rounded-lg p-3 border border-purple-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <h5 className="text-sm font-semibold text-purple-800">Marketing Cookies</h5>
                      <span className="text-xs bg-purple-200 text-purple-700 px-2 py-0.5 rounded-full">Optional</span>
                    </div>
                    <p className="text-xs text-purple-700 leading-relaxed">
                      Enable personalized commercial property investment opportunities.
                    </p>
                  </div>
                </div>

                <div className="mt-3 p-3 bg-neutral-100/50 rounded-lg border border-neutral-200">
                  <p className="text-xs text-neutral-600 text-center">
                    This is a design prototype - no actual cookies are being set or managed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}