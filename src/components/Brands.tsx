
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Brands = () => {
  const brands = [
    { name: 'Jaguar Land Rover', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Jaguar-Land-Rover-Logo.png' },
    { name: 'Walkers', logo: 'https://logos-world.net/wp-content/uploads/2020/12/Walkers-Logo.png' },
    { name: 'Tesco', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Tesco-Logo.png' },
    { name: 'ASDA', logo: 'https://logos-world.net/wp-content/uploads/2020/09/ASDA-Logo.png' },
    { name: 'Marks & Spencer', logo: 'https://logos-world.net/wp-content/uploads/2020/08/Marks-Spencer-Logo.png' },
    { name: 'John Lewis', logo: 'https://logos-world.net/wp-content/uploads/2020/11/John-Lewis-Logo.png' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're proud to work with some of the UK's most prestigious companies, delivering exceptional flooring solutions that meet their exact requirements.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <Card className="w-48 h-32 flex items-center justify-center bg-white border-2 border-gray-100 hover:border-brand-blue transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {brands.map((brand, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <Card className="w-48 h-32 flex items-center justify-center bg-white border-2 border-gray-100 hover:border-brand-blue transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
