import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      <img src="/gestion.jpg" alt="Ma vraie image" />
      title: "Système de File d'Attente - Banque XYZ",
      description: "Installation d'un système complet de gestion des files d'attente"
    },
    {
      <img src="/affichage.jpg" alt="Ma vraie image" />
      title: "Affichage Dynamique - Centre Commercial",
      description: "Déploiement d'écrans d'information dans un centre commercial"
    },
    {
      <img src="/borne.jpg" alt="Ma vraie image" />
      title: "Borne Interactive - Administration",
      description: "Installation de bornes interactives pour un service public"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">NOS RÉALISATIONS</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-40">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;