(function() {
  'use strict';

  const STRIPE_CONFIG = {
    publishableKey: 'pk_live_51MxyF4E8OwzUSDz6nZuztzgO52Tzd8T80HiXrFvo5jiXiPUymAkwuWP0QsdZb4oCwuFQNp72clitE7xMvlHwxTnc00FrBgDK5x'
    priceId: 'price_1S1U76E8OwzUSDz6scylKg2I',
    productId: 'prod_SxLVCIiA3EtgLc',
    successUrl: window.location.origin + 'https://touchstoneeducation.com/wtp-foundation',
    cancelUrl: window.location.href
  };

  // Wait for DOM to be ready
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Load Stripe.js dynamically
  function loadStripe() {
    return new Promise((resolve, reject) => {
      if (window.Stripe) {
        resolve(window.Stripe(STRIPE_CONFIG.publishableKey));
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.onload = () => {
        resolve(window.Stripe(STRIPE_CONFIG.publishableKey));
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Create checkout session
  async function createCheckoutSession(stripe) {
    try {
      const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: STRIPE_CONFIG.priceId,
          successUrl: STRIPE_CONFIG.successUrl,
          cancelUrl: STRIPE_CONFIG.cancelUrl
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();
      return session;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      // Fallback to payment link if server endpoint fails
      return null;
    }
  }

  // Create embedded checkout form
  function createEmbeddedCheckout(container) {
    const checkoutHTML = `
      <div class="stripe-checkout-container" style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e5e9; border-radius: 8px; background: white;">
        <div class="checkout-header" style="text-align: center; margin-bottom: 30px;">
          <h2 style="color: #32325d; font-size: 24px; font-weight: 600; margin: 0 0 10px 0;">Secure Checkout</h2>
          <p style="color: #525f7f; font-size: 16px; margin: 0;">Complete your purchase for the Wealth Through Property Event</p>
        </div>
        
        <div class="product-summary" style="padding: 20px; background: #f6f9fc; border-radius: 6px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h3 style="margin: 0 0 5px 0; color: #32325d; font-size: 18px;">WTP Early Bird Ticket</h3>
              <p style="margin: 0; color: #525f7f; font-size: 14px;">2-Day Property Investment Event</p>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 24px; font-weight: 600; color: #32325d;">£99</span>
              <br>
              <span style="font-size: 14px; color: #8898aa; text-decoration: line-through;">£497</span>
            </div>
          </div>
        </div>

        <div class="checkout-actions" style="text-align: center;">
          <button id="stripe-checkout-btn" style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            width: 100%;
            transition: all 0.2s ease;
            margin-bottom: 15px;
          " onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 12px rgba(102, 126, 234, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            🔒 Complete Purchase - £99
          </button>
          
          <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 15px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#00d924"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <span style="font-size: 14px; color: #525f7f;">Secure payment powered by Stripe</span>
          </div>
        </div>

        <div class="loading-state" id="loading-state" style="display: none; text-align: center; padding: 20px;">
          <div style="display: inline-block; width: 20px; height: 20px; border: 3px solid #f3f3f3; border-top: 3px solid #667eea; border-radius: 50%; animation: spin 1s linear infinite;"></div>
          <p style="margin: 10px 0 0 0; color: #525f7f;">Processing your payment...</p>
        </div>
      </div>

      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;

    container.innerHTML = checkoutHTML;
    
    // Add click handler
    const checkoutBtn = container.querySelector('#stripe-checkout-btn');
    const loadingState = container.querySelector('#loading-state');
    
    checkoutBtn.addEventListener('click', async () => {
      checkoutBtn.style.display = 'none';
      loadingState.style.display = 'block';

      try {
        const stripe = await loadStripe();
        const session = await createCheckoutSession(stripe);

        if (session && session.id) {
          // Redirect to Stripe Checkout
          const { error } = await stripe.redirectToCheckout({
            sessionId: session.id
          });

          if (error) {
            console.error('Stripe redirect error:', error);
            fallbackToPaymentLink();
          }
        } else {
          // Fallback to payment link
          fallbackToPaymentLink();
        }
      } catch (error) {
        console.error('Checkout error:', error);
        fallbackToPaymentLink();
      }
    });

    function fallbackToPaymentLink() {
      // Redirect to Stripe payment link as fallback
      window.location.href = 'https://buy.stripe.com/aFabJ1aR758s0xA5FS9k51s';
    }
  }

  // Initialize the checkout when DOM is ready
  ready(() => {
    // Look for the container element
    const container = document.getElementById('stripe-checkout-container');
    
    if (container) {
      createEmbeddedCheckout(container);
      console.log('✅ Stripe checkout initialized');
    } else {
      console.error('❌ Stripe checkout container not found. Make sure you have an element with id="stripe-checkout-container"');
    }
  });

  // Expose global function for manual initialization
  window.initStripeCheckout = function(containerId) {
    const container = document.getElementById(containerId || 'stripe-checkout-container');
    if (container) {
      createEmbeddedCheckout(container);
    }
  };

})();
