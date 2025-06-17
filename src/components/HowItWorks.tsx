import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, UserPlus, CreditCard } from 'lucide-react';
import MerchantSignupModal from './MerchantSignupModal';

const HowItWorks: React.FC = () => {
  const [showMerchantModal, setShowMerchantModal] = useState(false);

  const handleContactSupport = () => {
    window.open('https://wa.me/27600180011?text=Hi, I need help with Kasi Wallet', '_blank');
  };

  const steps = [
    {
      icon: <Download className="h-12 w-12 text-orange-500" />,
      title: "Download the App",
      description: "Get Kasi Wallet from Google Play or App Store",
      step: "01"
    },
    {
      icon: <UserPlus className="h-12 w-12 text-blue-500" />,
      title: "Register with ID",
      description: "Sign up with just your ID number - no bank account needed",
      step: "02"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-green-500" />,
      title: "Start Transacting",
      description: "Send money, pay bills, buy airtime in minutes",
      step: "03"
    }
  ];

  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Get started in 3 simple steps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="absolute -top-4 -left-4 bg-gradient-to-br from-orange-500 to-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">For Businesses</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of merchants already accepting digital payments. Get your QR code, 
              start accepting payments, and grow your business with Kasi Wallet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowMerchantModal(true)}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
              >
                Become a Merchant
              </Button>
              <Button 
                onClick={handleContactSupport}
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3"
              >
                Contact Support
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

export default HowItWorks;