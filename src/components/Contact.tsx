import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Facebook, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/27600180011?text=Hi, I need help with iKasi Wallet', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://m.me/kasiwallet', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+872657453', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:support@kasiwallet.africa', '_self');
  };

  return (
    <section id="contact-form" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? We're here to help you get started with iKasi Wallet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Options */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Contact Support
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={handleWhatsApp}>
                <CardContent className="p-4 text-center">
                  <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">WhatsApp Bot</h4>
                  <p className="text-sm text-gray-600">+27600180011</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={handleFacebook}>
                <CardContent className="p-4 text-center">
                  <Facebook className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Facebook Bot</h4>
                  <p className="text-sm text-gray-600">@kasiwallet</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={handlePhone}>
                <CardContent className="p-4 text-center">
                  <Phone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Landline Support</h4>
                  <p className="text-sm text-gray-600">+872657453</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={handleEmail}>
                <CardContent className="p-4 text-center">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Email Support</h4>
                  <p className="text-sm text-gray-600">support@kasiwallet.africa</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Quick Actions</h4>
              <div className="space-y-2">
                <Button 
                  onClick={() => {
                    const element = document.getElementById('contact-form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  variant="outline" 
                  className="w-full justify-start border-orange-200 text-orange-700 hover:bg-orange-100"
                >
                  Join Waitlist
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline" 
                  className="w-full justify-start border-orange-200 text-orange-700 hover:bg-orange-100"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;