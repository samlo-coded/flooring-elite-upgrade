
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import GoogleRating from '@/components/GoogleRating';
import QuoteSection from '@/components/QuoteSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <Services />
        <WhyChooseUs />
        <ProjectsShowcase />
        <GoogleRating />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
