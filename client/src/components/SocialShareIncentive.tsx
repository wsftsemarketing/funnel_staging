import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

/**
 * SocialShareIncentive Component
 * 
 * This component encourages social sharing by offering priority access
 * or additional resources in exchange for sharing the webinar.
 * It combines social proof with reciprocity to drive registrations.
 */
export default function SocialShareIncentive() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClaimed, setHasClaimed] = useState(false);
  const [sharingOption, setSharingOption] = useState<'not-selected' | 'facebook' | 'twitter' | 'linkedin' | 'email'>('not-selected');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSharingOptionClick = (option: 'facebook' | 'twitter' | 'linkedin' | 'email') => {
    setSharingOption(option);
  };

  const handleShare = () => {
    // Generate share links/actions based on selected option
    const webinarUrl = window.location.href;
    const shareText = "Join me at this exclusive commercial property webinar to discover how investors are achieving 10-15% yields. Limited spots available!";
    
    let shareUrl = '';
    
    switch (sharingOption) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(webinarUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(webinarUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(webinarUrl)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent("Exclusive Commercial Property Webinar")}&body=${encodeURIComponent(`${shareText}\n\n${webinarUrl}`)}`;
        break;
      default:
        return;
    }
    
    // Open share dialog
    window.open(shareUrl, '_blank', 'width=600,height=400');
    
    // Mark as claimed
    setHasClaimed(true);
    
    // Show success toast
    toast({
      title: "Success! Bonus materials unlocked",
      description: "Check your email after registration for exclusive content",
    });
    
    // Close the modal after a short delay
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  // Floating button that appears after scrolling
  const TriggerButton = () => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-4 bottom-20 z-40"
    >
      <Button
        onClick={handleOpen}
        className="group rounded-full h-14 w-14 md:h-auto md:w-auto md:rounded-lg md:px-4 md:py-2 shadow-lg bg-secondary hover:bg-secondary/90 text-white"
      >
        <span className="hidden md:inline">Get Exclusive Materials</span>
        <span className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <path d="m8 5.8 4-4 4 4"></path>
            <path d="M12 16V2"></path>
          </svg>
        </span>
        
        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
          +3
        </span>
      </Button>
    </motion.div>
  );

  return (
    <>
      {!hasClaimed && <TriggerButton />}
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v8"></path>
                      <path d="m16 4-4-2-4 2"></path>
                      <path d="M8.5 14.5A5 5 0 0 0 18 15"></path>
                      <path d="M2 22l14-4"></path>
                      <path d="M22 18c-1 0-5-3-5-7a3 3 0 1 1 6 0c0 4-4 7-5 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Unlock Webinar Bonuses</h3>
                </div>
                <button
                  onClick={handleClose}
                  className="text-neutral-400 hover:text-neutral-600"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="py-2">
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2">Share this webinar to receive:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Exclusive Property Deal Analysis Spreadsheet</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Priority Access to Q&A During the Webinar</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>PDF Guide: "Top 10 Commercial Property Investing Mistakes to Avoid"</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg mb-6">
                  <div className="text-sm text-neutral-600 mb-2">Choose how you'd like to share:</div>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      onClick={() => handleSharingOptionClick('facebook')}
                      className={`p-3 rounded-lg flex flex-col items-center ${sharingOption === 'facebook' ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-white border border-neutral-200 hover:bg-blue-50'}`}
                    >
                      <svg className="w-6 h-6 text-blue-600 mb-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">Facebook</span>
                    </button>
                    <button
                      onClick={() => handleSharingOptionClick('twitter')}
                      className={`p-3 rounded-lg flex flex-col items-center ${sharingOption === 'twitter' ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-white border border-neutral-200 hover:bg-blue-50'}`}
                    >
                      <svg className="w-6 h-6 text-blue-400 mb-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      <span className="text-xs">Twitter</span>
                    </button>
                    <button
                      onClick={() => handleSharingOptionClick('linkedin')}
                      className={`p-3 rounded-lg flex flex-col items-center ${sharingOption === 'linkedin' ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-white border border-neutral-200 hover:bg-blue-50'}`}
                    >
                      <svg className="w-6 h-6 text-blue-700 mb-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleSharingOptionClick('email')}
                      className={`p-3 rounded-lg flex flex-col items-center ${sharingOption === 'email' ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-white border border-neutral-200 hover:bg-blue-50'}`}
                    >
                      <svg className="w-6 h-6 text-neutral-700 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <span className="text-xs">Email</span>
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button
                    onClick={handleShare}
                    disabled={sharingOption === 'not-selected'}
                    className="w-full py-2.5"
                  >
                    {sharingOption === 'not-selected' ? 'Select a sharing option' : 'Share & Unlock Materials'}
                  </Button>
                  <p className="text-xs text-neutral-500 mt-3">
                    You'll receive the materials via email after registering for the webinar
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}