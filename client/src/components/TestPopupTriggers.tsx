import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface TestPopupTriggersProps {
  onTriggerExitIntent: () => void;
  onTriggerSpotReservation: () => void;
  onTriggerSocialShare: () => void;
}

/**
 * Development-only component to directly trigger the popup components for testing
 */
export default function TestPopupTriggers({
  onTriggerExitIntent,
  onTriggerSpotReservation,
  onTriggerSocialShare
}: TestPopupTriggersProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed top-2 right-2 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsVisible(!isVisible)}
        className="bg-black/60 text-white hover:bg-black/80 border-0"
      >
        Test Popups
      </Button>

      {isVisible && (
        <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-lg border border-neutral-200 p-2 w-48">
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onTriggerExitIntent}
              className="w-full justify-start text-sm"
            >
              Show Exit Intent
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onTriggerSpotReservation}
              className="w-full justify-start text-sm"
            >
              Show Spot Reservation
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onTriggerSocialShare}
              className="w-full justify-start text-sm"
            >
              Show Social Share
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}