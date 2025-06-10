import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle,
  Users,
  Link2Icon,
  Award,
  Plus,
  ArrowRight,
  Play,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Highlight } from "@/components/ui/highlight";
import { mixpanelTracker } from "@/lib/mixpanelTracking";
import { useMixpanelTracking } from "@/hooks/useMixpanelTracking";
import { Logo } from "@/components/ui/logo";

interface URLParams {
  wj_lead_first_name?: string;
  wj_lead_email?: string;
  wj_lead_unique_link_live_room?: string;
  wj_next_event_date?: string;
  wj_next_event_time?: string;
  [key: string]: string | undefined;
}

export default function ThankYou() {
  const { track } = useMixpanelTracking();
  const [urlParams, setUrlParams] = useState<URLParams>({});
  const [isAddedToCalendar, setIsAddedToCalendar] = useState(false);
  const currentYear = new Date().getFullYear();


  // Extract URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params: URLParams = {};

    // Extract all URL parameters
    searchParams.forEach((value, key) => {
      params[key] = decodeURIComponent(value);
    });

    setUrlParams(params);

    // Track confirmation page view with UTM data retention
    mixpanelTracker.trackConfirmationPageView();

    // Send specific confirmation event
    track("CPBO: Registration Confirmed", {
      email: params.wj_lead_email || "unknown",
      name: params.wj_lead_first_name || "unknown",
      webinar_name: "CPBO Experiment",
      page_type: "confirmation",
      confirmation_method: "url_params",
    });

    console.log("📋 URL Parameters extracted:", params);
  }, [track]);

  // Generate calendar event
  const generateCalendarEvent = (type: "google" | "outlook") => {
    // Parse the webinar date and time from WebinarJam parameters
    let webinarDate = new Date();

    if (urlParams.wj_next_event_date && urlParams.wj_next_event_time) {
      // Combine date and time from WebinarJam
      const dateTimeString = `${urlParams.wj_next_event_date} ${urlParams.wj_next_event_time}`;
      webinarDate = new Date(dateTimeString);
    } else {
      // Fallback to default
      webinarDate.setDate(webinarDate.getDate() + 1);
      webinarDate.setHours(0, 0, 0, 0); // 8 PM
    }

    const eventDetails = {
      title: "The Commercial Property Edge - Live Webinar",
      description: `Join Paul Smith for an exclusive masterclass on commercial property investing. 

Webinar Link: ${urlParams.wj_lead_unique_link_live_room || "Will be provided via email"}


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
      // Outlook format
      const startTime = webinarDate.toISOString();
      const endTime = new Date(
        webinarDate.getTime() + 90 * 60000,
      ).toISOString();

      calendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventDetails.title)}&startdt=${startTime}&enddt=${endTime}&body=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    }

    window.open(calendarUrl, "_blank");
    setIsAddedToCalendar(true);

    track("Calendar Event Added", {
      event_type: "webinar_reminder",
      calendar_type: type,
      webinar_name: "CPBO Experiment",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/5">
      {/* Header */}

      {/* Registration Confirmation */}
      <div className="bg-green-100 p-4 mb-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-green-800">
            Registration Confirmed! Details sent to your email.
          </h2>
          <p className="text-md font-light text-green-700">
            Includes a free bonus: 4 part video series on commercial property
            investment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            You're All Set,{" "}
            {urlParams.wj_lead_first_name ||
              "Future Commercial Property Investor"}
            ! 🎉
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Thanks for registering for our Commercial Property Edge webinar. I
            can't wait to share these game-changing strategies with you!
          </p>
        </div>

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
                      miniTitleOverlay.innerText = "Message from Paul";
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
                    Personal Message from Paul
                  </h3>
                  <p className="text-neutral-600 px-4">
                    A quick thank you and what to expect
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
                    src="https://player.vimeo.com/progressive_redirect/playback/808653923/rendition/1080p/file.mp4?loc=external&signature=5cc9c7f71d97cebf1babae94a18fb654c6321d2349d01b999f1e945c9c9e38d7"
                    type="video/mp4"
                  />
                </video>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Webinar Details Card */}
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
                      <p className="text-neutral-600">
                        {urlParams.wj_lead_email ||
                          "The email address you submitted"}
                      </p>
                    </div>
                  </div>

                  
                </div>
                <div className="bg-neutral-50/70 rounded-lg p-4">
                  <h3 className="font-bold mb-2">What's Coming Your Way:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Confirmation email with webinar link
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Reminder emails before the event
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Exclusive bonus materials
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Link2Icon className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-semibold">Your Webinar Link</p>
                    <a
                      href={urlParams.wj_lead_unique_link_live_room}
                      className="text-primary text-sm py-2 px-4 rounded-lg bg-neutral-50/70 w-full block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                       {urlParams.wj_lead_unique_link_live_room || "Provided via email."}
                    </a>
                  </div>
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
              <h3 className="text-xl font-bold mb-2">Don't Miss Out!</h3>
              <p className="text-neutral-600 mb-4">
                Add this webinar to your calendar so you never forget.
              </p>
              {!isAddedToCalendar ? (
                <div className="flex flex-col md:flex-row gap-3 mb-2">
                  <Button
                    onClick={() => generateCalendarEvent("google")}
                    className="py-4 flex-1"
                    size="lg"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add to Google Calendar
                  </Button>
                  <Button
                    onClick={() => generateCalendarEvent("outlook")}
                    className="py-4 flex-1 hover:bg-neutral-500"
                    size="lg"
                    variant="outline"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add to Outlook Calendar
                  </Button>
                </div>
               ) : (
                <div className="bg-green-600 text-white py-4 rounded-lg mb-2">
                  <CheckCircle className="w-5 h-5 inline-block mr-2" />
                  Added to your calendar!
                </div>
              )}
              {isAddedToCalendar && (
                <p className="text-sm text-green-600 mt-2">
                  Perfect! You'll get a reminder before the webinar starts.
                </p>
              )}
              <p className="text-neutral-600 mt-4">
                🤓 Studies show people who add events to their calendar are 3x
                more likely to attend!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Early Bird Ticket Upsell */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 via-white to-secondary/10 overflow-hidden">
            <CardContent className="p-0">
              {/* Header Badge */}
              <div className="bg-gradient-to-r from-secondary to-secondary/80 px-6 py-3 text-center">
                <div className="inline-flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-bold uppercase tracking-wide">
                    Limited Time Offer
                  </span>
                </div>
              </div>

              <div className="p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Get Your <Highlight type="secondary">Early Bird</Highlight>{" "}
                  Advantage
                </h2>

                <p className="text-lg text-neutral-600 mb-6">
                  Why wait for the webinar? If you're serious about building
                  wealth through commercial property, secure your spot at our
                  exclusive 2-day
                  <span className="font-semibold">
                    {" "}
                    Wealth Through Property
                  </span>{" "}
                  live event now!
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
                  <div className="text-4xl font-black text-secondary mb-2">
                    £99
                  </div>
                  <p className="text-sm text-neutral-600">
                    Early Bird Price - Today Only
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">
                      2 full days of intensive training
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">Direct access to Paul Smith</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">
                      Exclusive deal analysis workshop
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">
                      Private networking opportunities
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">Complete property toolkit</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">90-day follow-up support</span>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    track("Early Bird Ticket CTA", {
                      offer_type: "early_bird_discount",
                      discount_percentage: 80,
                      email: urlParams.wj_lead_email || "unknown",
                    });

                    window.open(
                      "https://grow.touchstoneeducation.co.uk/cwtp-foundation",
                      "_blank",
                    );
                  }}
                  size="lg"
                  variant="secondary"
                  className="w-full mb-4 py-6 font-bold text-white"
                >
                  Book Your Early Bird Ticket
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <span className="font-semibold">⚡ Limited Time:</span> This
                    exclusive 80% discount is only available to webinar
                    registrants and expires in 48 hours. Normal attendees pay
                    full price!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Host Information */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Photo and basic info section */}
                <div className="p-6 flex flex-col items-center md:items-start">
                  <h2 className="text-2xl font-bold mb-6 text-center md:text-left w-full">
                    Meet Your <Highlight type="primary">Host</Highlight>
                  </h2>
                  <div className="mb-4 w-24 h-24 rounded-full overflow-hidden border-4 border-secondary">
                    <img
                      src="https://www.paulsmithtouchstoneeducation.com/wp-content/uploads/2020/10/Paul-Smith-Touchstone-Education.png"
                      alt="Paul Smith"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold">Paul Smith</h3>
                  <p className="text-sm text-neutral-500 mb-4">
                    Commercial Property Expert & Educator
                  </p>

                  <div className="flex items-center mb-6">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-secondary fill-secondary"
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium">
                      Expert Trainer
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 text-center md:text-left">
                    Paul Smith is one of the UK's most respected commercial
                    property educators. With over 40 years of experience, Paul
                    has helped hundreds of investors build successful property
                    portfolios. He has built a property empire valued at over
                    £30 million with more than 100 properties, which include a
                    diverse portfolio of commercial assets, residential
                    investments, HMOs, and serviced accommodations. As
                    Touchstone Education's lead expert, he specialises in
                    identifying high-ROI opportunities in the UK commercial
                    property market.
                  </p>
                </div>

                {/* Achievements and stats section */}
                <div className="bg-neutral-50/70 p-6">
                  <h4 className="font-bold mb-3 text-neutral-800">
                    <Highlight type="primary">Key</Highlight> Achievements
                  </h4>

                  <ul className="mb-8 space-y-2">
                    <li className="flex items-start text-sm">
                      <span className="text-primary mr-2 font-bold">✓</span>
                      <span>Built a £30M+ commercial property portfolio</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-primary mr-2 font-bold">✓</span>
                      <span>
                        Completed 35+ successful commercial conversions
                      </span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-primary mr-2 font-bold">✓</span>
                      <span>Mentored 1,200+ property investors</span>
                    </li>
                  </ul>

                  <h4 className="font-bold mb-3 text-neutral-800">
                    <Highlight type="secondary">Property</Highlight> Success
                  </h4>

                  <div className="grid grid-cols-1 gap-3 mb-6">
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">
                          Average Client ROI
                        </p>
                        <p className="font-bold text-sm">12%</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">
                          Properties Acquired
                        </p>
                        <p className="font-bold text-sm">120+</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">
                          Industry Awards
                        </p>
                        <p className="font-bold text-sm">7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50/5 py-3 px-6 text-center pb-6">
                <h4 className="font-bold mb-3 text-neutral-800">Featured In</h4>
                <div className="flex justify-center items-center space-x-6 space-y-3 flex-wrap">
                  <img
                    src="https://logos-world.net/wp-content/uploads/2023/04/The-Guardian-Logo.png"
                    alt="The Guardian"
                    className="h-6 object-contain"
                  />
                  <img
                    src="https://thefedonline.com/wp-content/uploads/the-sunday-times-logo.png"
                    alt="The Sunday Times"
                    className="h-6 object-contain"
                  />
                  <img
                    src="https://logos-download.com/wp-content/uploads/2021/01/The_Scotsman_Logo.png"
                    alt="The Scotsman"
                    className="h-6 object-contain"
                  />
                  <img
                    src="https://heraldandtimes.myshopify.com/cdn/shop/collections/HERALDmastheadnew.png"
                    alt="The Herald"
                    className="h-6 object-contain"
                  />
                  <img
                    src="https://wildaid.org/wp-content/uploads/2020/03/Independent-logo.png"
                    alt="Independent"
                    className="h-6 object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
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
          <div className="flex justify-center space-x-4 mt-4 opacity-50">
            <a href="https://touchstoneeducation.com/privacy-policy" className="text-neutral-500 text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="https://touchstoneeducation.com/competition-terms-and-conditions" className="text-neutral-500 text-sm hover:underline">
              Terms of Service
            </a>
            <a href="https://touchstoneeducation.com/contact-us" className="text-neutral-500 text-sm hover:underline">
              Contact Us
            </a>
          </div>
          <p className="text-neutral-500 text-sm mt-2 opacity-50">
            <span>Industrial Ring 3 9491, Ruggell, Liechtenstein</span>
          </p>
          
          <p className="text-sm text-neutral-500 mt-2">
            &copy; {currentYear} Touchstone Wealth Ltd, (Touchstone Education) a cell of Duneira Enterprises Ltd PPC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
