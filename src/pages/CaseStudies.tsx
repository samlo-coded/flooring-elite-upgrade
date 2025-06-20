
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsShowcase from '@/components/ProjectsShowcase';

const CaseStudies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="section-padding bg-brand-gray">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our recent projects and see how we've transformed spaces with our premium flooring solutions.
            </p>
          </div>
        </div>
        <ProjectsShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
