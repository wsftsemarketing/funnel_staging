
# Mixpanel Analytics Implementation Guide

## Overview
This implementation provides comprehensive tracking for your webinar landing page with a focus on conversion optimization, user journey mapping, and revenue attribution.

## Quick Start

### 1. Environment Setup
Add your Mixpanel token to your environment variables:
```bash
VITE_MIXPANEL_TOKEN=your_mixpanel_project_token_here
```

### 2. Automatic Tracking
The analytics system automatically tracks:
- **Page views** with full referrer and UTM attribution
- **Scroll depth** with 25%, 50%, 75%, 90%, 100% milestones
- **Time on page** updated every 10 seconds
- **Exit intent** when mouse leaves viewport
- **All button clicks** (can be enhanced with data attributes)
- **Form submissions** with field analysis
- **External form submissions** (WebinarJam integration)

### 3. Manual Tracking with Data Attributes

#### Button Tracking
```html
<button 
  data-track="button"
  data-track-event="Hero CTA Clicked"
  data-track-properties='{"button_location": "hero", "priority": "high"}'
>
  Register Now
</button>
```

#### Form Tracking
```html
<form 
  data-track="form"
  data-track-event="Newsletter Signup"
  className="track-form"
>
  <!-- Form fields -->
</form>
```

#### Custom Element Tracking
```html
<div 
  data-track="interaction"
  data-track-event="Video Thumbnail Clicked"
  data-track-properties='{"video_id": "intro_video", "position": "hero"}'
>
  <!-- Content -->
</div>
```

### 4. React Hook Usage

#### Basic Tracking
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const { track, trackButtonClick, trackConversion } = useAnalytics();
  
  const handleSpecialAction = () => {
    track('Special Action', {
      action_type: 'premium_feature',
      user_segment: 'high_value'
    });
  };
  
  const handlePurchase = () => {
    trackConversion('Purchase', {
      amount: 297,
      product: 'webinar_access'
    });
  };
}
```

#### Section Tracking
```tsx
import { useTrackSection } from '@/hooks/useAnalytics';

function HeroSection() {
  useTrackSection('Hero Section', {
    variant: 'v2',
    test_group: 'control'
  });
  
  return <div>...</div>;
}
```

#### A/B Testing
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const { useABTest } = useAnalytics();
  const buttonVariant = useABTest('hero_button_test', ['blue', 'green', 'red']);
  
  return (
    <button className={`btn-${buttonVariant}`}>
      Register Now
    </button>
  );
}
```

## Tracked Events

### Core Events
1. **Page Viewed** - Every page load with full context
2. **Element Clicked** - All interactive elements
3. **Form Submitted** - Both internal and external forms
4. **Scroll Depth Milestone** - 25%, 50%, 75%, 90%, 100%
5. **Exit Intent Detected** - Mouse leaves viewport
6. **Page Exit** - User leaves page
7. **Session Start** - New user session begins

### Business Events
1. **Webinar Registration** - Primary conversion goal
2. **Email Signup** - Lead generation
3. **Social Share** - Viral coefficient tracking
4. **Revenue** - Purchase tracking
5. **Conversion** - Any conversion type

### Technical Events
1. **A/B Test Assignment** - Variant assignment tracking
2. **Error Occurred** - JavaScript errors
3. **Performance** - Page load times
4. **Cookie Consent** - Privacy compliance

## UTM and Attribution Tracking

### Supported Parameters
- `utm_source` - Traffic source
- `utm_medium` - Marketing medium  
- `utm_campaign` - Campaign name
- `utm_term` - Paid keywords
- `utm_content` - Ad content
- `utm_id` - Campaign ID
- `gclid` - Google Ads click ID
- `fbclid` - Facebook Ads click ID
- `hyros_tag` - Hyros tracking tags

### Attribution Logic
- **First-touch attribution** - Stored on first visit
- **Session persistence** - Maintained across page views
- **Cross-device tracking** - Via user identification

