import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserRound, Clock, MapPin } from "lucide-react";

// Types for registration notifications
type RegistrationNotification = {
  id: number;
  name: string;
  location: string;
  timeAgo: string;
};

// Sample data for the notifications
const sampleNotifications: RegistrationNotification[] = [
  { id: 1, name: "Sarah T.", location: "Manchester", timeAgo: "2 minutes ago" },
  { id: 2, name: "James M.", location: "London", timeAgo: "5 minutes ago" },
  { id: 3, name: "Emma P.", location: "Birmingham", timeAgo: "8 minutes ago" },
  { id: 4, name: "Robert K.", location: "Bristol", timeAgo: "12 minutes ago" },
  { id: 5, name: "Olivia S.", location: "Leeds", timeAgo: "15 minutes ago" },
  { id: 6, name: "William H.", location: "Liverpool", timeAgo: "18 minutes ago" },
  { id: 7, name: "Sophia L.", location: "Glasgow", timeAgo: "21 minutes ago" },
  { id: 8, name: "Noah W.", location: "Edinburgh", timeAgo: "25 minutes ago" },
  { id: 9, name: "Ava B.", location: "Sheffield", timeAgo: "30 minutes ago" },
  { id: 10, name: "Thomas R.", location: "Cardiff", timeAgo: "35 minutes ago" },
  { id: 11, name: "Charlotte D.", location: "Newcastle", timeAgo: "40 minutes ago" },
  { id: 12, name: "Henry C.", location: "Southampton", timeAgo: "45 minutes ago" },
  { id: 13, name: "Amelia G.", location: "Belfast", timeAgo: "48 minutes ago" },
  { id: 14, name: "Alexander J.", location: "York", timeAgo: "52 minutes ago" },
  { id: 15, name: "Mia V.", location: "Oxford", timeAgo: "55 minutes ago" },
  { id: 16, name: "Benjamin N.", location: "Cambridge", timeAgo: "1 hour ago" },
  { id: 17, name: "Evelyn T.", location: "Nottingham", timeAgo: "1 hour ago" },
  { id: 18, name: "Lucas B.", location: "Leicester", timeAgo: "1 hour ago" },
  { id: 19, name: "Scarlett P.", location: "Coventry", timeAgo: "1 hour ago" },
  { id: 20, name: "Jak F.", location: "Portsmouth", timeAgo: "2 hours ago" },
];

export default function SocialProofNotifications() {
  const [currentNotification, setCurrentNotification] = useState<RegistrationNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first notification after a short delay
    const initialTimer = setTimeout(() => {
      showRandomNotification();
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, []);

  const showRandomNotification = () => {
    // Get a random notification
    const randomIndex = Math.floor(Math.random() * sampleNotifications.length);
    setCurrentNotification(sampleNotifications[randomIndex]);
    setIsVisible(true);

    // Hide the notification after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      
      // Schedule the next notification after this one disappears
      const nextTimer = setTimeout(() => {
        showRandomNotification();
      }, Math.random() * 20000 + 10000); // Random time between 10-30 seconds
      
      return () => clearTimeout(nextTimer);
    }, 5000);

    return () => clearTimeout(hideTimer);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 pointer-events-none max-w-[calc(100vw-40px)] sm:max-w-xs">
      <AnimatePresence>
        {isVisible && currentNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-lg border border-neutral-100 overflow-hidden pointer-events-auto"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#976b47]/10 flex items-center justify-center text-[#976b47] font-bold">
                <UserRound className="h-5 w-5 text-ring" />
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[foreground] truncate">
                  {currentNotification.name} from {currentNotification.location}
                </p>
                <p className="text-xs text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1 text-gray-400" />
                  Registered {currentNotification.timeAgo}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}