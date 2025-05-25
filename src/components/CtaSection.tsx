import React from 'react';
import { WhatsAppForm } from './WhatsAppForm';
import { ArrowRight, Pill } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#1a1a1a] -z-20"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#212121] to-[#181818] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center">
                  <Pill className="h-6 w-6 text-green-400" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Become one of the first 100 pharmacies to automate refills and boost profits
              </h2>
              <p className="text-gray-400 mb-2">
                Limited spots available for our exclusive early access program
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 my-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-300">Zero setup costs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-300">Priority support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-300">Early feature access</span>
                </div>
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <WhatsAppForm buttonText="Join Early Access" />
              
              <div className="flex items-center justify-center mt-6 space-x-2 text-sm text-gray-500">
                <ArrowRight className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};