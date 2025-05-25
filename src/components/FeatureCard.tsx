import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'amber' | 'green';
  isComingSoon?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color,
  isComingSoon = false
}) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="relative group overflow-hidden"
      variants={item}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-[#2a2a2a] group-hover:to-[#1a1a1a] rounded-xl transition-all duration-300 -z-10"></div>
      
      <div 
        className="p-6 rounded-xl backdrop-blur-sm bg-[#1a1a1a]/80 border border-gray-800 h-full transition-all duration-300 group-hover:border-gray-700 group-hover:shadow-lg group-hover:scale-[1.02]"
      >
        <div className={`p-3 rounded-full inline-flex items-center justify-center bg-${color}-900/30 text-${color}-500 mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          {title}
          {isComingSoon && (
            <span className="ml-2 text-xs px-2 py-1 bg-amber-900/30 text-amber-400 rounded-full">
              Coming Soon
            </span>
          )}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      <div 
        className={`absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-tl from-${color}-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
    </motion.div>
  );
};