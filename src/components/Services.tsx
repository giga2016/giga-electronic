import React from 'react';
import { 
  Timer, 
  MonitorPlay, 
  Tablet, 
  PanelTopOpen, 
  PhoneCall,
  BadgeCheck,
  Network,
  Headphones
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Timer size={24} />,
      title: "Gestion de file d'attente",
      description: "Solutions intelligentes pour optimiser l'accueil de vos clients"
    },
    {
      icon: <MonitorPlay size={24} />,
      title: "Affichage dynamique",
      description: "Écrans d'information et de communication pour votre entreprise"
    },
    {
      icon: <Tablet size={24} />,
      title: "Totems & bornes interactives",
      description: "Solutions interactives pour améliorer l'expérience client"
    },
    {
      icon: <PanelTopOpen size={24} />,
      title: "Panneaux LED & signalétiques",
      description: "Affichage haute visibilité pour votre communication"
    },
    {
      icon: <PhoneCall size={24} />,
      title: "Système de pointage & téléphonie",
      description: "Solutions complètes de gestion du temps et de communication"
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">NOS SOLUTIONS</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-3">
                <div className="text-red-600 dark:text-red-400">{service.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{service.description}</p>
              <a 
                href="#contact" 
                className="text-red-600 dark:text-red-400 text-sm font-medium hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
              >
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services