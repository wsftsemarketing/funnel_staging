import React, { useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
  Users,
  Award,
  Star,
  CircleCheck,
  CheckCircle,
  Home,
  TrendingUp,
  Play,
  Eye,
  PoundSterling,
  Check,
} from "lucide-react";
import EquityReleaseCalculator from "@/components/EquityReleaseCalculator";
import EquityReleaseCaseStudies from "@/components/EquityReleaseCaseStudies";
import EquityReleaseFAQ from "@/components/EquityReleaseFAQ";
import TrustPilotReviews from "@/components/TrustPilotReviews";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import HostInformation from "@/components/HostInformation";
import Navbar from "@/components/Navbar";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Highlight } from "@/components/ui/highlight";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AskQuestionSection from "@/components/AskQuestionSection";
import AskQuestionsSectionCompact from "@/components/AskQuestionsSectionCompact";
import Footer from "@/components/Footer";

export default function EquityReleaseLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);

  const heroInView = useIntersectionObserver(heroRef, { threshold: 0.1 });
  const benefitsInView = useIntersectionObserver(benefitsRef, {
    threshold: 0.1,
  });
  const outcomeInView = useIntersectionObserver(outcomeRef, { threshold: 0.1 });

  const [activePreview, setActivePreview] = useState("office-tour");

  const scrollToRegistration = () => {
    const element = document.getElementById("register");
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
              heroInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-bold text-primary uppercase tracking-wide">
              FREE WEBINAR
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[1.05] tracking-tight capitalize">
              <Highlight type="secondary">Unlock</Highlight> The Hidden{" "}
              <Highlight type="green">Wealth</Highlight> In Your Home
            </h1>

            <p className="text-lg md:text-2xl text-foreground/90 mb-6 max-w-2xl mx-auto font-medium">
              Discover how homeowners are using their property equity to make{" "}
              <span className="font-extrabold text-primary">
                <Highlight type="marker">£10,000+ </Highlight>
              </span>{" "}
              of monthly passive income through strategic property investment.
            </p>

            <div className="mb-4 max-w-xl mx-auto">
              <button
                onClick={scrollToRegistration}
                className="conversion-btn w-full text-center py-4 mb-4 uppercase"
              >
                Watch Free Training Now{" "}
                <ArrowRight className="ml-2 inline-block" size={18} />
              </button>
            </div>

            <div className="flex flex-col sm:flex-col items-center justify-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>60 minutes of expert training</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Join 2,000+ UK property investors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equity Education Section
      <EquityEducationSection /> */}

      {/* What You'll Discover Section */}
      <section
        ref={outcomeRef}
        className={`py-12 md:py-20 bg-neutral-50 transform transition-all duration-700 ${
          outcomeInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What You'll <Highlight type="primary">Discover</Highlight>
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-6">
              Join Abi Hookway and Paul Smith as they reveal exactly how to
              transform your home equity into a wealth-building property
              portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Release Your Equity</h3>
              <p className="text-neutral-600 mb-4">
                Learn the exact strategies to safely access the wealth locked in
                your home - even if you're mortgage-free or close to retirement.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>5 ways to access your property equity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Tax-efficient withdrawal strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mortgage vs remortgage options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Your Portfolio</h3>
              <p className="text-neutral-600 mb-4">
                Discover the proven buy-refurb-refinance strategy that lets you
                build wealth while getting your money back out.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>How to buy 25% below market value</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Zero capital gains tax strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>£50-100k profit per flip (6 months)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <PoundSterling className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Generate Passive Income
              </h3>
              <p className="text-neutral-600 mb-4">
                Create a portfolio that pays you £10,000+ per month in passive
                income - working just 6 hours per week.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Service accommodation (Airbnb) mastery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Commercial property strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Using pensions for property investment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Host Information */}
          <div className="mt-16">
            <HostInformation width="wide" />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">
              Trusted by <Highlight type="primary">2,000+</Highlight> UK
              Property Investors
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-neutral-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">£8M</div>
                <div className="text-sm text-neutral-600">
                  Portfolio built by Abi in 8 years
                </div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  £100M+
                </div>
                <div className="text-sm text-neutral-600">
                  Paul's net worth from property
                </div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-neutral-600">
                  Years of combined experience
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/90 to-primary rounded-xl p-6 mb-8 relative shadow-lg">
              <blockquote className="text-lg font-medium text-white mb-4 mt-8">
                "I was mortgage-free but my money was just sitting there earning
                nothing. After watching this webinar, I used my equity to build
                a £3M portfolio. Now I earn more in passive income than I ever
                did working!"
              </blockquote>
              <div className="text-white font-semibold mb-8">
                - Karen, Former Teacher
              </div>

              {/* Verification Badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 mb-2">
                  <CircleCheck className="w-6 h-6 text-green-400" />
                  <span className="text-white text-xs font-semibold">
                    Verified Story
                  </span>
                </div>
              </div>

              {/* Touchstone Logo Watermark */}

              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-1 bg-white/70 backdrop-blur-sm rounded-sm px-3 py-1 border border-neutral-200">
                  <Logo variant="grayscale" size="xs" className="opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className={`py-12 md:py-20 bg-neutral-50 transform transition-all duration-700 ${
          benefitsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perfect For <Highlight type="secondary">UK Homeowners</Highlight>{" "}
              Who Want More
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    You own your home (with or without a mortgage)
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Whether you're mortgage-free or still paying, you can access
                    your equity to invest
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    You want to secure your financial future
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Tired of low savings rates and want your money working
                    harder for you
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    You're approaching or in retirement
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Want to supplement your pension with reliable passive income
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    You want to help your children financially
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Use property investment to build generational wealth for
                    your family
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    You don't want to manage tenants daily
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Learn hands-off strategies like commercial property and
                    service accommodation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    You want proven, legal strategies
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    No get-rich-quick schemes - just time-tested wealth building
                    methods
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToRegistration}
              className="conversion-btn text-center py-4 px-8 uppercase"
            >
              Yes, I Want Financial Freedom{" "}
              <ArrowRight className="ml-2 inline-block" size={18} />
            </button>
          </div>
          <div className="flex justify-center items-center mt-6">
            <a
              href="https://www.cpduk.co.uk/providers/touchstone-education"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-w-16 grayscale opacity-50"
                src="https://www.servicesforeducation.co.uk/wp-content/uploads/2021/07/CPDcertified-438x400.png"
                alt="CPD Certified"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <EquityReleaseCaseStudies />

      {/* Equity Release Calculator */}
      <div id="calculator">
        <EquityReleaseCalculator />
      </div>

      {/* Registration Form Section */}
      <section id="register" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block py-1 mb-6 text-sm font-bold text-primary uppercase tracking-wide">
                  FREE WEBINAR
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Wealth Through Property:{" "}
                  <Highlight type="primary">Equity Release</Highlight>{" "}
                  Masterclass
                </h2>
                <p className="text-lg md:text-xl text-neutral-600">
                  Join Abi and Paul Smith for this exclusive training on how to
                  turn your home equity into a wealth-building property empire.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="text-primary h-5 w-5" />
                    <span className="text-neutral-700">
                      Presented by multi-millionaire property experts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary h-5 w-5" />
                    <span className="text-neutral-700">
                      60 minutes of actionable strategies
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-primary h-5 w-5" />
                    <span className="text-neutral-700">
                      Limited spaces available
                    </span>
                  </div>
                </div>
              </div>

              <div
                ref={formRef}
                className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100"
              >
                <h3 className="text-2xl font-bold mb-2">Register Free</h3>
                <p className="text-md text-neutral-600 max-w-2xl mx-auto mb-6">
                  Secure your spot for this{" "}
                  <span className="font-extrabold text-primary">
                    <Highlight type="marker">exclusive training</Highlight>
                  </span>{" "}
                  session.
                </p>

                <div id="equity-registration-form">
                  <div
                    className="wj-embed-wrapper"
                    data-webinar-hash="your-webinarjam-hash"
                    ref={(el) => {
                      if (el && !el.querySelector("script")) {
                        // Generate WebinarJam form URL
                        const baseFormUrl =
                          "https://event.webinarjam.com/register/your-hash/embed-form";
                        const formParams = {
                          formButtonText: "Reserve My Free Spot Now",
                          formAccentColor: "#E3BC31",
                          formAccentOpacity: "1",
                          formBgColor: "#E3BC31",
                          formBgOpacity: "0.14",
                        };

                        const urlParams = new URLSearchParams(formParams);
                        const finalFormUrl = `${baseFormUrl}?${urlParams.toString()}`;

                        const script = document.createElement("script");
                        script.src = finalFormUrl;

                        script.onload = () => {
                          console.log(
                            "✅ Equity Release WebinarJam form loaded",
                          );
                        };

                        script.onerror = () => {
                          console.error(
                            "❌ Failed to load equity release form",
                          );
                        };

                        el.appendChild(script);
                      }
                    }}
                  ></div>
                </div>

                <div className="pt-6 border-t border-neutral-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <CircleCheck className="text-green-600 h-4 w-4" />
                    <span className="text-neutral-700 text-sm">
                      Completely free - no hidden costs
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheck className="text-green-600 h-4 w-4" />
                    <span className="text-neutral-700 text-sm">
                      Instant access after registration
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheck className="text-green-600 h-4 w-4" />
                    <span className="text-neutral-700 text-sm">
                      Your information is secure and private
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center mt-6">
                  <a
                    href="https://www.cpduk.co.uk/providers/touchstone-education"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="max-w-16 grayscale opacity-50"
                      src="https://www.servicesforeducation.co.uk/wp-content/uploads/2021/07/CPDcertified-438x400.png"
                      alt="CPD Certified"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the scenes - Modern Design with Highlights */}
      <section className="py-12 md:py-20 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold text-primary bg-primary/5 rounded-full border border-primary/10">
              <Eye className="w-3 h-3 mr-1" />
              EXCLUSIVE PREVIEW
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Behind-The-Scenes <Highlight type="primary">Sneak Peek</Highlight>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Get an exclusive preview of what to expect during our equity
              release masterclass.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs
              defaultValue="office-tour"
              className="w-full"
              onValueChange={setActivePreview}
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full md:w-auto bg-white shadow-sm border border-neutral-200">
                  <TabsTrigger value="office-tour" className="font-semibold">
                    Office Tour
                  </TabsTrigger>
                  <TabsTrigger
                    value="deal-walkthrough"
                    className="font-semibold"
                  >
                    Deal Analysis
                  </TabsTrigger>
                  <TabsTrigger
                    value="webinar-preview"
                    className="font-semibold"
                  >
                    Webinar Preview
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Office Tour Content */}
              <TabsContent value="office-tour" className="mt-2">
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-video bg-neutral-100 rounded-xl overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-neutral-800/60 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg mb-4 mx-auto">
                            <Play className="w-6 h-6 text-primary ml-1" />
                          </div>
                          <p className="text-white font-semibold">
                            Watch Office Tour
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          Visit Our{" "}
                          <Highlight type="secondary">Investment HQ</Highlight>
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          Step inside our headquarters where we analyze and
                          structure the UK's most profitable{" "}
                          <Highlight type="glow">
                            equity release property deals
                          </Highlight>
                          .
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900">
                              Meet The Expert Team
                            </h4>
                            <p className="text-neutral-600 text-sm">
                              Property specialists who guide your equity release
                              journey
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-4 h-4 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900">
                              Deal Research Hub
                            </h4>
                            <p className="text-neutral-600 text-sm">
                              Where we identify{" "}
                              <Highlight type="glow">
                                high-ROI opportunities
                              </Highlight>
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button onClick={scrollToRegistration} className="group">
                        Register to See Full Tour
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Deal Walkthrough Content */}
              <TabsContent value="deal-walkthrough" className="mt-2">
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          <Highlight type="primary">£400K</Highlight> Equity
                          Release Success
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          Watch how we helped Sarah release £400k from her home
                          and turn it into a £2.1M property portfolio generating
                          £12,500 monthly income.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              Equity Released
                            </p>
                            <p className="text-xl font-bold text-primary">
                              £400,000
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              Portfolio Value
                            </p>
                            <p className="text-xl font-bold text-secondary">
                              £2.1M
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              Monthly Income
                            </p>
                            <p className="text-xl font-bold text-green-600">
                              £12,500
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <PoundSterling className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900">
                              Full Strategy Breakdown
                            </h4>
                            <p className="text-neutral-600 text-sm">
                              Step-by-step equity release and reinvestment
                              process
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Home className="w-4 h-4 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900">
                              Property Selection
                            </h4>
                            <p className="text-neutral-600 text-sm">
                              How we chose the perfect investment properties for
                              maximum returns
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={scrollToRegistration}
                        variant="secondary"
                        className="group"
                      >
                        Get Full Strategy Breakdown
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>

                    <div className="relative aspect-video bg-neutral-100 rounded-xl overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-neutral-800/60 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg mb-4 mx-auto">
                            <Play className="w-6 h-6 text-secondary ml-1" />
                          </div>
                          <p className="text-white font-semibold">
                            Watch Case Study
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Webinar Preview Content */}
              <TabsContent value="webinar-preview" className="mt-2">
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="relative aspect-video bg-neutral-100 rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-neutral-800/60 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg mb-4 mx-auto">
                              <Play className="w-8 h-8 text-primary ml-1" />
                            </div>
                            <p className="text-white font-semibold text-lg">
                              Watch Webinar Preview
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden shadow-sm relative cursor-pointer hover:shadow-md transition-all duration-300 group border border-primary/20">
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg overflow-hidden shadow-sm relative cursor-pointer hover:shadow-md transition-all duration-300 group border border-secondary/20">
                          <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden shadow-sm relative cursor-pointer hover:shadow-md transition-all duration-300 group border border-green-200">
                          <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          Inside The{" "}
                          <Highlight type="secondary">Webinar</Highlight>
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          Experience our comprehensive equity release training
                          with live examples, real case studies, and interactive
                          Q&A sessions.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900">
                              Live Deal Analysis
                            </h4>
                            <p className="text-neutral-600 text-sm">
                              Real-time breakdown of equity release
                              opportunities
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900">
                              Expert Q&A
                            </h4>
                            <p className="text-neutral-600 text-sm">
                              Get your specific questions answered
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900">
                              Actionable Resources
                            </h4>
                            <p className="text-neutral-600 text-sm">
                              Download templates and guides shared during
                              training
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                        <blockquote className="text-sm text-neutral-700 italic mb-3">
                          "This webinar completely transformed my understanding
                          of equity release. I released £320k and built a £1.8M
                          portfolio in 14 months!"
                        </blockquote>
                        <p className="text-sm font-semibold text-primary">
                          — Jennifer Walsh, Property Investor
                        </p>
                      </div>

                      <Button
                        onClick={scrollToRegistration}
                        className="w-full group"
                      >
                        Register for Full Access
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <EquityReleaseFAQ />

      {/* Trustpilot Reviews Section */}
      <TrustPilotReviews />

      {/* Ask Questions Section */}
      <AskQuestionSection />

      <AskQuestionsSectionCompact />

      <Footer />
    </div>
  );
}
