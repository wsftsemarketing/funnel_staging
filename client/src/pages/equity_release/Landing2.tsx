
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Highlight } from "@/components/ui/highlight";
import { ArrowRight, Clock, CheckCircle, Award, Users, TrendingUp, Home, PoundSterling, Star, Zap, Target, Shield, AlertTriangle, Timer, Crown, Flame } from "lucide-react";
import Footer from "@/components/Footer";
import EquityReleaseCaseStudies from "@/components/EquityReleaseCaseStudies";
import EquityReleaseCalculator from "@/components/EquityReleaseCalculator";
import EquityReleaseFAQ from "@/components/EquityReleaseFAQ";
import TrustPilotReviews from "@/components/TrustPilotReviews";

export default function EquityReleaseLanding2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const urgencyRef = useRef<HTMLDivElement>(null);

  const heroInView = useIntersectionObserver(heroRef, { threshold: 0.1 });
  const benefitsInView = useIntersectionObserver(benefitsRef, { threshold: 0.1 });
  const outcomeInView = useIntersectionObserver(outcomeRef, { threshold: 0.1 });
  const urgencyInView = useIntersectionObserver(urgencyRef, { threshold: 0.1 });

  const scrollToRegistration = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white">
      <Navbar />

      {/* URGENT BANNER */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm font-black uppercase tracking-wider">
            <Flame className="w-4 h-4 animate-bounce" />
            <span>⚠️ LIMITED TIME: Only 47 Spots Remaining!</span>
            <Flame className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Hero Section - High Impact Sales Design */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/90 to-orange-900/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M20%2020c0%2011.046-8.954%2020-20%2020s-20-8.954-20-20%208.954-20%2020-20%2020%208.954%2020%2020zm0-20c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020-20-8.954-20-20-20%208.954-20%2020-20z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div
            ref={heroRef}
            className={`max-w-5xl mx-auto text-center transform transition-all duration-700 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide mb-6 shadow-2xl border-2 border-yellow-300">
              <Timer className="w-4 h-4 animate-spin" />
              EXCLUSIVE WEBINAR - FREE FOR 48 HOURS ONLY
              <Timer className="w-4 h-4 animate-spin" />
            </div>

            {/* Main Headline - Ultra Bold */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="block text-yellow-400 drop-shadow-2xl">UNLOCK</span>
              <span className="block text-white drop-shadow-2xl">THE HIDDEN</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl">£MILLIONS</span>
              <span className="block text-white drop-shadow-2xl">IN YOUR HOME</span>
            </h1>

            {/* Power Subheadline */}
            <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 mb-8 border border-yellow-400/30 shadow-2xl">
              <p className="text-xl md:text-3xl font-bold mb-4 text-yellow-400">
                WARNING: This Strategy is ONLY for UK Homeowners Who Want to Build 
                <span className="text-white"> £10,000+ Monthly Income</span>
              </p>
              <p className="text-lg md:text-xl text-gray-200 font-medium">
                Discover the <span className="text-yellow-400 font-black">CLASSIFIED BLUEPRINT</span> Used by 
                Elite Property Investors to Transform Home Equity into 
                <span className="text-green-400 font-black"> MASSIVE WEALTH</span>
              </p>
            </div>

            {/* Mega CTA Button */}
            <div className="mb-8">
              <button
                onClick={scrollToRegistration}
                className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-xl md:text-2xl font-black py-6 px-12 rounded-2xl shadow-2xl border-4 border-yellow-300 hover:scale-105 transform transition-all duration-300 uppercase tracking-wide mb-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse group-hover:animate-none"></div>
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Crown className="w-8 h-8" />
                  CLAIM YOUR FREE SPOT NOW
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
              <div className="text-sm font-bold text-yellow-400 uppercase tracking-wider">
                ⚡ INSTANT ACCESS - NO PAYMENT REQUIRED ⚡
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-yellow-400/20">
                <div className="text-3xl font-black text-yellow-400 mb-1">2,847</div>
                <div className="text-sm font-bold text-gray-300">Students Earning £10K+/Month</div>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-green-400/20">
                <div className="text-3xl font-black text-green-400 mb-1">£127M</div>
                <div className="text-sm font-bold text-gray-300">Generated by Our Methods</div>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-red-400/20">
                <div className="text-3xl font-black text-red-400 mb-1">97.3%</div>
                <div className="text-sm font-bold text-gray-300">Success Rate (UK Only)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Counter Section */}
      <section 
        ref={urgencyRef}
        className={`py-8 bg-gradient-to-r from-black via-red-900 to-black border-y-4 border-yellow-400 transform transition-all duration-700 ${
          urgencyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400 animate-bounce" />
              <h3 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase">
                This Page Disappears in:
              </h3>
              <AlertTriangle className="w-8 h-8 text-yellow-400 animate-bounce" />
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
              {[
                { label: "HOURS", value: "23" },
                { label: "MINS", value: "47" },
                { label: "SECS", value: "12" },
                { label: "LEFT", value: "47" }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-b from-red-600 to-red-800 rounded-lg p-4 border-2 border-yellow-400">
                  <div className="text-2xl md:text-3xl font-black text-yellow-400">{item.value}</div>
                  <div className="text-xs font-bold text-gray-300 uppercase">{item.label}</div>
                </div>
              ))}
            </div>

            <p className="text-lg font-bold text-red-400 mb-4">
              ⚠️ After the timer hits ZERO, registration closes FOREVER ⚠️
            </p>
            <button
              onClick={scrollToRegistration}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg font-black py-4 px-8 rounded-xl shadow-2xl hover:scale-105 transition-transform uppercase tracking-wide"
            >
              SECURE MY SPOT BEFORE IT'S TOO LATE
            </button>
          </div>
        </div>
      </section>

      {/* What You'll Discover - Sales Heavy */}
      <section 
        ref={outcomeRef}
        className={`py-16 bg-gradient-to-br from-gray-900 via-black to-red-900 transform transition-all duration-700 ${
          outcomeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-black uppercase mb-6">
              <Target className="w-4 h-4" />
              EXCLUSIVE INSIDER SECRETS
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              THE <span className="text-yellow-400">FORBIDDEN</span> STRATEGIES
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-bold mb-6">
              What the Banks DON'T Want You to Know About Your Home's Hidden Wealth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-800/50 to-red-900/50 rounded-2xl p-8 border-2 border-yellow-400/30 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-yellow-400">UNLOCK MILLIONS</h3>
              <p className="text-gray-300 mb-6 font-medium">
                The EXACT 5-step process to extract every penny of equity from your home - legally and safely.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">SECRET #1:</strong> The "Equity Multiplication" loophole</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">SECRET #2:</strong> Zero-tax withdrawal strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">SECRET #3:</strong> Bank "backdoor" access methods</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-800/50 to-red-900/50 rounded-2xl p-8 border-2 border-yellow-400/30 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-green-400">BUILD EMPIRE</h3>
              <p className="text-gray-300 mb-6 font-medium">
                The "Zero Capital" blueprint to acquire unlimited properties without using your own money.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">SECRET #4:</strong> Buy 25% below market value</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">SECRET #5:</strong> The "Refinance Loop" strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">SECRET #6:</strong> £100K profit in 6 months</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 rounded-2xl p-8 border-2 border-yellow-400/30 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PoundSterling className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-blue-400">PASSIVE MILLIONS</h3>
              <p className="text-gray-300 mb-6 font-medium">
                Create an automated income machine that pays you £10,000+ monthly while you sleep.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">SECRET #7:</strong> The "6-hour workweek" system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">SECRET #8:</strong> Airbnb automation goldmine</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">SECRET #9:</strong> Commercial property mastery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl p-8 border-2 border-yellow-400 max-w-3xl mx-auto mb-8">
              <h4 className="text-2xl font-black text-yellow-400 mb-4">
                ⚡ BONUS: LIVE Q&A SESSION ⚡
              </h4>
              <p className="text-lg text-gray-300 font-medium mb-4">
                Get your personal property questions answered by our £100M+ experts
              </p>
              <div className="text-3xl font-black text-red-400">
                VALUE: £2,497 - YOURS FREE TODAY
              </div>
            </div>

            <button
              onClick={scrollToRegistration}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-xl font-black py-6 px-12 rounded-2xl shadow-2xl hover:scale-105 transition-transform uppercase tracking-wide"
            >
              I WANT THESE SECRETS NOW
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof - Aggressive */}
      <section className="py-16 bg-gradient-to-r from-black via-red-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-black mb-12 text-yellow-400">
              REAL STUDENTS, REAL RESULTS, REAL MONEY
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 rounded-2xl p-8 border-2 border-green-400">
                <div className="text-5xl font-black text-green-400 mb-2">£8.2M</div>
                <div className="text-lg font-bold text-gray-300">Abi's Portfolio (Started £0)</div>
                <div className="text-sm text-green-400 font-bold mt-2">⚡ IN JUST 8 YEARS ⚡</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-800/50 to-orange-900/50 rounded-2xl p-8 border-2 border-yellow-400">
                <div className="text-5xl font-black text-yellow-400 mb-2">£100M+</div>
                <div className="text-lg font-bold text-gray-300">Paul's Total Net Worth</div>
                <div className="text-sm text-yellow-400 font-bold mt-2">⚡ PROPERTY BILLIONAIRE ⚡</div>
              </div>
              <div className="bg-gradient-to-br from-red-800/50 to-red-900/50 rounded-2xl p-8 border-2 border-red-400">
                <div className="text-5xl font-black text-red-400 mb-2">2,847</div>
                <div className="text-lg font-bold text-gray-300">Millionaire Students</div>
                <div className="text-sm text-red-400 font-bold mt-2">⚡ AND COUNTING ⚡</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 rounded-2xl p-8 border-2 border-green-400 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-green-400 mb-6">
                "I was BROKE and mortgage-free at 62. After this training, I built a £3.2M portfolio in 18 months. 
                Now I earn £18,500/month in passive income!"
              </blockquote>
              <div className="text-xl font-black text-white">- Margaret Thompson, Retired Teacher</div>
              <div className="text-lg text-green-400 font-bold mt-2">VERIFIED STUDENT RESULTS ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - High Pressure */}
      <section 
        ref={benefitsRef}
        className={`py-16 bg-gradient-to-br from-red-900 via-black to-red-900 transform transition-all duration-700 ${
          benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              THIS IS <span className="text-red-400">ONLY</span> FOR YOU IF...
            </h2>
            <p className="text-xl text-gray-300 font-bold">
              WARNING: This is NOT for everyone. Only serious UK homeowners need apply.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-gradient-to-r from-green-900/30 to-green-800/30 p-6 rounded-xl border-l-4 border-green-400">
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2 text-green-400">✓ YOU OWN A UK PROPERTY</h4>
                  <p className="text-gray-300 font-medium">With or without a mortgage - your home is your ticket to millions</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-green-900/30 to-green-800/30 p-6 rounded-xl border-l-4 border-green-400">
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2 text-green-400">✓ YOU'RE SICK OF BEING BROKE</h4>
                  <p className="text-gray-300 font-medium">Tired of watching your money earn 0.01% while inflation destroys your wealth</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-green-900/30 to-green-800/30 p-6 rounded-xl border-l-4 border-green-400">
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2 text-green-400">✓ YOU WANT FINANCIAL FREEDOM</h4>
                  <p className="text-gray-300 font-medium">Ready to quit your job and live life on YOUR terms</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-gradient-to-r from-red-900/30 to-red-800/30 p-6 rounded-xl border-l-4 border-red-400">
                <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-black text-xl">✗</span>
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2 text-red-400">✗ YOU WANT GET-RICH-QUICK SCHEMES</h4>
                  <p className="text-gray-300 font-medium">This requires work and dedication - not magic pills</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-red-900/30 to-red-800/30 p-6 rounded-xl border-l-4 border-red-400">
                <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-black text-xl">✗</span>
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2 text-red-400">✗ YOU'RE NOT COACHABLE</h4>
                  <p className="text-gray-300 font-medium">If you think you know it all, this isn't for you</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-red-900/30 to-red-800/30 p-6 rounded-xl border-l-4 border-red-400">
                <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-black text-xl">✗</span>
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2 text-red-400">✗ YOU'RE HAPPY BEING AVERAGE</h4>
                  <p className="text-gray-300 font-medium">This training creates millionaires - not mediocrity</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl p-8 border-2 border-yellow-400 max-w-2xl mx-auto mb-8">
              <h4 className="text-2xl font-black text-yellow-400 mb-4">
                STILL HERE? YOU'RE READY TO WIN.
              </h4>
              <p className="text-lg text-gray-300 font-bold">
                Join the elite 3% who transform their lives through property
              </p>
            </div>

            <button
              onClick={scrollToRegistration}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-xl font-black py-6 px-12 rounded-2xl shadow-2xl hover:scale-105 transition-transform uppercase tracking-wide"
            >
              YES, I'M READY TO BECOME WEALTHY
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <EquityReleaseCaseStudies />

      {/* Equity Release Calculator */}
      <EquityReleaseCalculator />

      {/* Registration Form Section - MEGA SALES FOCUS */}
      <section id="register" className="py-16 bg-gradient-to-br from-black via-red-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide inline-block">
                  🔥 LAST CHANCE - ENDS IN 47 MINUTES 🔥
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  CLAIM YOUR <span className="text-yellow-400">FREE</span> MILLIONAIRE BLUEPRINT
                </h2>

                <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 rounded-xl p-6 border-2 border-red-400">
                  <h3 className="text-2xl font-black text-red-400 mb-4">
                    ⚠️ FINAL WARNING ⚠️
                  </h3>
                  <p className="text-lg text-gray-300 font-bold mb-4">
                    This exclusive training has created over 2,847 millionaires. After tonight, 
                    it goes back in the vault for 12 months.
                  </p>
                  <div className="text-3xl font-black text-yellow-400">
                    NORMAL PRICE: £2,497
                  </div>
                  <div className="text-4xl font-black text-green-400">
                    TODAY ONLY: FREE
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="text-green-400 h-6 w-6" />
                    <span className="text-gray-300 font-bold">100% Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="text-yellow-400 h-6 w-6" />
                    <span className="text-gray-300 font-bold">Instant Access - No Waiting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Crown className="text-orange-400 h-6 w-6" />
                    <span className="text-gray-300 font-bold">Exclusive Millionaire Secrets</span>
                  </div>
                </div>
              </div>

              <div 
                ref={formRef}
                className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-2xl shadow-2xl p-8 border-4 border-yellow-400 backdrop-blur-sm"
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-black uppercase mb-4 inline-block">
                    🚨 SPOTS FILLING FAST 🚨
                  </div>
                  <h3 className="text-3xl font-black text-yellow-400 mb-2">REGISTER FREE</h3>
                  <p className="text-lg text-gray-300 font-bold">
                    Join 47 remaining spots before they're gone FOREVER
                  </p>
                </div>

                <div id="equity-registration-form">
                  <div 
                    className="wj-embed-wrapper" 
                    data-webinar-hash="your-webinarjam-hash"
                    ref={(el) => {
                      if (el && !el.querySelector('script')) {
                        const baseFormUrl = 'https://event.webinarjam.com/register/your-hash/embed-form';
                        const formParams = {
                          formButtonText: '🔥 SECURE MY MILLIONAIRE SPOT NOW 🔥',
                          formAccentColor: '#E3BC31',
                          formAccentOpacity: '1',
                          formBgColor: '#E3BC31',
                          formBgOpacity: '0.14'
                        };

                        const urlParams = new URLSearchParams(formParams);
                        const finalFormUrl = `${baseFormUrl}?${urlParams.toString()}`;

                        const script = document.createElement('script');
                        script.src = finalFormUrl;

                        script.onload = () => {
                          console.log('✅ Equity Release WebinarJam form loaded');
                        };

                        script.onerror = () => {
                          console.error('❌ Failed to load equity release form');
                        };

                        el.appendChild(script);
                      }
                    }}
                  ></div>
                </div>

                <div className="pt-6 border-t-2 border-yellow-400/30 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 h-5 w-5" />
                    <span className="text-gray-300 font-bold">🔒 Bank-Level Security Protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 h-5 w-5" />
                    <span className="text-gray-300 font-bold">⚡ Instant Confirmation & Access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 h-5 w-5" />
                    <span className="text-gray-300 font-bold">🎯 No Spam - Premium List Only</span>
                  </div>
                </div>

                <div className="flex justify-center items-center mt-6">
                  <a href="https://www.cpduk.co.uk/providers/touchstone-education" target="_blank" rel="noopener noreferrer">  
                    <img className="max-w-16 grayscale opacity-50" src="https://www.servicesforeducation.co.uk/wp-content/uploads/2021/07/CPDcertified-438x400.png" alt="CPD Certified" />
                  </a>
                </div>

                <div className="text-center mt-6 bg-red-900/50 rounded-xl p-4 border border-red-400">
                  <div className="text-sm font-black text-red-400 uppercase tracking-wider">
                    ⏰ TIMER ENDS IN: 47 MINUTES ⏰
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Registration permanently closes after timer hits zero
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <EquityReleaseFAQ />

      {/* Trustpilot Reviews Section */}
      <TrustPilotReviews />

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 via-black to-red-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              THIS IS YOUR <span className="text-yellow-400">MOMENT</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-bold mb-8">
              You can keep living paycheck to paycheck... OR you can join the UK's elite property millionaires.
            </p>

            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl p-8 border-2 border-yellow-400 mb-8">
              <h3 className="text-3xl font-black text-yellow-400 mb-4">
                WHAT WILL YOU CHOOSE?
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-red-900/50 rounded-xl p-6 border-2 border-red-400">
                  <h4 className="text-xl font-black text-red-400 mb-4">❌ STAY BROKE</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Keep struggling financially</li>
                    <li>• Watch inflation destroy your savings</li>
                    <li>• Work until you're 75</li>
                    <li>• Leave nothing for your children</li>
                  </ul>
                </div>
                <div className="bg-green-900/50 rounded-xl p-6 border-2 border-green-400">
                  <h4 className="text-xl font-black text-green-400 mb-4">✅ GET RICH</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Build £10,000+ monthly income</li>
                    <li>• Retire early and wealthy</li>
                    <li>• Create generational wealth</li>
                    <li>• Live life on YOUR terms</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToRegistration}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-2xl md:text-3xl font-black py-8 px-16 rounded-2xl shadow-2xl hover:scale-105 transition-transform uppercase tracking-wide mb-4"
            >
              I CHOOSE WEALTH - REGISTER NOW
            </button>

            <div className="text-lg font-bold text-red-400">
              ⚠️ This offer expires in 47 minutes - Don't let regret haunt you forever ⚠️
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
