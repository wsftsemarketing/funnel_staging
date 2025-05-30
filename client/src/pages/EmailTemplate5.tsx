import React from "react";

export default function EmailTemplate5() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl font-bold mb-6">Email Template #5</h1>
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
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Touchstone Education - Premium Access to Wealth Academy</title>
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
      display: block;
    }
    a img {
      border: none;
    }
    a {
      color: #0b4142;
      text-decoration: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
    .highlight-text {
      position: relative;
      display: inline-block;
    }
    .highlight-text::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: rgba(11, 65, 66, 0.08);
      z-index: -1;
      border-radius: 6px;
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
      .stack-column {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        direction: ltr !important;
      }
      .mobile-full-width {
        width: 100% !important;
        display: block !important;
        margin: 0 0 15px 0 !important;
      }
      .mobile-text-center {
        text-align: center !important;
      }
      .mobile-padding-reset {
        padding: 20px !important;
      }
      .hide-on-mobile {
        display: none !important;
      }
      .mobile-stack-table {
        display: block !important;
        width: 100% !important;
      }
      .mobile-stack-cell {
        display: block !important;
        width: 100% !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
        padding-bottom: 15px !important;
      }
      .mobile-center-column {
        margin: 0 auto !important;
        float: none !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f8f9; width: 100%; font-family: 'Albert Sans', system-ui, sans-serif;">
  <!-- HUBL code for personalization - would be used in actual HubSpot implementation -->
  <!-- Example of HubSpot personalization:
  {% set firstname = contact.firstname || 'there' %}
  {% set current_date = date | timezone('Europe/London') | datetimeformat('%Y-%m-%d') %}
  {% set end_date = current_date | datetimeformat('%Y-%m-%d', '+7 days') %}
  -->
  
  <center style="width: 100%; background-color: #f9fafb; text-align: left; padding: 20px 0;">
    <!-- Email container -->
    <div style="max-width: 600px; margin: 0 auto;">
      <!-- Hidden preheader text -->
      <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
        EXCLUSIVE OFFER: Access our Wealth Through Property Academy for just £99 (was £475) - Limited availability for property investors only!
      </div>
      
      <!-- Email container with modern design -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; border-radius: 20px; overflow: hidden; background-color: #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);" class="email-container">
        <!-- Header section -->
        <tr>
          <td style="padding: 0; background-color: #0b4142; position: relative;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
                <td style="padding: 30px 30px 20px 30px; text-align: center;">
                  <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="50" height="50" alt="Touchstone Education" style="display: inline-block; border-radius: 12px;" />
                </td>
              </tr>
              <tr>
                <td style="padding: 0 30px 40px 30px; text-align: center;">
                  <h1 style="margin: 0 0 5px 0; font-size: 28px; line-height: 1.2; font-weight: 800; letter-spacing: -0.5px; color: #ffffff;">
                    WEALTH THROUGH PROPERTY
                  </h1>
                  <p style="margin: 0; font-size: 17px; color: rgba(255,255,255,0.85); font-weight: 400; letter-spacing: 0.5px;">
                    ACCESS ACADEMY
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Limited time offer banner -->
        <tr>
          <td style="padding: 0;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
                <td style="background-color: #0c3636; padding: 12px 20px; text-align: center; color: white;">
                  <p style="margin: 0; font-size: 14px; letter-spacing: 0.5px; font-weight: 500;">
                    LIMITED TIME OFFER: SPECIAL £99 PRICING - ENDS SOON
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Hero pricing section - Modern, Minimal Design -->
        <tr>
          <td style="padding: 0;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
                <td style="padding: 40px 30px; text-align: center; background-color: #ffffff;" class="mobile-padding-reset">
                  <!-- Clean, modern pricing display -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td class="mobile-stack-table">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                          <tr>
                            <!-- Left price (original) -->
                            <td class="mobile-stack-cell" width="48%" style="vertical-align: middle; padding-right: 10px;">
                              <div style="border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; background-color: #f8fafc; text-align: center;">
                                <p style="margin: 0 0 5px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Regular Price</p>
                                <p style="margin: 0; font-size: 32px; font-weight: 700; color: #94a3b8; text-decoration: line-through;">£475</p>
                              </div>
                            </td>
                            
                            <!-- Right price (offer) -->
                            <td class="mobile-stack-cell" width="48%" style="vertical-align: middle; padding-left: 10px;">
                              <div style="border: 1px solid #0b4142; border-radius: 16px; padding: 20px; background-color: #f1f8f8; text-align: center; position: relative;">
                                <!-- Clean, modern badge -->
                                <div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background-color: #0b4142; color: white; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; letter-spacing: 0.5px;">
                                  SAVE 79%
                                </div>
                                
                                <p style="margin: 0 0 5px 0; font-size: 14px; color: #0b4142; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Today Only</p>
                                <p style="margin: 0; font-size: 38px; font-weight: 800; color: #0b4142;">£99</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Countdown timer with minimal design -->
                  <table width="80%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 30px auto 20px auto;">
                    <tr>
                      <td align="center">
                        <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                          <tr>
                            <td style="padding: 0 4px;">
                              <div style="background-color: #0b4142; width: 60px; border-radius: 10px; padding: 12px 0; text-align: center;">
                                <p style="margin: 0; font-size: 22px; font-weight: 700; color: white;">24</p>
                                <p style="margin: 0; font-size: 10px; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 0.5px;">Hours</p>
                              </div>
                            </td>
                            <td style="padding: 0 4px; font-size: 20px; font-weight: bold; color: #0b4142;">:</td>
                            <td style="padding: 0 4px;">
                              <div style="background-color: #0b4142; width: 60px; border-radius: 10px; padding: 12px 0; text-align: center;">
                                <p style="margin: 0; font-size: 22px; font-weight: 700; color: white;">00</p>
                                <p style="margin: 0; font-size: 10px; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 0.5px;">Mins</p>
                              </div>
                            </td>
                            <td style="padding: 0 4px; font-size: 20px; font-weight: bold; color: #0b4142;">:</td>
                            <td style="padding: 0 4px;">
                              <div style="background-color: #0b4142; width: 60px; border-radius: 10px; padding: 12px 0; text-align: center;">
                                <p style="margin: 0; font-size: 22px; font-weight: 700; color: white;">00</p>
                                <p style="margin: 0; font-size: 10px; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 0.5px;">Secs</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Modern CTA button -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-top: 20px;">
                    <tr>
                      <td align="center">
                        <div style="background-color: #bd9a37; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 6px rgba(189, 154, 55, 0.2);">
                          <a href="#claim-now" target="_blank" style="display: block; padding: 18px 35px; font-size: 16px; font-weight: 700; color: white; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px;">
                            Claim Your £99 Access Now
                          </a>
                        </div>
                        <p style="margin: 10px 0 0 0; font-size: 13px; color: #64748b;">
                          <img src="https://cdn-icons-png.flaticon.com/512/4947/4947236.png" width="12" height="12" alt="Secure" style="display: inline; vertical-align: middle; margin-right: 4px; filter: invert(45%) sepia(15%) saturate(343%) hue-rotate(176deg) brightness(91%) contrast(83%);" />
                          Secure checkout • Limited availability
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Main content with clean, minimal design -->
        <tr>
          <td style="padding: 0 30px 30px 30px; background-color: #ffffff;">
            <!-- Personalized greeting -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td style="padding-bottom: 20px; border-bottom: 1px solid #f1f5f9;">
                  <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #475569;">
                    Hi [First Name],
                  </p>
                  
                  <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #475569;">
                    Based on your interest in our Commercial Property training, I'd like to extend an exclusive invitation to join our <span style="font-weight: 600; color: #0b4142; position: relative; display: inline-block; z-index: 1;">Wealth Through Property Academy<span style="position: absolute; bottom: -2px; left: 0; width: 100%; height: 4px; background-color: rgba(11, 65, 66, 0.1); z-index: -1;"></span></span> at a special price, unavailable to the general public.
                  </p>
                  
                  <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #475569;">
                    For a limited time, you can access our complete academy for just <strong>£99</strong> instead of the regular £475.
                  </p>
                </td>
              </tr>
            </table>
            
            <!-- Clean, Modern Section Divider - What's Included -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td>
                  <h2 style="margin: 0 0 25px 0; font-size: 22px; font-weight: 700; color: #0b4142; text-align: center; position: relative;">
                    <span style="background-color: #ffffff; padding: 0 15px; position: relative; z-index: 1;">What You'll Get</span>
                    <span style="position: absolute; height: 1px; background-color: #e2e8f0; width: 100%; left: 0; top: 50%; z-index: 0;"></span>
                  </h2>
                  
                  <!-- Features with sleek, modern icons and layout -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                          <!-- Features - First Row -->
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <!-- Feature 1 -->
                                  <td class="mobile-stack-cell" width="48%" style="padding-right: 15px; vertical-align: top;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                      <tr>
                                        <td width="40" style="vertical-align: top; padding-right: 12px;">
                                          <div style="width: 36px; height: 36px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.08); text-align: center; line-height: 36px;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/9841/9841608.png" width="18" height="18" alt="Access" style="display: inline; vertical-align: middle; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                          </div>
                                        </td>
                                        <td style="vertical-align: top;">
                                          <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600; color: #1e293b;">Lifetime Access</p>
                                          <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #64748b;">
                                            All training modules with future updates included
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                  
                                  <!-- Feature 2 -->
                                  <td class="mobile-stack-cell" width="48%" style="vertical-align: top;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                      <tr>
                                        <td width="40" style="vertical-align: top; padding-right: 12px;">
                                          <div style="width: 36px; height: 36px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.08); text-align: center; line-height: 36px;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png" width="18" height="18" alt="Templates" style="display: inline; vertical-align: middle; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                          </div>
                                        </td>
                                        <td style="vertical-align: top;">
                                          <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600; color: #1e293b;">Deal Analysis Tools</p>
                                          <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #64748b;">
                                            Property calculators and deal templates
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Features - Second Row -->
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <!-- Feature 3 -->
                                  <td class="mobile-stack-cell" width="48%" style="padding-right: 15px; vertical-align: top;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                      <tr>
                                        <td width="40" style="vertical-align: top; padding-right: 12px;">
                                          <div style="width: 36px; height: 36px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.08); text-align: center; line-height: 36px;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/2534/2534513.png" width="18" height="18" alt="Community" style="display: inline; vertical-align: middle; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                          </div>
                                        </td>
                                        <td style="vertical-align: top;">
                                          <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600; color: #1e293b;">Community Access</p>
                                          <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #64748b;">
                                            Network with successful property investors
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                  
                                  <!-- Feature 4 -->
                                  <td class="mobile-stack-cell" width="48%" style="vertical-align: top;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                      <tr>
                                        <td width="40" style="vertical-align: top; padding-right: 12px;">
                                          <div style="width: 36px; height: 36px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.08); text-align: center; line-height: 36px;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/9494/9494757.png" width="18" height="18" alt="Mentoring" style="display: inline; vertical-align: middle; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                          </div>
                                        </td>
                                        <td style="vertical-align: top;">
                                          <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600; color: #1e293b;">Expert Mentoring</p>
                                          <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #64748b;">
                                            Direct access to property millionaires
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- Student Results - Clean, Modern Cards -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td>
                  <h2 style="margin: 0 0 20px 0; font-size: 22px; font-weight: 700; color: #0b4142; text-align: left;">
                    Student Results
                  </h2>
                  
                  <!-- Results with clean, modern style -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="background-color: #f9fafb; border-radius: 16px; overflow: hidden;">
                    <tr>
                      <td style="padding: 25px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                          <tr>
                            <td class="mobile-stack-cell" style="padding-bottom: 20px;">
                              <!-- Result 1 -->
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td style="padding-bottom: 8px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                      <tr>
                                        <td>
                                          <p style="margin: 0; font-size: 15px; font-weight: 600; color: #475569;">Average Monthly Income</p>
                                        </td>
                                        <td align="right">
                                          <p style="margin: 0; font-size: 16px; font-weight: 700; color: #0b4142;">£5,200</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div style="background-color: #e2e8f0; height: 8px; border-radius: 4px; overflow: hidden;">
                                      <div style="background-color: #0b4142; height: 100%; width: 85%; border-radius: 4px;"></div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <tr>
                            <td class="mobile-stack-cell" style="padding-bottom: 20px;">
                              <!-- Result 2 -->
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td style="padding-bottom: 8px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                      <tr>
                                        <td>
                                          <p style="margin: 0; font-size: 15px; font-weight: 600; color: #475569;">Property Portfolio Size</p>
                                        </td>
                                        <td align="right">
                                          <p style="margin: 0; font-size: 16px; font-weight: 700; color: #0b4142;">£1.2M+</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div style="background-color: #e2e8f0; height: 8px; border-radius: 4px; overflow: hidden;">
                                      <div style="background-color: #0b4142; height: 100%; width: 75%; border-radius: 4px;"></div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <tr>
                            <td class="mobile-stack-cell">
                              <!-- Result 3 -->
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td style="padding-bottom: 8px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                      <tr>
                                        <td>
                                          <p style="margin: 0; font-size: 15px; font-weight: 600; color: #475569;">ROI Performance</p>
                                        </td>
                                        <td align="right">
                                          <p style="margin: 0; font-size: 16px; font-weight: 700; color: #0b4142;">22%+</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div style="background-color: #e2e8f0; height: 8px; border-radius: 4px; overflow: hidden;">
                                      <div style="background-color: #0b4142; height: 100%; width: 90%; border-radius: 4px;"></div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- Clean, Modern Testimonial Card -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td style="padding: 25px; background-color: #f9fafb; border-radius: 16px; border-left: 3px solid #bd9a37;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td style="padding-bottom: 15px;">
                        <img src="https://cdn-icons-png.flaticon.com/512/5643/5643120.png" width="28" height="28" alt="Quote" style="display: block; filter: invert(63%) sepia(47%) saturate(432%) hue-rotate(355deg) brightness(92%) contrast(94%);" />
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 15px;">
                        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #475569; font-style: italic;">
                          "After taking the academy course, I found a commercial property that now gives me £3,200 monthly passive income. This has completely changed my life."
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                          <tr>
                            <td width="30" style="vertical-align: middle; padding-right: 10px;">
                              <div style="width: 30px; height: 30px; border-radius: 50%; background-color: #0b4142; color: white; text-align: center; line-height: 30px; font-weight: 600; font-size: 14px;">
                                S
                              </div>
                            </td>
                            <td style="vertical-align: middle;">
                              <p style="margin: 0; font-size: 14px; font-weight: 600; color: #1e293b;">
                                Sarah T., Manchester
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- What's Included Modern Card -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
              <tr>
                <td style="background-color: #0b4142; padding: 15px 20px; text-align: center;">
                  <p style="margin: 0; font-size: 16px; font-weight: 600; color: white; letter-spacing: 0.5px;">
                    ACADEMY CURRICULUM HIGHLIGHTS
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 25px; background-color: #ffffff;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <!-- Feature list with modern style -->
                    <tr>
                      <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                          <!-- Feature Item 1 -->
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td width="24" style="vertical-align: top; padding-right: 12px;">
                                    <img src="https://cdn-icons-png.flaticon.com/512/447/447147.png" width="16" height="16" alt="✓" style="display: block; margin-top: 3px; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                  </td>
                                  <td style="vertical-align: top;">
                                    <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #334155; font-weight: 500;">
                                      12 Comprehensive Property Investment Modules
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Feature Item 2 -->
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td width="24" style="vertical-align: top; padding-right: 12px;">
                                    <img src="https://cdn-icons-png.flaticon.com/512/447/447147.png" width="16" height="16" alt="✓" style="display: block; margin-top: 3px; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                  </td>
                                  <td style="vertical-align: top;">
                                    <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #334155; font-weight: 500;">
                                      6 Ready-to-Use Contract & Deal Templates
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Feature Item 3 -->
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td width="24" style="vertical-align: top; padding-right: 12px;">
                                    <img src="https://cdn-icons-png.flaticon.com/512/447/447147.png" width="16" height="16" alt="✓" style="display: block; margin-top: 3px; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                  </td>
                                  <td style="vertical-align: top;">
                                    <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #334155; font-weight: 500;">
                                      Commercial Deal Analyzer Calculator
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Feature Item 4 -->
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td width="24" style="vertical-align: top; padding-right: 12px;">
                                    <img src="https://cdn-icons-png.flaticon.com/512/447/447147.png" width="16" height="16" alt="✓" style="display: block; margin-top: 3px; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                  </td>
                                  <td style="vertical-align: top;">
                                    <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #334155; font-weight: 500;">
                                      30+ Hours of Expert Training Videos
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Feature Item 5 -->
                          <tr>
                            <td>
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td width="24" style="vertical-align: top; padding-right: 12px;">
                                    <img src="https://cdn-icons-png.flaticon.com/512/447/447147.png" width="16" height="16" alt="✓" style="display: block; margin-top: 3px; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                  </td>
                                  <td style="vertical-align: top;">
                                    <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #334155; font-weight: 500;">
                                      Access to Private Property Investor Community
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- Final CTA with Modern Style -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td style="background-color: #0c3636; padding: 30px; border-radius: 16px; text-align: center;" class="mobile-padding-reset">
                  <h3 style="margin: 0 0 15px 0; font-size: 20px; font-weight: 700; color: white; letter-spacing: -0.5px;">
                    Limited Time Offer – Save £376
                  </h3>
                  
                  <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5; color: rgba(255,255,255,0.9);">
                    Claim your £99 access now before this offer expires
                  </p>
                  
                  <!-- Modern CTA Button -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td align="center">
                        <div style="background-color: #bd9a37; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                          <a href="#claim-now" target="_blank" style="display: block; padding: 16px 35px; font-size: 16px; font-weight: 700; color: white; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px;">
                            Secure Your Spot Now
                          </a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- Personal Note with Modern Design -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td style="padding: 25px; background-color: #f1f5f9; border-radius: 16px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td width="60" style="vertical-align: top; padding-right: 15px;">
                        <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="50" height="50" alt="Paul Smith" style="border-radius: 50%; display: block; border: 2px solid white;" />
                      </td>
                      <td style="vertical-align: top;">
                        <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #475569;">
                          This special £99 access (normally £475) is available for a very limited time. In just a few days, this opportunity will be gone.
                        </p>
                        
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #475569; font-weight: 500;">
                          I look forward to welcoming you into the academy!
                        </p>
                        
                        <p style="margin: 10px 0 0 0; font-size: 16px; font-weight: 600; color: #0b4142;">
                          Paul Smith
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- Final PS section with modern style -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
                <td style="padding: 15px 20px; background-color: #fffbeb; border-radius: 10px; border-left: 3px solid #bd9a37;">
                  <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #334155; font-weight: 500;">
                    <strong>PS:</strong> This special £99 price is only available for a very limited time. When the timer hits zero, this opportunity disappears forever. <a href="#claim-now" style="color: #0b4142; font-weight: 600; text-decoration: underline;">Secure your place now</a>.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Modern, clean footer -->
        <tr>
          <td style="background-color: #f8fafc; padding: 25px 30px; border-top: 1px solid #e2e8f0; text-align: center;">
            <!-- Trust badges with modern style -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 20px;">
              <tr>
                <td align="center">
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td style="padding: 0 10px; vertical-align: middle;">
                        <img src="https://cdn-icons-png.flaticon.com/512/6358/6358336.png" width="16" height="16" alt="Secure" style="display: inline; vertical-align: middle; margin-right: 4px; filter: invert(45%) sepia(15%) saturate(343%) hue-rotate(176deg) brightness(91%) contrast(83%);" />
                        <span style="font-size: 13px; color: #64748b;">Secure</span>
                      </td>
                      <td style="padding: 0 10px; vertical-align: middle;">
                        <img src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png" width="16" height="16" alt="Guarantee" style="display: inline; vertical-align: middle; margin-right: 4px; filter: invert(45%) sepia(15%) saturate(343%) hue-rotate(176deg) brightness(91%) contrast(83%);" />
                        <span style="font-size: 13px; color: #64748b;">Guaranteed</span>
                      </td>
                      <td style="padding: 0 10px; vertical-align: middle;">
                        <img src="https://cdn-icons-png.flaticon.com/512/4257/4257824.png" width="16" height="16" alt="Support" style="display: inline; vertical-align: middle; margin-right: 4px; filter: invert(45%) sepia(15%) saturate(343%) hue-rotate(176deg) brightness(91%) contrast(83%);" />
                        <span style="font-size: 13px; color: #64748b;">24/7 Support</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- Social links with modern style -->
            <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 20px;">
              <tr>
                <td style="padding: 0 5px;">
                  <a href="#facebook" style="display: inline-block; width: 32px; height: 32px; line-height: 32px; background-color: #f1f5f9; border-radius: 50%; text-align: center;">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="16" height="16" alt="Facebook" style="display: inline; vertical-align: middle; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  </a>
                </td>
                <td style="padding: 0 5px;">
                  <a href="#twitter" style="display: inline-block; width: 32px; height: 32px; line-height: 32px; background-color: #f1f5f9; border-radius: 50%; text-align: center;">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="16" height="16" alt="Twitter" style="display: inline; vertical-align: middle; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  </a>
                </td>
                <td style="padding: 0 5px;">
                  <a href="#linkedin" style="display: inline-block; width: 32px; height: 32px; line-height: 32px; background-color: #f1f5f9; border-radius: 50%; text-align: center;">
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="16" height="16" alt="LinkedIn" style="display: inline; vertical-align: middle; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  </a>
                </td>
                <td style="padding: 0 5px;">
                  <a href="#instagram" style="display: inline-block; width: 32px; height: 32px; line-height: 32px; background-color: #f1f5f9; border-radius: 50%; text-align: center;">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="16" height="16" alt="Instagram" style="display: inline; vertical-align: middle; filter: invert(15%) sepia(54%) saturate(1080%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  </a>
                </td>
              </tr>
            </table>
            
            <!-- Company info and legal links -->
            <p style="margin: 0 0 5px 0; font-size: 14px; font-weight: 600; color: #0b4142;">
              Touchstone Education
            </p>
            
            <p style="margin: 0 0 15px 0; font-size: 13px; color: #64748b;">
              © 2025 Touchstone Education | <a href="#privacy" style="color: #64748b; text-decoration: none;">Privacy Policy</a> | <a href="#terms" style="color: #64748b; text-decoration: none;">Terms</a>
            </p>
            
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">
              <!--HubSpot required unsubscribe link - would be used in actual implementation-->
              <!-- {% unsubscribe "Unsubscribe" | css(color="#94a3b8") %} -->
            </p>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>
</html>`;