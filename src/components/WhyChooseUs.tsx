
import React from 'react';
import { CheckSquare, Clock, Award, ThumbsUp, Recycle, Tool } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckSquare className="w-10 h-10 mb-4 text-brand-blue" />,
      title: 'Quality Materials',
      description: 'We only use premium flooring materials from trusted suppliers to ensure durability and longevity.'
    },
    {
      icon: <Clock className="w-10 h-10 mb-4 text-brand-blue" />,
      title: 'On-Time Delivery',
      description: 'We understand the importance of timelines and consistently deliver projects on schedule.'
    },
    {
      icon: <Award className="w-10 h-10 mb-4 text-brand-blue" />,
      title: 'Expert Installation',
      description: 'Our installation teams are highly trained professionals with years of experience.'
    },
    {
      icon: <ThumbsUp className="w-10 h-10 mb-4 text-brand-blue" />,
      title: 'Client Satisfaction',
      description: 'We prioritize customer satisfaction and go above and beyond to exceed expectations.'
    },
    {
      icon: <Recycle className="w-10 h-10 mb-4 text-brand-blue" />,
      title: 'Sustainable Practices',
      description: 'We\'re committed to environmentally responsible practices and sustainable flooring options.'
    },
    {
      icon: <Tool className="w-10 h-10 mb-4 text-brand-blue" />,
      title: 'Comprehensive Services',
      description: 'From consultation to installation and aftercare, we provide end-to-end flooring solutions.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-navy mb-4">Why Choose Midlands Flooring</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With over 20 years of experience, we've established ourselves as the trusted flooring partner for businesses and homeowners across the Midlands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 bg-brand-gray rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                {reason.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
