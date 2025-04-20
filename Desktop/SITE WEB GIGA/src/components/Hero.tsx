import React from 'react';
import { ChevronRight } from 'lucide-react';
import banniere from '../assets/banniere.jpg';

const Hero: React.FC = () => {
  return (
    <>
      {/* Section Bannière */}
      <section className="relative w-full min-h-[180px] sm:min-h-[250px] md:min-h-[350px] lg:min-h-[400px] overflow-hidden rounded-b-2xl">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center rounded-b-2xl"
          style={{
            backgroundImage: `url(${banniere})`,
          }}
        />
      </section>

      {/* Section Boutons */}
      <section className="flex justify-center py-4">
        <div className="flex items-center gap-3 bg-white bg-opacity-50 p-2 sm:p-3 rounded-xl shadow-md">
          <a
            href="#contact"
            className="bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 
                       rounded-lg font-medium hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 
                       transition-colors duration-200 flex items-center gap-2 text-xs sm:text-sm"
          >
            Demandez un devis <ChevronRight size={14} />
          </a>
          <a
            href="#services"
            className="border border-red-600 text-red-600 px-3 py-1 sm:px-4 sm:py-2 
                       rounded-lg font-medium hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 
                       transition-colors duration-200 text-xs sm:text-sm"
          >
            Nos solutions
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
