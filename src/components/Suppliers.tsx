
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Suppliers = () => {
  const suppliers = [
    { name: 'Tarkett', logo: 'https://logos-world.net/wp-content/uploads/2023/01/Tarkett-Logo.png' },
    { name: 'Forbo', logo: 'https://www.forbo.com/eurocol/media/img_logos/forbo_logo.png' },
    { name: 'Interface', logo: 'https://logos-world.net/wp-content/uploads/2022/04/Interface-Logo.png' },
    { name: 'Polyflor', logo: 'https://www.polyflor.com/images/polyflor-logo.png' },
    { name: 'Karndean', logo: 'https://www.karndean.com/assets/img/logo.png' },
    { name: 'Amtico', logo: 'https://www.amtico.com/assets/img/logo-amtico.png' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Supplied by Industry Leaders
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll-reverse space-x-8">
            {/* First set of suppliers */}
            {suppliers.map((supplier, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <Card className="w-48 h-32 flex items-center justify-center bg-white border-2 border-gray-100 hover:border-brand-blue transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <img
                      src={supplier.logo}
                      alt={supplier.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {suppliers.map((supplier, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <Card className="w-48 h-32 flex items-center justify-center bg-white border-2 border-gray-100 hover:border-brand-blue transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <img
                      src={supplier.logo}
                      alt={supplier.name}
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
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 35s linear infinite;
        }

        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Suppliers;
