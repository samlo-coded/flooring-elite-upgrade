
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectsShowcase = () => {
  const projects = [
    {
      title: 'BMW Showroom',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      link: '/projects/bmw-showroom'
    },
    {
      title: 'Apple Store',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1631028208231-4c7996d6faf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      link: '/projects/apple-store'
    },
    {
      title: 'Luxury Home',
      category: 'Domestic',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      link: '/projects/luxury-home'
    },
    {
      title: 'Dominos Restaurant',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      link: '/projects/dominos-restaurant'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-navy mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Take a look at some of our recent commercial and domestic flooring installations.
            </p>
          </div>
          <Button className="btn-primary mt-6 md:mt-0" asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link 
              key={index} 
              to={project.link} 
              className="group relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-brand-lightblue text-sm font-medium mb-1 block">{project.category}</span>
                <h3 className="text-white font-bold text-xl group-hover:underline">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white" asChild>
            <Link to="/projects" className="flex items-center">
              See More Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
