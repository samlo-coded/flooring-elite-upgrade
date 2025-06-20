
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="section-padding bg-brand-gray">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Our Flooring Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From commercial installations to domestic renovations, we provide comprehensive flooring solutions tailored to your needs.
            </p>
          </div>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
