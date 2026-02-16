
import { useEffect, useState } from "react";
import { CheckCircle, Calendar, Users, Award, Star, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Highlight } from "@/components/ui/highlight";
import { Logo } from "@/components/ui/logo";

interface URLParams {
  name?: string;
  email?: string;
  [key: string]: string | undefined;
}

export default function EquityReleaseFinal() {
  const [urlParams, setUrlParams] = useState<URLParams>({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params: URLParams = {};

    searchParams.forEach((value, key) => {
      params[key] = decodeURIComponent(value);
    });

    setUrlParams(params);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-white to-primary/5">
      {/* Success Header */}
      <div className="bg-green-100 p-6 mb-8">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
            Welcome to Wealth Through Property!
          </h1>
          <p className="text-green-700 text-lg">
            Your journey to financial freedom starts now, {urlParams.name || "Future Property Investor"}!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* What Happens Next */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Happens <Highlight type="primary">Next</Highlight>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Check Your Email</h3>
                <p className="text-neutral-600 mb-4">
                  Your confirmation email with all the details is on its way to{" "}
                  <span className="font-semibold">{urlParams.email || "your inbox"}</span>
                </p>
                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-sm text-primary font-semibold">
                    📧 Usually arrives within 5 minutes
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Receive Your Welcome Pack</h3>
                <p className="text-neutral-600 mb-4">
                  A comprehensive pre-training pack will be sent to prepare you for maximum success.
                </p>
                <div className="bg-secondary/5 rounded-lg p-3">
                  <p className="text-sm text-secondary font-semibold">
                    📦 Arrives within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Choose Your Date</h3>
                <p className="text-neutral-600 mb-4">
                  Select from our available dates and get ready for two days that will change your financial future.
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-600 font-semibold">
                    📅 Multiple dates available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You'll Get */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8">
                Your <Highlight type="secondary">Complete Package</Highlight>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    2-Day Live Training Includes:
                  </h3>
                  <div className="space-y-3">
                    {[
                      "How to safely access your property equity",
                      "Buy-refurb-refinance mastery training",
                      "Service accommodation (Airbnb) setup",
                      "Commercial property investment strategies",
                      "Using pensions for property investment",
                      "Tax-efficient property structures",
                      "Live deal analysis and sourcing",
                      "Personal wealth plan creation"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    Exclusive Bonuses:
                  </h3>
                  <div className="space-y-3">
                    {[
                      "£100 Touchstone Education voucher",
                      "Bestselling property e-book bundle (£30 value)",
                      "Personal net worth calculator app (£5k value)",
                      "1-to-1 success executive consultation",
                      "12-month wealth strategy plan",
                      "Pre-event preparation workpack",
                      "Networking access to 200+ investors",
                      "90-day implementation support"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Gift className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center bg-white rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-2">
                  Total Value: <span className="text-primary">£5,500+</span>
                </h4>
                <p className="text-lg">
                  Your Investment: <span className="font-bold text-secondary">£99</span>
                </p>
                <p className="text-sm text-neutral-600 mt-2">
                  That's a 5,500% return on investment before you even start building your portfolio!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Money Back Guarantee */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                100% Money-Back Guarantee
              </h3>
              <p className="text-green-700 text-lg mb-4">
                We're so confident in the value you'll receive that if you're not completely satisfied 
                during day one, we'll refund every penny. No questions asked.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-green-800 font-semibold">
                  "We don't want your money - we want your commitment to success"
                </p>
                <p className="text-xs text-green-600 mt-1">- Abi & Paul</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories Preview */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            You're Joining <Highlight type="primary">Successful</Highlight> Investors
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-neutral-50">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-neutral-600 mb-3">
                  "Used my home equity to build a £3M portfolio. Now earning more than I ever did teaching!"
                </blockquote>
                <p className="font-semibold text-primary">Karen, Former Teacher</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-neutral-600 mb-3">
                  "Made £45k profit on my first flip in 6 months. The training paid for itself 450 times over!"
                </blockquote>
                <p className="font-semibold text-secondary">Jenna, Property Investor</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-neutral-600 mb-3">
                  "From coffee salesman to multi-millionaire. Now living my dream life in Dubai!"
                </blockquote>
                <p className="font-semibold text-green-600">Gordy, Multi-Millionaire</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border border-neutral-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-neutral-600 mb-4">
                Our support team is here to help you every step of the way.
              </p>
              <div className="space-y-2 text-sm text-neutral-600">
                <p>📧 Email: support@touchstoneeducation.co.uk</p>
                <p>📞 Phone: Available in your welcome email</p>
                <p>💬 Live Chat: Available during business hours</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-neutral-200">
          <Logo variant="grayscale" size="sm" className="mx-auto opacity-50 mb-4" />
          <p className="text-sm text-neutral-500">
            © 2025 Touchstone Education. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400 mt-2">
            Your success is our mission. Welcome to the family!
          </p>
        </div>
      </div>
    </div>
  );
}
