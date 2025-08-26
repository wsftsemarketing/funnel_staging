import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle,
  Users,
  Award,
  Plus,
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Home,
  PoundSterling,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Highlight } from "@/components/ui/highlight";
import { Logo } from "@/components/ui/logo";
import HostInformation from "@/components/HostInformation";

interface URLParams {
  wj_lead_first_name?: string;
  wj_lead_email?: string;
  wj_lead_unique_link_live_room?: string;
  wj_next_event_date?: string;
  wj_next_event_time?: string;
  [key: string]: string | undefined;
}

export default function EquityReleaseThankYou() {
  const [urlParams, setUrlParams] = useState<URLParams>({});
  const [isAddedToCalendar, setIsAddedToCalendar] = useState(false);

  // Extract URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params: URLParams = {};

    searchParams.forEach((value, key) => {
      params[key] = decodeURIComponent(value);
    });

    setUrlParams(params);
    console.log("📋 Equity Release URL Parameters:", params);
  }, []);

  // Generate calendar event
  const generateCalendarEvent = (type: "google" | "outlook") => {
    let webinarDate = new Date();

    if (urlParams.wj_next_event_date && urlParams.wj_next_event_time) {
      const dateTimeString = `${urlParams.wj_next_event_date} ${urlParams.wj_next_event_time}`;
      webinarDate = new Date(dateTimeString);
    } else {
      webinarDate.setDate(webinarDate.getDate() + 1);
      webinarDate.setHours(19, 0, 0, 0);
    }

    const eventDetails = {
      title: "Wealth Through Property: Equity Release Masterclass",
      description: `Join Abi and Paul Smith for an exclusive masterclass on using your home equity to build wealth through property investment.

Webinar Link: ${urlParams.wj_lead_unique_link_live_room || "Will be provided via email"}

What you'll learn:
• How to safely access your property equity
• The buy-refurb-refinance strategy
• Building £10,000+ monthly passive income
• Tax-efficient property investment structures

See you there!`,
      location: "Online Webinar",
    };

    let calendarUrl = "";

    if (type === "google") {
      const startTime =
        webinarDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const endTime =
        new Date(webinarDate.getTime() + 90 * 60000)
          .toISOString()
          .replace(/[-:]/g, "")
          .split(".")[0] + "Z";

      calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    } else {
      const startTime = webinarDate.toISOString();
      const endTime = new Date(
        webinarDate.getTime() + 90 * 60000,
      ).toISOString();

      calendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventDetails.title)}&startdt=${startTime}&enddt=${endTime}&body=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    }

    window.open(calendarUrl, "_blank");
    setIsAddedToCalendar(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/5">
      {/* Early Bird Promotion Banner */}
      <div className="bg-secondary text-white p-3 flex items-center justify-center">
        <div className="flex items-center gap-3 text-center">
          <span className="text-sm font-semibold">
            🎯 Don't wait for the webinar!
          </span>
          <button
            onClick={() => {
              const element = document.getElementById("early-bird-offer");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-sm font-bold underline hover:no-underline transition-all"
          >
            Get 80% off our live training now →
          </button>
        </div>
      </div>

      {/* Hero Section with Confirmation */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              <CheckCircle className="w-4 h-4" />
              Registration Confirmed!
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
              You're All Set,{" "}
              {urlParams.wj_lead_first_name || "Future Property Investor"}! 🎉
            </h1>
            <p className="text-lg text-green-700 max-w-2xl mx-auto mb-4">
              Thanks for registering for our Equity Release masterclass. I can't
              wait to show you how to turn your home equity into life-changing
              wealth!
            </p>
            <p className="text-md text-green-600">
              Check your email for your personal webinar link and bonus
              materials.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Personal Message Video */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-r from-primary/70 to-primary/20 aspect-video">
                <button
                  className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#eaecf1] bg-opacity-80"
                  onClick={(e) => {
                    const videoPlayer = e.currentTarget.nextElementSibling;
                    if (videoPlayer) {
                      videoPlayer.play();
                      const miniTitleOverlay = document.createElement("div");
                      miniTitleOverlay.style.position = "absolute";
                      miniTitleOverlay.style.left = "10px";
                      miniTitleOverlay.style.top = "10px";
                      miniTitleOverlay.style.backgroundColor =
                        "rgba(255, 255, 255, 0.8)";
                      miniTitleOverlay.style.padding = "5px 10px";
                      miniTitleOverlay.style.borderRadius = "5px";
                      miniTitleOverlay.style.fontWeight = "bold";
                      miniTitleOverlay.style.fontSize = "12px";
                      miniTitleOverlay.style.zIndex = "20";
                      miniTitleOverlay.innerText = "Message from Abi";
                      e.currentTarget.parentElement.appendChild(
                        miniTitleOverlay,
                      );
                    }
                    e.currentTarget.style.display = "none";
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Personal Message from Abi
                  </h3>
                  <p className="text-neutral-600 px-4">
                    A quick welcome and what to expect in the webinar
                  </p>
                </button>
                <video
                  width="100%"
                  height="100%"
                  controls
                  onPause={(e) => {
                    const overlay = e.currentTarget.previousElementSibling;
                    const miniTitleOverlay =
                      e.currentTarget.parentElement.querySelector(
                        'div[style*="miniTitleOverlay"]',
                      );
                    if (overlay) {
                      overlay.style.display = "flex";
                    }
                    if (miniTitleOverlay) {
                      miniTitleOverlay.remove();
                    }
                  }}
                >
                  <source
                    src="https://player.vimeo.com/progressive_redirect/playback/1084281780/rendition/1080p/file.mp4?loc=external&signature=4c5258af93bc0e1c071297f1abc5c8f9742295b5d693d627a922df3d7b222f2f"
                    type="video/mp4"
                  />
                </video>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Webinar Details */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Your <Highlight type="primary">Webinar Details</Highlight>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Date & Time</p>
                      <p className="text-neutral-600">
                        {urlParams.wj_next_event_date || "Next Thursday"} at{" "}
                        {urlParams.wj_next_event_time || "7:00 PM GMT"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Registered Email</p>
                      <p className="text-neutral-600 text-sm break-all">
                        {urlParams.wj_lead_email ||
                          "The email address you submitted"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold mb-3">Your Webinar Link</p>
                      <a
                        href={urlParams.wj_lead_unique_link_live_room}
                        className="text-primary font-bold text-sm break-all p-4 rounded-lg bg-neutral-50/70 block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {urlParams.wj_lead_unique_link_live_room ||
                          "Provided via email"}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50/70 rounded-lg p-4">
                  <h3 className="font-bold mb-2">What's Coming Your Way:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Confirmation email with webinar access
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Reminder emails before the event
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Bonus property investment guides
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add to Calendar */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Don't Miss This Life-Changing Session!
              </h3>
              <p className="text-neutral-600 mb-4">
                Add this webinar to your calendar so you never forget.
              </p>
              <div className="flex flex-col md:flex-row gap-3 mb-2">
                <Button
                  onClick={() => generateCalendarEvent("google")}
                  className={`flex-1 ${isAddedToCalendar ? "bg-green-600 hover:bg-green-700" : ""}`}
                  size="lg"
                >
                  {isAddedToCalendar ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Added to Calendar!
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5 mr-2" />
                      Add to Google Calendar
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => generateCalendarEvent("outlook")}
                  className={`flex-1 hover:bg-neutral-500 ${isAddedToCalendar ? "bg-green-600 hover:bg-green-700" : ""}`}
                  size="lg"
                  variant="outline"
                >
                  {isAddedToCalendar ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Added to Calendar!
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5 mr-2" />
                      Add to Outlook Calendar
                    </>
                  )}
                </Button>
              </div>
              {isAddedToCalendar && (
                <p className="text-sm text-green-600 mt-2">
                  Perfect! You'll get a reminder before the webinar starts.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* MAIN CROSS-SELL: WTP Early Bird Offer */}
        <div id="early-bird-offer" className="max-w-3xl mx-auto mb-12">
          <Card className="border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 via-white to-secondary/10 overflow-hidden">
            <CardContent className="p-0">
              {/* Header Badge */}
              <div className="bg-gradient-to-r from-secondary to-secondary/80 px-6 py-4 text-center">
                <div className="inline-flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-bold uppercase tracking-wide">
                    Exclusive Offer for Webinar Attendees
                  </span>
                </div>
              </div>

              <div className="p-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Don't Wait -{" "}
                  <Highlight type="secondary">Start Building Wealth</Highlight>{" "}
                  Today
                </h2>

                <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
                  Why wait for the webinar? If you're serious about using your
                  equity to build wealth, secure your spot at our exclusive
                  2-day{" "}
                  <span className="font-semibold">Wealth Through Property</span>{" "}
                  event now, and get these incredible bonuses!
                </p>

                {/* Pricing Display */}
                <div className="bg-white rounded-xl border-2 border-secondary/20 p-6 mb-6 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="text-2xl text-neutral-400 line-through">
                      £495
                    </span>
                    <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                      80% OFF
                    </div>
                  </div>
                  <div className="text-4xl font-black text-secondary">£99</div>
                </div>

                {/* Why This Makes Sense for Equity Release Audience */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    Perfect for UK Homeowners with Equity
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 text-left">
                    <div className="flex items-start gap-3">
                      <Home className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">
                          Your Home is Your Foundation
                        </h4>
                        <p className="text-sm text-blue-700">
                          Learn exactly how to leverage your biggest asset
                          safely
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">
                          Proven Strategies
                        </h4>
                        <p className="text-sm text-blue-700">
                          No guesswork - follow our step-by-step blueprint
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <PoundSterling className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">
                          Start This Year
                        </h4>
                        <p className="text-sm text-blue-700">
                          Begin generating income from your equity in months,
                          not years
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">
                      2 full days of intensive training
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">
                      Personal wealth plan for your situation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">
                      Direct access to property experts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">
                      CPD Certificate for graduates
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">Complete property toolkit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">90-day follow-up support</span>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    window.open(
                      "https://grow.touchstoneeducation.co.uk/cwtp-foundation",
                      "_blank",
                    );
                  }}
                  size="lg"
                  variant="secondary"
                  className="w-full mb-4 py-6 font-bold text-white text-lg"
                >
                  Secure My Early Bird Spot Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <span className="font-semibold">⚡ Exclusive Offer:</span>{" "}
                    This exclusive 80% discount is only available to webinar
                    registrants. Regular attendees pay full price!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Host Information - Abi & Paul */}
        <HostInformation />

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-neutral-200">
          <p className="text-neutral-600">
            Questions? Need help? Simply reply to any of our emails and we'll
            get back to you promptly.
          </p>
          <Logo
            variant="grayscale"
            size="sm"
            className="mt-4 mx-auto opacity-50"
          />
          <p className="text-neutral-500 text-sm mt-2 opacity-50">
            <span>Industrial Ring 3 9491, Ruggell, Liechtenstein</span>
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            &copy; {new Date().getFullYear()} Touchstone Wealth Ltd, (Touchstone
            Education) a cell of Duneira Enterprises Ltd PPC. All rights
            reserved.
          </p>

          <div className="flex justify-center space-x-4 mt-4 opacity-50">
            <a
              href="https://touchstoneeducation.com/privacy-policy"
              className="text-neutral-500 text-sm hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="https://touchstoneeducation.com/competition-terms-and-conditions"
              className="text-neutral-500 text-sm hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="https://touchstoneeducation.com/contact-us"
              className="text-neutral-500 text-sm hover:underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
