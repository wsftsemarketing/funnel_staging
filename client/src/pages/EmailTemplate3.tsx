import React from "react";

export default function EmailTemplate3() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl font-bold mb-6">Email Template #3</h1>
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
  <title>Touchstone Education - Exclusive Property Opportunity</title>
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
    .tooltip {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #0b4142;
      color: white;
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
    }
    .tooltip::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #0b4142 transparent transparent transparent;
    }
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
      .stat-box {
        width: 100% !important;
        display: block !important;
        margin: 0 0 15px 0 !important;
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
  
  <center style="width: 100%; background: linear-gradient(135deg, #f7f8f9 0%, #e5edf0 100%); text-align: left; padding: 20px 0;">
    <!-- Email container -->
    <div style="max-width: 600px; margin: 0 auto;">
      <!-- Hidden preheader text -->
      <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
        🏢 Don't miss this opportunity: Learn how to create passive income with Commercial Property and shield yourself from economic uncertainty...
      </div>
      
      <!-- Email container -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 8px 30px rgba(0,0,0,0.08);" class="email-container">
        <!-- Header with premium glass effect -->
        <tr>
          <td style="background: linear-gradient(110deg, rgba(11, 65, 66, 0.95) 0%, rgba(11, 65, 66, 0.8) 100%); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); padding: 30px; text-align: center; color: white;">
            <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="70" height="70" alt="Touchstone Education" style="display: block; margin: 0 auto 20px auto; border-radius: 12px;" />
            
            <h1 style="margin: 0; font-size: 32px; line-height: 1.2; font-weight: 800; letter-spacing: -0.5px;">
              <span style="background: linear-gradient(to right, #ffffff, #f0f0f0); -webkit-background-clip: text; background-clip: text; color: transparent; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">COMMERCIAL PROPERTY</span>
            </h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; line-height: 1.5; color: rgba(255,255,255,0.9);">
              How everyday people are creating<br>£75,000+ in <strong>passive income</strong>
            </p>
          </td>
        </tr>
        
        <!-- Hero section -->
        <tr>
          <td style="padding: 0;">
            <div style="position: relative; overflow: hidden;">
              <div style="background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,1)), url('https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center/cover; padding: 40px; text-align: left;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                    <td>
                      <!-- 3D Card effect -->
                      <div style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 10px 25px rgba(11, 65, 66, 0.08), 0 6px 12px rgba(11, 65, 66, 0.05); transform: perspective(1000px) rotateX(5deg); border-bottom: 3px solid #bd9a37; margin-bottom: 25px;">
                        <p style="margin: 0 0 15px 0; font-size: 18px; line-height: 1.5; color: #1a202c;">
                          Hi [First Name],
                        </p>
                        <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                          There are many different property strategies that investors can get involved in.
                        </p>
                        <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                          But nothing comes close to my <span style="position: relative; display: inline-block; z-index: 1; font-weight: 600;">FAVOURITE strategy...<span style="position: absolute; bottom: 2px; left: 0; width: 100%; height: 8px; background-color: rgba(189, 154, 55, 0.3); z-index: -1; border-radius: 4px;"></span></span>
                        </p>
                      </div>
                      
                      <!-- Reason list with animated indicator -->
                      <div style="margin-bottom: 30px;">
                        <p style="margin: 0 0 20px 0; font-size: 20px; font-weight: 700; color: #0b4142;">Here's a few reasons why:</p>
                        
                        <!-- Innovative component: Animated checkmarks via CSS animations -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                          <!-- Item 1 -->
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td width="36" valign="top" style="padding-right: 15px;">
                                    <div style="width: 28px; height: 28px; border-radius: 50%; background-color: #0b4142; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(11, 65, 66, 0.3);">
                                      <div style="color: white; font-weight: bold; font-size: 14px;">1</div>
                                    </div>
                                  </td>
                                  <td>
                                    <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
                                      3-5x more profit than a standard buy-to-let
                                    </p>
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
                                  <td width="36" valign="top" style="padding-right: 15px;">
                                    <div style="width: 28px; height: 28px; border-radius: 50%; background-color: #0b4142; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(11, 65, 66, 0.3);">
                                      <div style="color: white; font-weight: bold; font-size: 14px;">2</div>
                                    </div>
                                  </td>
                                  <td>
                                    <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
                                      NO tenant issues so it's virtually hands-free
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- Item 3 -->
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td width="36" valign="top" style="padding-right: 15px;">
                                    <div style="width: 28px; height: 28px; border-radius: 50%; background-color: #0b4142; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(11, 65, 66, 0.3);">
                                      <div style="color: white; font-weight: bold; font-size: 14px;">3</div>
                                    </div>
                                  </td>
                                  <td>
                                    <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
                                      The tenant pays for any damage or maintenance
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- Item 4 -->
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td width="36" valign="top" style="padding-right: 15px;">
                                    <div style="width: 28px; height: 28px; border-radius: 50%; background-color: #0b4142; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(11, 65, 66, 0.3);">
                                      <div style="color: white; font-weight: bold; font-size: 14px;">4</div>
                                    </div>
                                  </td>
                                  <td>
                                    <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
                                      Long-term tenants (35 years in some cases!)
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- Item 5 -->
                          <tr>
                            <td style="padding-bottom: 15px;">
                              <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td width="36" valign="top" style="padding-right: 15px;">
                                    <div style="width: 28px; height: 28px; border-radius: 50%; background-color: #0b4142; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(11, 65, 66, 0.3);">
                                      <div style="color: white; font-weight: bold; font-size: 14px;">5</div>
                                    </div>
                                  </td>
                                  <td>
                                    <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
                                      Low competition from other investors (most are too scared to go anywhere near this type of property strategy)
                                    </p>
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
            </div>
          </td>
        </tr>
        
        <!-- Main content with premium design -->
        <tr>
          <td style="padding: 0 30px 30px 30px; background-color: #ffffff;">
            <!-- INNOVATIVE COMPONENT: Interactive carousel-like content display -->
            <div style="margin: 30px 0; text-align: center; position: relative;">
              <div style="background: linear-gradient(135deg, rgba(11, 65, 66, 0.03) 0%, rgba(11, 65, 66, 0.06) 100%); border-radius: 16px; padding: 30px; position: relative;">
                <!-- Title bar with design elements -->
                <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: linear-gradient(90deg, #0b4142 0%, #167475 100%); border-radius: 30px; padding: 10px 25px; box-shadow: 0 4px 10px rgba(11, 65, 66, 0.2);">
                  <p style="margin: 0; font-size: 18px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">Your 6-Figure Payday:</p>
                </div>
                
                <div style="padding-top: 20px;">
                  <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568; text-align: center; font-style: italic;">
                    How to Find, Fund and Profit from Commercial Properties without any Past Knowledge or Experience
                  </p>
                  
                  <!-- Premium CTA button with subtle animation/glow effect -->
                  <div style="text-align: center; margin: 30px 0;">
                    <!-- Button with shadow and gradient -->
                    <div style="display: inline-block;">
                      <!-- Button container with shadow and hover effect -->
                      <div style="background: linear-gradient(90deg, #bd9a37 0%, #d3b867 100%); padding: 3px; border-radius: 8px; box-shadow: 0 6px 15px rgba(189, 154, 55, 0.25);">
                        <a href="#join-now" target="_blank" style="background: #bd9a37; display: block; padding: 15px 35px; font-size: 18px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 6px; text-shadow: 0 1px 1px rgba(0,0,0,0.1);">
                          JOIN NOW
                        </a>
                      </div>
                      <!-- Tooltip - would be animated in real email client that supports it -->
                      <div style="margin-top: 10px; font-size: 13px; opacity: 0.8; color: #4a5568;">
                        Limited spaces available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- INNOVATIVE COMPONENT: Results Snapshot with Interactive Hover -->
            <div style="margin: 40px 0; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
              <!-- Section header with premium design -->
              <div style="background: #f5f8fa; padding: 15px 20px; border-bottom: 1px solid #e2e8f0;">
                <p style="margin: 0; font-size: 18px; font-weight: 700; color: #0b4142;">Where you'll discover...</p>
              </div>
              
              <!-- Content box -->
              <div style="background: white; padding: 25px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                          <td class="stack-column" width="48%" style="padding-right: 15px; vertical-align: top;">
                            <!-- Case study 1 -->
                            <div style="background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; margin-bottom: 20px;">
                              <div style="position: relative; padding-bottom: 56%; overflow: hidden;">
                                <!-- Gradient overlay to support text -->
                                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);"></div>
                                <!-- Case study thumbnail -->
                                <img src="https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="100%" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="Commercial Property Case Study" />
                                <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; text-align: left;">
                                  <p style="margin: 0; font-size: 16px; font-weight: 700; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                                    £8K → £31K Annual Property Income
                                  </p>
                                </div>
                                <!-- Play button overlay -->
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                  <div style="width: 50px; height: 50px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.9); display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                                    <div style="width: 0; height: 0; border-style: solid; border-width: 8px 0 8px 16px; border-color: transparent transparent transparent white; margin-left: 3px;"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          
                          <td class="stack-column" width="48%" style="vertical-align: top;">
                            <!-- Case study 2 -->
                            <div style="background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; margin-bottom: 20px;">
                              <div style="position: relative; padding-bottom: 56%; overflow: hidden;">
                                <!-- Gradient overlay to support text -->
                                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);"></div>
                                <!-- Case study thumbnail -->
                                <img src="https://images.pexels.com/photos/3826328/pexels-photo-3826328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="100%" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="Engine Shed Case Study" />
                                <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; text-align: left;">
                                  <p style="margin: 0; font-size: 16px; font-weight: 700; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">
                                    Engine Shed → £3.7M Property
                                  </p>
                                </div>
                                <!-- Play button overlay -->
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                  <div style="width: 50px; height: 50px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.9); display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                                    <div style="width: 0; height: 0; border-style: solid; border-width: 8px 0 8px 16px; border-color: transparent transparent transparent white; margin-left: 3px;"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Benefit Cards Section - INNOVATIVE: Multi-column cards with icons -->
                  <tr>
                    <td>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <!-- First row -->
                        <tr>
                          <td style="padding-bottom: 15px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                              <!-- First benefit -->
                              <tr>
                                <td class="stat-box" width="48%" style="padding-right: 15px; vertical-align: top;">
                                  <div style="background: linear-gradient(135deg, rgba(11, 65, 66, 0.03) 0%, rgba(11, 65, 66, 0.08) 100%); border-radius: 12px; padding: 15px; min-height: 80px; position: relative; border-left: 3px solid #0b4142;">
                                    <!-- Icon -->
                                    <div style="position: absolute; top: 15px; right: 15px; width: 30px; height: 30px; border-radius: 50%; background: rgba(11, 65, 66, 0.1); text-align: center;">
                                      <div style="width: 20px; height: 20px; margin: 5px auto; background-color: #0b4142; -webkit-mask: url('https://cdn-icons-png.flaticon.com/512/6295/6295417.png') no-repeat center / contain; mask: url('https://cdn-icons-png.flaticon.com/512/6295/6295417.png') no-repeat center / contain;"></div>
                                    </div>
                                    <p style="margin: 0; font-weight: 700; font-size: 15px; color: #0b4142;">Immunity to Rising Costs</p>
                                    <p style="margin: 5px 0 0 0; font-size: 14px; line-height: 1.4; color: #4a5568;">
                                      Commercial Property grants immunity to rising fuel and energy bills
                                    </p>
                                  </div>
                                </td>
                                
                                <!-- Second benefit -->
                                <td class="stat-box" width="48%" style="vertical-align: top;">
                                  <div style="background: linear-gradient(135deg, rgba(189, 154, 55, 0.03) 0%, rgba(189, 154, 55, 0.08) 100%); border-radius: 12px; padding: 15px; min-height: 80px; position: relative; border-left: 3px solid #bd9a37;">
                                    <!-- Icon -->
                                    <div style="position: absolute; top: 15px; right: 15px; width: 30px; height: 30px; border-radius: 50%; background: rgba(189, 154, 55, 0.1); text-align: center;">
                                      <div style="width: 20px; height: 20px; margin: 5px auto; background-color: #bd9a37; -webkit-mask: url('https://cdn-icons-png.flaticon.com/512/3037/3037156.png') no-repeat center / contain; mask: url('https://cdn-icons-png.flaticon.com/512/3037/3037156.png') no-repeat center / contain;"></div>
                                    </div>
                                    <p style="margin: 0; font-weight: 700; font-size: 15px; color: #bd9a37;">FRI Benefits</p>
                                    <p style="margin: 5px 0 0 0; font-size: 14px; line-height: 1.4; color: #4a5568;">
                                      Transfer responsibility for damage and repairs to your tenant
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <!-- Second row -->
                        <tr>
                          <td style="padding-bottom: 15px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                              <!-- Third benefit -->
                              <tr>
                                <td class="stat-box" width="48%" style="padding-right: 15px; vertical-align: top;">
                                  <div style="background: linear-gradient(135deg, rgba(248, 113, 113, 0.03) 0%, rgba(248, 113, 113, 0.08) 100%); border-radius: 12px; padding: 15px; min-height: 80px; position: relative; border-left: 3px solid #f87171;">
                                    <!-- Icon -->
                                    <div style="position: absolute; top: 15px; right: 15px; width: 30px; height: 30px; border-radius: 50%; background: rgba(248, 113, 113, 0.1); text-align: center;">
                                      <div style="width: 20px; height: 20px; margin: 5px auto; background-color: #f87171; -webkit-mask: url('https://cdn-icons-png.flaticon.com/512/2529/2529508.png') no-repeat center / contain; mask: url('https://cdn-icons-png.flaticon.com/512/2529/2529508.png') no-repeat center / contain;"></div>
                                    </div>
                                    <p style="margin: 0; font-weight: 700; font-size: 15px; color: #f87171;">Escape Corporate Life</p>
                                    <p style="margin: 5px 0 0 0; font-size: 14px; line-height: 1.4; color: #4a5568;">
                                      Fast-track yourself out of a corporate job within 6 months
                                    </p>
                                  </div>
                                </td>
                                
                                <!-- Fourth benefit -->
                                <td class="stat-box" width="48%" style="vertical-align: top;">
                                  <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.03) 0%, rgba(124, 58, 237, 0.08) 100%); border-radius: 12px; padding: 15px; min-height: 80px; position: relative; border-left: 3px solid #7c3aed;">
                                    <!-- Icon -->
                                    <div style="position: absolute; top: 15px; right: 15px; width: 30px; height: 30px; border-radius: 50%; background: rgba(124, 58, 237, 0.1); text-align: center;">
                                      <div style="width: 20px; height: 20px; margin: 5px auto; background-color: #7c3aed; -webkit-mask: url('https://cdn-icons-png.flaticon.com/512/4315/4315609.png') no-repeat center / contain; mask: url('https://cdn-icons-png.flaticon.com/512/4315/4315609.png') no-repeat center / contain;"></div>
                                    </div>
                                    <p style="margin: 0; font-weight: 700; font-size: 15px; color: #7c3aed;">Pension-Backed Deals</p>
                                    <p style="margin: 5px 0 0 0; font-size: 14px; line-height: 1.4; color: #4a5568;">
                                      Use bank finance and pensions for £1.3M+ investments
                                    </p>
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
            </div>
            
            <!-- INNOVATIVE COMPONENT: Expert Perspective with Photo -->
            <div style="margin: 40px 0; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <div style="background-color: white; padding: 30px 25px; position: relative;">
                <!-- Decorative element -->
                <div style="position: absolute; top: 0; left: 0; width: 5px; height: 100%; background: linear-gradient(to bottom, #0b4142, #188382);"></div>
                
                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                    <td width="80" style="vertical-align: top; padding-right: 20px;">
                      <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="70" height="70" alt="Paul Smith" style="border-radius: 12px; display: block; border: 2px solid #0b4142;" />
                    </td>
                    <td style="vertical-align: top;">
                      <p style="margin: 0 0 15px 0; font-size: 18px; font-weight: 700; color: #1a202c; line-height: 1.3;">
                        I've been investing in property for donkey's years now...
                      </p>
                      <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                        (Even during the midst of previous recessions)
                      </p>
                      <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                        ...and after all that time, I'm <span style="color: #0b4142; font-weight: 700;">100% confident</span> in this:
                      </p>
                      <p style="margin: 0 0 15px 0; font-size: 18px; font-weight: 700; color: #1a202c;">
                        <span style="position: relative; z-index: 1;">Commercial Property is the way to go if you want to make it big.<span style="position: absolute; bottom: 3px; left: 0; width: 100%; height: 8px; background-color: rgba(11, 65, 66, 0.1); z-index: -1; border-radius: 4px;"></span></span>
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            
            <!-- INNOVATIVE COMPONENT: Final Call to Action with Limited Seats Display -->
            <div style="margin: 40px 0 20px 0; position: relative;">
              <!-- Scarcity indicators -->
              <div style="position: relative; background: linear-gradient(135deg, #0b4142 0%, #176e70 100%); border-radius: 16px; padding: 30px; color: white; text-align: center; overflow: hidden;">
                <!-- Background decorative elements -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 20%);"></div>
                
                <div style="position: relative; z-index: 2;">
                  <p style="margin: 0 0 15px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: white;">
                    LIMITED AVAILABILITY TRAINING
                  </p>
                  <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: rgba(255,255,255,0.9);">
                    Because in a few days, this training - that's already made successful commercial investors - turns to dust in your hands.
                  </p>
                  
                  <!-- Animated CTA button with special effects -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td align="center">
                        <div style="display: inline-block; position: relative; margin-bottom: 10px;">
                          <!-- Outer glow effect -->
                          <div style="background: linear-gradient(90deg, #bd9a37 0%, #e5c675 100%); padding: 3px; border-radius: 10px; box-shadow: 0 6px 15px rgba(189, 154, 55, 0.4);">
                            <a href="#watch-now" target="_blank" style="background: linear-gradient(90deg, #bd9a37 0%, #d4b55e 100%); display: block; padding: 16px 40px; font-size: 18px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                              WATCH NOW
                            </a>
                          </div>
                          
                          <!-- Decorative light reflection -->
                          <div style="position: absolute; top: 0; left: 0; width: 30%; height: 50%; background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%); border-top-left-radius: 10px;"></div>
                        </div>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Urgency text -->
                  <p style="margin: 15px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.8); font-style: italic;">
                    I look forward to seeing you there!
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Sign-off -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
                <td>
                  <p style="margin: 0 0 5px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                    Speak soon,
                  </p>
                  <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568; font-weight: 600;">
                    Paul
                  </p>
                  <!-- PS section with bold styling -->
                  <div style="background-color: #f7fafc; border-left: 4px solid #bd9a37; padding: 15px; margin-bottom: 20px;">
                    <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
                      PS: This training is limited availability. In a few days, the training is gone with the wind.
                    </p>
                    <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">
                      So <a href="#check-it-out" style="color: #0b4142; text-decoration: underline; font-weight: 600;">check it out now</a> and don't leave your financial security at risk!
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Footer with certification and social -->
        <tr>
          <td style="background-color: #f5f8fa; padding: 25px; border-top: 1px solid #e2e8f0;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <!-- First row with logo and social -->
              <tr>
                <td align="center" style="padding-bottom: 20px;">
                  <!-- Social icons -->
                  <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td style="padding: 0 5px;">
                        <a href="#facebook" style="display: inline-block; width: 32px; height: 32px; background-color: #0b4142; border-radius: 50%; text-align: center; line-height: 32px;">
                          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="16" height="16" alt="Facebook" style="display: inline-block; vertical-align: middle; filter: brightness(0) invert(1);" />
                        </a>
                      </td>
                      <td style="padding: 0 5px;">
                        <a href="#twitter" style="display: inline-block; width: 32px; height: 32px; background-color: #0b4142; border-radius: 50%; text-align: center; line-height: 32px;">
                          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="16" height="16" alt="Twitter" style="display: inline-block; vertical-align: middle; filter: brightness(0) invert(1);" />
                        </a>
                      </td>
                      <td style="padding: 0 5px;">
                        <a href="#linkedin" style="display: inline-block; width: 32px; height: 32px; background-color: #0b4142; border-radius: 50%; text-align: center; line-height: 32px;">
                          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="16" height="16" alt="LinkedIn" style="display: inline-block; vertical-align: middle; filter: brightness(0) invert(1);" />
                        </a>
                      </td>
                      <td style="padding: 0 5px;">
                        <a href="#instagram" style="display: inline-block; width: 32px; height: 32px; background-color: #0b4142; border-radius: 50%; text-align: center; line-height: 32px;">
                          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="16" height="16" alt="Instagram" style="display: inline-block; vertical-align: middle; filter: brightness(0) invert(1);" />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Second row with certifications -->
              <tr>
                <td align="center" style="padding-bottom: 15px;">
                  <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
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
                </td>
              </tr>
              
              <!-- Third row with TrustPilot -->
              <tr>
                <td align="center">
                  <p style="margin: 0 0 5px 0; font-size: 14px; color: #718096;">
                    See our reviews on
                  </p>
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968813.png" width="120" height="30" alt="Trustpilot" style="display: inline-block;" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Legal Footer -->
        <tr>
          <td style="padding: 20px; background-color: #f5f8fa; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 10px 0;">
              © 2025 Touchstone Education | <a href="#privacy" style="color: #4a5568; text-decoration: none;">Privacy Policy</a> | <a href="#terms" style="color: #4a5568; text-decoration: none;">Terms & Conditions</a>
            </p>
            <p style="margin: 0; line-height: 1.4;">
              <!--HubSpot required unsubscribe link - would be used in actual implementation-->
              <!-- {% unsubscribe "Unsubscribe" | css(color="#718096") %} -->
            </p>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>
</html>`;