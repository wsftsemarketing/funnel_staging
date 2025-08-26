import { Card, CardContent } from "@/components/ui/card";
import { Highlight } from "@/components/ui/highlight";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface HostInformationProps {
  width?: "default" | "wide";
  className?: string;
}

export default function HostInformation({ width = "default", className }: HostInformationProps) {
  return (
    <div className={cn(
      "mx-auto mb-12",
      width === "wide" ? "max-w-5xl" : "max-w-2xl",
      className
    )}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            {/* Abi Section */}
            <div className="p-6 border-r border-neutral-200">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Meet <Highlight type="primary">Abi</Highlight>
              </h2>
              <div className="text-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary p-1 mx-auto mb-4">
                  <img
                    src="https://www.thesun.co.uk/wp-content/uploads/2024/12/cd0dfe5e-22c1-4841-bcfe-09b7fae99230_c8164c.jpg"
                    alt="Abi"
                    className="w-full h-full object-cover rounded-full bg-white p-0.1"
                  />
                </div>
                <h3 className="text-xl font-bold">Abi Hookway</h3>
                <p className="text-sm text-neutral-500 mb-4">
                  Property Investment Expert
                </p>
              </div>

              <p className="text-sm text-neutral-600 text-center mb-4">
                From £24k debt and divorce to £8M property portfolio in 8 years.
                Abi proves that anyone can build wealth through property with
                the right strategy.
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CircleCheck className="w-4 h-4 text-primary" />
                  <span>£8M+ portfolio built</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CircleCheck className="w-4 h-4 text-primary" />
                  <span>£350k+ annual passive income</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CircleCheck className="w-4 h-4 text-primary" />
                  <span>Single mum turned millionaire</span>
                </div>
              </div>
            </div>

            {/* Paul Section */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Meet <Highlight type="secondary">Paul</Highlight>
              </h2>
              <div className="text-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-secondary p-0.5 mx-auto mb-4">
                  <img
                    src="https://www.paulsmithtouchstoneeducation.com/wp-content/uploads/2020/10/Paul-Smith-Touchstone-Education.png"
                    alt="Paul Smith"
                    className="w-full h-full object-cover rounded-full bg-white p-0.1"
                  />
                </div>
                <h3 className="text-xl font-bold">Paul Smith</h3>
                <p className="text-sm text-neutral-500 mb-4">
                  Multi-Millionaire Property Expert
                </p>
              </div>

              <p className="text-sm text-neutral-600 text-center mb-4">
                40+ years in property investment. Started with £170, now worth
                £100M+. Lives in Monaco and teaches wealth-building strategies.
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CircleCheck className="w-4 h-4 text-secondary" />
                  <span>£100M+ net worth</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CircleCheck className="w-4 h-4 text-secondary" />
                  <span>40+ years experience</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CircleCheck className="w-4 h-4 text-secondary" />
                  <span>Lives in Monaco</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
