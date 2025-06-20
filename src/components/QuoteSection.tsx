
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';

const QuoteSection = () => {
  const benefits = [
    'Free, no-obligation quotes',
    'Expert advice on suitable materials',
    'Professional installation teams',
    'Competitive pricing',
    'Quality guaranteed workmanship'
  ];

  return (
    <section className="section-padding bg-brand-gray">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-navy opacity-5 transform -skew-x-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-navy mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get in touch today for a free consultation and quote. Our flooring experts are ready to help you find the perfect solution for your commercial or residential project.
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="btn-primary" asChild>
                  <Link to="/quote">Request a Quote</Link>
                </Button>
                <Button className="btn-secondary flex items-center" asChild>
                  <a href="tel:02476675488">
                    <Phone size={18} className="mr-2" /> Call Us Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMVMJnFtO_oZrzc2UrkRywdJAMN7iIaZy8eu-VM=s1360-w1360-h1020-rw"
                alt="Flooring installation"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
