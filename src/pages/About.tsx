
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="section-padding bg-brand-gray">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              About Midlands Flooring
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With years of experience in the flooring industry, we're dedicated to providing exceptional quality and service to our clients across the Midlands.
            </p>
          </div>
        </div>
        
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-navy mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded with a passion for quality flooring, Midlands Flooring has grown to become one of the region's most trusted flooring specialists. We pride ourselves on delivering exceptional results for both commercial and domestic clients.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of skilled professionals brings decades of combined experience to every project, ensuring that each installation meets the highest standards of quality and craftsmanship.
                </p>
                <p className="text-gray-600">
                  From small residential rooms to large commercial spaces, we approach every project with the same level of dedication and attention to detail.
                </p>
              </div>
              <div className="h-64 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Professional flooring installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default About;
