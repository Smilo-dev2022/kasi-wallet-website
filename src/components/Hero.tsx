import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Shield, Zap } from 'lucide-react';
import MerchantSignupModal from './MerchantSignupModal';

const Hero: React.FC = () => {
  const [showMerchantModal, setShowMerchantModal] = useState(false);

  const handleJoinWaitlist = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Your Money, Your Way
                <span className="text-orange-500"> in the Kasi</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Send money, pay at local shops, buy airtime, and withdraw cash - all from your phone. 
                Built for South Africa's townships and rural communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={handleJoinWaitlist}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => setShowMerchantModal(true)}
                  variant="outline" 
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  Become a Merchant
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Smartphone className="h-8 w-8 text-orange-500 mb-2" />
                  <span className="text-sm text-gray-600">Easy to Use</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="h-8 w-8 text-blue-500 mb-2" />
                  <span className="text-sm text-gray-600">100% Secure</span>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-sm text-gray-600">Instant Transfers</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-blue-600 rounded-3xl p-8 text-white">
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Send & Receive Money</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Pay at Local Shops</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Buy Airtime & Data</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Cash Withdrawals</span>
                    </div>
                  </div>
                </div>
              </div>
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

export default Hero;