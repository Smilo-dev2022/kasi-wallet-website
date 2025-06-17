import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Store, MessageCircle } from 'lucide-react';

interface MerchantSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MerchantSignupModal: React.FC<MerchantSignupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    shopAddress: '',
    ownerName: '',
    ownerId: '',
    contactNumber: '',
    whatsappNumber: '',
    services: {
      qrPayments: false,
      airtime: false,
      cashOut: false,
      deliveries: false
    }
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Thank you for registering. Our team will contact you soon."
    });
    onClose();
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/27600180011?text=Hi, I want to register as a merchant', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-blue-600">
            <Store className="h-6 w-6" />
            Register as a Merchant
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="shopAddress">Shop Address *</Label>
            <Input
              id="shopAddress"
              value={formData.shopAddress}
              onChange={(e) => setFormData({...formData, shopAddress: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="ownerName">Owner Name *</Label>
            <Input
              id="ownerName"
              value={formData.ownerName}
              onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="ownerId">Owner ID Number *</Label>
            <Input
              id="ownerId"
              value={formData.ownerId}
              onChange={(e) => setFormData({...formData, ownerId: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="contactNumber">Contact Number *</Label>
            <Input
              id="contactNumber"
              value={formData.contactNumber}
              onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
            <Input
              id="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
            />
          </div>
          
          <div>
            <Label className="text-sm font-medium">Select Services:</Label>
            <div className="space-y-2 mt-2">
              {[
                { key: 'qrPayments', label: 'QR Payments' },
                { key: 'airtime', label: 'Airtime' },
                { key: 'cashOut', label: 'Cash-out' },
                { key: 'deliveries', label: 'Trolley Deliveries' }
              ].map(service => (
                <div key={service.key} className="flex items-center space-x-2">
                  <Checkbox
                    id={service.key}
                    checked={formData.services[service.key as keyof typeof formData.services]}
                    onCheckedChange={(checked) => 
                      setFormData({
                        ...formData,
                        services: {
                          ...formData.services,
                          [service.key]: checked
                        }
                      })
                    }
                  />
                  <Label htmlFor={service.key} className="text-sm">{service.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-2 pt-4">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Register My Store
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleWhatsAppChat}
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with Rep
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MerchantSignupModal;