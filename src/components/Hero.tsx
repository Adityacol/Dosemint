import React from 'react';
import { WhatsAppForm } from './WhatsAppForm';
import { Pill, MessageCircle, Phone, IndianRupee } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { value: '15%', label: 'Average Revenue Increase' },
    { value: '24/7', label: 'Automated Reminders' }
  ];

  return (
    <section 
      id="hero" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden"
    >
      {/* Enhanced gradient effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-500/10 rounded-full blur-[100px] -z-10 transform translate-x-1/3 -translate-y-1/3 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-500/10 rounded-full blur-[100px] -z-10 transform -translate-x-1/3 translate-y-1/3 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="flex justify-center items-center mb-6 space-x-2"
            {...fadeIn}
          >
            <Pill className="h-8 w-8 text-amber-400" />
            <h2 className="text-xl font-semibold text-green-400">DoseMint</h2>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-green-400 to-amber-400 bg-clip-text text-transparent"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Your Pharmacy's Silent Salesman
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            Transform your pharmacy into a modern healthcare hub with automated reminders that keep customers coming back.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-10"
            {...fadeIn}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center space-x-2 text-green-400">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Reminders</span>
            </div>
            <div className="hidden md:block h-1 w-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2 text-amber-400">
              <Phone className="h-5 w-5" />
              <span>Voice Call Alerts</span>
            </div>
            <div className="hidden md:block h-1 w-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2 text-green-400">
              <IndianRupee className="h-5 w-5" />
              <span>Zero Setup Cost</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-[#1e1e1e]/80 backdrop-blur-lg p-8 rounded-xl max-w-md mx-auto border border-gray-800 shadow-2xl"
            {...fadeIn}
            transition={{ delay: 0.6 }}
          >
            <WhatsAppForm buttonText="Join Early Access" />
            <p className="mt-4 text-sm text-gray-400">
              Join 100+ forward-thinking pharmacies across India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};