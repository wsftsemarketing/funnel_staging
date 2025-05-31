
import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CookieConsentModalProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function CookieConsentModal({ onAccept, onDecline }: CookieConsentModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    const cookieYesConsent = document.cookie.includes('cookieyes-consent');

    if (!cookieChoice && !cookieYesConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Trigger animation after render
        setTimeout(() => setIsAnimating(true), 100);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for CookieYes events if available
  useEffect(() => {
    const handleCookieYesAccept = () => {
      localStorage.setItem('cookieConsent', 'accepted');
      handleClose();
      onAccept?.();
    };

    const handleCookieYesReject = () => {
      localStorage.setItem('cookieConsent', 'declined');
      handleClose();
      onDecline?.();
    };

    window.addEventListener('cookieyes_consent_update', handleCookieYesAccept);
    window.addEventListener('cookieyes_consent_reject', handleCookieYesReject);

    return () => {
      window.removeEventListener('cookieyes_consent_update', handleCookieYesAccept);
      window.removeEventListener('cookieyes_consent_reject', handleCookieYesReject);
    };
  }, [onAccept, onDecline]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');

    // CookieYes integration
    try {
      if (window.cookieyes) {
        if (typeof window.cookieyes.acceptAll === 'function') {
          window.cookieyes.acceptAll();
        }
      }
    } catch (error) {
      console.log('CookieYes API call failed:', error);
    }

    const cookieOptions = '; path=/; max-age=31536000; SameSite=Lax';
    document.cookie = 'cookieyes-consent=accepted' + cookieOptions;
    document.cookie = 'cky-consent=accepted' + cookieOptions;
    document.cookie = 'cookie-consent=accepted' + cookieOptions;

    try {
      window.dispatchEvent(new CustomEvent('cookieConsentAccepted', { detail: { all: true } }));
      window.dispatchEvent(new CustomEvent('cookieyes_consent_update', { detail: { consent: 'accepted' } }));
    } catch (error) {
      console.log('Event dispatch failed:', error);
    }

    handleClose();
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');

    try {
      if (window.cookieyes) {
        if (typeof window.cookieyes.rejectAll === 'function') {
          window.cookieyes.rejectAll();
        }
      }
    } catch (error) {
      console.log('CookieYes API call failed:', error);
    }

    const cookieOptions = '; path=/; max-age=31536000; SameSite=Lax';
    document.cookie = 'cookieyes-consent=declined' + cookieOptions;
    document.cookie = 'cky-consent=declined' + cookieOptions;
    document.cookie = 'cookie-consent=declined' + cookieOptions;

    try {
      window.dispatchEvent(new CustomEvent('cookieConsentDeclined', { detail: { essentialOnly: true } }));
      window.dispatchEvent(new CustomEvent('cookieyes_consent_reject', { detail: { consent: 'declined' } }));
    } catch (error) {
      console.log('Event dispatch failed:', error);
    }

    handleClose();
    onDecline?.();
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
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(4px);
          z-index: 999998;
          opacity: 0;
          transition: opacity 0.3s ease-out;
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
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .cookie-modal-container.animate-in {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        
        @media (min-width: 768px) {
          .cookie-modal-container {
            bottom: 1rem;
            right: 1rem;
            left: auto;
            max-width: 28rem;
          }
        }
        
        .cookie-modal-shake {
          animation: shake 0.8s ease-out 0.2s;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-10px); }
          20% { transform: translateX(10px); }
          30% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          50% { transform: translateX(-5px); }
          60% { transform: translateX(5px); }
          70% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
          90% { transform: translateX(0); }
        }
        
        .cookie-details-expand {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease-out;
        }
        
        .cookie-details-expand.show {
          opacity: 1;
          max-height: 1000px;
        }
        
        /* Force override any conflicting styles */
        .cookie-modal-backdrop,
        .cookie-modal-container {
          display: block !important;
          visibility: visible !important;
        }
      `}</style>

      <div
        className={`cookie-modal-backdrop ${isAnimating ? 'animate-in' : ''}`}
        onClick={handleClose}
      />

      <div
        className={`cookie-modal-container ${isAnimating ? 'animate-in cookie-modal-shake' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-t-2xl md:rounded-2xl shadow-2xl border-t border-white/20 md:border border-white/20 overflow-hidden relative">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/50 to-primary/5 pointer-events-none" />

          {/* Header with Cookie Monster and close button */}
          <div className="relative p-4 md:p-6">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 md:top-3 md:right-3 text-neutral-400 hover:text-neutral-600 transition-all duration-200 p-1.5 rounded-full hover:bg-white/60 backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start space-x-3 md:space-x-4 pr-8">
              {/* Cookie Monster Mascot */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-white/50 shadow-sm overflow-hidden">
                  <img 
                    src="https://i.scdn.co/image/ab6761610000e5eba3a7cba23d68a4e73c3b8155" 
                    alt="Cookie Monster" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-6 md:h-6 bg-secondary rounded-full flex items-center justify-center">
                  <Cookie className="w-4 h-4 md:w-4 md:h-4 text-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-sm md:text-sm text-foreground">Cookie Settings</h3>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-2 md:mb-3">
                 <b>We care about your privacy.</b> We use cookies to enhance your experience and provide personalised content about commercial property investment.
                </p>

                {/* Clean info box - hidden on mobile to save space */}
                <div className="hidden md:block bg-gradient-to-r from-blue-50/80 to-primary/5 rounded-lg p-3 border border-blue-100/50">
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Essential cookies are required for basic functionality, while analytics cookies help us understand how visitors interact with our site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="relative px-4 pb-4 md:px-6 md:pb-6">
            <div className="flex flex-col gap-2 mb-2 md:mb-3">
              <Button
                onClick={handleAccept}
                className="w-full font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white text-sm md:text-xs py-3 md:py-2.5 rounded-lg shadow-lg shadow-primary/20 transition-all duration-200"
                size="sm"
              >
                Accept All
              </Button>

              <Button
                onClick={handleDecline}
                variant="outline"
                className="w-full font-semibold border-neutral-200 bg-white/60 backdrop-blur-sm hover:bg-white/80 text-sm md:text-xs py-3 md:py-2.5 rounded-lg transition-all duration-200"
                size="sm"
              >
                Essential Only
              </Button>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-neutral-600 hover:text-primary transition-colors mb-2 underline underline-offset-2"
              >
                {showDetails ? 'Show less' : 'Show more'}
              </button>

              <p className="text-xs text-neutral-500">
                <a href="/privacy-policy" className="text-primary hover:text-primary/80 hover:underline transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Expandable Cookie Details */}
            <div className={`cookie-details-expand ${showDetails ? 'show' : ''}`}>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-secondary" />
                  Cookie Information
                </h4>

                <div className="space-y-3">
                  {/* Essential Cookies */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 border border-primary/15">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-neutral-600 rounded-full"></div>
                      <h5 className="text-xs font-semibold text-neutral-800">Essential Cookies</h5>
                      <span className="text-xs bg-green-200/50 text-green-700 px-2 py-0.5 rounded-full">Always Active</span>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      Required for basic website functionality, security, and user authentication. These cannot be disabled.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-gradient-to-r from-neutral-50 to-neutral-100/30 rounded-lg p-3 border border-neutral-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      <h5 className="text-xs font-semibold text-muted-foreground">Analytics Cookies</h5>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Optional</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Help us understand visitor behaviour and improve our webinar experience through anonymous usage statistics.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-gradient-to-r from-neutral-50 to-neutral-100/30 rounded-lg p-3 border border-neutral-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      <h5 className="text-xs font-semibold text-muted-foreground">Marketing Cookies</h5>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Optional</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Enable personalised content and targeted advertising related to property investment education and opportunities.
                    </p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="bg-gradient-to-r from-neutral-50 to-neutral-100/30 rounded-lg p-3 border border-neutral-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      <h5 className="text-xs font-semibold text-muted-foreground">Functional Cookies</h5>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Optional</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Remember your preferences and provide enhanced features like live chat and webinar reminders.
                    </p>
                  </div>
                </div>

                <div className="mt-3 p-2 bg-blue-100/20 rounded-lg border border-blue-100">
                  <p className="text-xs text-muted-foreground text-center">
                    Cookies expire after 12 months. You can change preferences anytime in your browser settings.
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

// Extended window object for TypeScript
declare global {
  interface Window {
    cookieyes?: {
      acceptAll?: () => void;
      rejectAll?: () => void;
      setConsentValue?: (category: string, value: boolean) => void;
      getConsentValue?: (category: string) => boolean;
      openPreferences?: () => void;
      updateConsent?: (consents: Record<string, boolean>) => void;
      fireEvent?: (eventName: string) => void;
      show?: () => void;
      hide?: () => void;
      reset?: () => void;
    };
  }
}
