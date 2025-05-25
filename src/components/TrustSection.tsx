import React from 'react';
import { CheckCircle, ShieldCheck, Lock } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';

export const TrustSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Owner, MediCare Pharmacy",
      content: "DoseMint has transformed how we manage refills. Our customers love the reminders, and we've seen a 15% increase in repeat business.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Priya Sharma",
      role: "Manager, Wellness Pharmaceuticals",
      content: "I was skeptical at first, but the WhatsApp reminders have been a game-changer. Our customers appreciate the timely alerts, and it's created an additional revenue stream for us.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Vikram Singh",
      role: "Owner, LifeCare Medicals",
      content: "The best part is that nothing changed in our workflow. We still use our paper system, but now our customers get digital reminders automatically. Brilliant!",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const trustPoints = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-green-400" />,
      text: "Used by early pharmacies across India"
    },
    {
      icon: <Lock className="h-5 w-5 text-green-400" />,
      text: "End-to-end encrypted messaging"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-400" />,
      text: "No spam. We never contact your customers directly"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Pharmacies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join forward-thinking pharmacy owners already using DoseMint to grow their business
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-2">
                {point.icon}
                <span className="text-sm text-gray-300">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};