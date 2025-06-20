
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/p/AF1QipO2cZcc1iPhCktrQxITss6cYCEZW367EdFpj040=s1360-w1360-h1020-rw')] bg-cover bg-center opacity-20"></div>

      {/* Content */}
      <div className="relative container-custom py-20 md:py-32 flex flex-col items-center md:items-start">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-left mb-6 max-w-3xl">
          Premium Flooring Solutions for <span className="text-brand-lightblue">Every Space</span>
        </h1>
        <p className="text-lg md:text-xl text-center md:text-left mb-8 max-w-2xl">
          Our team delivers durable, stylish flooring installations with zero compromise on quality or turnaround time. Whether it’s a high-traffic commercial environment or a bespoke residential project, we provide expert solutions tailored to your space, schedule, and standards.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="btn-primary text-lg" asChild>
            <Link to="/quote" className="flex items-center">
              Get a Free Quote <ChevronRight size={16} className="ml-1" />
            </Link>
          </Button>
          <Button className="bg-white text-brand-navy hover:bg-gray-100 text-lg" asChild>
            <Link to="/projects">View Our Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
