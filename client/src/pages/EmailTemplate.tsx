import React from "react";

export default function EmailTemplate() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl font-bold mb-6">Email Preview</h1>
          <p className="text-sm text-gray-500 mb-8">
            Can be used in HubSpot.
          </p>
          
          {/* Email Template */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div dangerouslySetInnerHTML={{ __html: emailHTML }} />
          </div>
          
         
          
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">HTML Code:</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
              {emailHTML}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

// Email HTML with inline styles
const emailHTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- Subject Line: £75k/Year From One Property Deal? See How It's Done [Free Training] -->
<!-- Preview Text: Join our exclusive commercial property webinar to discover how to replicate our most successful student case study. Limited spots available! -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  {{ standard_header_includes }}
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Touchstone Education - Commercial Property Training</title>
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700;800;900&display=swap');
    
    /* Base styles */
    body {
      margin: 0;
      padding: 0;
      min-width: 100%;
      font-family: 'Albert Sans', system-ui, sans-serif;
      line-height: 1.5;
      color: #1a202c;
      background-color: #f7f8f9;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table {
      border-spacing: 0;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    table td {
      border-collapse: collapse;
    }
    img {
      border: 0;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    a img {
      border: none;
    }
    a {
      color: #0b4142; /* Primary: hsl(188, 51%, 18%) */
      text-decoration: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
    .highlight-primary {
      position: relative;
      color: #0b4142;
    }
    .highlight-primary::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(11, 65, 66, 0.1);
      z-index: -1;
    }
    .highlight-secondary {
      position: relative;
      color: #bd9a37; /* Secondary: hsl(47, 76%, 54%) */
    }
    .highlight-secondary::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(247, 214, 95, 0.3);
      z-index: -1;
    }
    /* Responsive adjustments */
    @media only screen and (max-width: 480px) {
      .email-container {
        width: 100% !important;
        max-width: 100% !important;
      }
      .responsive-padding {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
      .fluid {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .stack-column {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        direction: ltr !important;
      }
      .bento-col {
        width: 100% !important;
        display: block !important;
        margin-bottom: 12px !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f8f9; width: 100%; font-family: 'Albert Sans', system-ui, sans-serif;">
  <center style="width: 100%; background: #f7f8f9; text-align: left;">
    <!-- Email container -->
    <div style="max-width: 600px; margin: 0 auto;">
      <!-- Hidden preheader text -->
      <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
        Thanks for signing up to our Commercial Property video training. Get a head start on the most rewarding property strategy!
      </div>
      
      <!-- Email container -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.05);" class="email-container">
        <!-- Header -->
        <tr>
          <td style="padding: 30px 40px 20px 40px; text-align: left; background-color: #ffffff;">
            <!-- From header -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
                <td width="60" valign="middle">
                  <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="50" height="50" alt="Paul Smith" style="border-radius: 50%; background-color: #f1f1f1;" />
                </td>
                <td valign="middle" style="padding-left: 15px;">
                  <p style="margin: 0; font-weight: 600; font-size: 16px; color: #1a202c;">From: Paul Smith</p>
                  <p style="margin: 0; font-size: 14px; color: #4a5568;">Touchstone Education</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Main content -->
        <tr>
          <td style="padding: 0px 40px 30px 40px; background-color: #ffffff;">
            <!-- Headline -->
            <h1 style="margin: 0 0 20px 0; font-size: 28px; line-height: 1.3; font-weight: 700; color: #1a202c; font-family: 'Albert Sans', system-ui, sans-serif;">
              Thanks for signing up to our <span style="position: relative; display: inline-block;"><span style="position: relative; z-index: 1;">Commercial Property</span><span style="position: absolute; bottom: 2px; left: 0; width: 100%; height: 8px; background-color: rgba(11, 65, 66, 0.1); z-index: 0;"></span></span> video training
            </h1>
            
            <!-- Intro text -->
            <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
              Get a head start on others and educate yourself about the most rewarding property strategy to date!
            </p>
            
            <!-- Video card -->
            <div style="margin-bottom: 30px; background-color: #f1f1f1; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              <div style="position: relative;">
                <!-- Video thumbnail -->
                <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="520" height="292" alt="Case study video thumbnail" style="width: 100%; height: auto; display: block;" />
                
                <!-- Play button -->
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                  <div style="width: 80px; height: 80px; border-radius: 50%; background-color: #0b4142; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(0,0,0,0.2);">
                    <div style="width: 0; height: 0; border-style: solid; border-width: 15px 0 15px 25px; border-color: transparent transparent transparent #ffffff; margin-left: 5px;"></div>
                  </div>
                </div>
                
                <!-- Caption overlay -->
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 25px 20px 15px 20px; text-align: left;">
                  <p style="margin: 0 0 5px 0; font-weight: bold; font-size: 18px; color: #ffffff;">Commercial Property Case Study: £75k Annual Income Deal</p>
                  <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.9);">Learn how this deal was structured and how you can replicate it</p>
                </div>
              </div>
            </div>
            
            <!-- Content highlights section -->
            <p style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #1a202c;">
              In this video series, you'll discover:
            </p>
            
            <!-- Benefit list -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <!-- Item 1 -->
              <tr>
                <td style="padding-bottom: 15px;">
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td width="24" valign="top" style="padding-right: 12px;">
                        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.1); display: flex; align-items: center; justify-content: center;">
                          <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0b4142;"></div>
                        </div>
                      </td>
                      <td>
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">Why Commercial Property has virtually ZERO competition compared to residential</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Item 2 -->
              <tr>
                <td style="padding-bottom: 15px;">
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td width="24" valign="top" style="padding-right: 12px;">
                        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.1); display: flex; align-items: center; justify-content: center;">
                          <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0b4142;"></div>
                        </div>
                      </td>
                      <td>
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">How "tenants" pay for all property expenses in Commercial deals</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Item 3 -->
              <tr>
                <td>
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td width="24" valign="top" style="padding-right: 12px;">
                        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.1); display: flex; align-items: center; justify-content: center;">
                          <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0b4142;"></div>
                        </div>
                      </td>
                      <td>
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">The <span style="background-color: rgba(189, 154, 55, 0.2); padding: 0 3px;">exact steps to replicate our £75k annual income deal</span></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- TrustPilot Style Rating Box -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td style="background-color: #ffffff; border-radius: 8px; padding: 20px; text-align: center; border: 1px solid #e2e8f0;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td align="center">
                        <img src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-black.svg" width="120" alt="Trustpilot" style="margin-bottom: 10px;" />
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="padding-bottom: 10px;">
                        <div style="color: #00b67a; font-size: 24px; font-weight: bold;">★★★★★</div>
                        <div style="color: #2d3748; font-size: 16px; font-weight: bold; margin-top: 5px;">4.8 out of 5</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="color: #718096; font-size: 14px;">
                        Based on 2,000+ verified reviews
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Social Proof Counter -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td style="background-color: #f8fafc; border-radius: 8px; padding: 15px; text-align: center;">
                  <p style="margin: 0; color: #0b4142; font-size: 14px; font-weight: 600;">
                    🔥 <span style="color: #e53e3e;">247 property investors</span> registered for this training in the last 24 hours
                  </p>
                </td>
              </tr>
            </table>

            <!-- Countdown Timer -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td style="background-color: #0b4142; border-radius: 8px; padding: 20px; text-align: center;">
                  <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                    ⏰ Registration closes in:
                  </p>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td align="center">
                        <div style="display: inline-block; background: #ffffff; border-radius: 6px; padding: 10px 15px; margin: 0 5px;">
                          <span style="font-size: 24px; font-weight: bold; color: #0b4142;">48</span>
                          <div style="font-size: 12px; color: #718096;">HOURS</div>
                        </div>
                        <div style="display: inline-block; background: #ffffff; border-radius: 6px; padding: 10px 15px; margin: 0 5px;">
                          <span style="font-size: 24px; font-weight: bold; color: #0b4142;">12</span>
                          <div style="font-size: 12px; color: #718096;">MINUTES</div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Bento Box Style Stats -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <!-- Bento Box Item 1 -->
                      <td class="bento-col" width="48%" style="padding-right: 12px;">
                        <div style="background: linear-gradient(135deg, rgba(11, 65, 66, 0.05) 0%, rgba(11, 65, 66, 0.1) 100%); border-radius: 12px; padding: 20px; position: relative; height: 100px;">
                          <div style="position: absolute; top: 15px; right: 15px; background-color: rgba(255,255,255,0.7); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <div style="width: 16px; height: 16px; background-color: #0b4142; -webkit-mask: url('https://cdn-icons-png.flaticon.com/512/5582/5582915.png') no-repeat center / contain; mask: url('https://cdn-icons-png.flaticon.com/512/5582/5582915.png') no-repeat center / contain;"></div>
                          </div>
                          <p style="margin: 0 0 5px 0; font-size: 12px; color: #4a5568;">Return on Investment</p>
                          <p style="margin: 0; font-size: 24px; font-weight: 700; color: #0b4142;">22%</p>
                        </div>
                      </td>
                      
                      <!-- Bento Box Item 2 -->
                      <td class="bento-col" width="48%">
                        <div style="background: linear-gradient(135deg, rgba(189, 154, 55, 0.05) 0%, rgba(189, 154, 55, 0.1) 100%); border-radius: 12px; padding: 20px; position: relative; height: 100px;">
                          <div style="position: absolute; top: 15px; right: 15px; background-color: rgba(255,255,255,0.7); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <div style="width: 16px; height: 16px; background-color: #bd9a37; -webkit-mask: url('https://cdn-icons-png.flaticon.com/512/3037/3037156.png') no-repeat center / contain; mask: url('https://cdn-icons-png.flaticon.com/512/3037/3037156.png') no-repeat center / contain;"></div>
                          </div>
                          <p style="margin: 0 0 5px 0; font-size: 12px; color: #4a5568;">Annual Income</p>
                          <p style="margin: 0; font-size: 24px; font-weight: 700; color: #bd9a37;">£75,000</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- CTA button -->
            <table border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td align="left">
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td align="center" bgcolor="#0b4142" style="border-radius: 6px;">
                        <a href="#watch-video" target="_blank" style="display: inline-block; padding: 16px 28px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px; font-family: 'Albert Sans', system-ui, sans-serif;">
                          Watch The Video Now &nbsp;→
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Signature section -->
        <tr>
          <td style="padding: 30px 40px; border-top: 1px solid #e2e8f0;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
                <td width="60" valign="top">
                  <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="60" height="60" alt="Paul Smith" style="border-radius: 50%; display: block;" />
                </td>
                <td valign="top" style="padding-left: 15px;">
                  <p style="margin: 0 0 5px 0; font-weight: bold; font-size: 16px; color: #1a202c;">Paul Smith</p>
                  <p style="margin: 0 0 3px 0; font-size: 14px; color: #4a5568;">Property Investor & Wealth Mentor</p>
                  <p style="margin: 0 0 10px 0; font-size: 14px; color: #4a5568;">Touchstone Education</p>
                  
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td><a href="#website" style="font-size: 14px; color: #0b4142; text-decoration: none; margin-right: 15px;">Website</a></td>
                      <td style="color: #cbd5e0; padding: 0 10px;">|</td>
                      <td><a href="#linkedin" style="font-size: 14px; color: #0b4142; text-decoration: none; margin-right: 15px;">LinkedIn</a></td>
                      <td style="color: #cbd5e0; padding: 0 10px;">|</td>
                      <td><a href="#facebook" style="font-size: 14px; color: #0b4142; text-decoration: none;">Facebook</a></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Footer -->
        <tr>
          <td style="padding: 20px 40px; background-color: #f7f8f9; text-align: center; font-size: 12px; color: #718096;">
            <p style="margin: 0 0 10px 0;">
              © 2025 {{site_settings.company_name}} | <a href="#privacy" style="color: #4a5568; text-decoration: none;">Privacy Policy</a> | <a href="#terms" style="color: #4a5568; text-decoration: none;">Terms & Conditions</a> | {{unsubscribe_anchor}}
            </p>
            <p style="margin: 0 0 10px 0;">
              {{site_settings.company_name}}<br>
              {{site_settings.company_street_address_1}}<br>
              {{site_settings.company_city}}, {{site_settings.company_state}} {{site_settings.company_zip}}
            </p>
            <p style="margin: 0 0 10px 0;">
              You received this email because you are subscribed to our mailing list.<br>
              To unsubscribe from all communications: {{unsubscribe_link_all}}
            </p>
            <p style="margin: 0; line-height: 1.4;">
              This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way.
            </p>
          </td>
        </tr>
      </table>
    </div>
  </center>
  {{ standard_footer_includes }}
</body>
</html>`;