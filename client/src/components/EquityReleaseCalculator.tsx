
import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Highlight } from "@/components/ui/highlight";
import { 
  Home, 
  PoundSterling, 
  Calculator, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Target,
  Info,
  Percent,
  CircleCheck,
} from "lucide-react";

interface CalculationResults {
  equityAvailable: number;
  monthlyIncome: number;
  totalInvestmentCapacity: number;
  potentialROI: string;
  annualIncome: number;
  riskLevel: "low" | "medium" | "high";
  ltv: number;
  recommendations: string[];
}

export default function EquityReleaseCalculator() {
  const [propertyValue, setPropertyValue] = useState<number>(350000);
  const [mortgageRemaining, setMortgageRemaining] = useState<number>(50000);
  const [age, setAge] = useState<number>(55);
  const [releasePercentage, setReleasePercentage] = useState<number>(40);
  const [showResults, setShowResults] = useState<boolean>(false);

  // Calculate results with improved mathematics
  const results = useMemo<CalculationResults>(() => {
    const currentEquity = Math.max(0, propertyValue - mortgageRemaining);

    // Age-based maximum release percentages (more realistic)
    let maxReleaseByAge = 0.5; // 50% default
    if (age >= 65) maxReleaseByAge = 0.7;
    else if (age >= 60) maxReleaseByAge = 0.6;
    else if (age >= 55) maxReleaseByAge = 0.55;
    else if (age < 50) maxReleaseByAge = 0.4;

    // Conservative lending criteria - typically 80% max LTV after release
    const maxSafeLTV = 0.8;
    const maxReleasableByLTV = Math.max(0, (propertyValue * maxSafeLTV) - mortgageRemaining);
    const maxReleasableByAge = currentEquity * maxReleaseByAge;
    const maxReleasable = Math.min(maxReleasableByLTV, maxReleasableByAge);

    const equityAvailable = Math.min(maxReleasable, currentEquity * (releasePercentage / 100));

    // More realistic rental yield calculations
    let averageRentalYield = 0.055; // 5.5% base yield

    // Adjust yield based on property value (higher value areas typically lower yields)
    if (propertyValue > 500000) averageRentalYield = 0.045;
    else if (propertyValue > 300000) averageRentalYield = 0.05;
    else if (propertyValue < 200000) averageRentalYield = 0.065;

    // Account for void periods, maintenance, and management costs
    const netYieldMultiplier = 0.85; // 15% reduction for costs
    const effectiveYield = averageRentalYield * netYieldMultiplier;

    // Conservative leverage assumption (30% deposit typical for BTL)
    const averageDeposit = 0.3;
    const leverageMultiplier = 1 / averageDeposit;

    const totalInvestmentCapacity = equityAvailable * leverageMultiplier;
    const annualIncome = totalInvestmentCapacity * effectiveYield;
    const monthlyIncome = annualIncome / 12;

    // More accurate ROI calculation (return on equity invested)
    const potentialROI = equityAvailable > 0 ? ((annualIncome / equityAvailable) * 100).toFixed(1) : "0.0";

    // Current LTV calculation
    const currentLTV = mortgageRemaining / propertyValue;
    const newLTV = (mortgageRemaining + equityAvailable) / propertyValue;

    // Enhanced risk assessment
    let riskLevel: "low" | "medium" | "high" = "low";
    const recommendations: string[] = [];

    if (newLTV > 0.75 || age < 50 || releasePercentage > 60) {
      riskLevel = "high";
      recommendations.push("Consider reducing release amount");
      recommendations.push("Seek independent financial advice");
    } else if (newLTV > 0.65 || age < 55 || releasePercentage > 45) {
      riskLevel = "medium";
      recommendations.push("Review with financial advisor");
      recommendations.push("Consider market conditions");
    } else {
      recommendations.push("Conservative approach recommended");
      recommendations.push("Diversify property locations");
    }

    if (age < 55) {
      recommendations.push("Explore standard remortgage options first");
    }

    if (currentEquity < 100000) {
      recommendations.push("Consider building more equity first");
    }

    return {
      equityAvailable: Math.round(equityAvailable),
      monthlyIncome: Math.round(monthlyIncome),
      totalInvestmentCapacity: Math.round(totalInvestmentCapacity),
      potentialROI,
      annualIncome: Math.round(annualIncome),
      riskLevel,
      ltv: Math.round(newLTV * 100),
      recommendations
    };
  }, [propertyValue, mortgageRemaining, age, releasePercentage]);

  const scrollToRegistration = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-neutral-50 via-white to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-primary uppercase tracking-wide bg-primary/10 rounded-full">
            <Calculator className="w-4 h-4" />
            Free Calculator
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Discover Your Hidden <Highlight type="primary">Property Wealth</Highlight>
          </h2>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            Calculate how much equity you could release from your home and transform it into a profitable property investment portfolio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden bg-white">
            <CardHeader className="bg-gradient-to-r from-primary/5 via-white to-secondary/5 pb-6">
              <CardTitle className="text-center text-xl md:text-2xl font-bold flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                Equity Release Calculator
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 md:p-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Input Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Home className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Your Property Details</h3>
                  </div>

                  {/* Property Value Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-neutral-700">Property Value</label>
                      <div className="font-bold text-primary text-lg">{formatCurrency(propertyValue)}</div>
                    </div>
                    <Slider
                      value={[propertyValue]} 
                      min={100000}
                      max={2000000}
                      step={10000}
                      onValueChange={(value) => setPropertyValue(value[0])}
                      className="my-4"
                    />
                    <div className="flex justify-between text-xs text-neutral-500">
                      <span>£100k</span>
                      <span>£2M</span>
                    </div>
                  </div>

                  {/* Mortgage Remaining */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-neutral-700">Outstanding Mortgage</label>
                    <div className="relative">
                      <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                      <Input
                        type="number"
                        value={mortgageRemaining}
                        onChange={(e) => setMortgageRemaining(Math.max(0, Number(e.target.value)))}
                        className="pl-10 text-base h-12 border-2 focus:border-primary"
                        placeholder="0"
                        min="0"
                        max={propertyValue}
                      />
                    </div>
                  </div>

                  {/* Age Input */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-neutral-700">Your Age</label>
                    <Input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(Math.max(18, Math.min(90, Number(e.target.value))))}
                      className="text-base h-12 border-2 focus:border-primary"
                      min={18}
                      max={90}
                    />
                    <p className="text-xs text-neutral-500">Age affects maximum release percentage</p>
                  </div>

                  {/* Release Percentage Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-neutral-700">Equity to Release</label>
                      <div className="font-bold text-primary text-lg flex items-center gap-1">
                        {releasePercentage}%
                        <Percent className="w-4 h-4" />
                      </div>
                    </div>
                    <Slider
                      value={[releasePercentage]} 
                      min={10}
                      max={70}
                      step={5}
                      onValueChange={(value) => setReleasePercentage(value[0])}
                      className="my-4"
                    />
                    <div className="flex justify-between text-xs text-neutral-500">
                      <span>10% (Conservative)</span>
                      <span>70% (Maximum)</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => setShowResults(true)} 
                    className="w-full py-4 text-base font-bold bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    size="lg"
                  >
                    Calculate My Potential
                    <Calculator className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold">Your Investment Potential</h3>
                  </div>

                  {showResults ? (
                    <div className="space-y-6">
                      {/* Risk Indicator */}
                      <div className={`p-4 rounded-xl border-l-4 ${
                        results.riskLevel === 'low' ? 'bg-green-50 border-green-500' :
                        results.riskLevel === 'medium' ? 'bg-yellow-50 border-yellow-500' :
                        'bg-red-50 border-red-500'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          {results.riskLevel === 'low' ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-yellow-600" />
                          )}
                          <span className="font-bold text-sm uppercase tracking-wide">
                            {results.riskLevel} Risk Strategy
                          </span>
                        </div>
                        <p className="text-sm text-neutral-600">
                          New LTV: {results.ltv}% • {results.recommendations[0]}
                        </p>
                      </div>

                      {/* Key Results Grid */}
                      <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">Equity Available</p>
                            <Home className="w-5 h-5 text-primary" />
                          </div>
                          <p className="text-2xl font-black text-primary">{formatCurrency(results.equityAvailable)}</p>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">Investment Power</p>
                            <Target className="w-5 h-5 text-green-600" />
                          </div>
                          <p className="text-2xl font-black text-green-700">{formatCurrency(results.totalInvestmentCapacity)}</p>
                          <p className="text-xs text-green-600 mt-1">With leverage (30% deposits)</p>
                        </div>

                        <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">Monthly Income</p>
                            <PoundSterling className="w-5 h-5 text-secondary" />
                          </div>
                          <p className="text-2xl font-black text-secondary">{formatCurrency(results.monthlyIncome)}</p>
                          <p className="text-xs text-secondary/70 mt-1">{formatCurrency(results.annualIncome)} annually</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">ROI on Equity</p>
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                          </div>
                          <p className="text-2xl font-black text-blue-700">{results.potentialROI}%</p>
                          <p className="text-xs text-blue-600 mt-1">Annual return on invested equity</p>
                        </div>
                      </div>

                      {/* Strategy Summary */}
                      <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Info className="w-5 h-5 text-primary" />
                          Strategy Recommendations
                        </h4>
                        <ul className="space-y-2">
                          {results.recommendations.map((recommendation, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{recommendation}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 pt-4 border-t border-neutral-300">
                          <p className="text-xs text-neutral-500 leading-relaxed">
                            *Calculations based on average rental yields of 4.5-6.5%, net of void periods and costs. 
                            Assumes 30% deposit leverage. Individual results will vary based on location, property type, and market conditions. 
                            Professional advice recommended.
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        onClick={scrollToRegistration}
                        className="w-full py-4 text-base font-bold bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        size="lg"
                      >
                        Learn the Exact Strategy - Free Training
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>

                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-64 text-center border-2 border-dashed border-neutral-200 rounded-xl">
                      <div>
                        <Calculator className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                        <p className="text-neutral-500 text-base mb-2">
                          Enter your details to see your potential
                        </p>
                        <p className="text-sm text-neutral-400">
                          All calculations are instant and private
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Elements */}
        <div className="text-center mt-8 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600 mb-4">
            <div className="flex items-center gap-2">
              <CircleCheck className="w-4 h-4 text-green-600" />
              <span>100% Free Calculator</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="w-4 h-4 text-green-600" />
              <span>No Personal Info Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="w-4 h-4 text-green-600" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="w-4 h-4 text-green-600" />
              <span>Professional Grade Calculations</span>
            </div>
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            This calculator uses industry-standard metrics and conservative assumptions to provide realistic projections. 
            All calculations are based on current market conditions and typical lending criteria. 
            Professional advice should be sought before making investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
