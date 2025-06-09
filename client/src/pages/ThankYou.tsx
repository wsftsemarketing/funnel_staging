import { useEffect, useState } from "react";
import { Calendar, Clock, CheckCircle, Users, Award, Plus, Download, ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Highlight } from "@/components/ui/highlight";
import { mixpanelTracker } from "@/lib/mixpanelTracking";
import { useMixpanelTracking } from "@/hooks/useMixpanelTracking";
import { Logo } from "@/components/ui/logo";

interface URLParams {
  email?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  webinar_url?: string;
  webinar_time?: string;
  webinar_date?: string;
  phone?: string;
  [key: string]: string | undefined;
}

export default function ThankYou() {
  const { track } = useMixpanelTracking();
  const [urlParams, setUrlParams] = useState<URLParams>({});
  const [isAddedToCalendar, setIsAddedToCalendar] = useState(false);

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
    track("Webinar Registration: Sign up confirmed", {
      email: params.email || 'unknown',
      name: params.name || params.first_name || 'unknown',
      webinar_url: params.webinar_url || 'unknown',
      page_type: 'confirmation',
      confirmation_method: 'url_params'
    });

    console.log('📋 URL Parameters extracted:', params);
  }, [track]);

  // Generate calendar event
  const generateCalendarEvent = () => {
    const webinarDate = new Date();
    webinarDate.setDate(webinarDate.getDate() + 7);
    webinarDate.setHours(19, 0, 0, 0); // 7 PM

    const startTime = webinarDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endTime = new Date(webinarDate.getTime() + 90 * 60000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const eventDetails = {
      title: 'The Commercial Property Edge - Live Webinar',
      start: startTime,
      end: endTime,
      description: `Join Paul Smith for an exclusive masterclass on commercial property investing. 

Webinar Link: ${urlParams.webinar_url || 'Will be provided via email'}

What you'll learn:
• How to identify high-yield commercial opportunities
• Financing strategies that maximise returns
• Risk management in commercial property
• Building a sustainable property portfolio

See you there!`,
      location: 'Online Webinar'
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.start}/${eventDetails.end}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;

    window.open(googleCalendarUrl, '_blank');
    setIsAddedToCalendar(true);

    track("Calendar Event Added", {
      event_type: 'webinar_reminder',
      email: urlParams.email || 'unknown'
    });
  };

  const handleEventInterest = () => {
    track("Live Event Interest", {
      event_type: 'live_event_cta_click',
      email: urlParams.email || 'unknown'
    });
  };

  const handleBonusDownload = () => {
    track("Bonus Guide Download", {
      resource_type: 'property_guide',
      email: urlParams.email || 'unknown'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <header
        className={`top-0 z-50 transition-all duration-300 backdrop-blur-sm bg-[#F7F8F9] py-4 border-b border-[#141b29]/10 shadow-xs shadow-[#141b29]/10`}
      >
        <div className="container mx-auto px-6 flex items-center justify-center">
        <Logo variant="default" size="sm" className="md:px-4" />

          {/* Right side with About Paul always visible and menu on mobile */}
          
        </div>
      </header>
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 ">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            You're All Set, {urlParams.first_name || urlParams.name || 'Future Property Investor'}! 🎉
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Thanks for registering for our exclusive webinar. I can't wait to share these game-changing commercial property strategies with you!
          </p>
        </div>

        {/* Video Message Placeholder */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-r from-primary/70 to-primary/20 aspect-video">
                <button className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#eaecf1] bg-opacity-90" onClick={(e) => {
                  const videoPlayer = e.currentTarget.nextElementSibling;
                  if (videoPlayer) {
                    videoPlayer.play();
                  }
                  e.currentTarget.style.display = 'none';
                }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personal Message from Paul</h3>
                  <p className="text-neutral-600 px-4">A quick thank you and what to expect</p>
                </button>
                <video width="100%" height="100%" controls onPause={(e) => {
                  const overlay = e.currentTarget.previousElementSibling;
                  if (overlay) {
                    overlay.style.display = 'flex';
                  }
                }}>
                  <source src="https://download-video-ak.vimeocdn.com/v3-1/playback/cddee5a8-fac7-4ec0-a8c6-1514ab23edc6/2c141bc9-90e4a244?__token__=st=1749478688~exp=1749482288~acl=%2Fv3-1%2Fplayback%2Fcddee5a8-fac7-4ec0-a8c6-1514ab23edc6%2F2c141bc9-90e4a244%2A~hmac=1e3e6a9ec51d7ad9a04d89a3b6d7916fc015e85c87cbf80fdcaebc80dece21bc&r=dXMtd2VzdDE%3D" type="video/mp4" />
                </video>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Webinar Details Card */}
        <div className="max-w-4xl mx-auto mb-12">
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
                        {urlParams.webinar_date || 'Next Thursday'} at {urlParams.webinar_time || '7:00 PM GMT'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Registered Email</p>
                      <p className="text-neutral-600">{urlParams.email || 'Your registered email'}</p>
                    </div>
                  </div>
                  {urlParams.webinar_url && (
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Your Webinar Link</p>
                        <a 
                          href={urlParams.webinar_url} 
                          className="text-primary hover:underline text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {urlParams.webinar_url}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
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
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add to Calendar CTA */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Don't Miss Out!</h3>
              <p className="text-neutral-600 mb-4">
                Add this webinar to your calendar so you never forget. Studies show people who add events to their calendar are 3x more likely to attend!
              </p>
              <Button 
                onClick={generateCalendarEvent}
                className={`w-full ${isAddedToCalendar ? 'bg-green-600 hover:bg-green-700' : ''}`}
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
              {isAddedToCalendar && (
                <p className="text-sm text-green-600 mt-2">
                  Perfect! You'll get a reminder before the webinar starts.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Host Information */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Meet Your <Highlight type="primary">Host</Highlight>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">PS</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-2">Paul Smith</h3>
                  <p className="text-primary font-semibold mb-3">Commercial Property Expert & Educator</p>
                  <p className="text-neutral-600 mb-4">
                    With over 15 years in commercial property investing, Paul has helped thousands of investors 
                    build substantial wealth through strategic property acquisitions. He's personally overseen 
                    portfolio growth exceeding £50M in commercial assets.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>15+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>£50M+ Portfolio Managed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-600" />
                      <span>5000+ Students Taught</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Certified Property Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bonus Download Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardContent className="p-6 text-center">
              <Download className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Exclusive Bonus Guide</h3>
              <p className="text-neutral-600 mb-4">
                <Highlight type="marker">FREE Download:</Highlight> "The Commercial Property Investor's Checklist" - 
                A comprehensive guide to evaluating commercial properties like a pro.
              </p>
              <Button 
                onClick={handleBonusDownload}
                variant="outline" 
                className="border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Your Free Guide
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Next Step CTA - Live Event */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Take It <Highlight type="primary">Further?</Highlight>
              </h2>
              <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
                After the webinar, if you're serious about building wealth through commercial property, 
                I'd love to meet you in person at our exclusive live event.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Limited Attendees</h4>
                  <p className="text-sm text-neutral-600">Intimate setting for personalised guidance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Deep Dive Training</h4>
                  <p className="text-sm text-neutral-600">Advanced strategies not covered online</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Proven Results</h4>
                  <p className="text-sm text-neutral-600">Real case studies and live deal analysis</p>
                </div>
              </div>

              <Button 
                onClick={handleEventInterest}
                size="lg" 
                className="mb-4"
              >
                Learn About Our Live Events
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-sm text-neutral-500">
                <span className="font-semibold">Note:</span> This will be mentioned during the webinar, 
                but early interest gets priority booking!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 py-8 border-t border-neutral-200">
          <p className="text-neutral-600">
            Questions? Need help? Simply reply to any of our emails and we'll get back to you promptly.
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            © 2025 Touchstone Education. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}