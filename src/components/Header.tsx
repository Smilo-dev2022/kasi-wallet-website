import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';
import MerchantSignupModal from './MerchantSignupModal';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showMerchantModal, setShowMerchantModal] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'how-it-works', 'faq', 'contact-form'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === 'hero' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero', section: 'home' },
    { label: 'Features', id: 'features', section: 'features' },
    { label: 'Merchants', id: 'how-it-works', section: 'how-it-works' },
    { label: 'How It Works', id: 'how-it-works', section: 'how-it-works' },
    { label: 'FAQs', id: 'faq', section: 'faq' },
    { label: 'Contact Us', id: 'contact-form', section: 'contact-form' }
  ];

  return (
    <>
      <header className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/ikasi-wallet-logo.png" 
              alt="iKasi Wallet Logo" 
              className="w-10 h-10 object-contain"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/ikasi-logo.svg'; }}
            />
            <span className="text-xl font-bold text-gray-800">iKasi Wallet</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.section
                    ? 'text-orange-500 font-medium'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button asChild variant="link" className="hidden sm:inline-flex text-gray-700">
              <Link to="/login">Login</Link>
            </Button>
            <Button
              onClick={() => setShowComingSoon(true)}
              className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700"
            >
              Download App
            </Button>
            <Button
              onClick={() => setShowMerchantModal(true)}
              variant="outline"
              className="hidden sm:inline-flex border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              Become a Merchant
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
      
      <MerchantSignupModal
        isOpen={showMerchantModal}
        onClose={() => setShowMerchantModal(false)}
      />
    </>
  );
};

export default Header;