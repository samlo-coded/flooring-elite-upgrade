
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudies = () => {
  const categories = [
    {
      name: 'Leisure',
      description: 'Leisure Centers, Hotels, Swimming Pools, Gymnasiums',
      projects: [
        {
          title: 'Luxury Hotel Lobby',
          image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
          description: 'Premium flooring installation for 5-star hotel entrance'
        },
        {
          title: 'Community Leisure Center',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          description: 'Durable sports flooring for multi-purpose facility'
        }
      ]
    },
    {
      name: 'Education',
      description: 'Nurseries, Schools, Colleges, Universities',
      projects: [
        {
          title: 'Primary School Renovation',
          image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
          description: 'Safe, colorful flooring for educational environment'
        },
        {
          title: 'University Library',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          description: 'Quiet, comfortable flooring for study spaces'
        }
      ]
    },
    {
      name: 'Healthcare',
      description: 'Care Homes, Hospitals, Dental Practices, Surgeries',
      projects: [
        {
          title: 'Modern Dental Practice',
          image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1268&q=80',
          description: 'Hygienic, easy-to-clean flooring for medical facility'
        },
        {
          title: 'Care Home Common Area',
          image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80',
          description: 'Warm, comfortable flooring for residential care'
        }
      ]
    },
    {
      name: 'Commercial',
      description: 'Offices, Units, Factories, Housing',
      projects: [
        {
          title: 'Modern Office Space',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
          description: 'Professional flooring for corporate environment'
        },
        {
          title: 'Industrial Factory Floor',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          description: 'Heavy-duty flooring for manufacturing facility'
        }
      ]
    },
    {
      name: 'Retail',
      description: 'Shopping Centers, Supermarkets, High-Street Stores, Restaurants',
      projects: [
        {
          title: 'High-End Retail Store',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          description: 'Stylish flooring to enhance customer experience'
        },
        {
          title: 'Restaurant Interior',
          image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
          description: 'Durable, attractive flooring for dining establishment'
        }
      ]
    }
  ];

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
              Discover our recent projects across different sectors and see how we've transformed spaces with our premium flooring solutions.
            </p>
          </div>
        </div>

        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="section-padding bg-white">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                  {category.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <Card key={projectIndex} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
