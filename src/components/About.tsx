import React from 'react';
import { Shield, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
            DES PROFESSIONNELS À VOTRE SERVICE
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="text-red-600 dark:text-red-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Plus de 10 ans d'expérience dans les solutions technologiques innovantes
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="text-red-600 dark:text-red-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Support Client</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Une équipe dédiée pour vous accompagner dans tous vos projets
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="text-red-600 dark:text-red-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Solutions Sur Mesure</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Des solutions adaptées aux besoins spécifiques de votre entreprise
            </p>
          </div>
        </div>
       <div className="mt-8 text-center max-w-2xl mx-auto">
  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
    <strong>GIGA ELECTRONIC SARL</strong> est votre partenaire de confiance dans le domaine des Technologies de l'Information et de la Communication.  
    Notre mission est d'apporter des solutions technologiques innovantes et adaptées aux besoins de votre entreprise, en garantissant qualité, performance et satisfaction client.
  </p>

  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
    <strong>GIGA ELECTRONIC</strong> capitalise une solide expérience dans les TIC et une expertise avérée  
    pour la mise en place et l'entretien des systèmes d’affichage dynamique et de gestion  
    de file d’attente. Notre objectif est de mettre à la portée des entreprises les moyens de  
    leurs ambitions, par des services d'appoints et la mise à leur disposition de technologies  
    abordables et de haute qualité.
  </p>
</div>

      </div>
    </section>
  );
};

export default About;