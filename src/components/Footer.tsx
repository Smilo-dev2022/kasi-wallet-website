import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold">iKasi Wallet</span>
            </div>
            <p className="text-gray-400">
              Your township-first digital payment platform. Powered by Kasi Connect KC Trading.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400">Features</a></li>
              <li><a href="#" className="hover:text-orange-400">Security</a></li>
              <li><a href="#" className="hover:text-orange-400">How it Works</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Business</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400">For Merchants</a></li>
              <li><a href="#" className="hover:text-orange-400">Partner Program</a></li>
              <li><a href="#" className="hover:text-orange-400">API Access</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kasi Connect KC Trading. All rights reserved. | kasiwallet.africa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;