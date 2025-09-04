import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Highlight } from "@/components/ui/highlight";
import { ArrowRight, CheckCircle, Star, Shield, Clock, Award, Users, Gift, TrendingUp, PoundSterling, Download, Calculator, BookOpen, Ticket } from "lucide-react";
import Footer from "@/components/Footer";
import HostInformation from "@/components/HostInformation";
import { Card, CardContent } from "@/components/ui/card";
import TrustPilotReviews from "@/components/TrustPilotReviews";
import { Button } from "@/components/ui/button";

export default function SalesOfferPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const bonusesRef = useRef<HTMLDivElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const heroInView = useIntersectionObserver(heroRef, { threshold: 0.1 });
  const benefitsInView = useIntersectionObserver(benefitsRef, { threshold: 0.1 });
  const bonusesInView = useIntersectionObserver(bonusesRef, { threshold: 0.1 });
  const guaranteeInView = useIntersectionObserver(guaranteeRef, { threshold: 0.1 });
  const pricingInView = useIntersectionObserver(pricingRef, { threshold: 0.1 });

  const scrollToOffer = () => {
    const element = document.getElementById("offer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }; 

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-6 md:pt-6 pb-8 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-bold text-primary uppercase tracking-wide">
              YOUR EXCLUSIVE WEBINAR-ONLY OFFER
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[1.05] tracking-tight capitalize">
              <Highlight type="secondary">Wealth Through</Highlight> Property{" "}
              <Highlight type="green">Bundle</Highlight>
            </h1>

            <p className="text-lg md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto font-medium">
              Join us for 2 days at the UK's leading property training event. Train with our experienced mentors and accelerate your journey with{" "}
              <span className="font-extrabold text-primary">
                  <Highlight type="strike-underline">the latest property strategies!</Highlight>
              </span>
            </p>

            {/* Hero Image */}
            <div className="mb-8 max-w-4xl mx-auto">
              <img 
                src="https://spark.thrivecart.com/0x0/user_assets%2FNOS2291X%2Fuploads%2Fimages%2Fbundle-1-1705407110.png" 
                alt="Wealth Through Property Bundle" 
                className="w-full h-auto"
              />
            </div>

            <div className="mb-6 max-w-xl mx-auto px-4 sm:px-0">
              <button
                onClick={scrollToOffer}
                className="conversion-btn transition duration-150 ease-in-out motion-scale-in-[0.5] motion-preset-bounce w-full text-center py-4 mb-4 uppercase text-sm sm:text-base"
              >
                YES, Secure My Ticket + Gifts Now! <ArrowRight className="ml-2 inline-block" size={18} />
              </button>
              <div className="text-sm font-bold text-primary text-center">
                Limited Availability - Book Now!
              </div>
            </div>

            {/* As Featured In */}
            <div className="flex flex-col items-center justify-center gap-4 text-sm text-neutral-600">
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                AS FEATURED IN
              </div>
              <div className="flex items-center justify-center gap-6 opacity-60">
                <div className="text-neutral-400 font-semibold">BBC</div>
                <div className="text-neutral-400 font-semibold">ITV</div>
                <div className="text-neutral-400 font-semibold">The Telegraph</div>
                <div className="text-neutral-400 font-semibold">Financial Times</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits Section */}
      <section 
        ref={benefitsRef}
        className={`py-12 md:py-20 bg-neutral-50 transform transition-all duration-700 ${
          benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              During The Training <Highlight type="primary">You'll Discover</Highlight>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Comprehensive training and guidance</h4>
                  <p className="text-neutral-600 text-sm">Learn how to access wealth through proven property strategies</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Proven millionaire mindset techniques</h4>
                  <p className="text-neutral-600 text-sm">Create lasting success with the right mental framework</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Accessible data and resources</h4>
                  <p className="text-neutral-600 text-sm">Launch and grow your property investment faster</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Build connections and network</h4>
                  <p className="text-neutral-600 text-sm">Connect with like-minded property investors</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">CPD certificate upon completion</h4>
                  <p className="text-neutral-600 text-sm">Enhance your professional credentials</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToOffer}
              className="conversion-btn text-center py-4 px-8 uppercase"
            >
              YES, Secure My Ticket + Gifts Now! <ArrowRight className="ml-2 inline-block" size={18} />
            </button>
            <div className="text-sm font-bold text-primary mt-2">
              Limited Availability - Book Now!
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Bonuses Section */}
      <section 
        ref={bonusesRef}
        className={`py-12 md:py-20 bg-white transform transition-all duration-700 ${
          bonusesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold text-primary bg-primary/5 rounded-full border border-primary/10">
              <Gift className="w-3 h-3 mr-1" />
              EXCLUSIVE BONUSES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              PLUS! Your <Highlight type="primary">Exclusive Bonuses</Highlight>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-neutral-50 rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">GIFT #1 £100 Touchstone Voucher Off Our Courses</h3>
              <p className="text-neutral-600">
                A Touchstone voucher that you can use for any of our courses in the future, or why not bring a friend along to Wealth Through Property too?
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">GIFT #2 Best Selling E-Book Bundle (Value £30)</h3>
              <p className="text-neutral-600">
                Our years of property investment experience condensed into books for you to learn from and enjoy.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">GIFT #3 Deal Analyser (Value £495)</h3>
              <p className="text-neutral-600">
                Mastering real estate flips? This analyser unveils the secrets of flipping. Learn to estimate property value, calculate project profitability, and identify winning deals. Unleash the power of data to dominate the real estate market.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">GIFT #4 Net Worth Calculator (Value £5,000)</h3>
              <p className="text-neutral-600">
                Ready to take control of your financial future? Start now with our Net Worth Calculator – because when you know better, you do better.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToOffer}
              className="conversion-btn text-center py-4 px-8 uppercase"
            >
              YES, Secure My Ticket + Gifts Now! <ArrowRight className="ml-2 inline-block" size={18} />
            </button>
            <div className="text-sm font-bold text-primary mt-2">
              Limited Availability - Book Now!
            </div>
          </div>
        </div>
      </section>

      {/* Early Bird Pricing Component */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
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
                    wealth through property, secure your spot at our
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

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">2 Full Days of Expert Training</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">Live Deal Analysis & Case Studies</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">Networking with Like-Minded Investors</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">Actionable Strategies You Can Implement</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <button className="conversion-btn w-full text-center py-6 text-xl uppercase font-black mb-4">
                      Secure My Early Bird Ticket Now! <ArrowRight className="ml-2 inline-block" size={20} />
                    </button>
                    <div className="text-sm font-bold text-secondary">
                      Save £396 - Limited Time Only!
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-neutral-200">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-neutral-600">Money Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm text-neutral-600">CPD Certified</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Host Information Section */}
      <section className="py-12 md:py-20 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Your <Highlight type="primary">Expert Hosts</Highlight>
            </h2>
            <p className="text-lg text-neutral-600">
              Learn from two of the UK's most successful property investors with over 40 years of combined experience.
            </p>
          </div>
          <HostInformation width="wide" />
        </div>
      </section>


      {/* Money Back Guarantee Section */}
      <section 
        ref={guaranteeRef}
        className={`py-12 md:py-20 bg-neutral-50 transform transition-all duration-700 ${
          guaranteeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <Highlight type="green">Money Back</Highlight> Guarantee
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg text-neutral-600 mb-6">
                  We truly believe we offer the most comprehensive Property training you'll find anywhere in the UK, and we want to make sure we back that up with a risk-free money back guarantee.
                </p>

                <p className="text-lg text-neutral-600 mb-6">
                  If you attend Day 1 of our Wealth Through Property event and don't have a positive experience for ANY reason, just let us know and we will refund 100% of your purchase.
                </p>

                <p className="text-lg text-neutral-600 mb-6">
                  Buying anything online can be a daunting task, so we want you to realise that there is absolutely ZERO risk in attending this event. If you don't like it, just let us know and you'll receive a full refund - no hard feelings and no questions asked.
                </p>

                <p className="text-neutral-600">
                  We have 9 to 5 email and phone support during weekdays so please contact us if you need assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trustpilot Reviews Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <Highlight type="primary">THIS IS WHY</Highlight> WE DO WHAT WE DO
            </h3>
          </div>
        </div>
      </section>

      <TrustPilotReviews />

      {/* Pricing Section */}
      <section 
        id="offer"
        ref={pricingRef}
        className={`py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 transform transition-all duration-700 ${
          pricingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              <Highlight type="primary">WHAT YOU'LL GET</Highlight>
            </h2>
            <p className="text-lg text-neutral-600">
              Exclusive Wealth Through Property Webinar Bundle
            </p>
          </div>

          <div className="max-w-2xl mx-auto px-4 sm:px-0">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-neutral-100 relative overflow-hidden">
              {/* Price Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="text-4xl sm:text-6xl font-black text-neutral-400 line-through mb-2">£6,120</div>
                <div className="text-6xl sm:text-8xl font-black text-primary mb-4">£99</div>
              </div>

              {/* What's Included */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">Wealth Through Property Online Ticket (Value £495)</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">£100 Touchstone Voucher Off Our Courses</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">Best Selling E-Book Bundle (Value £30)</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">Deal Analyser (Value £495)</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">Net Worth Calculator (Value £5,000)</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="conversion-btn w-full text-center py-6 text-xl uppercase font-black">
                  YES, Secure My Ticket + Gifts Now! <ArrowRight className="ml-2 inline-block" size={20} />
                </button>
                <div className="text-sm font-bold text-primary mt-3">
                  Limited Availability - Book Now!
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-neutral-600">Money Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm text-neutral-600">CPD Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Main Description */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                The UK's Leading <Highlight type="primary">2-Day Online</Highlight> Training Event
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Teaching Expert wealth creation strategies to thousands of people across the UK and beyond to multiply their current incomes, using property.
              </p>
            </div>

            {/* What You'll Learn Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
              {/* Main Learning Points */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left">
                  <Highlight type="secondary">What Will You Learn?</Highlight>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">7 Streams of Income</h4>
                      <p className="text-neutral-600">Diversify your wealth creation with multiple property income streams</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Discover, Analyse & Close Deals, live!</h4>
                      <p className="text-neutral-600">Watch real deals being analyzed and closed in real-time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Raising Finances (Yours or Investors)</h4>
                      <p className="text-neutral-600">Master the art of funding your property investments</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Choosing Your Best Strategy</h4>
                      <p className="text-neutral-600">Find the perfect property strategy that matches your goals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonuses Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left">
                  <Highlight type="green">Exclusive Bonuses</Highlight>
                </h3>

                {/* Main Bonuses */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4 text-secondary">Training Bonuses:</h4>
                  <div className="space-y-3">
                    {[
                      "Becoming Exceptional",
                      "Success Stories", 
                      "Millionaire Mindset",
                      "The Secret To Wealth",
                      "12-Month Wealth Plan",
                      "Online Networking"
                    ].map((bonus, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">{bonus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Webinar Bundle Bonuses */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-primary">Webinar Bundle Bonuses:</h4>
                  <div className="space-y-3">
                    {[
                      "£100 Voucher Off Our Courses",
                      "Best Selling E-Book Bundle", 
                      "Net Worth Calculator"
                    ].map((bonus, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <Gift className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">{bonus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Section */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 md:p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-lg">⚠️</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-red-800 text-lg md:text-xl mb-2">Warning:</h4>
                  <p className="text-red-700 text-base md:text-lg font-medium mb-4">
                    <strong>92% of our online training events sell out.</strong> Advance booking advised to avoid disappointment.
                  </p>
                  <div className="text-center">
                    <button
                      onClick={scrollToOffer}
                      className="conversion-btn text-center py-4 px-6 md:px-8 uppercase text-sm md:text-base"
                    >
                      Secure Your Spot Now! <ArrowRight className="ml-2 inline-block" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
