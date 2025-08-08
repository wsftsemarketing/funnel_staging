import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Highlight } from "@/components/ui/highlight";
import { Play, CheckCircle, Lock, Award, Video, Clock, Users } from "lucide-react";
import { ArrowRight, Shield } from "lucide-react";
import { mixpanelTracker } from "@/lib/mixpanelTracking";


interface OptInProps {
  onSubmit?: (data: { name: string; email: string; phone: string }) => void;
}

export default function OptIn({ onSubmit }: OptInProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const option1Ref = useRef<HTMLDivElement>(null);
  const option2Ref = useRef<HTMLDivElement>(null);
  const option3Ref = useRef<HTMLDivElement>(null);
  const option4Ref = useRef<HTMLDivElement>(null);
  const option5Ref = useRef<HTMLDivElement>(null); // Ref for option 5

  const option1InView = useIntersectionObserver(option1Ref, { threshold: 0.1 });
  const option2InView = useIntersectionObserver(option2Ref, { threshold: 0.1 });
  const option3InView = useIntersectionObserver(option3Ref, { threshold: 0.1 });
  const option4InView = useIntersectionObserver(option4Ref, { threshold: 0.1 });
  const option5InView = useIntersectionObserver(option5Ref, { threshold: 0.1 }); // Observer for option 5

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    mixpanelTracker.track("Video Series Opt-In Submitted", {
      form_type: "video_series_opt_in",
      has_name: !!formData.name,
      has_email: !!formData.email,
      has_phone: !!formData.phone
    });

    // Simulate form submission
    setTimeout(() => {
      onSubmit?.(formData);
      setIsSubmitting(false);
      // Here you would typically redirect or show success message
    }, 1000);
  };

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="space-y-16 mb-16">
      {/* OPTION 1: Split Screen Hero */}
      <section 
        ref={option1Ref}
        className={`py-16 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden transform transition-all duration-700 ${
          option1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">
                    Exclusive Video Series
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  Unlock Paul Smith's <Highlight type="primary">Commercial Property</Highlight> Masterclass
                </h1>

                <p className="text-xl text-neutral-600 leading-relaxed">
                  Get instant access to 4 exclusive training videos revealing the exact strategies used by successful commercial property investors.
                </p>

                {/* Video Preview Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg p-4 group hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Video {num}</p>
                          <p className="text-xs text-neutral-600">12 min</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>15,000+ investors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>48 mins total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Expert content</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-neutral-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Get Instant Access</h3>
                  <p className="text-neutral-600">Enter your details below to unlock all 4 videos</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Unlocking Videos..." : "Unlock Video Series Now"}
                  </Button>
                </form>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Instant access to all 4 videos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Bonus downloadable resources</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>No spam, unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPTION 2: Centered Video Showcase */}
      <section 
        ref={option2Ref}
        className={`py-20 bg-white relative overflow-hidden transform transition-all duration-700 ${
          option2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-block px-4 py-2 bg-primary text-white rounded-full mb-6">
                <span className="text-sm font-bold uppercase tracking-wide">
                  🔥 Limited Time Access
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Master Commercial Property with <Highlight type="marker">Paul Smith's</Highlight> Private Video Series
              </h1>

              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Join 15,000+ successful property investors who've unlocked the secrets to commercial property success
              </p>
            </div>

            {/* Video Showcase */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { title: "Market Analysis", duration: "15 min", students: "12k+" },
                { title: "Deal Sourcing", duration: "18 min", students: "10k+" },
                { title: "Due Diligence", duration: "22 min", students: "8k+" },
                { title: "Exit Strategies", duration: "13 min", students: "15k+" }
              ].map((video, index) => (
                <div key={index} className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-6 relative group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{video.title}</h4>
                  <p className="text-sm text-neutral-600">{video.students} students</p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-xl p-8 border border-neutral-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Unlock All 4 Videos Instantly</h3>
                <p className="text-neutral-600">Get immediate access to the complete masterclass series</p>
              </div>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-4">
                <Input
                  type="text"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  required
                  className="h-12"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  required
                  className="h-12"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  required
                  className="h-12"
                />
                <Button 
                  type="submit" 
                  className="h-12 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Unlocking..." : "Get Access"}
                </Button>
              </form>

              <div className="flex justify-center items-center gap-8 mt-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Instant access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Mobile friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Downloadable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPTION 3: Compact Premium Card */}
      <section 
        ref={option3Ref}
        className={`py-16 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden transform transition-all duration-700 ${
          option3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left - Video Preview */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4">
                      PREMIUM SERIES
                    </div>
                    <h3 className="text-2xl font-bold mb-3">4 Exclusive Training Videos</h3>
                    <p className="text-neutral-600 text-sm mb-6">Master commercial property investing with Paul Smith's proven strategies</p>
                  </div>

                  <div className="space-y-3">
                    {["Market Analysis Secrets", "Deal Sourcing Methods", "Due Diligence Checklist", "Profitable Exit Strategies"].map((title, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white/60 rounded-lg p-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Video className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{title}</p>
                          <p className="text-xs text-neutral-600">Video {index + 1}</p>
                        </div>
                        <Lock className="w-4 h-4 text-neutral-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Form */}
                <div className="lg:col-span-3 p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-black mb-3">
                      Unlock Your <Highlight type="primary">Commercial Property</Highlight> Success
                    </h2>
                    <p className="text-neutral-600 leading-relaxed">
                      Enter your details below to get instant access to Paul Smith's exclusive 4-part video masterclass series.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange('name')}
                          required
                          className="h-11"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange('phone')}
                          required
                          className="h-11"
                          placeholder="+44 7XXX XXX XXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        required
                        className="h-11"
                        placeholder="john@example.com"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Unlocking Your Videos..." : "Get Instant Access →"}
                    </Button>
                  </form>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <p className="text-center text-sm font-semibold text-neutral-800 mb-3">What You'll Get:</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>4 HD training videos</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>Downloadable worksheets</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>Mobile & desktop access</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span>Lifetime access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Option 4: Homepage-Inspired Design */}
      <section 
        ref={option4Ref}
        className={`relative pt-6 md:pt-6 pb-8 md:pb-24 overflow-hidden bg-white transform transition-all duration-700 ${
          option4InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center transform transition-all duration-700">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-bold text-primary uppercase tracking-wide">
              FREE VIDEO SERIES
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[1.05] tracking-tight capitalize">
              <Highlight type="secondary">Maximise</Highlight> Your Commercial
              Property <Highlight type="green">Returns</Highlight>
            </h1>

            <p className="text-lg md:text-2xl text-foreground/90 mb-6 max-w-2xl mx-auto font-medium">
              Watch our exclusive 4-part video series to discover how investors are locking in{" "}
              <span className="font-extrabold text-primary">
                <Highlight type="marker">10–15% returns </Highlight>
              </span>{" "}
              and securing long-term leases with commercial property.
            </p>

            <div className="mb-8 max-w-xl mx-auto">
              <div className="flex justify-center gap-4 items-center mb-10">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-primary mr-1" />
                  <span className="text-sm text-foreground/70">4 Videos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-1" />
                  <span className="text-sm text-foreground/70">
                    Instant Access
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-primary mr-1" />
                  <span className="text-sm text-foreground/70">
                    CPD Accredited
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-ring/40 to-ring/20 z-10 group-hover:opacity-75 transition-opacity"></div>

                <img
                  src="https://cdn.prod.website-files.com/6826134ab6b3f623513959ec/682d9361c04b429e996beafc_2%20(2).png"
                  alt="Paul Smith commercial property video series"
                  className="w-full object-cover aspect-video"
                />

                <div className="absolute bottom-0 left-0 right-0 py-6 px-4 bg-gradient-to-t from-ring/80 via-ring/40 to-transparent z-20 text-white">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="mb-0 flex-grow">
                      <h2 className="text-lg md:text-2xl font-black text-white leading-tight">
                        The Commercial Property Edge
                      </h2>
                      <p className="text-sm md:text-lg text-white/90 mb-2 max-w-md font-medium">
                        Discover the strategy powering modern property investment portfolios.
                      </p>  
                    </div>

                    <div className="flex items-center md:justify-end">
                      <img
                        src="https://touchstoneeducation.com/hs-fs/hubfs/touchstone%20paul%20smith.png"
                        alt="Paul Smith"
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                      />
                      <div className="text-left md:text-left max-w-full ml-3">
                        <p className="text-sm md:text-lg font-bold">
                          With Paul Smith
                        </p>
                        <p className="text-xs md:text-sm text-white/80">
                          Commercial Property Expert
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI stats box positioned outside the thumbnail container for proper layering */}
              <div className="absolute -top-4 -right-2 bg-white p-3 rounded-md shadow-lg border border-neutral-100 z-50">
                <div className="flex items-center gap-3">
                  <div className="font-black text-3xl text-green-600/90">
                    12%+
                  </div>
                  <div>
                    <p className="font-bold text-sm">Avg. Yield</p>
                    <p className="text-xs text-foreground/70">From day one</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-lg mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl border border-neutral-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-foreground mb-2">
                Watch Now
              </h3>
              <p className="text-foreground/70">
                Register below to access the video series.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="First Name *"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  required
                />
              </div>
              <Button 
                type="submit"
                className="conversion-btn w-full text-center py-4 uppercase"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Watch Free Training Now"} <ArrowRight className="ml-2 inline-block" size={18} />
              </Button>
            </form>

            <div className="mt-6 space-y-2 text-sm text-foreground/60">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>You'll receive your video links after registration.</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                <span>Your information is secure and will not be shared.</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-flex items-center justify-center bg-neutral-50 px-4 py-2 rounded-lg">
                <Award className="w-4 h-4 text-primary mr-2" />
                <span className="text-xs font-medium text-foreground/70">CPD CERTIFIED TRAINING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPTION 5: Premium Conversion-Focused Lead Capture */}
      <section 
        ref={option5Ref}
        className={`relative py-16 md:py-24 overflow-hidden bg-neutral-50 transform transition-all duration-700 ${
          option5InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Top Section - Urgency Banner */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-bold mb-6 shadow-lg animate-pulse">
                <Lock className="w-4 h-4" />
                <span>EXCLUSIVE ACCESS REQUIRED</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column - Video Content Showcase */}
              <div className="lg:col-span-7 space-y-8">
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
                    Unlock Paul Smith's 
                    <span className="block text-primary">
                      £100M+ Property Empire
                    </span>
                    <span className="block text-slate-700">Training Vault</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                    Get exclusive behind-the-scenes access to the exact strategies that built a 
                    <span className="font-black text-primary"> £100+ million property portfolio</span>
                  </p>
                </div>

                {/* Locked Video Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Market Analysis Secrets", value: "£2,500", duration: "18 min", locked: true },
                    { title: "Deal Sourcing Mastery", value: "£3,200", duration: "22 min", locked: true },
                    { title: "Due Diligence Blueprint", value: "£1,800", duration: "15 min", locked: true },
                    { title: "Exit Strategy Playbook", value: "£2,100", duration: "20 min", locked: true }
                  ].map((video, index) => (
                    <div key={index} className="relative group">
                      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 relative overflow-hidden">
                        {/* Lock Overlay */}
                        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20 rounded-xl">
                          <div className="text-center text-white">
                            <Lock className="w-8 h-8 mx-auto mb-2" />
                            <p className="text-xs font-bold uppercase tracking-wide">LOCKED</p>
                          </div>
                        </div>

                        {/* Video Content */}
                        <div className="aspect-video bg-neutral-100 rounded-lg mb-3 relative">
                          <div className="absolute inset-0 bg-slate-800/20 rounded-lg flex items-center justify-center">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>

                        <h4 className="font-bold text-sm mb-1">{video.title}</h4>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-slate-500">Training Value</span>
                          <span className="font-bold text-primary text-sm">{video.value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Value Props */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="text-2xl font-black text-green-700 mb-1">£9,600</div>
                    <p className="text-sm text-green-600 font-semibold">Total Training Value</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="text-2xl font-black text-blue-700 mb-1">15K+</div>
                    <p className="text-sm text-blue-600 font-semibold">Students Enrolled</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <div className="text-2xl font-black text-amber-700 mb-1">4.9★</div>
                    <p className="text-sm text-amber-600 font-semibold">Average Rating</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Lead Capture Form */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 relative">
                  {/* Premium Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 INSTANT ACCESS
                    </div>
                  </div>

                  <div className="text-center mb-8 mt-4">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                      Unlock Your Access Now
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Join <span className="font-bold text-primary">15,000+ successful investors</span> who've 
                      already accessed this exclusive training
                    </p>
                  </div>

                  {/* Social Proof Avatars */}
                  <div className="flex justify-center mb-6">
                    <div className="flex -space-x-2">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-600 text-xs font-bold">
                        +15K
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange('name')}
                          required
                          className="h-12 text-base bg-slate-50 border-slate-300 focus:border-primary focus:ring-primary/20"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          required
                          className="h-12 text-base bg-slate-50 border-slate-300 focus:border-primary focus:ring-primary/20"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange('phone')}
                          required
                          className="h-12 text-base bg-slate-50 border-slate-300 focus:border-primary focus:ring-primary/20"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        type="submit" 
                        className="w-full h-14 text-lg font-black bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                            Unlocking Your Videos...
                          </>
                        ) : (
                          <>
                            🚀 Get Instant Access Now
                            <ArrowRight className="ml-2" size={20} />
                          </>
                        )}
                      </Button>

                      <p className="text-center text-xs text-slate-500">
                        By clicking above, you agree to receive training materials and updates
                      </p>
                    </div>
                  </form>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="space-y-1">
                        <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        <p className="text-xs font-semibold text-slate-700">Instant Access</p>
                      </div>
                      <div className="space-y-1">
                        <Shield className="w-5 h-5 text-blue-600 mx-auto" />
                        <p className="text-xs font-semibold text-slate-700">100% Secure</p>
                      </div>
                      <div className="space-y-1">
                        <Award className="w-5 h-5 text-amber-600 mx-auto" />
                        <p className="text-xs font-semibold text-slate-700">CPD Certified</p>
                      </div>
                    </div>
                  </div>

                  {/* Urgency Timer */}
                  <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="text-center">
                      <p className="text-sm font-bold text-red-700 mb-2">⏰ Limited Time Access</p>
                      <p className="text-xs text-red-600">This exclusive training may be removed without notice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Additional Social Proof */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-black text-primary">£8M+</div>
                    <p className="text-sm text-slate-600">Property portfolio built in 8 years</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-black text-secondary">15,000+</div>
                    <p className="text-sm text-slate-600">Students trained worldwide</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-black text-green-600">97%</div>
                    <p className="text-sm text-slate-600">Student satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}