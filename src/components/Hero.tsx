import React from 'react';
import { ChevronRight } from 'lucide-react';
import banniere from '../assets/banniere.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-b-2xl">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center rounded-b-2xl"
        style={{
          backgroundImage: `url(${banniere})`,
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex items-end justify-center pb-4">
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="bg-white bg-opacity-70 text-red-600 px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 
                       rounded-xl font-medium hover:bg-opacity-80 
                       transition-colors duration-200 flex items-center gap-2 text-xs sm:text-sm md:text-base"
          >
            Demandez un devis <ChevronRight size={14} />
          </a>
          <a
            href="#services"
            className="border border-white border-opacity-50 text-white px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 
                       rounded-xl font-medium hover:bg-white hover:bg-opacity-20 hover:text-red-600 
                       transition-colors duration-200 text-xs sm:text-sm md:text-base"
          >
            Nos solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
