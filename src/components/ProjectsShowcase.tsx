
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectsShowcase = () => {
  const caseStudies = [
    {
      title: 'Luxury Hotel Lobby',
      category: 'Leisure',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      description: 'Premium flooring installation for 5-star hotel entrance'
    },
    {
      title: 'Primary School Renovation',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      description: 'Safe, colorful flooring for educational environment'
    },
    {
      title: 'Modern Dental Practice',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1268&q=80',
      description: 'Hygienic, easy-to-clean flooring for medical facility'
    },
    {
      title: 'High-End Retail Store',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Stylish flooring to enhance customer experience'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-navy mb-4">Featured Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Take a look at some of our recent flooring installations across different sectors.
            </p>
          </div>
          <Button className="btn-primary mt-6 md:mt-0" asChild>
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((caseStudy, index) => (
            <Link
              key={index}
              to="/case-studies"
              className="group relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-brand-lightblue text-sm font-medium mb-1 block">{caseStudy.category}</span>
                <h3 className="text-white font-bold text-xl group-hover:underline">{caseStudy.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
