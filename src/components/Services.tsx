
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Commercial Flooring',
      description: 'Durable, high-performance flooring solutions for offices, retail spaces, and industrial environments.',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      link: '/services/commercial'
    },
    {
      title: 'Domestic Flooring',
      description: 'Beautiful, comfortable flooring options to enhance your home's aesthetics and value.',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      link: '/services/domestic'
    },
    {
      title: 'Carpet Installation',
      description: 'Professional installation of premium carpets for comfort and style in any space.',
      image: 'https://images.unsplash.com/photo-1584285418616-f37ae2fb4bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      link: '/services/carpets'
    },
    {
      title: 'Vinyl Flooring',
      description: 'Versatile, water-resistant vinyl flooring perfect for kitchens, bathrooms, and high-traffic areas.',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      link: '/services/vinyl'
    },
    {
      title: 'Wooden Flooring',
      description: 'Timeless wooden flooring options including solid wood, engineered wood, and laminate.',
      image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      link: '/services/wood'
    },
    {
      title: 'Safety Flooring',
      description: 'Slip-resistant safety flooring for healthcare, education, and other specialized environments.',
      image: 'https://images.unsplash.com/photo-1585732413598-08d8b4095438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      link: '/services/safety'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-navy mb-4">Our Flooring Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive flooring solutions for commercial and domestic clients, focusing on quality and durability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-brand-blue hover:text-brand-navy font-medium"
                >
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
