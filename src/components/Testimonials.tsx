
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mark Maric',
      company: 'Google Reviews',
      text: 'I engaged Midlands Flooring. I found their service efficient and professional. Their fitter Tom was a true craftsman with the right tools, approach and manner and fitted my Porcelenosa laminate floor to my exacting standard. I highly recommend Midland Flooring.',
      rating: 5
    },
    {
      name: 'Jake Tyres',
      company: 'Google Reviews',
      text: 'Quick to reply to all correspondence and very good value.',
      rating: 5
    },
    {
      name: 'Gemma O Gorman',
      company: 'Google Reviews',
      text: 'Very positive and professional experience throughout. Paul and Nathan were great and were very accommodating about a last minute change. We absolutely love our amtico flooring well installed definitely recommend.',
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
            <div
              key={index}
              className="flex flex-col h-full bg-white/10 backdrop-blur-sm rounded-lg p-6 relative hover:bg-white/20 transition-colors"
            >
              <Quote size={40} className="absolute -top-4 -left-4 text-brand-lightblue opacity-40" />
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Text content with flex-grow to push author to bottom */}
              <p className="text-gray-100 mb-6 italic flex-grow">"{testimonial.text}"</p>

              {/* Author info - now sticks to bottom */}
              <div className="mt-auto">
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
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
