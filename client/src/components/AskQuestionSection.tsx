
import React from 'react';
import { MessageCircle, Phone, Mail, Clock, ArrowRight, Users, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Highlight } from '@/components/ui/highlight';
import { Logo } from '@/components/ui/logo';

const AskQuestionsSection = () => {
  const handleLiveChat = () => {
    // HubSpot live chat integration
    if (window.HubSpotConversations) {
      window.HubSpotConversations.widget.open();
    } else {
      // Fallback if HubSpot isn't loaded
      console.log('HubSpot chat not available');
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Request a Callback",
      description: "Speak with our equity release specialists",
      action: "Get a Call",
      href: "tel:+441234567890",
      color: "primary",
      popular: true
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support from our team",
      action: "Start Chat",
      onClick: handleLiveChat,
      color: "secondary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick answers to your questions",
      action: "Chat Now", 
      href: "https://wa.me/441234567890",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed responses within 24 hours",
      action: "Send Email",
      href: "mailto:info@touchstoneeducation.com",
      color: "neutral"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Logo size="sm" className="opacity-80" />
            </div>
            <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold text-primary bg-primary/5 rounded-full border border-primary/10">
              <MessageCircle className="w-3 h-3 mr-1" />
              DUMMY SECTION! 
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Still Have <Highlight type="primary">Questions?</Highlight>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our specialists are here to help you understand your options and make informed decisions about your property wealth.
            </p>
          </div>

          {/* Main Card */}
          <Card className="bg-white shadow-xl border border-neutral-200 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Get <Highlight type="secondary">Personal Guidance</Highlight>
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      Whether you're just starting to explore equity release or ready to take action, our expert team provides tailored advice for your unique situation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-neutral-700">Free consultation with no obligations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-neutral-700">FCA regulated advisors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-neutral-700">Available 7 days a week</span>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                    <div className="flex items-center gap-4 text-center">
                      <div className="flex-1">
                        <p className="text-2xl font-bold text-primary">98%</p>
                        <p className="text-xs text-neutral-600">Client Satisfaction</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-2xl font-bold text-secondary">2,000+</p>
                        <p className="text-xs text-neutral-600">Clients Helped</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-2xl font-bold text-green-600">£50M+</p>
                        <p className="text-xs text-neutral-600">Equity Released</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    const isPopular = method.popular;

                    return (
                      <div key={index} className="relative">
                        {isPopular && (
                          <div className="absolute -top-2 -right-2 z-10">
                            <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                              Most Popular
                            </div>
                          </div>
                        )}
                        <Card className={`transition-all duration-300 hover:shadow-lg border-2 ${
                          isPopular ? 'border-primary/20 bg-primary/5' : 'border-neutral-200 hover:border-primary/30'
                        }`}>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                method.color === 'primary' ? 'bg-primary/10' :
                                method.color === 'green' ? 'bg-green-100' :
                                method.color === 'secondary' ? 'bg-secondary/10' :
                                'bg-neutral-100'
                              }`}>
                                <IconComponent className={`w-6 h-6 ${
                                  method.color === 'primary' ? 'text-primary' :
                                  method.color === 'green' ? 'text-green-600' :
                                  method.color === 'secondary' ? 'text-secondary' :
                                  'text-neutral-600'
                                }`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-neutral-900 mb-1">{method.title}</h4>
                                <p className="text-sm text-neutral-600 mb-3">{method.description}</p>
                                {method.onClick ? (
                                  <Button
                                    onClick={method.onClick}
                                    size="sm"
                                    variant={isPopular ? "default" : "outline"}
                                    className={`w-full group ${
                                      !isPopular ? 'hover:bg-primary hover:text-white hover:border-primary' : ''
                                    }`}
                                  >
                                    {method.action}
                                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                  </Button>
                                ) : (
                                  <Button
                                    asChild
                                    size="sm"
                                    variant={isPopular ? "default" : "outline"}
                                    className={`w-full group ${
                                      !isPopular ? 'hover:bg-primary hover:text-white hover:border-primary' : ''
                                    }`}
                                  >
                                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                                      {method.action}
                                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}

                  {/* Bottom CTA */}
                  <div className="pt-4">
                    <div className="text-center">
                      <p className="text-sm text-neutral-500 mb-3">
                        Or register for our free webinar to learn more
                      </p>
                      <Button 
                        variant="minimal"
                        size="sm"
                        className="group"
                        onClick={() => {
                          const element = document.getElementById("register");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        Watch Free Training
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Trust Bar */}
          <div className="mt-8 text-center">
            <div className="flex justify-center items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>FCA Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>No Pressure Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskQuestionsSection;
