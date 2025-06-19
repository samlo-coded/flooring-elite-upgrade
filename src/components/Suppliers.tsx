
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Suppliers = () => {
  const suppliers = [
    {
      name: 'Karndean',
      logo: 'https://www.karndean.com/media/wysiwyg/Karndean_Logo_2021_Pantone_Coated.jpg'
    },
    {
      name: 'Amtico',
      logo: 'https://www.amtico.com/wp-content/uploads/2019/06/amtico-logo.png'
    },
    {
      name: 'Polyflor',
      logo: 'https://www.polyflor.com/wp-content/uploads/2019/03/polyflor-logo-2019.png'
    },
    {
      name: 'Altro',
      logo: 'https://www.altro.com/sites/default/files/altro-logo.svg'
    },
    {
      name: 'Tarkett',
      logo: 'https://www.tarkett.com/sites/default/files/tarkett-logo.svg'
    },
    {
      name: 'Interface',
      logo: 'https://www.interface.com/US/en-US/homepage/Interface-Logo-svg'
    },
  ];

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-brand-navy font-heading font-bold text-3xl mb-8">Our Trusted Suppliers</h2>
        
        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {suppliers.map((supplier) => (
              <CarouselItem key={supplier.name} className="basis-1/2 md:basis-1/3 lg:basis-1/6">
                <div className="flex items-center justify-center h-16 md:h-20 w-full p-2">
                  <img
                    src={supplier.logo}
                    alt={`${supplier.name} logo`}
                    className="max-h-full max-w-full object-contain grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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

export default Suppliers;
