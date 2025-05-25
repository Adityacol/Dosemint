import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  image
}) => {
  return (
    <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative group transition-all duration-300 hover:border-gray-700 hover:shadow-lg">
      <Quote className="absolute top-4 right-4 h-5 w-5 text-gray-700 opacity-50" />
      
      <div className="mb-6">
        <p className="text-gray-300 leading-relaxed">{content}</p>
      </div>
      
      <div className="flex items-center">
        <div className="mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
          />
        </div>
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-amber-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};