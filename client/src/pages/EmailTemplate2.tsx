import React from "react";

export default function EmailTemplate2() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl font-bold mb-6">Email Template #2</h1>
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
  <title>Touchstone Education - Unlock Your 6-Figure Property Fortune</title>
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
    .countdown-item {
      display: inline-block;
      margin: 0 5px;
      background-color: #0b4142;
      color: white;
      padding: 10px 0;
      border-radius: 6px;
      width: 60px;
      text-align: center;
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
  <!-- HUBL code for personalization - would be used in actual HubSpot implementation -->
  <!-- Example of HubSpot personalization:
  {% set firstname = contact.firstname || 'there' %}
  {% set current_date = date | timezone('Europe/London') | datetimeformat('%Y-%m-%d') %}
  {% set end_date = current_date | datetimeformat('%Y-%m-%d', '+7 days') %}
  -->
  
  <center style="width: 100%; background: #f7f8f9; text-align: left;">
    <!-- Email container -->
    <div style="max-width: 600px; margin: 0 auto;">
      <!-- Hidden preheader text -->
      <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
        Inflation is a serious threat to financial wellbeing. Discover how Commercial Property can be your shield with our proven 6-figure strategy. Limited time offer ends soon!
      </div>
      
      <!-- Email container -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.05);" class="email-container">
        <!-- Header -->
        <tr>
          <td style="padding: 30px 40px 20px 40px; text-align: left; background-color: #ffffff;">
            <!-- Greeting with personalization -->
            <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
              Hi [First Name],
            </p>
            <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
              Inflation is a serious threat to the financial well-being of so many people across the UK.
            </p>
            <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
              It's driving up the cost of living, and there's not a lot the UK government can do to slow it down.
            </p>
            <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
              So...
            </p>
            <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
              I'm hosting an <span style="color: #0b4142; font-weight: 600;">on-demand training for you to join now</span> where I'll show you the exact strategy that's making a fortune for so many people in Commercial Property.
            </p>
          </td>
        </tr>
        
        <!-- Main content -->
        <tr>
          <td style="padding: 0px 40px 30px 40px; background-color: #ffffff;">
            <!-- Headline -->
            <div style="text-align: center; margin-bottom: 25px;">
              <h1 style="margin: 0 0 10px 0; font-size: 28px; line-height: 1.3; font-weight: 700; color: #1a202c; font-family: 'Albert Sans', system-ui, sans-serif;">
                Your <span style="position: relative; display: inline-block;"><span style="position: relative; z-index: 1; color: #0b4142;">6-Figure Payday</span><span style="position: absolute; bottom: 2px; left: 0; width: 100%; height: 8px; background-color: rgba(11, 65, 66, 0.1); z-index: 0;"></span></span>:
              </h1>
              <p style="margin: 0; font-size: 16px; line-height: 1.5; font-style: italic; color: #4a5568;">
                How to Find, Fund and Profit from Commercial Properties without any Past Knowledge or Experience
              </p>
            </div>
            
            <!-- INNOVATIVE COMPONENT: Countdown Timer -->
            <div style="background-color: #f7fafc; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 30px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 15px 0; font-size: 16px; font-weight: 600; color: #1a202c;">
                <span style="color: #e53e3e;">🔥 Limited Time Offer:</span> This training is only available for <span style="font-weight: 700;">7 more days</span>
              </p>
              <div>
                <!-- In a real HubSpot email, this would use HubL to calculate days remaining -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                    <td align="center">
                      <div style="display: inline-block; margin: 0 5px; background-color: #0b4142; color: white; padding: 10px 0; border-radius: 6px; width: 60px; text-align: center;">
                        <div style="font-size: 20px; font-weight: bold;">07</div>
                        <div style="font-size: 12px;">Days</div>
                      </div>
                      <div style="display: inline-block; margin: 0 5px; background-color: #0b4142; color: white; padding: 10px 0; border-radius: 6px; width: 60px; text-align: center;">
                        <div style="font-size: 20px; font-weight: bold;">12</div>
                        <div style="font-size: 12px;">Hours</div>
                      </div>
                      <div style="display: inline-block; margin: 0 5px; background-color: #0b4142; color: white; padding: 10px 0; border-radius: 6px; width: 60px; text-align: center;">
                        <div style="font-size: 20px; font-weight: bold;">45</div>
                        <div style="font-size: 12px;">Mins</div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <!-- CTA button -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td align="center">
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td align="center" bgcolor="#bd9a37" style="border-radius: 6px;">
                        <!-- HubSpot would replace this URL with a tracked one -->
                        <a href="#join-now" target="_blank" style="display: inline-block; padding: 16px 35px; font-size: 18px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px; font-family: 'Albert Sans', system-ui, sans-serif;">
                          Join Now
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- What you'll discover -->
            <p style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #1a202c;">
              Where you'll discover...
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
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">How I transformed my £8,000 a year (side-project) property into a £31,000 profit per year property</p>
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
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">How to use FRI to pass responsibility for damage and repair of your property to your tenant</p>
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
                      <td width="24" valign="top" style="padding-right: 12px;">
                        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.1); display: flex; align-items: center; justify-content: center;">
                          <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0b4142;"></div>
                        </div>
                      </td>
                      <td>
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">How 2 Touchstone students turned an abandoned Engine Shed into a property worth £3.7m</p>
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
                      <td width="24" valign="top" style="padding-right: 12px;">
                        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.1); display: flex; align-items: center; justify-content: center;">
                          <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0b4142;"></div>
                        </div>
                      </td>
                      <td>
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">Why Commercial Property grants immunity to rising fuel and energy bills</p>
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
                      <td width="24" valign="top" style="padding-right: 12px;">
                        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.1); display: flex; align-items: center; justify-content: center;">
                          <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0b4142;"></div>
                        </div>
                      </td>
                      <td>
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">How 2 Touchstone students used bank finance and their pension to earn £1.3m investing in a forgotten hotel</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Item 6 -->
              <tr>
                <td style="padding-bottom: 25px;">
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td width="24" valign="top" style="padding-right: 12px;">
                        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: rgba(11, 65, 66, 0.1); display: flex; align-items: center; justify-content: center;">
                          <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0b4142;"></div>
                        </div>
                      </td>
                      <td>
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">How a Touchstone student fast-tracked herself out of a corporate job within 6 months using one Commercial property</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- And lots more text -->
              <tr>
                <td>
                  <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568; font-style: italic;">
                    ...and lots more!
                  </p>
                </td>
              </tr>
            </table>
            
            <!-- Testimonial / Proof section (Bento Box Style) -->
            <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); border-radius: 12px; padding: 25px; position: relative; margin-bottom: 30px; border: 1px solid #e2e8f0;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                <tr>
                  <td>
                    <p style="margin: 0 0 15px 0; font-size: 18px; font-weight: 700; color: #1a202c;">I've been investing in property for donkey's years now...</p>
                    <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                      (Even during the midst of previous recessions)
                    </p>
                    <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                      ...and after all that time, I'm 100% confident in this:
                    </p>
                    <p style="margin: 0 0 15px 0; font-size: 18px; font-weight: 700; color: #1a202c;">
                      Commercial Property is the way to go if you want to make it big.
                    </p>
                    <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
                      If you want to know exactly how to get started in commercial property without any previous experience.
                    </p>
                    <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
                      Then <a href="#join-training" style="color: #0b4142; text-decoration: underline;">join me for my on-demand training</a>.
                    </p>
                    <!-- Urgent notice with countdown-style element -->
                    <div style="background-color: #fff8e6; border-left: 4px solid #bd9a37; padding: 15px; margin-bottom: 20px;">
                      <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #1a202c; font-weight: 600;">
                        Because in a few days, this training - that's already made successful commercial investors - turns to dust in your hands.
                      </p>
                      <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #1a202c;">
                        I look forward to seeing you there!
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            
            <!-- CTA button -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 30px;">
              <tr>
                <td align="center">
                  <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                      <td align="center" bgcolor="#0b4142" style="border-radius: 6px;">
                        <a href="#watch-now" target="_blank" style="display: inline-block; padding: 16px 35px; font-size: 18px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px; font-family: 'Albert Sans', system-ui, sans-serif;">
                          Watch Now
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
              Speak soon,
            </p>
            <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.5; color: #4a5568;">
              Paul
            </p>
          </td>
        </tr>
        
        <!-- Signature section -->
        <tr>
          <td style="padding: 0 40px 30px 40px; background-color: #ffffff;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
                <td width="70" valign="top">
                  <img src="https://dt9xom8irs6kr.cloudfront.net/u206954/ygeh8pKqN9Hh7WPwLEOV1664833612.png" width="60" height="60" alt="Paul Smith" style="border-radius: 50%; display: block;" />
                </td>
                <td valign="top" style="padding-left: 15px;">
                  <p style="margin: 0 0 15px 0; font-size: 16px; color: #4a5568;">
                    PS: This training is limited availability. In a few days, the training is gone with the wind.
                  </p>
                  <p style="margin: 0 0 15px 0; font-size: 16px; color: #4a5568;">
                    So <a href="#check-it-out" style="color: #0b4142; text-decoration: underline; font-weight: 600;">check it out now</a> and don't leave your financial security at risk!
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Social + Certifications -->
        <tr>
          <td style="padding: 25px 40px; background-color: #f7f8f9; text-align: center;">
            <!-- Social icons -->
            <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 20px;">
              <tr>
                <td style="padding: 0 5px;">
                  <a href="#facebook">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="30" height="30" alt="Facebook" style="display: block;" />
                  </a>
                </td>
                <td style="padding: 0 5px;">
                  <a href="#twitter">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="30" height="30" alt="Twitter" style="display: block;" />
                  </a>
                </td>
                <td style="padding: 0 5px;">
                  <a href="#linkedin">
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="30" height="30" alt="LinkedIn" style="display: block;" />
                  </a>
                </td>
                <td style="padding: 0 5px;">
                  <a href="#instagram">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="30" height="30" alt="Instagram" style="display: block;" />
                  </a>
                </td>
              </tr>
            </table>
            
            <!-- Certifications -->
            <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin-bottom: 15px;">
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
            
            <!-- Trustpilot -->
            <p style="margin: 0; font-size: 14px; color: #718096; text-align: center;">
              See our reviews on<br />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968813.png" width="100" height="30" alt="Trustpilot" style="display: inline-block; margin-top: 5px;" />
            </p>
          </td>
        </tr>
        
        <!-- Footer -->
        <tr>
          <td style="padding: 20px 40px; background-color: #f7f8f9; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0;">
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