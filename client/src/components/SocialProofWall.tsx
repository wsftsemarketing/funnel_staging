import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Highlight } from "@/components/ui/highlight";
import { UserRound, Clock, MapPin } from "lucide-react";

// Type definitions for registrations data
type RegistrationType = "professional" | "first-time" | "landlord" | "retiree";

interface Registration {
  id: number;
  name: string;
  location: string;
  type: RegistrationType;
  time: string;
}

// Sample data for demo purposes
// In a real implementation, this would come from an API call
const registrations: Registration[] = [
  {
    id: 1,
    name: "Sarah",
    location: "Manchester",
    type: "professional",
    time: "2 min ago",
  },
  {
    id: 2,
    name: "Ben",
    location: "Leeds",
    type: "first-time",
    time: "5 min ago",
  },
  {
    id: 3,
    name: "Laura",
    location: "London",
    type: "landlord",
    time: "10 min ago",
  },
  {
    id: 4,
    name: "James",
    location: "Liverpool",
    type: "professional",
    time: "12 min ago",
  },
  {
    id: 5,
    name: "Emma",
    location: "Birmingham",
    type: "retiree",
    time: "15 min ago",
  },
  {
    id: 6,
    name: "Michael",
    location: "Sheffield",
    type: "landlord",
    time: "20 min ago",
  },
  {
    id: 7,
    name: "Sophie",
    location: "Bristol",
    type: "first-time",
    time: "22 min ago",
  },
  {
    id: 8,
    name: "David",
    location: "Nottingham",
    type: "professional",
    time: "25 min ago",
  },
  {
    id: 9,
    name: "Rachel",
    location: "Glasgow",
    type: "retiree",
    time: "30 min ago",
  },
  {
    id: 10,
    name: "Thomas",
    location: "Edinburgh",
    type: "landlord",
    time: "35 min ago",
  },
  {
    id: 11,
    name: "Jessica",
    location: "Cardiff",
    type: "first-time",
    time: "40 min ago",
  },
  {
    id: 12,
    name: "Robert",
    location: "Oxford",
    type: "professional",
    time: "42 min ago",
  },
];

// Type mapping for more readable display and badge colors
const typeMapping: Record<RegistrationType, { label: string; color: string }> =
  {
    professional: { label: "Professional", color: "bg-blue-100 text-blue-800" },
    "first-time": {
      label: "1st-Time Investor",
      color: "bg-green-100 text-green-800",
    },
    landlord: { label: "Landlord", color: "bg-purple-100 text-purple-800" },
    retiree: { label: "Retiree", color: "bg-amber-100 text-amber-800" },
  };

export default function SocialProofWall() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [counter, setCounter] = useState(0);

  // Handle tab change more efficiently
  const handleTabChange = useCallback((value: string) => {
    setActiveFilter(value);
  }, []);

  // Use memoization to filter registrations only when necessary
  const visibleRegistrations = useMemo(() => {
    if (activeFilter === "all") {
      return registrations;
    }
    return registrations.filter((reg) => reg.type === activeFilter);
  }, [activeFilter]);

  // Simulated live updates every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // This simulates a new person joining every ~10 seconds by cycling through the list
      setCounter((prev) => (prev + 1) % registrations.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Get a "new" registration for the notification - memoize to prevent unnecessary re-renders
  const newRegistration = useMemo(() => registrations[counter], [counter]);

  return (
    <section id="social-proof" className="py-12 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            See Who Else Is <Highlight type="primary">Joining</Highlight>
          </h2>
          <p className="text-gray-600 mb-6">
            Join a growing community of property investors from across the UK
          </p>
        </div>

        {/* Dynamic notification */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex justify-center">
            <Card className="border-0 shadow-sm bg-gray-50 overflow-hidden w-full md:w-auto">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <UserRound className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium">
                    {newRegistration.name} from {newRegistration.location} just
                    registered
                    <span className="ml-2 inline-flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-gray-400" />
                      <span className="text-xs text-gray-500">just now</span>
                    </span>
                  </p>
                  <Badge className={typeMapping[newRegistration.type].color}>
                    {typeMapping[newRegistration.type].label}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs for filtering */}
        <div className="max-w-5xl mx-auto">
          <Tabs
            defaultValue="all"
            className="mb-8"
            onValueChange={handleTabChange}
          >
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-5 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="professional">Professionals</TabsTrigger>
                <TabsTrigger value="landlord">Landlords</TabsTrigger>
                <TabsTrigger value="first-time">1st-Timers</TabsTrigger>
                <TabsTrigger value="retiree">Retirees</TabsTrigger>
              </TabsList>
            </div>

            {/* Single TabsContent for each type needed for Tabs component to work properly */}
            <TabsContent value="all" className="mt-6">
              <RegistrationGrid registrations={visibleRegistrations} />
            </TabsContent>
            <TabsContent value="professional" className="mt-6">
              <RegistrationGrid registrations={visibleRegistrations} />
            </TabsContent>
            <TabsContent value="landlord" className="mt-6">
              <RegistrationGrid registrations={visibleRegistrations} />
            </TabsContent>
            <TabsContent value="first-time" className="mt-6">
              <RegistrationGrid registrations={visibleRegistrations} />
            </TabsContent>
            <TabsContent value="retiree" className="mt-6">
              <RegistrationGrid registrations={visibleRegistrations} />
            </TabsContent>
          </Tabs>

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              Join {registrations.length}+ people who have already registered
              for our commercial property training
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Registration grid component
function RegistrationGrid({
  registrations,
}: {
  registrations: Registration[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {registrations.map((registration: Registration) => (
        <Card
          key={registration.id}
          className="border-0 shadow-sm hover:shadow-md transition-shadow"
        >
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <UserRound className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{registration.name}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  {registration.location}
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center">
              <Badge className={typeMapping[registration.type].color}>
                {typeMapping[registration.type].label}
              </Badge>
              <span className="text-xs text-gray-500 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {registration.time}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
