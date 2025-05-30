import React, { useState, useEffect, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, X } from "lucide-react";

// WhatsApp icon extracted as a constant to prevent re-renders
const WhatsAppIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.38 0-7.93 3.55-7.93 7.92a7.9 7.9 0 0 0 1.03 3.9l-1.15 4.18 4.3-1.13a7.93 7.93 0 0 0 3.8.97A7.95 7.95 0 0 0 20.08 12a7.86 7.86 0 0 0-2.48-5.68zM12.05 18.5a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.57 6.57 0 0 1-1.01-3.49c0-3.64 2.96-6.6 6.6-6.6 1.76 0 3.42.69 4.66 1.93a6.58 6.58 0 0 1 1.94 4.67c0 3.64-2.97 6.58-6.6 6.58zm3.63-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05a5.47 5.47 0 0 1-2.7-2.35c-.2-.35.21-.32.58-1.08.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.38-.32-.33-.45-.34h-.39a.76.76 0 0 0-.55.26 2.3 2.3 0 0 0-.71 1.7c0 1 .74 1.97.84 2.1.1.14 1.42 2.17 3.44 3.05.48.2.86.33 1.15.43.48.15.92.13 1.27.08.39-.06 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.08-.19-.13-.4-.23z"/>
  </svg>
));

// Send button icon
const SendIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
));

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Is this webinar right for me?");
  const [messageSent, setMessageSent] = useState(false);
  
  // Memoized event handlers to avoid creating new functions on each render
  const handleToggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    // Reset state when reopening
    if (!isOpen) {
      setMessageSent(false);
    }
  }, [isOpen]);
  
  // Listen for events from the navbar button
  useEffect(() => {
    window.addEventListener('toggleWhatsAppChat', handleToggleChat);
    
    return () => {
      window.removeEventListener('toggleWhatsAppChat', handleToggleChat);
    };
  }, [handleToggleChat]);
  
  // Using the same memoized handler for button clicks
  const toggleChat = handleToggleChat;
  
  // Memoize the sendMessage function
  const sendMessage = useCallback(() => {
    // In a real implementation, this would send the message to WhatsApp
    // For demo purposes, we'll just show a response
    setMessageSent(true);
  }, []);
  
  return (
    <>
      {/* Floating WhatsApp Button */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 w-16 h-16 shadow-lg cursor-pointer hover:bg-green-600 transition-colors duration-200"
        onClick={toggleChat}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <WhatsAppIcon />
        )}
      </div>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 shadow-2xl rounded-2xl overflow-hidden">
          <Card className="border-0">
            {/* Chat Header */}
            <div className="bg-green-500 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Touchstone Support</h3>
                  <p className="text-xs text-white/80">Usually replies within minutes</p>
                </div>
              </div>
            </div>
            
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="bg-gray-50 p-4 h-80 overflow-y-auto">
                <div className="flex flex-col gap-3">
                  {/* Welcome Message */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">TS</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-sm">Hello! How can I help you with our Commercial Property Webinar today?</p>
                    </div>
                  </div>
                  
                  {/* User Message */}
                  {messageSent && (
                    <div className="flex items-start gap-2 justify-end">
                      <div className="bg-green-100 p-3 rounded-lg shadow-sm max-w-[80%]">
                        <p className="text-sm">{message}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Response Message */}
                  {messageSent && (
                    <div className="flex items-start gap-2 mt-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">TS</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                        <p className="text-sm">Absolutely! This webinar is perfect for you if:</p>
                        <ul className="text-sm list-disc pl-4 mt-2 space-y-1">
                          <li>You're looking to diversify your investment portfolio</li>
                          <li>You want higher yields than standard buy-to-let properties</li>
                          <li>You're tired of dealing with tenant issues</li>
                          <li>You want to learn about commercial property deals with 22%+ ROI</li>
                        </ul>
                        <div className="mt-3">
                          <Button 
                            size="sm" 
                            className="w-full"
                            onClick={() => window.location.href = '#registration'}
                          >
                            Register for the Webinar
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t">
                {!messageSent ? (
                  <div className="flex gap-2">
                    <div className="flex-grow">
                      <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        rows={2}
                      />
                    </div>
                    <Button 
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full h-10 w-10 p-0 flex items-center justify-center flex-shrink-0 self-end"
                      onClick={sendMessage}
                    >
                      <SendIcon />
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type another question..." 
                      className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <Button 
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => {}}
                    >
                      Send
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}