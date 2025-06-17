import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, QrCode, Banknote, Smartphone, Globe, Shield } from 'lucide-react';
import MerchantSignupModal from './MerchantSignupModal';

const Features: React.FC = () => {
  const [showMerchantModal, setShowMerchantModal] = useState(false);

  const handleJoinWaitlist = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Send className="h-8 w-8 text-orange-500" />,
      title: "Send & Receive Instantly",
      description: "Peer-to-peer wallet transfers in seconds"
    },
    {
      icon: <QrCode className="h-8 w-8 text-blue-500" />,
      title: "Pay at Spaza Shops",
      description: "Scan QR codes or use airtime-based vouchers"
    },
    {
      icon: <Banknote className="h-8 w-8 text-green-500" />,
      title: "Withdraw Cash",
      description: "Partner cash-out points and local agents"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      title: "Buy Airtime & Electricity",
      description: "All major networks supported"
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      title: "Cross-Border Transfers",
      description: "Send money SA to Zim, SA to Lesotho, etc."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Fully Secure",
      description: "OTP, PIN & biometric protection"
    }
  ];

  return (
    <>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Powerful Features for Your Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleJoinWaitlist}
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3"
              >
                Join Waitlist
              </Button>
              <Button 
                onClick={() => setShowMerchantModal(true)}
                variant="outline" 
                className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3"
              >
                Become a Merchant
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MerchantSignupModal
        isOpen={showMerchantModal}
        onClose={() => setShowMerchantModal(false)}
      />
    </>
  );
};

export default Features;