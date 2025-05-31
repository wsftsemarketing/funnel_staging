
import { useState, useEffect } from "react";
import { X, Cookie, Shield, BarChart3, Target, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieConsentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simple timer to show the modal after 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Trigger animation after render
      setTimeout(() => setIsAnimating(true), 100);
    }, 1000);

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

        .cookie-icon-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .cookie-feature-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }

        .cookie-feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
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
              {/* Cookie Icon with animated effect */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-100 to-orange-50 border-2 border-white/50 shadow-sm flex items-center justify-center cookie-icon-pulse">
                  <Cookie className="w-6 h-6 md:w-7 md:h-7 text-amber-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle className="w-2.5 h-2.5 text-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                  🍪 Cookie Preferences
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                    Prototype
                  </span>
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                  We use cookies to enhance your experience on our commercial property investment platform. Choose your preferences below.
                </p>

                <div className="bg-gradient-to-r from-amber-50/80 to-orange-50/80 rounded-lg p-3 border border-amber-200/50">
                  <div className="flex items-center gap-2 mb-1">
                    <img 
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=24&h=24&fit=crop&crop=center" 
                      alt="Cookie" 
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <p className="text-xs text-amber-800 font-medium">
                      Demo Mode: Fully functional UI prototype
                    </p>
                  </div>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    Experience our cookie consent flow designed for property investment websites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Features Preview */}
          <div className="relative px-5 md:px-6 mb-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="cookie-feature-card rounded-lg p-2 text-center">
                <Shield className="w-4 h-4 text-green-600 mx-auto mb-1" />
                <p className="text-xs text-neutral-700 font-medium">Secure</p>
              </div>
              <div className="cookie-feature-card rounded-lg p-2 text-center">
                <BarChart3 className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <p className="text-xs text-neutral-700 font-medium">Analytics</p>
              </div>
              <div className="cookie-feature-card rounded-lg p-2 text-center">
                <Target className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                <p className="text-xs text-neutral-700 font-medium">Targeted</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="relative px-5 pb-5 md:px-6 md:pb-6">
            <div className="flex flex-col gap-3 mb-4">
              <Button
                onClick={handleAccept}
                className="w-full font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 rounded-lg shadow-lg shadow-green-600/20 transition-all duration-200 transform hover:scale-[1.02]"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Accept All Cookies
              </Button>

              <Button
                onClick={handleDecline}
                variant="outline"
                className="w-full font-semibold border-neutral-300 bg-white/60 backdrop-blur-sm hover:bg-neutral-50/80 py-3 rounded-lg transition-all duration-200"
              >
                <AlertCircle className="w-4 h-4 mr-2" />
                Essential Only
              </Button>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-neutral-600 hover:text-primary transition-colors mb-3 underline underline-offset-2 flex items-center justify-center gap-1"
              >
                <Cookie className="w-3 h-3" />
                {showDetails ? "Hide Cookie Details" : "View Cookie Details"}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=16&h=16&fit=crop&crop=center" 
                  alt="Property" 
                  className="w-4 h-4 rounded object-cover"
                />
                <span className="text-primary font-medium">Commercial Property Investment</span> • 
                <span>Prototype Demo</span>
              </div>
            </div>

            {/* Expandable Details */}
            <div className={`cookie-details-expand ${showDetails ? "show" : ""}`}>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  Cookie Categories & Details
                </h4>

                <div className="space-y-4">
                  {/* Essential Cookies */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-lg p-4 border border-green-200/50">
                    <div className="flex items-start gap-3 mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?w=32&h=32&fit=crop&crop=center" 
                        alt="Security" 
                        className="w-8 h-8 rounded-lg object-cover shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Shield className="w-4 h-4 text-green-600" />
                          <h5 className="text-sm font-semibold text-green-800">Essential Cookies</h5>
                          <span className="text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded-full font-medium">Required</span>
                        </div>
                        <p className="text-xs text-green-700 leading-relaxed mb-2">
                          Critical for website security, authentication, and basic functionality on our property investment platform.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="text-xs bg-white/60 text-green-800 px-2 py-0.5 rounded border border-green-300">Security</span>
                          <span className="text-xs bg-white/60 text-green-800 px-2 py-0.5 rounded border border-green-300">Login</span>
                          <span className="text-xs bg-white/60 text-green-800 px-2 py-0.5 rounded border border-green-300">Form Data</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50/50 rounded-lg p-4 border border-blue-200/50">
                    <div className="flex items-start gap-3 mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=32&h=32&fit=crop&crop=center" 
                        alt="Analytics" 
                        className="w-8 h-8 rounded-lg object-cover shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <BarChart3 className="w-4 h-4 text-blue-600" />
                          <h5 className="text-sm font-semibold text-blue-800">Analytics Cookies</h5>
                          <span className="text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full font-medium">Optional</span>
                        </div>
                        <p className="text-xs text-blue-700 leading-relaxed mb-2">
                          Help us understand how visitors interact with our commercial property investment content and webinars.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="text-xs bg-white/60 text-blue-800 px-2 py-0.5 rounded border border-blue-300">Google Analytics</span>
                          <span className="text-xs bg-white/60 text-blue-800 px-2 py-0.5 rounded border border-blue-300">Heatmaps</span>
                          <span className="text-xs bg-white/60 text-blue-800 px-2 py-0.5 rounded border border-blue-300">User Flow</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50/50 rounded-lg p-4 border border-purple-200/50">
                    <div className="flex items-start gap-3 mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=32&h=32&fit=crop&crop=center" 
                        alt="Marketing" 
                        className="w-8 h-8 rounded-lg object-cover shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Target className="w-4 h-4 text-purple-600" />
                          <h5 className="text-sm font-semibold text-purple-800">Marketing Cookies</h5>
                          <span className="text-xs bg-purple-200 text-purple-700 px-2 py-0.5 rounded-full font-medium">Optional</span>
                        </div>
                        <p className="text-xs text-purple-700 leading-relaxed mb-2">
                          Enable personalized commercial property investment opportunities and targeted webinar recommendations.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="text-xs bg-white/60 text-purple-800 px-2 py-0.5 rounded border border-purple-300">Facebook Pixel</span>
                          <span className="text-xs bg-white/60 text-purple-800 px-2 py-0.5 rounded border border-purple-300">Retargeting</span>
                          <span className="text-xs bg-white/60 text-purple-800 px-2 py-0.5 rounded border border-purple-300">Personalization</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legal Notice */}
                  <div className="mt-4 p-3 bg-neutral-100/50 rounded-lg border border-neutral-200">
                    <div className="flex items-center gap-2 mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=20&h=20&fit=crop&crop=center" 
                        alt="Legal" 
                        className="w-5 h-5 rounded object-cover"
                      />
                      <h6 className="text-xs font-semibold text-neutral-700">Legal & Compliance</h6>
                    </div>
                    <p className="text-xs text-neutral-600 text-center leading-relaxed">
                      This is a comprehensive design prototype demonstrating cookie consent functionality for commercial property investment websites. No actual data collection or cookie management is performed in this demo version.
                    </p>
                    <div className="flex justify-center gap-4 mt-2">
                      <a href="#" className="text-xs text-blue-600 hover:underline">Privacy Policy</a>
                      <a href="#" className="text-xs text-blue-600 hover:underline">Cookie Policy</a>
                      <a href="#" className="text-xs text-blue-600 hover:underline">Terms of Service</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
