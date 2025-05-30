import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/ui/logo";
import { Menu, ArrowRight } from "lucide-react";
import AboutPaulModal from "@/components/AboutPaulModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoized scroll handler to prevent recreation on each render
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    setScrolled(offset > 60);
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToRegistration = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the menu after scrolling
    }
  };

  
  // Memoized section scroll function
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled
          ? "bg-[#F7F8F990] py-2 border-b border-[#141b29]/10 shadow-xs shadow-[#141b29]/10"
          : "bg-[#F7F8F9] py-3"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - left aligned on all devices */}
        <div className="flex items-center">
          <Logo variant="default" size="default" className="md:px-4" />
        </div>

        {/* Right side with About Paul always visible and menu on mobile */}
        <div className="flex items-center space-x-3">
          {/* About Paul Modal - always visible on all devices */}
          <AboutPaulModal className="cursor-pointer" />
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-none">
                <div className="mb-8 mt-6 px-8">
                  <Logo variant="default" size="default" />
                </div>

                <Button
                  onClick={scrollToRegistration}
                  variant="secondary"
                  className="w-full uppercase"
                >
                  WATCH NOW{" "}
                  <ArrowRight className="ml-2 inline-block" size={18} />
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}