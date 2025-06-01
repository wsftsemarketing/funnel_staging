
import React, { useState, useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const AdvancedAnalyticsDemo: React.FC = () => {
  const analytics = useAnalytics();
  const [metrics, setMetrics] = useState<any>(null);
  const [leadScore, setLeadScore] = useState(0);
  const [userSegment, setUserSegment] = useState('');
  const [cohortData, setCohortData] = useState<any>(null);

  useEffect(() => {
    // Track demo section view
    analytics.trackPageSection('Advanced Analytics Demo');
    
    // Set up funnel tracking
    analytics.trackFunnelStep('Demo Page View', 1);
    
    // Get initial metrics
    updateMetrics();
    
    // Update metrics every 10 seconds
    const interval = setInterval(updateMetrics, 10000);
    return () => clearInterval(interval);
  }, []);

  const updateMetrics = () => {
    const predictiveMetrics = analytics.getPredictiveMetrics();
    const engagement = analytics.getEngagementScore();
    const cohort = analytics.getCohortData();
    const segment = analytics.getUserSegment();
    const score = analytics.getLeadScore();
    
    setMetrics(predictiveMetrics);
    setLeadScore(score);
    setUserSegment(segment);
    setCohortData(cohort);
  };

  const handleWebinarRegister = () => {
    analytics.trackFunnelStep('Webinar Interest', 2);
    analytics.trackWebinarEvent('register', {
      webinar_topic: 'commercial_property_strategies',
      registration_source: 'analytics_demo'
    });
    analytics.trackCohortEvent('Webinar Registration Intent', {
      demo_source: true
    });
  };

  const handleHighValueAction = () => {
    analytics.trackFunnelStep('High Value Action', 3);
    analytics.trackCohortEvent('Premium Interest', {
      action_type: 'consultation_request',
      value_tier: 'premium'
    });
  };

  const simulateRevenue = () => {
    analytics.trackRevenueWithAttribution(297, {
      product: 'webinar_course',
      purchase_type: 'demo_simulation',
      payment_method: 'stripe'
    });
  };

  const getSegmentColor = (segment: string) => {
    switch (segment) {
      case 'vip': return 'bg-purple-500';
      case 'high_intent': return 'bg-green-500';
      case 'engaged': return 'bg-blue-500';
      case 'casual': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getPurchaseLikelihoodColor = (likelihood: number) => {
    if (likelihood > 70) return 'text-green-600';
    if (likelihood > 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Advanced Analytics Dashboard</h2>
        <p className="text-gray-600">Real-time behavioral insights and predictive analytics</p>
      </div>

      {/* User Segmentation & Lead Scoring */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>User Segment</CardTitle>
            <CardDescription>AI-powered classification</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge className={`${getSegmentColor(userSegment)} text-white`}>
              {userSegment.replace('_', ' ').toUpperCase()}
            </Badge>
            <p className="text-sm text-gray-600 mt-2">
              Based on engagement patterns and behavior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lead Score</CardTitle>
            <CardDescription>Purchase likelihood</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{leadScore}/100</div>
            <Progress value={leadScore} className="mt-2" />
            <p className="text-sm text-gray-600 mt-2">
              Composite engagement score
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cohort Analysis</CardTitle>
            <CardDescription>Time-based grouping</CardDescription>
          </CardHeader>
          <CardContent>
            {cohortData && (
              <div className="space-y-1">
                <div className="text-sm">
                  <strong>Cohort:</strong> {cohortData.cohort_value}
                </div>
                <div className="text-sm">
                  <strong>Type:</strong> {cohortData.cohort_type}
                </div>
                <div className="text-sm">
                  <strong>First Visit:</strong> {new Date(cohortData.first_visit_date).toLocaleDateString()}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Predictive Analytics */}
      {metrics && (
        <Card>
          <CardHeader>
            <CardTitle>Predictive Analytics</CardTitle>
            <CardDescription>AI-powered predictions for user behavior</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${getPurchaseLikelihoodColor(metrics.purchase_likelihood)}`}>
                  {metrics.purchase_likelihood}%
                </div>
                <div className="text-sm text-gray-600">Purchase Likelihood</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {metrics.churn_probability}%
                </div>
                <div className="text-sm text-gray-600">Churn Risk</div>
              </div>
              <div className="text-center">
                <Badge variant={metrics.engagement_trend === 'increasing' ? 'default' : 'secondary'}>
                  {metrics.engagement_trend}
                </Badge>
                <div className="text-sm text-gray-600 mt-1">Engagement Trend</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">
                  {metrics.optimal_contact_time.replace('_', ' ')}
                </div>
                <div className="text-sm text-gray-600">Best Contact Time</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Interactive Demo Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Try Advanced Tracking</CardTitle>
          <CardDescription>See how different actions affect your analytics profile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button onClick={handleWebinarRegister} className="w-full">
              Show Webinar Interest
              <span className="text-xs block">Funnel Step + Cohort Event</span>
            </Button>
            <Button onClick={handleHighValueAction} variant="outline" className="w-full">
              Request Consultation
              <span className="text-xs block">High-Value Action</span>
            </Button>
            <Button onClick={simulateRevenue} variant="secondary" className="w-full">
              Simulate Purchase
              <span className="text-xs block">Revenue Attribution</span>
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Each action updates your behavioral profile and triggers different analytics events.
            Check your browser console to see the detailed tracking data.
          </p>
        </CardContent>
      </Card>

      {/* Behavioral Triggers Info */}
      <Card>
        <CardHeader>
          <CardTitle>Active Behavioral Triggers</CardTitle>
          <CardDescription>Real-time alerts based on user behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-green-50 rounded">
              <span className="text-sm">High Engagement Detection</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
              <span className="text-sm">Exit Intent Monitoring</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
              <span className="text-sm">VIP User Identification</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-red-50 rounded">
              <span className="text-sm">At-Risk Detection</span>
              <Badge variant="secondary">Active</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedAnalyticsDemo;
