import React from 'react';
import { 
  Building2, 
  HeartPulse, 
  Landmark, 
  Building 
} from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      icon: <Building2 size={20} />,
      name: "Banques & Assurances",
      description: "Partenaires financiers de confiance"
    },
    {
      icon: <HeartPulse size={20} />,
      name: "Centres Hospitaliers",
      description: "Établissements de santé"
    },
    {
      icon: <Landmark size={20} />,
      name: "Administrations",
      description: "Services publics"
    },
    {
      icon: <Building size={20} />,
      name: "Entreprises Privées",
      description: "Secteur privé"
    }
  ];

  return (
    <section className="py-8 bg-white dark:bg-gray-900" id="partners">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2 dark:text-white">NOS PARTENAIRES</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mb-3"></div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Nos solutions, votre satisfaction !</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="w-10 h-10 mx-auto mb-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                {partner.icon}
              </div>
              <h3 className="text-sm font-semibold mb-0.5 dark:text-white">{partner.name}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;