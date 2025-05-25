import React from 'react';
import { FeatureCard } from './FeatureCard';
import { 
  MessageCircle, 
  Phone, 
  Ban, 
  IndianRupee,
  Users,
  Package,
  FileText,
  MessageSquare,
  ShieldCheck,
  Clock,
  Repeat,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp + Voice Reminders",
      description: "Automated medicine reminders that ensure customers never miss a refill",
      color: "green",
      isComingSoon: false
    },
    {
      icon: <Ban className="h-6 w-6" />,
      title: "No App Required",
      description: "Works with your existing paper system - no workflow changes needed",
      color: "amber",
      isComingSoon: false
    },
    {
      icon: <IndianRupee className="h-6 w-6" />,
      title: "Additional Revenue",
      description: "Generate passive income from each reminder subscription",
      color: "green",
      isComingSoon: false
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Smart CRM System",
      description: "Track customer history and predict refill patterns automatically",
      color: "amber",
      isComingSoon: true
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Stock Management",
      description: "Never run out of essential medicines with smart inventory alerts",
      color: "green",
      isComingSoon: true
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "GST Billing",
      description: "Generate professional invoices and manage taxes effortlessly",
      color: "amber",
      isComingSoon: true
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Automation",
      description: "Your silent salesman works while you sleep",
      color: "green",
      isComingSoon: false
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Business Analytics",
      description: "Make data-driven decisions with detailed insights",
      color: "amber",
      isComingSoon: true
    },
    {
      icon: <Repeat className="h-6 w-6" />,
      title: "Repeat Business",
      description: "Turn one-time buyers into loyal repeat customers",
      color: "green",
      isComingSoon: false
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "100% Privacy",
      description: "End-to-end encrypted messaging for complete security",
      color: "amber",
      isComingSoon: false
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-[#121212] to-[#181818] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Pharmacy Management Suite
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to modernize your pharmacy and boost profits, without changing how you work.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              isComingSoon={feature.isComingSoon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};