
import React from 'react';

const Brands = () => {
  const brands = [
    { 
      name: 'BMW', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png'
    },
    { 
      name: 'Mini Cooper', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/MINI_logo.svg/2560px-MINI_logo.svg.png'
    },
    { 
      name: 'Mercedes', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png'
    },
    { 
      name: 'Apple', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png'
    },
    { 
      name: 'Dominos Pizza', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png'
    },
    { 
      name: 'Walkers', 
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Walkers_Crisps_2015.svg/1200px-Walkers_Crisps_2015.svg.png'
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-brand-gray">
      <div className="container-custom">
        <h2 className="text-center text-brand-navy font-heading font-bold text-3xl mb-8">Trusted by Leading Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center h-16 md:h-20 w-full">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="max-h-full max-w-full object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
