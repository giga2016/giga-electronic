import React from 'react';
import { ChevronRight } from 'lucide-react';
import banniere from '../assets/banniere.png';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[30vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh] overflow-hidden rounded-b-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-b-2xl"
        style={{
          backgroundImage: `url(${banniere})`,
          backgroundSize: 'cover',
          opacity: 0.7
        }}
      />
      
      <div className="relative container mx-auto px-4 h-full flex items-end justify-center pb-2 sm:pb-4 md:pb-6">
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          <a
            href="#contact"
            className="bg-white bg-opacity-70 text-red-600 px-2 py-1 sm:px-3 sm:py-1 md:px-6 md:py-2 
                       rounded-xl font-medium hover:bg-opacity-80 
                       transition-colors duration-200 
                       flex items-center gap-1 text-[9px] sm:text-[10px] md:text-sm"
          >
            Demandez un devis <ChevronRight size={10} sm:size={12} md:size={16} />
          </a>
          <a
            href="#services"
            className="border border-white border-opacity-50 text-white px-2 py-1 sm:px-3 sm:py-1 md:px-6 md:py-2 
                       rounded-xl font-medium hover:bg-white hover:bg-opacity-20 hover:text-red-600 
                       transition-colors duration-200 text-[9px] sm:text-[10px] md:text-sm"
          >
            Nos solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;