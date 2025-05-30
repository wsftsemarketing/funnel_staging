import React from "react";

export default function EmailTemplate4() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl font-bold mb-6">Email Template #4</h1>
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
  <title>Touchstone Education - Exclusive £99 Access to Wealth Academy</title>
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
      color: #0b4142; /* Primary: hsl(188, 51%, 18%) */
      text-decoration: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
    .highlight-underline {
      position: relative;
      display: inline-block;
    }
    .highlight-underline::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(11, 65, 66, 0.1);
      z-index: -1;
      border-radius: 4px;
    }
    .highlight-gold {
      position: relative;
      display: inline-block;
    }
    .highlight-gold::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(189, 154, 55, 0.2);
      z-index: -1;
      border-radius: 4px;
    }
    .pricing-box {
      position: relative;
      overflow: hidden;
    }
    .pricing-badge {
      position: absolute;
      top: 20px;
      right: -35px;
      transform: rotate(45deg);
      background-color: #f87171;
      color: white;
      padding: 5px 40px;
      font-weight: bold;
      font-size: 14px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1;
    }
    /* Responsive adjustments */
    @media only screen and (max-width: 480px) {
      .email-container {
        width: 100% !important;
        max-width: 100% !important;
      }
      .stack-column {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        margin-bottom: 15px !important;
      }
      .benefit-item {
        width: 100% !important;
        display: block !important;
        margin: 0 0 15px 0 !important;
      }
      .pricing-column {
        width: 100% !important;
        display: block !important;
        margin-bottom: 20px !important;
      }
      .value-column {
        padding-right: 0 !important;
        padding-bottom: 15px !important;
      }
      .mobile-center {
        text-align: center !important;
      }
      .mobile-padding {
        padding: 25px !important;
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
  
  <center style="width: 100%; background: linear-gradient(135deg, #f7f8f9 0%, #e9f1f3 100%); text-align: left; padding: 20px 0;">
    <!-- Email container -->
    <div style="max-width: 600px; margin: 0 auto;">
      <!-- Hidden preheader text -->
      <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
        🔥 SPECIAL OFFER: Access our Wealth Through Property Academy for just £99 (was £475) - Strictly limited availability for serious property investors only!
      </div>
      
      <!-- Email container with curved top -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 8px 30px rgba(0,0,0,0.12);" class="email-container">
        <!-- VIP Access Header Section -->
        <tr>
          <td style="background-image: url('https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); background-position: center; background-size: cover; height: 100px; position: relative;">
            <!-- Dark overlay -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, rgba(11,65,66,0.95) 0%, rgba(11,65,66,0.7) 100%);"></div>
            
            <!-- VIP Badge -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
                <td align="center" style="position: relative; padding: 25px 15px;">
                  <div style="display: inline-block; background: linear-gradient(90deg, #bd9a37 0%, #e5c675 100%); border-radius: 50px; padding: 8px 25px; margin-bottom: 10px; box-shadow: 0 3px 10px rgba(0,0,0,0.2);">
                    <p style="margin: 0; font-size: 18px; font-weight: 800; color: #ffffff; letter-spacing: 1px;">EXCLUSIVE OFFER</p>
                  </div>
                  <h1 style="margin: 5px 0; font-size: 28px; line-height: 1.2; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; text-align: center;">
                    Wealth Through Property Academy
                  </h1>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- INNOVATIVE COMPONENT: Price Comparison Spotlight -->
        <tr>
          <td style="padding: 0; background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);">
            <div style="margin: -30px 25px 25px 25px; position: relative;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tr>
                  <td align="center">
                    <!-- Pricing box with neumorphic design -->
                    <div style="background: #ffffff; border-radius: 16px; box-shadow: 0 10px 30px rgba(11, 65, 66, 0.1), 0 0 0 1px rgba(11, 65, 66, 0.05); padding: 25px; position: relative; overflow: hidden;">
                      <!-- Ribbon banner -->
                      <div style="position: absolute; top: 15px; right: -40px; background: #f87171; color: white; text-align: center; transform: rotate(45deg); padding: 5px 50px; font-weight: 700; font-size: 14px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); z-index: 1;">
                        79% OFF
                      </div>
                      
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                          <td align="center" style="padding-bottom: 15px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                              <tr>
                                <td class="pricing-column" width="48%" style="padding-right: 15px; vertical-align: top; text-align: center;">
                                  <p style="margin: 0 0 5px 0; font-size: 14px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Was</p>
                                  <p style="margin: 0; font-size: 32px; font-weight: 700; color: #a0aec0; text-decoration: line-through;">£475</p>
                                </td>
                                <td class="pricing-column" width="48%" style="vertical-align: top; text-align: center;">
                                  <p style="margin: 0 0 5px 0; font-size: 14px; color: #0b4142; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Today Only</p>
                                  <p style="margin: 0; font-size: 38px; font-weight: 800; color: #0b4142;">£99</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding-top: 5px;">
                            <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568; text-align: center;">
                              <strong>Strictly limited availability</strong> - Special offer ends soon!
                            </p>
                            
                            <!-- Timer component -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 20px;">
                              <tr>
                                <td align="center">
                                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                    <tr>
                                      <td style="padding: 0 3px;">
                                        <div style="background: linear-gradient(to bottom, #0b4142, #0d4e4f); width: 50px; border-radius: 8px; padding: 10px 0; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1);">
                                          <p style="margin: 0; font-size: 20px; font-weight: 800; color: white;">24</p>
                                          <p style="margin: 0; font-size: 10px; font-weight: 500; color: rgba(255,255,255,0.8);">HOURS</p>
                                        </div>
                                      </td>
                                      <td style="padding: 0 3px; font-size: 20px; font-weight: bold; color: #0b4142;">:</td>
                                      <td style="padding: 0 3px;">
                                        <div style="background: linear-gradient(to bottom, #0b4142, #0d4e4f); width: 50px; border-radius: 8px; padding: 10px 0; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1);">
                                          <p style="margin: 0; font-size: 20px; font-weight: 800; color: white;">00</p>
                                          <p style="margin: 0; font-size: 10px; font-weight: 500; color: rgba(255,255,255,0.8);">MINS</p>
                                        </div>
                                      </td>
                                      <td style="padding: 0 3px; font-size: 20px; font-weight: bold; color: #0b4142;">:</td>
                                      <td style="padding: 0 3px;">
                                        <div style="background: linear-gradient(to bottom, #0b4142, #0d4e4f); width: 50px; border-radius: 8px; padding: 10px 0; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1);">
                                          <p style="margin: 0; font-size: 20px; font-weight: 800; color: white;">00</p>
                                          <p style="margin: 0; font-size: 10px; font-weight: 500; color: rgba(255,255,255,0.8);">SECS</p>
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
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        
        <!-- Main content -->
        <tr>
          <td style="padding: 0 30px 30px 30px; background-color: #ffffff;">
            <!-- Personal greeting -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 25px;">
              <tr>
                <td style="text-align: left;">
                  <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                    Hi [First Name],
                  </p>
                  
                  <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                    I hope you found our Commercial Property training valuable. Based on your interest, I wanted to personally invite you to join our exclusive <span style="position: relative; font-weight: 700; color: #0b4142;"><span style="position: relative; z-index: 1;">Wealth Through Property Academy</span><span style="position: absolute; bottom: 0; left: 0; width: 100%; height: 8px; background-color: rgba(11, 65, 66, 0.1); z-index: 0;"></span></span> at a very special price.
                  </p>
                  
                  <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                    This is <em>not</em> available to the general public - it's exclusively for people like you who've shown a serious interest in creating wealth through commercial property.
                  </p>
                </td>
              </tr>
            </table>
            
            <!-- INNOVATIVE COMPONENT: Animated Value Proposition -->
            <div style="margin: 30px 0; border-radius: 16px; overflow: hidden; background: linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tr>
                  <td align="center" style="padding: 25px 20px; text-align: center;">
                    <h2 style="margin: 0 0 20px 0; font-size: 24px; font-weight: 800; color: #0b4142; position: relative; display: inline-block;">
                      <span style="position: relative; z-index: 1;">Why Our Students Invest £475</span>
                      <span style="position: absolute; bottom: 2px; left: 0; width: 100%; height: 10px; background: rgba(189, 154, 55, 0.2); z-index: 0; border-radius: 10px;"></span>
                    </h2>
                    
                    <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568; max-width: 500px; text-align: center;">
                      The Wealth Through Property Academy has helped hundreds of everyday people achieve financial freedom through commercial property investing.
                    </p>
                    
                    <!-- Value Columns - arranged as bento boxes -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tr>
                        <td>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <!-- First row -->
                            <tr>
                              <!-- Left value proposition -->
                              <td class="value-column" width="48%" style="padding-right: 15px; padding-bottom: 15px; vertical-align: top;">
                                <div style="background: white; border-radius: 12px; padding: 20px; min-height: 140px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                    <tr>
                                      <td width="50" style="vertical-align: top; padding-right: 15px;">
                                        <div style="width: 45px; height: 45px; border-radius: 50%; background: rgba(11, 65, 66, 0.1); display: flex; align-items: center; justify-content: center;">
                                          <img src="https://cdn-icons-png.flaticon.com/512/9841/9841608.png" width="25" height="25" alt="Access icon" style="filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                        </div>
                                      </td>
                                      <td style="vertical-align: top;">
                                        <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 700; color: #0b4142;">Lifetime Access</h3>
                                        <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #4a5568;">
                                          Comprehensive training that's yours for life, with all future updates included
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                              
                              <!-- Right value proposition -->
                              <td class="value-column" width="48%" style="padding-bottom: 15px; vertical-align: top;">
                                <div style="background: white; border-radius: 12px; padding: 20px; min-height: 140px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                    <tr>
                                      <td width="50" style="vertical-align: top; padding-right: 15px;">
                                        <div style="width: 45px; height: 45px; border-radius: 50%; background: rgba(189, 154, 55, 0.1); display: flex; align-items: center; justify-content: center;">
                                          <img src="https://cdn-icons-png.flaticon.com/512/2534/2534513.png" width="25" height="25" alt="Community icon" style="filter: invert(65%) sepia(26%) saturate(1084%) hue-rotate(0deg) brightness(90%) contrast(88%);" />
                                        </div>
                                      </td>
                                      <td style="vertical-align: top;">
                                        <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 700; color: #bd9a37;">Community Support</h3>
                                        <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #4a5568;">
                                          Access to our exclusive community of successful property investors
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                            </tr>
                            
                            <!-- Second row -->
                            <tr>
                              <!-- Left value proposition -->
                              <td class="value-column" width="48%" style="padding-right: 15px; vertical-align: top;">
                                <div style="background: white; border-radius: 12px; padding: 20px; min-height: 140px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                    <tr>
                                      <td width="50" style="vertical-align: top; padding-right: 15px;">
                                        <div style="width: 45px; height: 45px; border-radius: 50%; background: rgba(248, 113, 113, 0.1); display: flex; align-items: center; justify-content: center;">
                                          <img src="https://cdn-icons-png.flaticon.com/512/4645/4645245.png" width="25" height="25" alt="Templates icon" style="filter: invert(63%) sepia(66%) saturate(5323%) hue-rotate(329deg) brightness(95%) contrast(94%);" />
                                        </div>
                                      </td>
                                      <td style="vertical-align: top;">
                                        <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 700; color: #f87171;">Deal Analysis Tools</h3>
                                        <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #4a5568;">
                                          Proprietary calculators and templates to find winning deals
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                              
                              <!-- Right value proposition -->
                              <td class="value-column" width="48%" style="vertical-align: top;">
                                <div style="background: white; border-radius: 12px; padding: 20px; min-height: 140px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                    <tr>
                                      <td width="50" style="vertical-align: top; padding-right: 15px;">
                                        <div style="width: 45px; height: 45px; border-radius: 50%; background: rgba(124, 58, 237, 0.1); display: flex; align-items: center; justify-content: center;">
                                          <img src="https://cdn-icons-png.flaticon.com/512/9494/9494757.png" width="25" height="25" alt="Mentoring icon" style="filter: invert(19%) sepia(90%) saturate(4907%) hue-rotate(261deg) brightness(90%) contrast(93%);" />
                                        </div>
                                      </td>
                                      <td style="vertical-align: top;">
                                        <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 700; color: #7c3aed;">Expert Mentoring</h3>
                                        <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #4a5568;">
                                          Direct access to property millionaires who've done it all before
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
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
            </div>
            
            <!-- INNOVATIVE COMPONENT: Results Gallery - Split Screen Layout -->
            <div style="margin: 35px 0; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tr>
                  <!-- Left side with image -->
                  <td class="stack-column" width="45%" style="vertical-align: middle; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/6266557/pexels-photo-6266557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center/cover; padding: 40px; text-align: left;">
                    <h3 style="margin: 0 0 15px 0; font-size: 24px; font-weight: 800; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">STUDENT SUCCESS</h3>
                    <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #ffffff; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
                      These are real results from real students with no prior property experience.
                    </p>
                    
                    <!-- Testimonial quote -->
                    <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); border-radius: 12px; padding: 20px; border-left: 4px solid #bd9a37; margin-top: 20px;">
                      <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #ffffff; font-style: italic;">
                        "After taking the academy course, I found a commercial property that now gives me £3,200 monthly passive income. This has completely changed my life."
                      </p>
                      <p style="margin: 0; font-size: 14px; color: #ffffff; font-weight: 600;">
                        — Sarah T., Manchester
                      </p>
                    </div>
                  </td>
                  
                  <!-- Right side with stats -->
                  <td class="stack-column" width="55%" style="vertical-align: middle; padding: 40px; background: white; text-align: left;">
                    <h3 style="margin: 0 0 20px 0; font-size: 22px; font-weight: 700; color: #0b4142;">Our Students Achieve:</h3>
                    
                    <!-- Stats list with custom progress bars -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <!-- Stat 1 -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                              <td style="padding-bottom: 8px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td>
                                      <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1a202c;">Average Monthly Income</p>
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
                                <div style="background-color: #e2e8f0; height: 10px; border-radius: 5px; overflow: hidden;">
                                  <div style="background: linear-gradient(90deg, #0b4142 0%, #188382 100%); height: 100%; width: 85%; border-radius: 5px;"></div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- Stat 2 -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                              <td style="padding-bottom: 8px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td>
                                      <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1a202c;">Property Portfolio Size</p>
                                    </td>
                                    <td align="right">
                                      <p style="margin: 0; font-size: 16px; font-weight: 700; color: #bd9a37;">£1.2M+</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style="background-color: #e2e8f0; height: 10px; border-radius: 5px; overflow: hidden;">
                                  <div style="background: linear-gradient(90deg, #bd9a37 0%, #d3b867 100%); height: 100%; width: 75%; border-radius: 5px;"></div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- Stat 3 -->
                      <tr>
                        <td>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                              <td style="padding-bottom: 8px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td>
                                      <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1a202c;">ROI Performance</p>
                                    </td>
                                    <td align="right">
                                      <p style="margin: 0; font-size: 16px; font-weight: 700; color: #f87171;">22%+</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style="background-color: #e2e8f0; height: 10px; border-radius: 5px; overflow: hidden;">
                                  <div style="background: linear-gradient(90deg, #f87171 0%, #fca5a5 100%); height: 100%; width: 90%; border-radius: 5px;"></div>
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
            </div>
            
            <!-- INNOVATIVE COMPONENT: What You Get Premium "Ticket" Component -->
            <div style="margin: 40px 0; border-radius: 16px; overflow: hidden; position: relative;">              
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tr>
                  <!-- Header with fancy design -->
                  <td style="background: linear-gradient(90deg, #0b4142 0%, #188382 100%); padding: 15px 20px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h3 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">WHAT'S INCLUDED IN YOUR ACADEMY TICKET</h3>
                  </td>
                </tr>
                
                <!-- Main content -->
                <tr>
                  <td style="background: linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%); padding: 25px; border: 1px solid rgba(0,0,0,0.1); border-top: none; border-radius: 0 0 10px 10px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <!-- First row of benefits -->
                      <tr>
                        <td style="padding-bottom: 20px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <!-- First benefit -->
                            <tr>
                              <td class="benefit-item" style="padding-bottom: 15px;">
                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td width="30" valign="top" style="padding-right: 12px;">
                                      <img src="https://cdn-icons-png.flaticon.com/512/6364/6364343.png" width="20" height="20" alt="✓" style="display: block; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                    </td>
                                    <td>
                                      <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">12 Comprehensive Property Investment Modules</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            
                            <!-- Second benefit -->
                            <tr>
                              <td class="benefit-item" style="padding-bottom: 15px;">
                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td width="30" valign="top" style="padding-right: 12px;">
                                      <img src="https://cdn-icons-png.flaticon.com/512/6364/6364343.png" width="20" height="20" alt="✓" style="display: block; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                    </td>
                                    <td>
                                      <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">6 Ready-to-Use Contract & Deal Templates</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            
                            <!-- Third benefit -->
                            <tr>
                              <td class="benefit-item" style="padding-bottom: 15px;">
                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td width="30" valign="top" style="padding-right: 12px;">
                                      <img src="https://cdn-icons-png.flaticon.com/512/6364/6364343.png" width="20" height="20" alt="✓" style="display: block; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                    </td>
                                    <td>
                                      <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">Commercial Deal Analyzer Calculator</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            
                            <!-- Fourth benefit -->
                            <tr>
                              <td class="benefit-item" style="padding-bottom: 15px;">
                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td width="30" valign="top" style="padding-right: 12px;">
                                      <img src="https://cdn-icons-png.flaticon.com/512/6364/6364343.png" width="20" height="20" alt="✓" style="display: block; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                    </td>
                                    <td>
                                      <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">30+ Hours of Expert Training Videos</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            
                            <!-- Fifth benefit -->
                            <tr>
                              <td class="benefit-item">
                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td width="30" valign="top" style="padding-right: 12px;">
                                      <img src="https://cdn-icons-png.flaticon.com/512/6364/6364343.png" width="20" height="20" alt="✓" style="display: block; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                                    </td>
                                    <td>
                                      <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
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
            </div>
            
            <!-- INNOVATIVE COMPONENT: Interactive Call to Action -->
            <div style="margin: 30px 0; text-align: center;">
              <!-- Premium golden glow button -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tr>
                  <td align="center">
                    <div style="display: inline-block; position: relative; margin-bottom: 30px;">
                      <!-- Pulsing effect container -->
                      <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #bd9a37; color: white; font-weight: 700; font-size: 14px; padding: 5px 15px; border-radius: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); letter-spacing: 0.5px;">
                        LAST CHANCE OFFER
                      </div>
                      
                      <!-- Button with fancy shadow effects -->
                      <div style="background: linear-gradient(90deg, #bd9a37 0%, #d3b867 100%); padding: 3px; border-radius: 12px; box-shadow: 0 8px 25px rgba(189, 154, 55, 0.3), 0 4px 10px rgba(189, 154, 55, 0.2);">
                        <a href="#claim-now" target="_blank" style="display: block; background: linear-gradient(180deg, #bd9a37 0%, #a58929 100%); padding: 18px 50px; font-size: 20px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 10px; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 1px 1px rgba(0,0,0,0.2);">
                          CLAIM YOUR £99 ACCESS NOW
                        </a>
                      </div>
                      
                      <!-- Decorative light reflection -->
                      <div style="position: absolute; top: 0; left: 0; width: 50%; height: 50%; background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%); border-top-left-radius: 10px; border-bottom-right-radius: 100px;"></div>
                    </div>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 10px 0; font-size: 15px; line-height: 1.5; color: #718096; text-align: center;">
                <img src="https://cdn-icons-png.flaticon.com/512/4947/4947236.png" width="16" height="16" alt="Secure" style="display: inline-block; vertical-align: middle; margin-right: 5px; filter: invert(48%) sepia(11%) saturate(1083%) hue-rotate(176deg) brightness(91%) contrast(86%);" /> Secure Checkout
              </p>
            </div>
            
            <!-- Personal Note Section -->
            <div style="margin: 40px 0 20px 0; padding: 25px; background-color: #fff; border-radius: 16px; border: 1px solid #e2e8f0; position: relative;">
              <!-- Profile image overlapping the content -->
              <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="70" height="70" alt="Paul Smith" style="position: absolute; top: -30px; left: 30px; border-radius: 50%; border: 4px solid white; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);" />
              
              <div style="margin-top: 20px;">
                <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568; text-align: left;">
                  As someone who's been through the wringer with all things property-related, I can tell you something with 100% confidence...
                </p>
                
                <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568; text-align: left;">
                  Commercial Property is where the biggest, easiest, hands-free profits are made (in the shortest possible time).
                </p>
                
                <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568; text-align: left;">
                  This special £99 access (normally £475) is available for a very limited time. In just a few days, this opportunity will be gone.
                </p>
                
                <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #4a5568; text-align: left; font-weight: 600;">
                  I look forward to welcoming you into the academy!
                </p>
              </div>
              
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-top: 20px;">
                <tr>
                  <td>
                    <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tr>
                        <td style="padding-right: 10px;">
                          <p style="margin: 0; font-size: 18px; color: #1a202c; font-weight: 600;">Paul Smith</p>
                          <p style="margin: 0; font-size: 14px; color: #718096;">Property Investor & Wealth Mentor</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
            
            <!-- Final PS section with urgency -->
            <div style="margin: 30px 0 10px 0; padding: 20px; background-color: #fffaeb; border-left: 4px solid #bd9a37; border-radius: 8px;">
              <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
                PS: This special £99 price is only available for a very limited time.
              </p>
              <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">
                When the timer hits zero, this opportunity disappears forever. <a href="#claim-now" style="color: #0b4142; text-decoration: underline; font-weight: 600;">Secure your place now</a>.
              </p>
            </div>
          </td>
        </tr>
        
        <!-- Footer with certification and legal -->
        <tr>
          <td style="background-color: #f5f8fa; padding: 25px; border-top: 1px solid #e2e8f0; text-align: center;">
            <!-- Trust icons -->
            <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 20px;">
              <tr>
                <td align="center">
                  <img src="https://cdn-icons-png.flaticon.com/512/6358/6358336.png" width="20" height="20" alt="Secure payment" style="display: inline-block; margin: 0 5px; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  <span style="font-size: 14px; color: #4a5568; margin-right: 15px;">Secure checkout</span>
                  
                  <img src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png" width="20" height="20" alt="Guarantee" style="display: inline-block; margin: 0 5px; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  <span style="font-size: 14px; color: #4a5568; margin-right: 15px;">Money-back guarantee</span>
                  
                  <img src="https://cdn-icons-png.flaticon.com/512/4257/4257824.png" width="20" height="20" alt="Customer support" style="display: inline-block; margin: 0 5px; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  <span style="font-size: 14px; color: #4a5568;">24/7 support</span>
                </td>
              </tr>
            </table>
            
            <!-- Certifications -->
            <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 20px;">
              <tr>
                <td align="center" style="padding: 0 10px;">
                  <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="80" height="80" alt="CPD Certified" style="display: block;" />
                </td>
              </tr>
              <tr>
                <td align="center" style="padding: 15px 10px 0 10px;">
                  <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="150" height="40" alt="Touchstone Education" style="display: block;" />
                </td>
              </tr>
            </table>
            
            <!-- Social links -->
            <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 15px;">
              <tr>
                <td style="padding: 0 5px;">
                  <a href="#facebook">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="24" height="24" alt="Facebook" style="display: block; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  </a>
                </td>
                <td style="padding: 0 5px;">
                  <a href="#twitter">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="24" height="24" alt="Twitter" style="display: block; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  </a>
                </td>
                <td style="padding: 0 5px;">
                  <a href="#linkedin">
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="24" height="24" alt="LinkedIn" style="display: block; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  </a>
                </td>
                <td style="padding: 0 5px;">
                  <a href="#instagram">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="24" height="24" alt="Instagram" style="display: block; filter: invert(18%) sepia(59%) saturate(1099%) hue-rotate(155deg) brightness(94%) contrast(102%);" />
                  </a>
                </td>
              </tr>
            </table>
            
            <!-- Legal footer -->
            <p style="margin: 0 0 10px 0; font-size: 12px; line-height: 1.5; color: #718096;">
              © 2025 Touchstone Education | <a href="#privacy" style="color: #4a5568; text-decoration: none;">Privacy Policy</a> | <a href="#terms" style="color: #4a5568; text-decoration: none;">Terms & Conditions</a>
            </p>
            <p style="margin: 0; font-size: 11px; line-height: 1.5; color: #a0aec0;">
              <!--HubSpot required unsubscribe link - would be used in actual implementation-->
              <!-- {% unsubscribe "Unsubscribe" | css(color="#a0aec0") %} -->
            </p>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>
</html>`;