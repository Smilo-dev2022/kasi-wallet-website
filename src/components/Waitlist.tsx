import { Mail, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Waitlist() {
  const handleWhatsApp = () =>
    window.open("https://wa.me/27600180011", "_blank");
  const handleFacebook = () =>
    window.open("https://facebook.com/kasiwallet", "_blank");

  return (
    <section
      id="contact-form"
      className="py-20 bg-gray-50 gray-outline-background relative"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-gray-600 text-xl md:text-2xl font-bold mb-3">
            iKasi Wallet | A Digital Wallet for SMEs & Townships
          </h2>
          <h2 className="text-2xl md:text-5xl text-black max-w-2xl mx-auto text-center leading-snug mt-10">
            Join the waitlist for the
          </h2>
          <h2 className="text-2xl md:text-5xl text-black mx-auto text-center leading-snug max-w-4xl mt-5">
            digital wallet empowering townships
          </h2>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-xl mx-auto mb-14 bg-white shadow-md rounded-2xl p-6 md:p-8">
          <form className="space-y-5 text-left" action="https://formspree.io/f/mldnlowg" method="post">
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-black w-5 h-5" />
              <Input
                type="text"
                name="name"
                placeholder="Your name"
                className="pl-10 text-black"
                required
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-black w-5 h-5" />
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                className="pl-10 text-black"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 relative"
            >
              <span className="block text-center w-full">Join Waitlist</span>
              <ArrowRight className="w-5 h-5 absolute right-6 top-1/2 -translate-y-1/2" />
            </Button>
          </form>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          <Card
            className="cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={handleWhatsApp}
          >
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800">WhatsApp Bot</h4>
              <p className="text-sm text-gray-600">+27 60 018 0011</p>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={handleFacebook}
          >
            <CardContent className="p-6 text-center">
              <Facebook className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800">Facebook Bot</h4>
              <p className="text-sm text-gray-600">@kasiwallet</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
