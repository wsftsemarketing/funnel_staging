import React, { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Highlight } from "@/components/ui/highlight";
import { ArrowRight, Building, PoundSterling, BarChart3, TrendingUp } from "lucide-react";

// Types for calculator results
interface CalculationResults {
  deposit: string;
  monthlyMortgage: string;
  monthlyIncome: string;
  annualIncome: string;
  roi: string;
  annualAppreciation: string;
  totalReturnYear1: string;
  totalROI: string;
}

export default function PropertyInvestmentCalculator() {
  // State for commercial property calculator
  const [propertyPrice, setPropertyPrice] = useState<number>(500000);
  const [depositPercentage, setDepositPercentage] = useState<number>(25);
  const [rentalIncome, setRentalIncome] = useState<number>(3500);
  const [expenses, setExpenses] = useState<number>(500);
  const [appreciationRate, setAppreciationRate] = useState<number>(2);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [showResults, setShowResults] = useState<boolean>(false);

  // Memoized calculation of mortgage and investment metrics to prevent recalculation on each render
  const results = useMemo<CalculationResults>(() => {
    const deposit = propertyPrice * (depositPercentage / 100);
    const loanAmount = propertyPrice - deposit;
    
    // Optimize the calculation by caching the repeated powers
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    const powerFactor = Math.pow(1 + monthlyInterestRate, totalPayments);
    
    const monthlyMortgage = loanAmount * (monthlyInterestRate * powerFactor) / (powerFactor - 1);
    const monthlyIncome = rentalIncome - expenses - monthlyMortgage;
    const annualIncome = monthlyIncome * 12;
    const roi = (annualIncome / deposit) * 100;
    const annualAppreciation = propertyPrice * (appreciationRate / 100);
    const totalReturnYear1 = annualIncome + annualAppreciation;
    const totalROI = (totalReturnYear1 / deposit) * 100;

    return {
      deposit: deposit.toFixed(0),
      monthlyMortgage: monthlyMortgage.toFixed(0),
      monthlyIncome: monthlyIncome.toFixed(0),
      annualIncome: annualIncome.toFixed(0),
      roi: roi.toFixed(1),
      annualAppreciation: annualAppreciation.toFixed(0),
      totalReturnYear1: totalReturnYear1.toFixed(0),
      totalROI: totalROI.toFixed(1)
    };
  }, [propertyPrice, depositPercentage, rentalIncome, expenses, appreciationRate, loanTerm, interestRate]);

  // Memoize the calculate function to prevent recreation on each render
  const handleCalculate = useCallback(() => {
    setShowResults(true);
  }, []);

  return (
    <section id="calculator" className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            Commercial Property <Highlight type="primary">ROI Calculator</Highlight>
          </h2>
          <p className="text-gray-600 mb-6">
            Calculate your potential returns on commercial property investments in England with our easy-to-use calculator.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Calculator Input Section */}
          <div className="md:col-span-7">
            <Card className="border-0 shadow-md">
              <CardHeader className="bg-primary/5 pb-4">
                <CardTitle className="text-xl font-semibold text-primary">Investment Parameters</CardTitle>
                <CardDescription>Adjust the values to match your investment criteria</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <Tabs defaultValue="commercial" className="mb-6">
                  <TabsList className="w-full grid grid-cols-1">
                    <TabsTrigger value="commercial" className="text-sm">Commercial Property</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="commercial" className="pt-4">
                    <div className="space-y-6">
                      {/* Property Price Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-medium flex items-center">
                            <Building className="h-4 w-4 mr-2 text-primary/70" />
                            Property Price
                          </label>
                          <div className="font-medium">£{propertyPrice.toLocaleString()}</div>
                        </div>
                        <Slider
                          value={[propertyPrice]} 
                          min={100000}
                          max={2000000}
                          step={10000}
                          onValueChange={(value) => setPropertyPrice(value[0])}
                          className="my-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>£100k</span>
                          <span>£2M</span>
                        </div>
                      </div>
                      
                      {/* Deposit Percentage Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-medium flex items-center">
                            <PoundSterling className="h-4 w-4 mr-2 text-primary/70" />
                            Deposit Percentage
                          </label>
                          <div className="font-medium">{depositPercentage}% (£{(propertyPrice * depositPercentage / 100).toLocaleString()})</div>
                        </div>
                        <Slider
                          value={[depositPercentage]} 
                          min={10}
                          max={50}
                          step={1}
                          onValueChange={(value) => setDepositPercentage(value[0])}
                          className="my-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>10%</span>
                          <span>50%</span>
                        </div>
                      </div>
                      
                      {/* Interest Rate Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-medium flex items-center">
                            <TrendingUp className="h-4 w-4 mr-2 text-primary/70" />
                            Interest Rate
                          </label>
                          <div className="font-medium">{interestRate}%</div>
                        </div>
                        <Slider
                          value={[interestRate]} 
                          min={2}
                          max={10}
                          step={0.1}
                          onValueChange={(value) => setInterestRate(value[0])}
                          className="my-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>2%</span>
                          <span>10%</span>
                        </div>
                      </div>
                      
                      {/* Mortgage Term in Years */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-medium">Loan Term (Years)</label>
                          <div className="font-medium">{loanTerm} years</div>
                        </div>
                        <Slider
                          value={[loanTerm]} 
                          min={5}
                          max={25}
                          step={1}
                          onValueChange={(value) => setLoanTerm(value[0])}
                          className="my-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>5</span>
                          <span>25</span>
                        </div>
                      </div>
                      
                      {/* Monthly Rental Income */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Monthly Rental Income (£)</label>
                        <Input
                          type="number"
                          value={rentalIncome}
                          onChange={(e) => setRentalIncome(Number(e.target.value))}
                          min={0}
                          className="focus-within:ring-primary"
                        />
                      </div>
                      
                      {/* Monthly Expenses */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Monthly Expenses (£)</label>
                        <Input
                          type="number"
                          value={expenses}
                          onChange={(e) => setExpenses(Number(e.target.value))}
                          min={0}
                          className="focus-within:ring-primary"
                        />
                      </div>
                      
                      {/* Property Appreciation Rate */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-medium flex items-center">
                            <BarChart3 className="h-4 w-4 mr-2 text-primary/70" />
                            Annual Appreciation Rate
                          </label>
                          <div className="font-medium">{appreciationRate}%</div>
                        </div>
                        <Slider
                          value={[appreciationRate]} 
                          min={0}
                          max={10}
                          step={0.1}
                          onValueChange={(value) => setAppreciationRate(value[0])}
                          className="my-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>0%</span>
                          <span>10%</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={handleCalculate} 
                        className="w-full mt-4"
                        size="lg"
                      >
                        Calculate Investment Returns
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* Results Section */}
          <div className="md:col-span-5">
            <Card className={`h-full border-0 shadow-md transition-all duration-500 ${showResults ? 'opacity-100' : 'opacity-80'}`}>
              <CardHeader className="bg-primary text-white">
                <CardTitle className="text-xl font-semibold">Your Investment Results</CardTitle>
                <CardDescription className="text-white/80">Based on your parameters</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                {/* Key Results */}
                <div className="space-y-6">
                  {/* ROI */}
                  <div className="bg-primary/5 p-5 rounded-lg border border-primary/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total ROI (Year 1)</p>
                        <p className="text-3xl font-bold text-primary">{results.totalROI}%</p>
                      </div>
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <BarChart3 className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500 mb-1">Cash Deposit</p>
                      <p className="text-lg font-semibold">£{results.deposit}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500 mb-1">Monthly Mortgage</p>
                      <p className="text-lg font-semibold">£{results.monthlyMortgage}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500 mb-1">Monthly Cashflow</p>
                      <p className={`text-lg font-semibold ${Number(results.monthlyIncome) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        £{results.monthlyIncome}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500 mb-1">Annual Income</p>
                      <p className={`text-lg font-semibold ${Number(results.annualIncome) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        £{results.annualIncome}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500 mb-1">Cash-on-Cash ROI</p>
                      <p className="text-lg font-semibold">{results.roi}%</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500 mb-1">Annual Appreciation</p>
                      <p className="text-lg font-semibold">£{results.annualAppreciation}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="font-medium text-center mb-2">Total Year 1 Return</p>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-center text-2xl font-bold text-primary">£{results.totalReturnYear1}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-gray-600">
                  <p>Results are estimates and may vary. Seek professional financial advice.</p>
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => window.location.href = '#registration'}
                >
                  Learn How to Maximize Your Returns
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}