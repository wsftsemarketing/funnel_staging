import { useRef } from "react";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Highlight } from "@/components/ui/highlight";
import { LockIcon, Calendar } from "lucide-react";
import { mixpanelTracker } from "@/lib/mixpanelTracking";

export default function RegistrationForm() {
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const contentInView = useIntersectionObserver(contentRef, { threshold: 0.1 });

  return (
    <section id="register" data-section="registration" className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              ref={contentRef}
              className={`transform transition-all duration-700 ${
                contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-block py-1 mb-6 text-sm font-bold text-primary uppercase tracking-wide">
                FREE WEBINAR
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 capitalize">
                The Commercial Property Edge
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">Our webinar will show you exactly how to maximise your portfolios returns with commercial property, without lifting a paintbrush.
              </p>
            </div>
            <div 
              ref={formRef}
              className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-700 delay-300"
            >
              <h3 className="text-2xl font-bold mb-2">Watch Now</h3>
              <p className="text-md md:text-sm text-neutral-600 max-w-2xl mx-auto">Register below to {" "} <span className="font-extrabold text-primary"> <Highlight type="marker">immediately access</Highlight> </span>{" "} the webinar.
                </p>
              <div id="registration-form">
                <div 
                  className="wj-embed-wrapper" 
                  data-webinar-hash="y86q9a7p"
                  ref={(el) => {
                    if (el && !el.querySelector('script')) {
                      // Generate cross-domain tracking URL with UTM data
                      const baseFormUrl = 'https://event.webinarjam.com/register/y86q9a7p/embed-form';
                      const formParams = {
                        formButtonText: 'Watch Free Training Now',
                        formAccentColor: '#E3BC31',
                        formAccentOpacity: '1',
                        formBgColor: '#E3BC31',
                        formBgOpacity: '0.14'
                      };
                      
                      let finalFormUrl;
                      try {
                        // Get fresh UTM data from current URL first
                        const currentUrlParams = new URLSearchParams(window.location.search);
                        const freshUtmData: Record<string, string> = {};
                        
                        // Capture UTMs from current URL
                        const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id", "gclid", "fbclid", "tag", "hyros_tag"];
                        utmKeys.forEach((key) => {
                          const value = currentUrlParams.get(key);
                          if (value) {
                            freshUtmData[key] = value;
                          }
                        });

                        // Also check localStorage for stored UTM data
                        let storedUtmData = {};
                        const storedUtm = localStorage.getItem('utm_params');
                        if (storedUtm) {
                          try {
                            storedUtmData = JSON.parse(storedUtm);
                          } catch (e) {
                            console.warn('Could not parse stored UTM data:', e);
                          }
                        }

                        // Merge stored and fresh UTM data (fresh takes precedence)
                        const mergedUtmData = { ...storedUtmData, ...freshUtmData };
                        
                        console.log('🔍 UTM data for WebinarJam URL generation:');
                        console.log('  - Fresh from URL:', freshUtmData);
                        console.log('  - From localStorage:', storedUtmData);
                        console.log('  - Merged UTM data:', mergedUtmData);

                        // Generate cross-domain URL with tracking data (without firing redirect event)
                        const urlParams = new URLSearchParams();
                        const trackingData = mixpanelTracker.getTrackingData();
                        
                        // Build tracking parameters using actual UTM data
                        const crossDomainData = {
                          mp_id: trackingData.userId,
                          mp_session: trackingData.sessionId,
                          mp_source: mergedUtmData.utm_source || 'direct',
                          mp_medium: mergedUtmData.utm_medium || 'organic',
                          mp_campaign: mergedUtmData.utm_campaign || 'webinar',
                          mp_term: mergedUtmData.utm_term,
                          mp_content: mergedUtmData.utm_content,
                          mp_utm_id: mergedUtmData.utm_id,
                          mp_gclid: mergedUtmData.gclid,
                          mp_fbclid: mergedUtmData.fbclid,
                          mp_tag: mergedUtmData.tag,
                          mp_hyros_tag: mergedUtmData.hyros_tag,
                          ...formParams
                        };
                        
                        // Clean undefined values and build URL
                        Object.entries(crossDomainData).forEach(([key, value]) => {
                          if (value !== undefined && value !== null) {
                            urlParams.append(key, String(value));
                          }
                        });
                        
                        finalFormUrl = `${baseFormUrl}?${urlParams.toString()}`;
                        console.log('✅ Generated WebinarJam URL with tracking:', finalFormUrl);
                        
                        // Set up form submission listener and UTM injection
                        setTimeout(() => {
                          const formElement = el.querySelector('form');
                          if (formElement) {
                            // Track form interaction start
                            const inputs = formElement.querySelectorAll('input');
                            inputs.forEach(input => {
                              input.addEventListener('focus', () => {
                                if (!localStorage.getItem('form_interaction_tracked')) {
                                  localStorage.setItem('form_interaction_tracked', 'true');
                                  mixpanelTracker.trackFormInteractionStart();
                                  mixpanelTracker.track("Form Interaction", {
                                    interaction_type: 'input_focus',
                                    form_type: 'webinar_registration'
                                  });
                                }
                              }, { once: true });
                            });

                            // Track individual field interactions
                            inputs.forEach((input, index) => {
                              input.addEventListener('input', () => {
                                mixpanelTracker.track("Form Field Interaction", {
                                  field_name: input.name || `field_${index}`,
                                  field_type: input.type,
                                  form_type: 'webinar_registration',
                                  interaction_type: 'field_input'
                                });
                              });
                            });

                            // Enhanced UTM parameter injection - both hidden fields AND form action URL modification
                            formElement.addEventListener('submit', (e) => {
                              // Use the same merged UTM data from form generation
                              const utmData = mergedUtmData;

                              // UTM parameters to inject
                              const utmParams = [
                                'utm_source', 'utm_medium', 'utm_campaign', 
                                'utm_term', 'utm_content', 'utm_id',
                                'gclid', 'fbclid', 'tag', 'hyros_tag'
                              ];

                              // Method 1: Add UTM parameters as hidden fields
                              utmParams.forEach(param => {
                                const value = utmData[param];
                                if (value && !formElement.querySelector(`input[name="${param}"]`)) {
                                  const hiddenInput = document.createElement('input');
                                  hiddenInput.type = 'hidden';
                                  hiddenInput.name = param;
                                  hiddenInput.value = value;
                                  formElement.appendChild(hiddenInput);
                                  console.log(`✅ Injected hidden field ${param}=${value} into WebinarJam form`);
                                }
                              });

                              // Method 2: Modify form action URL to include UTM parameters
                              const currentAction = formElement.action;
                              if (currentAction && Object.keys(utmData).length > 0) {
                                try {
                                  const actionUrl = new URL(currentAction);
                                  
                                  // Add UTM parameters to the action URL
                                  utmParams.forEach(param => {
                                    const value = utmData[param];
                                    if (value) {
                                      actionUrl.searchParams.set(param, value);
                                    }
                                  });
                                  
                                  // Update the form action with UTM parameters
                                  formElement.action = actionUrl.toString();
                                  console.log(`🔗 Updated WebinarJam form action URL with UTM parameters:`, actionUrl.toString());
                                } catch (error) {
                                  console.warn('⚠️ Could not modify form action URL:', error);
                                }
                              }

                              // Also add our tracking identifiers
                              const trackingParams = {
                                'mp_user_id': trackingData.userId,
                                'mp_session_id': trackingData.sessionId,
                                'mp_timestamp': Date.now().toString()
                              };

                              Object.entries(trackingParams).forEach(([param, value]) => {
                                if (value && !formElement.querySelector(`input[name="${param}"]`)) {
                                  const hiddenInput = document.createElement('input');
                                  hiddenInput.type = 'hidden';
                                  hiddenInput.name = param;
                                  hiddenInput.value = value;
                                  formElement.appendChild(hiddenInput);
                                  console.log(`✅ Injected tracking ID ${param}=${value} into WebinarJam form`);
                                }
                              });

                              console.log('🚀 UTM parameters injected via both hidden fields AND form action URL modification');

                              // Track registration submission
                              mixpanelTracker.trackRegistrationSubmission({
                                form_type: 'webinarjam_embed',
                                webinar_hash: 'y86q9a7p',
                                utm_data_injected: Object.keys(utmData).length > 0,
                                injected_params: Object.keys(utmData)
                              });

                              // Also track as general form submission
                              mixpanelTracker.trackFormSubmission('webinar_registration', {
                                form_type: 'webinarjam_embed',
                                webinar_hash: 'y86q9a7p',
                                utm_data_present: Object.keys(utmData).length > 0
                              });
                              
                              // Track the actual redirect event now
                              mixpanelTracker.track('Webinar Redirect', {
                                destination: 'webinarjam',
                                destination_url: baseFormUrl,
                                form_type: 'webinarjam_embed',
                                utm_params_included: true
                              });
                            });
                          }
                        }, 2000); // Wait for WebinarJam form to load
                        
                      } catch (error) {
                        console.error('❌ Error generating cross-domain URL:', error);
                        const urlParams = new URLSearchParams(formParams);
                        finalFormUrl = `${baseFormUrl}?${urlParams.toString()}`;
                      }

                      const script = document.createElement('script');
                      script.src = finalFormUrl;
                      
                      script.onload = () => {
                        console.log('✅ WebinarJam form script loaded successfully');
                      };
                      
                      script.onerror = () => {
                        console.error('❌ Failed to load WebinarJam form script');
                      };
                      
                      el.appendChild(script);
                    }
                  }}
                ></div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary h-4 w-4" />
                  <span className="text-neutral-700 text-sm">You'll receive your webinar link after registration.</span>
                </div>
                <div className="flex items-center gap-6 mb-4">
                    <LockIcon className="text-primary h-4 w-4" />
                    <span className="text-neutral-700 text-sm">Your information is secure and will not be shared.</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}