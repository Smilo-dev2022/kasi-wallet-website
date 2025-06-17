import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import MerchantSignupModal from './MerchantSignupModal';
import ComingSoonModal from './ComingSoonModal';

const AppLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMerchantModal, setShowMerchantModal] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Features', id: 'features' },
    { label: 'Merchants', id: 'how-it-works' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'FAQs', id: 'faq' },
    { label: 'Contact Us', id: 'contact-form' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={handleMenuClick} />
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="bg-white w-64 h-full p-6 pt-20">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-800 hover:text-orange-500 text-lg py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    setShowComingSoon(true);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Download App
                </button>
                <button
                  onClick={() => {
                    setShowMerchantModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50"
                >
                  Become a Merchant
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
      
      {/* Add top padding to account for fixed header */}
      <div className="pt-20">
        <main>
          <div id="hero">
            <Hero />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <div id="faq">
            <FAQ />
          </div>
          <Contact />
        </main>
      </div>
      
      <Footer />
      
      <MerchantSignupModal
        isOpen={showMerchantModal}
        onClose={() => setShowMerchantModal(false)}
      />
      
      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </div>
  );
};

export default AppLayout;