(function() {
  'use strict';

  // Configuration - Create Payment Links in your Stripe Dashboard
  const PAYMENT_CONFIG = {
    // Create these in your Stripe Dashboard under Payment Links
    earlyBirdUrl: 'https://buy.stripe.com/aFabJ1aR758s0xA5FS9k51s', // Replace with your Payment Link
    regularUrl: 'https://buy.stripe.com/live_...', // Optional: different pricing tiers
    
    // Analytics tracking
    trackEvent: function(eventName, properties = {}) {
      // Mixpanel tracking
      if (window.mixpanel) {
        window.mixpanel.track(eventName, properties);
      }
      
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', eventName, properties);
      }
      
      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', eventName, properties);
      }
      
      console.log('Event tracked:', eventName, properties);
    }
  };

  // Handle payment button clicks
  function handlePaymentClick(event) {
    event.preventDefault();
    
    const button = event.target;
    const paymentType = button.getAttribute('data-payment-type') || 'earlyBird';
    const amount = button.getAttribute('data-amount') || '99';
    
    // Track the payment attempt
    PAYMENT_CONFIG.trackEvent('Payment Started', {
      type: paymentType,
      amount: amount,
      button_text: button.textContent.trim()
    });
    
    // Show loading state
    const originalText = button.textContent;
    button.textContent = 'Redirecting to checkout...';
    button.disabled = true;
    
    // Get the appropriate payment URL
    let paymentUrl = PAYMENT_CONFIG.earlyBirdUrl;
    if (paymentType === 'regular' && PAYMENT_CONFIG.regularUrl) {
      paymentUrl = PAYMENT_CONFIG.regularUrl;
    }
    
    // Add referrer information
    const urlParams = new URLSearchParams();
    urlParams.set('referrer', window.location.href);
    
    // Get email from URL if available (from Demio redirect)
    const currentParams = new URLSearchParams(window.location.search);
    const email = currentParams.get('email');
    if (email) {
      urlParams.set('prefilled_email', email);
    }
    
    const finalUrl = paymentUrl + (paymentUrl.includes('?') ? '&' : '?') + urlParams.toString();
    
    // Redirect to Stripe checkout
    setTimeout(() => {
      window.location.href = finalUrl;
    }, 500);
  }

  // Initialize payment buttons
  function initPaymentButtons() {
    // Find all payment buttons
    const paymentButtons = document.querySelectorAll('[data-stripe-payment]');
    
    paymentButtons.forEach(button => {
      // Remove any existing listeners
      button.removeEventListener('click', handlePaymentClick);
      
      // Add click handler
      button.addEventListener('click', handlePaymentClick);
      
      // Add hover effects
      button.style.transition = 'all 0.2s ease';
      button.style.cursor = 'pointer';
      
      // Add loading state styles
      button.addEventListener('mouseenter', function() {
        if (!this.disabled) {
          this.style.transform = 'translateY(-2px)';
          this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }
      });
      
      button.addEventListener('mouseleave', function() {
        if (!this.disabled) {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = 'initial';
        }
      });
    });
    
    console.log(`Initialized ${paymentButtons.length} payment buttons`);
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPaymentButtons);
  } else {
    initPaymentButtons();
  }

  // Expose for manual re-initialization
  window.initStripePayments = initPaymentButtons;
  
  // Handle back button navigation
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      // Reset any disabled buttons when user navigates back
      const buttons = document.querySelectorAll('[data-stripe-payment]');
      buttons.forEach(button => {
        button.disabled = false;
        button.textContent = button.getAttribute('data-original-text') || button.textContent;
      });
    }
  });
})();