## User Journey Mapping

### Key Metrics Tracked
1. **Acquisition Source** - How users find you
2. **Landing Page** - First page visited
3. **Page Flow** - Sequence of pages visited
4. **Engagement Depth** - Scroll depth and time spent
5. **Conversion Points** - Where users convert
6. **Drop-off Points** - Where users leave

### Funnel Analysis
```
Visit → Engage → Interest → Intent → Conversion
  ↓       ↓        ↓        ↓         ↓
Page    Scroll   Video    Form      Register
View    50%+     Play     Focus     Submit
```

## Revenue Attribution

### E-commerce Tracking
```tsx
import { analytics } from '@/lib/analytics';

// Track purchase
analytics.trackRevenue(297, {
  product_name: 'Advanced Property Course',
  product_id: 'course_001',
  currency: 'USD',
  payment_method: 'stripe'
});
```

### Lifetime Value Tracking
```tsx
// Update user LTV
analytics.setUserProperties({
  total_spent: 597,
  purchase_count: 2,
  customer_segment: 'high_value'
});
```

## Conversion Rate Optimization

### A/B Testing Framework
```tsx
// Test different hero variants
const heroVariant = analytics.getVariant('hero_test', ['control', 'variant_a', 'variant_b']);

// Test pricing strategies  
const pricingVariant = analytics.getVariant('pricing_test', ['monthly', 'annual']);

// Test form lengths
const formVariant = analytics.getVariant('form_test', ['short', 'long']);
```

### Conversion Tracking
```tsx
// Track micro-conversions
analytics.track('Email Captured', { source: 'exit_intent_popup' });

// Track macro-conversions  
analytics.trackConversion('Webinar Registration', {
  registration_source: 'hero_cta',
  time_to_convert: 120 // seconds
});
```

## Privacy & Compliance

### GDPR Compliance
- User consent tracking via Cookie Consent Modal
- Optional data collection based on consent
- Data minimization principles applied
- Right to deletion support

### Data Collection
- **Essential**: Page views, errors, basic analytics
- **Functional**: Form submissions, preferences
- **Analytics**: Scroll depth, time on site, user behavior
- **Marketing**: UTM parameters, conversion tracking

## Mixpanel Dashboard Setup

### Key Reports to Create
1. **Funnel Analysis** - Visit to Registration conversion
2. **User Journey Map** - Page flow visualization
3. **Attribution Report** - Source/medium performance
4. **A/B Test Results** - Variant performance comparison
5. **Revenue Attribution** - Channel ROI analysis
6. **Engagement Metrics** - Time on site, scroll depth
7. **Drop-off Analysis** - Where users leave

### Custom Properties
Set up these custom properties in Mixpanel:
- `utm_source`, `utm_medium`, `utm_campaign`
- `session_id`, `user_segment`, `page_title`
- `scroll_depth`, `time_on_page`, `referrer`
- `form_name`, `button_location`, `conversion_type`

## Best Practices

### Performance
- Events are batched and sent asynchronously
- Minimal impact on page load speed
- Local storage used for session management
- Automatic retry for failed requests

### Data Quality
- Consistent event naming convention
- Required properties validation
- Automatic data enrichment
- Error handling and logging

### Privacy
- No PII collection without consent
- IP address anonymization
- Secure data transmission
- Cookie consent integration

## Troubleshooting

### Common Issues
1. **Events not appearing** - Check Mixpanel token configuration
2. **UTM parameters missing** - Verify URL structure and localStorage
3. **Form tracking not working** - Ensure `data-track="form"` attribute
4. **A/B tests not working** - Check variant array and user ID generation

### Debug Mode
Enable debug mode in development:
```typescript
// Analytics automatically enables debug mode in development
// Check browser console for detailed logs
```

This implementation provides enterprise-level analytics tracking while maintaining clean, maintainable code and respecting user privacy.
