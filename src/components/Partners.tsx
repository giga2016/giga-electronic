import React from 'react';
import { Building2, Building, LandPlot, Guitar as Hospital } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      icon: <Building2 size={24} />,
      name: "Banques & Assurances",
      description: "Partenaires financiers de confiance"
    },
    {
      icon: <Hospital size={24} />,
      name: "Centres Hospitaliers",
      description: "Établissements de santé"
    },
    {
      icon: <Building size={24} />,
      name: "Administrations",
      description: "Services publics"
    },
    {
      icon: <LandPlot size={24} />,
      name: "Entreprises Privées",
      description: "Secteur privé"
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900" id="partners">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">NOS PARTENAIRES</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">Nos solutions, votre satisfaction !</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 text-red-600 dark:text-red-400">
                {partner.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1 dark:text-white">{partner.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;