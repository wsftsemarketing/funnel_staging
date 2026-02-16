
import React from 'react';
import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Highlight } from '@/components/ui/highlight';
import { Logo } from '@/components/ui/logo';

const AskQuestionsSectionCompact = () => {
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
      title: "Call Back",
      action: "Request Call",
      href: "tel:+441234567890",
      color: "primary",
      popular: true
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      action: "Start Chat",
      onClick: handleLiveChat,
      color: "secondary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      action: "Chat Now", 
      href: "https://wa.me/441234567890",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      action: "Send Email",
      href: "mailto:info@touchstoneeducation.com",
      color: "neutral"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white shadow-lg border border-neutral-200 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Still Have <Highlight type="primary">Questions?</Highlight>
                </h2>
                <p className="text-neutral-600 text-sm md:text-base">
                  Get expert guidance from our equity release specialists
                </p>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  const isPopular = method.popular;

                  return (
                    <div key={index} className="text-center relative">
                      {isPopular && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                            Most Popular
                          </div>
                        </div>
                      )}
                      {method.onClick ? (
                        <Button
                          onClick={method.onClick}
                          variant="outline"
                          className="w-full h-auto p-3 md:p-4 flex flex-col items-center gap-2 hover:bg-primary hover:text-white hover:border-primary group transition-all"
                        >
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                            method.color === 'primary' ? 'bg-primary/10 group-hover:bg-white/20' :
                            method.color === 'green' ? 'bg-green-100 group-hover:bg-white/20' :
                            method.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-white/20' :
                            'bg-neutral-100 group-hover:bg-white/20'
                          }`}>
                            <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${
                              method.color === 'primary' ? 'text-primary group-hover:text-white' :
                              method.color === 'green' ? 'text-green-600 group-hover:text-white' :
                              method.color === 'secondary' ? 'text-secondary group-hover:text-white' :
                              'text-neutral-600 group-hover:text-white'
                            }`} />
                          </div>
                          <div>
                            <p className="font-semibold text-xs md:text-sm">{method.title}</p>
                            <p className="text-xs opacity-80">{method.action}</p>
                          </div>
                        </Button>
                      ) : (
                        <Button
                          asChild
                          variant="outline"
                          className="w-full h-auto p-3 md:p-4 flex flex-col items-center gap-2 hover:bg-primary hover:text-white hover:border-primary group transition-all"
                        >
                          <a href={method.href} target="_blank" rel="noopener noreferrer">
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                              method.color === 'primary' ? 'bg-primary/10 group-hover:bg-white/20' :
                              method.color === 'green' ? 'bg-green-100 group-hover:bg-white/20' :
                              method.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-white/20' :
                              'bg-neutral-100 group-hover:bg-white/20'
                            }`}>
                              <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${
                                method.color === 'primary' ? 'text-primary group-hover:text-white' :
                                method.color === 'green' ? 'text-green-600 group-hover:text-white' :
                                method.color === 'secondary' ? 'text-secondary group-hover:text-white' :
                                'text-neutral-600 group-hover:text-white'
                              }`} />
                            </div>
                            <div>
                              <p className="font-semibold text-xs md:text-sm">{method.title}</p>
                              <p className="text-xs opacity-80">{method.action}</p>
                            </div>
                          </a>
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-neutral-200 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Logo size="sm" variant="monochrome" className="opacity-50" />
                </div>
                <p className="text-xs md:text-sm text-neutral-500 mb-2">
                  Free consultation • No obligations • FCA regulated
                </p>
                <Button 
                  variant="minimal"
                  size="sm"
                  className="group text-xs md:text-sm"
                  onClick={() => {
                    const element = document.getElementById("register");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Or watch our free training
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AskQuestionsSectionCompact;
