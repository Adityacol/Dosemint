import React from 'react';
import { WhatsAppForm } from './WhatsAppForm';
import { Pill, MessageCircle, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Pill className="h-6 w-6 text-amber-400" />
              <span className="font-bold text-xl">DoseMint</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              DoseMint is your pharmacy's next revenue stream. Ready to be first?
            </h3>
            
            <p className="text-gray-400 mb-6">
              Join the waitlist today and be among the first to revolutionize your pharmacy business with automated medicine reminders and powerful management tools.
            </p>
            
            <div className="max-w-md">
              <WhatsAppForm buttonText="Join the Waitlist" isDark={false} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Support</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:help@dosemint.com" className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>help@dosemint.com</span>
                  </a>
                </li>
                <li>
                  <div className="text-gray-400 flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Mumbai, India</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DoseMint. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};