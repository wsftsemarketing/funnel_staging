
import { useState, useRef, useMemo } from "react";
import { useIntersectionObserver } from "@/lib/utils/animations";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Highlight } from "@/components/ui/highlight";
import { PoundSterling, Calculator, TrendingUp, Building2 } from "lucide-react";

// Memoized formatter to avoid unnecessary instances
const currencyFormatter = new Intl.NumberFormat('en-GB', { 
  style: 'currency', 
  currency: 'GBP' 
});

export default function ROICalculator() {
  const [purchasePrice, setPurchasePrice] = useState<string>('500000');
  const [annualRent, setAnnualRent] = useState<string>('45000');
  const [expenses, setExpenses] = useState<string>('5000');
  const [mortgageRate, setMortgageRate] = useState<string>('4.5');
  const [mortgageTerm, setMortgageTerm] = useState<string>('25');
  const [deposit, setDeposit] = useState<string>('25');
  
  const titleRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  
  const titleInView = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const calculatorInView = useIntersectionObserver(calculatorRef, { threshold: 0.1 });

  // Memoize calculations to avoid recalculating on every render
  const {
    depositAmount,
    monthlyMortgagePayment,
    netIncome,
    cashROI,
    yieldPercent
  } = useMemo(() => {
    // Parsed numeric values
    const priceNum = Number(purchasePrice) || 0;
    const rentNum = Number(annualRent) || 0;
    const expensesNum = Number(expenses) || 0;
    const rateNum = Number(mortgageRate) || 0;
    const termNum = Number(mortgageTerm) || 25;
    const depositNum = Number(deposit) || 0;
    
    // Calculate key metrics
    const depositAmount = priceNum * (depositNum / 100);
    const loanAmount = priceNum - depositAmount;
    
    // Calculate mortgage using more efficient Math.pow cache
    const monthlyRate = rateNum / 100 / 12;
    const payments = termNum * 12;
    const powerFactor = Math.pow(1 + monthlyRate, payments);
    const monthlyMortgagePayment = loanAmount * (monthlyRate * powerFactor) / (powerFactor - 1);
    
    const annualMortgagePayment = monthlyMortgagePayment * 12;
    const netIncome = rentNum - expensesNum - annualMortgagePayment;
    const cashROI = depositAmount ? (netIncome / depositAmount) * 100 : 0;
    const yieldPercent = priceNum ? (rentNum / priceNum) * 100 : 0;

    return {
      depositAmount,
      monthlyMortgagePayment,
      netIncome,
      cashROI,
      yieldPercent
    };
  }, [purchasePrice, annualRent, expenses, mortgageRate, mortgageTerm, deposit]);

  // Simple helper function for formatting
  function formatCurrency(value: number): string {
    return currencyFormatter.format(value);
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-12 transform transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-3 py-1 mb-6 text-sm font-bold text-primary uppercase tracking-wide">
            Investment Analysis
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Commercial Property <Highlight type="primary">ROI Calculator</Highlight>
          </h2>
          <p className="text-lg text-neutral-700">
            Calculate potential returns on your commercial property investment with our comprehensive ROI calculator.
          </p>
        </div>

        <div 
          ref={calculatorRef}
          className={`max-w-4xl mx-auto transform transition-all duration-700 delay-200 ${
            calculatorInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-6">Investment Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="purchasePrice">Purchase Price</Label>
                    <div className="relative">
                      <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                      <Input
                        id="purchasePrice"
                        type="number"
                        value={purchasePrice}
                        onChange={(e) => setPurchasePrice(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="annualRent">Annual Rental Income</Label>
                    <div className="relative">
                      <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                      <Input
                        id="annualRent"
                        type="number"
                        value={annualRent}
                        onChange={(e) => setAnnualRent(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="expenses">Annual Expenses</Label>
                    <div className="relative">
                      <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                      <Input
                        id="expenses"
                        type="number"
                        value={expenses}
                        onChange={(e) => setExpenses(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="deposit">Deposit Percentage</Label>
                    <div className="relative">
                      <Input
                        id="deposit"
                        type="number"
                        value={deposit}
                        onChange={(e) => setDeposit(e.target.value)}
                        className="pl-10"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">%</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mortgageRate">Mortgage Interest Rate</Label>
                    <div className="relative">
                      <Input
                        id="mortgageRate"
                        type="number"
                        value={mortgageRate}
                        onChange={(e) => setMortgageRate(e.target.value)}
                        className="pl-10"
                        step="0.1"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">%</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mortgageTerm">Mortgage Term (Years)</Label>
                    <Input
                      id="mortgageTerm"
                      type="number"
                      value={mortgageTerm}
                      onChange={(e) => setMortgageTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-6">Investment Analysis</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Required Deposit</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {formatCurrency(depositAmount)}
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calculator className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Monthly Mortgage</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {formatCurrency(monthlyMortgagePayment)}
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Annual Net Income</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {formatCurrency(netIncome)}
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <PoundSterling className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Cash on Cash ROI</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {cashROI.toFixed(2)}%
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Gross Yield</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {yieldPercent.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
