import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, Smartphone } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-orange-600">
            <Download className="h-6 w-6" />
            Kasi Wallet App
          </DialogTitle>
          <DialogDescription className="text-center py-4">
            <div className="mb-4">
              <Smartphone className="h-16 w-16 mx-auto text-blue-500 mb-2" />
            </div>
            <p className="text-lg font-semibold mb-2">Coming Soon!</p>
            <p className="text-gray-600">
              We're putting the finishing touches on the Kasi Wallet app. 
              Join our waitlist to be notified when it's ready!
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Button 
            onClick={() => {
              const element = document.getElementById('contact-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                onClose();
              }
            }}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Join Waitlist
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonModal;