import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Testimonials from '@/components/Testimonials';
import QuoteSection from '@/components/QuoteSection';
import Suppliers from '@/components/Suppliers';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <Suppliers />
        <Services />
        <WhyChooseUs />
        <ProjectsShowcase />
        <Testimonials />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
