import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[40vh] overflow-hidden bg-gradient-to-r from-red-600 to-red-800 rounded-b-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-b-2xl"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          opacity: '0.2'
        }}
      />
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            
            <p className="mt-10"></p>

            ... L'innovation 
          </h1>
          <p className="text-lg mb-6 text-gray-100">
            Transformez la gestion de votre entreprise avec nos solutions de gestion digitalisées
          </p>
          <div className="w-full flex justify-center items-center gap-4 mt-6">

  <a
    href="#contact"
    className="bg-white text-red-600 px-6 py-2 rounded-xl font-medium hover:bg-red-50 transition-colors duration-200 flex items-center gap-1 text-sm"
  >
    Demandez un devis <ChevronRight size={16} />
  </a>
  <a
    href="#services"
    className="border border-white text-white px-6 py-2 rounded-xl font-medium hover:bg-white hover:text-red-600 transition-colors duration-200 text-sm"
  >
    Nos solutions
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;