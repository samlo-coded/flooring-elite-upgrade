
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Walkers_Crisps_2015.svg/1200px-Walkers_Crisps_2015.svg.png'
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-brand-gray">
      <div className="container-custom">
        <h2 className="text-center text-brand-navy font-heading font-bold text-3xl mb-8">Delivered in World-Class Spaces</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {brands.map((brand) => (
              <CarouselItem key={brand.name} className="basis-1/2 md:basis-1/3 lg:basis-1/6">
                <div className="flex items-center justify-center h-16 md:h-20 w-full p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-full object-contain opacity-75 hover:opacity-100 transition-opacity"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Brands;
