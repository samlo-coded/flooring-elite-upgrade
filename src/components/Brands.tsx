
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Brands = () => {
  const brands = [
    {
      name: 'BMW',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png'
    },
    {
      name: 'Jaguar Land Rover',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jaguar_Land_Rover_logo.svg/2560px-Jaguar_Land_Rover_logo.svg.png'
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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Walkers_logo.svg/1200px-Walkers_logo.svg.png'
    },
  ];

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-10 md:py-16 bg-brand-gray">
      <div className="container-custom">
        <h2 className="text-center text-brand-navy font-heading font-bold text-3xl mb-8">Delivered in World-Class Spaces</h2>
        
        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent>
            {brands.map((brand) => (
              <CarouselItem key={brand.name} className="basis-1/2 md:basis-1/3 lg:basis-1/6">
                <div className="flex items-center justify-center h-16 md:h-20 w-full p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
