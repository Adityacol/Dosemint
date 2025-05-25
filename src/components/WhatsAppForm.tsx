import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFormProps {
  buttonText: string;
  isDark?: boolean;
}

export const WhatsAppForm: React.FC<WhatsAppFormProps> = ({ 
  buttonText, 
  isDark = true 
}) => {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateIndianPhone = (phone: string) => {
    // Basic validation for Indian phone numbers
    const regex = /^[6-9]\d{9}$/;
    return regex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Remove any non-digit characters
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    
    if (!cleanNumber) {
      setError('Please enter your WhatsApp number');
      return;
    }
    
    if (!validateIndianPhone(cleanNumber)) {
      setError('Please enter a valid 10-digit Indian mobile number');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setWhatsappNumber('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <label 
          htmlFor="whatsapp" 
          className="block text-sm font-medium mb-2 text-left"
        >
          Join the waitlist
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MessageCircle className="h-5 w-5 text-green-500" />
          </div>
          <input
            type="text"
            id="whatsapp"
            placeholder="📲 Enter WhatsApp Number"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 bg-${isDark ? '[#2a2a2a]' : 'white/10'} border ${
              error ? 'border-red-500' : `border-gray-700`
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors`}
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full ${
          isSuccess ? 'bg-green-600' : 'bg-gradient-to-r from-green-600 to-green-500'
        } hover:from-green-700 hover:to-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center`}
      >
        {isSubmitting ? (
          <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
        ) : isSuccess ? (
          'Success! We\'ll be in touch'
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
};