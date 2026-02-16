import { useRef, useState } from "react";
import { Highlight } from "@/components/ui/highlight";
import { useIntersectionObserver } from "@/lib/utils/animations";
import {
  ArrowRight, CheckCircle, Clock, Users, Star, Calendar, Award,
  Shield, User, Phone, Mail, PlayCircle, Brain, Search, DollarSign, 
  MessageCircle, Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/ui/logo";

import SocialProofNotifications from "@/components/SocialProofNotifications";
import WebinarCountdownUpsell from "@/components/WebinarCountdownUpsell";

export default function WSF_DTO() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref, { threshold: 0.1 });
  const [urgencyVisible, setUrgencyVisible] = useState(true);

  const handleCheckoutClick = () => {
    // Navigate to checkout page ThriveCart link
    window.location.href = 'https://touchstoneeducation.thrivecart.com/122';
  };

  // Set webinar date to 2 days from now at 7:00 PM
  const webinarDate = new Date();
  webinarDate.setDate(webinarDate.getDate() + 2);
  webinarDate.setHours(19, 0, 0, 0);

  return (
    <div className="min-h-screen bg-white">
      <SocialProofNotifications />

      {/* Urgency Bar */}
      {urgencyVisible && (
        <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
          <div className="container mx-auto items-center align-">
            <span>⚡ Exclusive Opportunity: Only 6 dates remaining</span>

          </div>
        </div>
      )}

      {/* Hero Section - From DTOOffer */}
      <section className="relative pt-8 md:pt-12 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div
            ref={ref}
            className={`max-w-5xl mx-auto text-center transform transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="mb-6 text-red-600 px-6 py-2 text-sm font-black">
              EXCLUSIVE 80% OFF
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[1.05] tracking-tight">
              Learn How to Build a Property Income Stream In Just 2 Days
            </h1>

            <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-4xl mx-auto font-medium">
              Join Paul Smith, Abi Hookway and Gordie Dutfield for an exclusive 2-day online property
              investment masterclass. Learn the exact strategies that have generated {" "}
              <Highlight type="green" className="text-green-600 font-black">£10M+</Highlight>
              {""} in portfolio value for students.
            </p>

            {/* Price & CTA */}
            <div className="mb-8 max-w-2xl mx-auto">
              <Card className="border-2 border-red-600/50 shadow-2xl shadow-red-600/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="flex justify-center items-baseline gap-4 mb-4">
                      <span className="text-5xl font-black text-primary">£99</span>
                      <div className="text-left">
                        <div className="text-2xl line-through text-gray-500">£495</div>
                        <div className="text-md font-bold text-green-600">Save £396 <u><b>(80% OFF!)</b></u></div>
                      </div>
                    </div>

                    <Button
                      onClick={handleCheckoutClick}
                      className="w-full py-6 text-xl font-bold conversion-btn mb-4"
                    >
                      Secure My Spot Now <ArrowRight className="ml-2" size={20} />
                    </Button>

                    <div className="flex justify-center gap-4 items-center text-sm text-foreground/70">
                      <div className="flex items-center">
                        <span>Trusted by 5,000+ UK property learners</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-6 items-center text-sm text-foreground/70">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-primary mr-1" />
                <span>2 Full Days Training</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-primary mr-1" />
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 text-primary mr-1" />
                <span>CPD Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section - From DTOOffer */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Your Complete <Highlight type="primary">Training Package</Highlight>
              </h2>

              <p className="text-lg text-foreground/80">
                Join the UK's leading 2-day online training event and learn wealth creation strategies to multiply your income through property.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* 2-Day Live Training */}
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-4">2-Day Live Training Includes:</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">7 Streams of Income live training</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Live deal analysis and negotiation tactics</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Proven financing strategies</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Advanced property investing techniques</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Millionaire Mindset training</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Your own personalised 12-month wealth plan</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Accessible data and resources to launch and grow your property investment faster</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">A CPD certificate upon completion to enhance your professional credentials</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Live Q&A sessions</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Direct access to property experts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Exclusive Bonuses */}
              <Card className="border-2 border-secondary/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6 relative">
                    <h3 className="text-2xl font-bold mb-2">Premium Resources</h3>
                    <p className="text-sm text-foreground/70">Valued at <Highlight type="secondary"><b>£6,021</b></Highlight> - Included FREE</p>
                  </div>

                  <div className="space-y-4 px-4 py-4 bg-green-50/40 rounded-lg border border-gray-200 relative">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-sm"><b>80% OFF</b> your WTP Online Ticket (£495 Value)</span>
                        <p className="text-xs text-foreground/60">Access to our next 2-day event at a discounted price.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-sm">Touchstone Education Voucher (£100 value)</span>
                        <p className="text-xs text-foreground/60">Redeemable across our complete course portfolio.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-sm">Best-selling E-Book Collection (£30 value)</span>
                        <p className="text-xs text-foreground/60">£180K profit in 6 months through strategic property flipping.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-sm">Advanced Flipping Analysis Tool (£495 value)</span>
                        <p className="text-xs text-foreground/60">Professional-grade calculator for property valuation and profit estimation.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-sm">Wealth Assessment Platform (£5,000 value)</span>
                        <p className="text-xs text-foreground/60">Comprehensive wealth positioning and growth projections, plus our Net Worth Calculator.</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-xs mt-6 px-3 py-1 font-bold text-white bg-secondary rounded-full absolute left-1/2 transform -translate-x-1/2 -bottom-3">
                      Included w/ Bundle
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="text-center relative">
                    <div className="text-2xl font-black text-primary mb-2">Your investment: <Highlight type="green" className="text-green-600">£99</Highlight></div>
                    <div className="text-sm text-foreground/70">Ticket + bundle value: £6,120</div>
                  </div>
                </CardContent>
              </Card>




          </div>
            {/* CTA Section */}
            <div className="text-center">
              <Button
                onClick={handleCheckoutClick}
                className=" py-6 text-xl font-bold conversion-btn mb-4"
              >
                Get My WTP Ticket for £99 <ArrowRight className="ml-2" size={20} />
              </Button>

              <p className="text-xs text-foreground/60">
                Get 80% Off. Save £396 <u><b>TODAY</b></u>!
              </p>
            </div>


            {/* Product Image Mockups Section */}
              <div className="mt-8">
                {/* <h3 className="text-xl font-bold mb-4 text-center">Included in the bundle:</h3> */}
                <div className="flex justify-center">
                  <img src="https://go.touchstoneeducation.com/hosted/images/ca/4601a391cb4dc1bc14ddb5289c4e92/sa-wtp-bundle.png" alt="Bundle Image" className="w-full h-auto max-w-md" />
                </div>

              </div>
            </div>

        </div>
      </section>

      {/* Testimonial Snapshot Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <video controls className="absolute inset-0 w-full h-full object-fit">
                          <source src="https://player.vimeo.com/progressive_redirect/playback/1105475877/rendition/540p/file.mp4?loc=external&signature=8955358394ef375b7d4e8a3596556031de995eaa79c90cd5cdc17320ff83295c" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-2xl mb-2"><b>Case Study:</b> Sara Mann</h3>
                    <div className="bg-primary/5 rounded p-6 border-l-4 border-gray-300 mb-6">
                      <p className="text-lg text-foreground/80">

                      "As a full-time teacher, I began my property journey and now make £2,500+ monthly from buy-to-lets and HMOs, hitting £10,000 in passive income!"
                    </p></div>
                    <div className="text-3xl font-black text-primary mb-4"><Highlight type="green">£2,500</Highlight>/month profit</div>

                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button
                onClick={handleCheckoutClick}
                className="px-8 py-4 text-lg font-bold conversion-btn"
              >
                Secure Your Seat For £99 <ArrowRight className="ml-2" size={20} />
              </Button>
              <p className="mt-4 text-xs text-foreground/60">
                Get 80% Off. Save £396 <u><b>TODAY!</b></u>
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* Hero Section - Start Your Property Investment Journey */}
      <section className="py-12 md:py-20 relative">
        {/* Paper Background with Torn Edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(205, 133, 63, 0.02) 0%, transparent 50%),
              linear-gradient(90deg, rgba(245, 245, 244, 0.5) 0%, rgba(255, 255, 255, 0.8) 100%)
            `,
            boxShadow: 'inset 0 0 100px rgba(139, 69, 19, 0.05)'
          }}
        ></div>

        {/* Paper Top Edge with Slight Tear Effect */}
        <div className="absolute top-0 left-0 w-full h-2 bg-white"
             style={{
               clipPath: 'polygon(0% 0%, 2% 100%, 4% 50%, 6% 100%, 8% 30%, 10% 100%, 12% 60%, 14% 100%, 16% 20%, 18% 100%, 20% 70%, 22% 100%, 24% 40%, 26% 100%, 28% 80%, 30% 100%, 32% 10%, 34% 100%, 36% 90%, 38% 100%, 40% 50%, 42% 100%, 44% 30%, 46% 100%, 48% 70%, 50% 100%, 52% 40%, 54% 100%, 56% 80%, 58% 100%, 60% 20%, 62% 100%, 64% 60%, 66% 100%, 68% 90%, 70% 100%, 72% 30%, 74% 100%, 76% 70%, 78% 100%, 80% 50%, 82% 100%, 84% 80%, 86% 100%, 88% 40%, 90% 100%, 92% 60%, 94% 100%, 96% 20%, 98% 100%, 100% 50%, 100% 0%)'
             }}>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Start Your Property Investment Journey<Highlight type="primary">with Confidence</Highlight>
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-4 max-w-3xl mx-auto">
              Unlock a wealth of property knowledge in just 48 hours.
              Imagine absorbing insider strategies directly from experts and transforming them into your own wealth-generating machine. Gain advanced investing insights and practical tips through our straightforward, step-by-step property strategy.
            </p>
            <p className="text-sm text-gray-500 italic mb-8">
              This online event is designed for both beginners and seasoned investors alike.
            </p>
            <div className="text-center mt-8">
              <Button
                onClick={handleCheckoutClick}
                className="px-8 py-4 text-lg font-bold conversion-btn"
              >
                Secure Your Seat For £99 <ArrowRight className="ml-2" size={20} />
              </Button>
              <p className="mt-4 mb-6 text-xs text-foreground/60">
                Get 80% Off. Save £396 <u><b>TODAY!</b></u>
              </p>
            </div>

          </div>
        </div>


        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-3xl font-bold mb-8">
              If You're Serious About Building <Highlight type="secondary">Long-term Wealth</Highlight> Through Property...
            </h2>
            <div className="relative">

            </div>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-foreground/80 mb-6">
                Attend our Wealth Through Property 2-Day Intensive, where over two immersive days our expert team will guide you through proven property strategies, actionable steps, and give you the confidence to <b>start building your portfolio FAST</b>.
              </p>

              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary mb-6">
                <p className="text-lg font-semibold text-primary mb-3">
                  Wealth Through Property is your fast-track to becoming a confident, well-informed property investor.
                </p>
                <p className="text-foreground/80">
                  Over two days you’ll learn exactly how to find, analyse, and act on profitable property opportunities, with <b>practical steps you can start using immediately</b>.

                  <ul className="list-disc ml-6 space-y-2 mt-6 mb-4">
                    <li>Learn how to spot property opportunities others overlook</li>
                    <li>Discover low-cost ways to start without owning property</li>
                    <li>Get expert insights to avoid costly beginner mistakes</li>
                    <li>Build the confidence to take action on your first deal</li>
                  </ul>

                  Whether you've never bought a house or you're looking to grow your portfolio, we'll give you
                    the tools, strategies, and plan to make it happen.
                </p>

              </div>
              <p className="text-sm text-gray-500 italic mb-8">
                Waiting could mean missing out on opportunities right in front of you!
              </p>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden object-cover transform -rotate-3 mb-4">
                <img src="https://2399753.fs1.hubspotusercontent-na1.net/hub/2399753/hubfs/TouchStone-1-1-1-1.png" alt="Photo 5" className="w-full h-full object-cover" />
              </div>
              <p className="text-lg text-foreground/70 italic">
                No gimmicks. No get-rich-quick schemes. Just proven strategies from real investors who've walked the walk.
              </p>
            </div>
            <Button
              onClick={handleCheckoutClick}
              className="px-8 py-4 text-lg font-bold conversion-btn"
            >
              Secure Your Seat For £99 <ArrowRight className="ml-2" size={20} />
            </Button>

            <div className="text-gray-400 mt-4">
              <span className="line-through ">£495</span> <span className="text-sm font-medium text-green-500">80% Off. Save £396 <u><b>TODAY</b></u>!</span>
              <p className="mt-4 text-sm text-foreground/50">
                Offer valid today. Don't miss out on this exclusive opportunity to learn from the best.
              </p>
               </div>
          </div>
        </div>

        {/* Paper Bottom Edge with Slight Tear Effect */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-50 to-indigo-50"
             style={{
               clipPath: 'polygon(0% 100%, 2% 0%, 4% 50%, 6% 0%, 8% 70%, 10% 0%, 12% 40%, 14% 0%, 16% 80%, 18% 0%, 20% 30%, 22% 0%, 24% 60%, 26% 0%, 28% 20%, 30% 0%, 32% 90%, 34% 0%, 36% 10%, 38% 0%, 40% 50%, 42% 0%, 44% 70%, 46% 0%, 48% 30%, 50% 0%, 52% 60%, 54% 0%, 56% 20%, 58% 0%, 60% 80%, 62% 0%, 64% 40%, 66% 0%, 68% 10%, 70% 0%, 72% 70%, 74% 0%, 76% 30%, 78% 0%, 80% 50%, 82% 0%, 84% 20%, 86% 0%, 88% 60%, 90% 0%, 92% 40%, 94% 0%, 96% 80%, 98% 0%, 100% 50%, 100% 100%)'
             }}>
        </div>
      </section>

      {/* No Experience Required Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="text-center mb-8">

                    <h2 className="text-2xl md:text-3xl font-black mb-4">
                      You Don't Need Prior <Highlight type="primary">Experience</Highlight>
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 font-bold text-lg">×</span>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          You don't need prior experience. You don't need thousands in the bank.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-semibold mb-2">
                          What you do need is a proven system, one that actually works.
                        </p>
                        <p className="text-gray-600 text-sm">
                          One that's built by real investors who've walked the walk, made the mistakes,
                          and built portfolios that now pay them every single month.
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-gray-700 font-medium">
                        That's exactly what you'll find inside Wealth Through Property.
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        You just need a system that works, backed by coaches who can guide you every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Vision Cards */}
              <div className="order-1 lg:order-2">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold">
                    Picture This:
                  </h3>
                </div>

                <div className="space-y-4">
                  <Card className="border-2 border-green-800/40 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <span className="text-4xl font-black text-green-900">YOU</span>
                        </div>
                        <p className="text-gray-700 font-medium">
                          analyse property deals like a seasoned professional
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-800/40 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <span className="text-4xl font-black text-green-900">YOU</span>
                        </div>
                        <p className="text-gray-700 font-medium">
                          sit in front of agents and confidently negotiate £30,000 off the asking price
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-800/40 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <span className="text-4xl font-black text-green-900">YOU</span>
                        </div>
                        <p className="text-gray-700 font-medium">
                          build a portfolio that doesn't drain your time or money, but actually generates cash flow every month
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-800/40 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <span className="text-4xl font-black text-green-900">YOU</span>
                        </div>
                        <p className="text-gray-700 font-medium">
                          surround yourself with people who've already done it and are ready to show you how
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
        <Button
          onClick={handleCheckoutClick}
          className="sm:w-auto px-8 py-4 text-lg font-bold conversion-btn"
        >
          Secure Your Seat For £99 <ArrowRight className="ml-2" size={20} />
        </Button>
          <p className="mt-4 text-xs text-foreground/60">
            Get 80% Off. Save £396 <u><b>TODAY!</b></u>
          </p>
        </div>
      </section>



      {/* Social Proof & Testimonials - From DTOOffer */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                What Our <Highlight type="secondary">Students Say</Highlight>
              </h2>
              <p className="text-lg text-foreground/80">
                Real results from real people
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Testimonial 1 */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/70 mb-6">
                    "What I have been able to learn since joining has been mind blowing. Things that I have never heard of even with all the years we have been in property."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Marney Lapsley-Gardner</p>
                      <p className="text-xs text-foreground/60">Wealth Academy & WTP Graduate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/70 mb-6">
                  "The seminar was eye-opening. We came away with a much clearer understanding of property investing—not just the strategies, but the mindset and structure needed to succeed. Everything was presented in a way that made sense, even for complete beginners."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Andrew Clayton</p>
                      <p className="text-xs text-foreground/60">Wealth Through Property Graduate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/70 mb-6">
                    "Touchstone has changed my life for the better because I now see a future. I will have a building named after my surname. It will be a family legacy."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Pammy Standley</p>
                      <p className="text-xs text-foreground/60">Wealth Through Property Graduate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Scarcity and Social Proof Fusion Section */}
      <section className="py-12 md:py-20 bg-red-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="justify-center text-center mb-8">
              <h3 className="font-bold text-lg text-red-600 mb-4">⚠️ URGENT: EXCLUSIVE OPPORTUNITY</h3>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Don't Miss Out Like <Highlight type="secondary">These People Did</Highlight>
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <Card className="border-l-4 border-red-500 bg-white shadow-lg shadow-red-500/40">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-foreground/80 mb-2">
                        "Thanks to Touchstone Education and their courses, I was able to avoid <strong>losing £25,000 on stamp duty</strong>"
                      </p>
                      <p className="text-sm text-foreground/60">- Andrew Lennard</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500 bg-white shadow-lg shadow-red-500/40">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-foreground/80 mb-2">
                        "We would've made <strong>costly mistakes</strong> that would have led us to loose loads of progress if it weren't for Wealth Through Property"
                      </p>
                      <p className="text-sm text-foreground/60">- Myriam and Craig</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-red-200 text-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl font-black text-red-600 mb-2">47 people</div>
                  <p className="text-sm text-foreground/70">joined the waitlist last month when we sold out</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-red-600 mb-2">£10.3M</div>
                  <p className="text-sm text-foreground/70">in property deals our last cohort completed in 90 days</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={handleCheckoutClick}
                className="w-full sm:w-auto px-12 py-6 text-xl font-bold bg-red-600 shadow-lg mb-4 border-red-800 glow"
              >
                Secure Your Space for £99 <ArrowRight className="ml-2" size={20} />
              </Button>
              <p className="text-sm text-red-600 font-medium">
                Get 80% OFF. Save £396 <u><b>TODAY!</b></u>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wealth Promise Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                What Will <Highlight type="secondary">Wealth Through Property</Highlight> Do for You?
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-4xl mx-auto">
                Wealth Through Property is your gateway to a life changing property journey. Whether you're brand new to investing or looking to take that crucial first step, this online training gives you everything you need to succeed and fast.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>


                {/* Host Showcase */}
                <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold mb-4 text-gray-900">Your Expert Trainers</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Paul Smith */}
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src="https://www.paulsmithtouchstoneeducation.com/wp-content/uploads/2020/10/Paul-Smith-Touchstone-Education.png"
                          alt="Paul Smith"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">Paul Smith</div>
                        <div className="text-xs text-gray-600">Commercial Expert</div>
                      </div>
                    </div>

                    {/* Abi Hookway */}
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src="https://www.thesun.co.uk/wp-content/uploads/2024/12/cd0dfe5e-22c1-4841-bcfe-09b7fae99230_c8164c.jpg"
                          alt="Abi Hookway"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">Abi Hookway</div>
                        <div className="text-xs text-gray-600">Buy-to-let Expert</div>
                      </div>
                    </div>

                    {/* Gordie Dutfield */}
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center">
                        <img
                          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/1870005/settings_images/108ae2-ebd8-1402-1edb-ca33e50c3_Gordie.png"
                          alt="Gordie Dutfield"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">Gordie Dutfield</div>
                        <div className="text-xs text-gray-600">Strategy Specialist</div>
                      </div>
                    </div>

                    {/* Additional Trainer Slot */}
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">Expert Team</div>
                        <div className="text-xs text-gray-600">Support Coaches</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                      <Award className="h-3 w-3" />
                      <span>40+ Years Combined Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Here's what to expect:</h3>

                <Accordion type="multiple" className="w-full space-y-4">
                  <AccordionItem value="meet-experts" className="border border-primary/20 rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold text-left">The Pathway to Success</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-foreground/80 mb-3">
                        Learn the steps that have helped thousands of people build real wealth through property.
                        </p>
                        <p className="text-sm text-foreground/70">
                        You do not need to be an expert or have savings. This blueprint shows you exactly how to get started and what to do next.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="property-deals" className="border border-primary/20 rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Search className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold text-left">Why Property Works</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-foreground/70">
                        Property is one of the safest and most reliable ways to build wealth.
                        </p>
                        <p className="text-sm text-foreground/70">

                        You will learn why it stays strong even when the economy changes and how to use it to your advantage right now.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="seven-strategies" className="border border-primary/20 rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold text-left">Your Own Wealth Appraisal</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-foreground/70">
                        We will help you look at where you are now and what might be stopping you.
                        </p>
                        <p className="text-sm text-foreground/70">
                        Using our ‘W.E.A.L.T.H’ system, you will make a plan that shows the fastest way to reach your goals.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="behind-curtain" className="border border-primary/20 rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <PlayCircle className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold text-left">Live Mentoring from Experts</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <p className="text-sm text-foreground/70">
                        You will hear from Paul and Aniko Smith, Abi Hookway and Gordie Dutfield.
                        </p>
                        <p className="text-sm text-foreground/70">
                        They have built portfolios valued at 9 figures and they all started with normal lives just like you.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="profit-deals" className="border border-primary/20 rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold text-left">7 Simple Investment Strategies</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-foreground/70">
                        We teach real methods that are working today. Learn how to use Rent to Rent, Serviced Accommodation, Deal Packaging, Flips and more.
                        </p>
                        <p className="text-sm text-foreground/70">
                        Then all you need to do is pick the approach that suits your life and goals.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="questions-steps" className="border border-primary/20 rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MessageCircle className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold text-left">Helpful Tools & Examples</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-foreground/70">
                        Get worksheets, real case studies and simple tools you can use straight away.
                        </p>
                        <p className="text-sm text-foreground/70">
                        These are designed to help you take action without feeling stuck or unsure.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="congratulations" className="border border-green-200 rounded-lg px-4 bg-green-50/50">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Trophy className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="font-bold text-left text-green-700">Kickstart Your Journey</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="bg-green-100 rounded-lg p-4">
                        <p className="text-sm text-green-800 mb-2">
                        This event gives you a full start. Some people decide to continue with advanced coaching.
                        </p>
                        <p className="text-sm text-green-700">
                        If that feels right for you we will offer you further guidance.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* Bottom Section */}



            </div>
          </div>


        </div>
        <div className="text-center">
          <Button
            onClick={handleCheckoutClick}
            className="mt-8 sm:w-auto px-8 py-4 text-lg font-bold conversion-btn"
          >
            Secure Your Seat For £99 <ArrowRight className="ml-2" size={20} />
          </Button>

          <p className="mt-4 text-xs text-foreground/60">
            Get 80% Off. Save £396 <u><b>TODAY!</b></u>
          </p>
        </div>
      </section>



      {/* Trust Indicators - From DTOLanding */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="font-medium">CPD Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span className="font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">1,000's of Students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Social Proof - From DTOLeadMagnet */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              What Our Students Say About WTP
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    "Touchstone didn’t just teach me about property. It gave me purpose. It made me believe in myself again. Stop worrying and start moving. I spent six months frozen by fear. But the second I took action, everything started to shift!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Jade Hucklebridge</p>
                      <p className="text-xs text-foreground/60">Wealth Through Property Graduate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    "I always work on my gut feeling — this guy is probably the best one out there to follow. I joined the two-day course and realised I needed this education and in a couple of months after we bought our first property."                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>                    <div>
                      <p className="font-medium text-sm">Shannon Copley</p>
                      <p className="text-xs text-foreground/60">Wealth Through Property Graduate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    "Do the course, the best two days you'll ever spend. I’ve gained invaluable insights and, more importantly, the confidence to take the next step in my journey. If you're serious about transforming your future, this is the place to be!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Alison Miles</p>
                      <p className="text-xs text-foreground/60">Wealth Through Property Graduate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Value Stack Reinforcement */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Let's Be Clear About What <Highlight type="secondary">You're Getting</Highlight>
              </h2>
              <p className="text-lg text-foreground/80">
                This isn't just a training event, it's your complete property investment business in a box.
              </p>
            </div>

            <Card className="border-2 border-primary shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium">2-Day Live Training with Paul, Abi & Gordie</span>
                    <span className="font-bold text-primary">£495</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium">Extra Touchstone Education Voucher</span>
                    <span className="font-bold text-primary">£100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium">Best-selling E-Book Collection</span>
                    <span className="font-bold text-primary">£30</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium">Advanced Flipping Analysis Tool</span>
                    <span className="font-bold text-primary">£495</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium">Wealth Assessment Platform</span>
                    <span className="font-bold text-primary">£5,000</span>
                  </div>


                  <div className="bg-primary/10 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold">Total bundle value:</span>
                      <span className="text-3xl font-black text-primary">£6,120</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">Your Investment Today:</span>
                      <span className="text-4xl font-black text-green-600">£99</span>
                    </div>

                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
          <div className="text-center">
            <Button
              onClick={handleCheckoutClick}
              className="mt-8 sm:w-auto px-8 py-4 text-lg font-bold conversion-btn"
            >
              Secure Your Seat For £99 <ArrowRight className="ml-2" size={20} />
            </Button>

            <p className="mt-4 text-xs text-foreground/60">
              Get 80% Off. Save £396 <u><b>TODAY!</b></u>
            </p>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee - From DTOOffer */}
      <section className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-6">
              100% <Highlight type="green">Money-Back Guarantee</Highlight>
            </h2>

            <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
              Dive into day one with ease. If you don't find our training top-notch,
              we ensure a hassle-free refund. No questions asked.
            </p>

            <p className="text-sm text-foreground/60 italic">
              "We don't want your money - we want your commitment to success!"
            </p>
          </div>
        </div>
      </section>



      {/* Phone Order Alternative - Inspired by "Phone Order Exit-Pop" experiment */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Prefer to <Highlight type="primary">Speak to Someone</Highlight>?
              </h2>
              <p className="text-lg text-foreground/80">
                Our property investment specialists are standing by to answer your questions
                and secure your WTP spot over the phone.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Call Our Booking Line</h3>
                      <p className="text-foreground/70">Speak to a property investment specialist</p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">01302 897131</div>
                      <p className="text-sm text-foreground/70 mb-4">Free from landlines and mobiles</p>
                      <div className="text-sm">
                        <strong>Opening Hours:</strong><br/>
                        Monday - Friday: 9am - 5:30pm<br/>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Same £99 exclusive rate over the phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">All bonuses included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Personal property strategy discussion</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Why Call Instead of Ordering Online?</h3>

                  <div className="space-y-6">
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-bold text-secondary mb-2">Personalised Guidance</h4>
                      <p className="text-sm text-foreground/70">
                        Our bookings team can recommend the best event dates based on your schedule.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-green-600 mb-2">Answer Your Questions</h4>
                      <p className="text-sm text-foreground/70">
                        Get immediate answers about the event, what to expect
                        and how the WTP can benefit you.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-blue-600 mb-2">Flexible Date Options</h4>
                      <p className="text-sm text-foreground/70">
                        We can secure your booking for one of our upcoming event dates, or adjust it to a more suitable date if necessary.
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold text-purple-600 mb-2">Immediate Confirmation</h4>
                      <p className="text-sm text-foreground/70">
                        Secure your spot instantly and receive your confirmation details
                        immediately over the phone.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-foreground/60 mb-4">
                Still prefer to order online? No problem - both options include the same exclusive offer.
              </p>
              <Button
                onClick={handleCheckoutClick}
                className="px-8 py-4 text-lg font-bold conversion-btn"
              >
                Continue with Online Booking <ArrowRight className="ml-2" size={20} />
              </Button>
              <p className="mt-4 text-xs text-foreground/60">
                Get 80% Off. Save £396 <u><b>TODAY!</b></u>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA - From DTOOffer */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Don't Miss This <Highlight type="secondary">Exclusive Opportunity</Highlight>
            </h2>

            <p className="text-lg text-foreground/80 mb-8">
              This 80% discount is only available to people like you who registered for a webinar!
              Secure your seat and <b>start building your first property income stream this year</b>, before the price goes back up to £495.
            </p>

            <p className="text-lg text-foreground/80 mb-8">
              You can choose from a selection of date and times, and your ticket is valid for 12 months.
            </p>

            <Card className="border-2 border-primary shadow-2xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex justify-center items-baseline gap-4 mb-6">
                  <span className="text-5xl font-black text-primary">£99</span>
                  <div className="text-left">
                    <div className="text-2xl line-through text-gray-500">£495</div>
                    <div className="text-sm font-bold text-red-600">Get 80% Off. Save £396 <u>TODAY</u></div>
                  </div>
                </div>

                <Button
                  onClick={handleCheckoutClick}
                  className="w-full py-6 text-xl font-bold conversion-btn mb-4"
                >
                  Claim My WTP Spot Now <ArrowRight className="ml-2" size={20} />
                </Button>

                <div className="grid grid-cols-2 gap-4 text-xs text-foreground/60">
                  <div className="flex items-center justify-center">
                    <Shield className="h-3 w-3 mr-1" />
                    <span>Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Limited Dates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-sm text-foreground/60">
              <p>Questions? Contact our team:</p>
              <div className="flex justify-center gap-6 mt-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>01302 897131</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  <span>office@touchstoneeducation.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center mt-12 py-8 border-t border-neutral-200">
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
          Education) a cell of Duneira Enterprises Ltd PCC. All rights
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
        {/* Countdown 
        <WebinarCountdownUpsell 
          webinarDate={webinarDate}
          limitedSpots={100}
          spotsTaken={78}
        />*/}
      </div>
    </div>

  );
}