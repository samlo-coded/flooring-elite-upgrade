
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'BMW Coventry',
      role: 'Facilities Manager',
      text: 'Midlands Flooring provided exceptional service from start to finish. Their attention to detail and professionalism made our showroom flooring project run smoothly and on schedule.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Apple Store',
      role: 'Store Manager',
      text: 'The team at Midlands Flooring understood our brand requirements perfectly. The quality of installation exceeded our expectations and the floor continues to look amazing despite high foot traffic.',
      rating: 5
    },
    {
      name: 'Michael Williams',
      company: 'Residential Client',
      role: 'Homeowner',
      text: 'We couldn't be happier with our new wooden floors. The craftsmanship is outstanding and the team was professional, clean, and respectful of our home throughout the installation.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-brand text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Midlands Flooring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 relative hover:bg-white/20 transition-colors">
              <Quote size={40} className="absolute -top-4 -left-4 text-brand-lightblue opacity-40" />
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-100 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-brand-lightblue">{testimonial.role}</p>
                <p className="text-sm text-gray-300">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
