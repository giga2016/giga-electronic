import React from 'react';
import { Shield, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section className="py-8 bg-white dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
            DES PROFESSIONNELS À VOTRE SERVICE
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="text-red-600 dark:text-red-400" size={20} />
            </div>
            <h3 className="text-sm font-semibold mb-1 text-gray-800 dark:text-white">Expertise</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">Plus de 10 ans d'expérience</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="text-red-600 dark:text-red-400" size={20} />
            </div>
            <h3 className="text-sm font-semibold mb-1 text-gray-800 dark:text-white">Support Client</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">Une équipe dédiée</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <Target className="text-red-600 dark:text-red-400" size={20} />
            </div>
            <h3 className="text-sm font-semibold mb-1 text-gray-800 dark:text-white">Solutions</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">Adaptées à vos besoins</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mt-6 text-center">
          <div className="prose dark:prose-invert max-w-none">
            <div className="space-y-2 text-xs leading-relaxed text-gray-700 dark:text-gray-300">
              <p><strong>GIGA ELECTRONIC SARL</strong> est votre partenaire de confiance dans le domaine des Technologies de l'Information et de la Communication. Notre mission est d'apporter des solutions technologiques innovantes et adaptées aux besoins de votre entreprise, en garantissant qualité, performance et satisfaction client.</p>
              <p><strong>GIGA ELECTRONIC</strong> capitalise une solide expérience dans les TIC et une expertise avérée pour la mise en place et l'entretien des systèmes d'affichage dynamique et de gestion de file d'attente. Notre objectif est de mettre à la portée des entreprises les moyens de leurs ambitions, par des services d'appoints et la mise à leur disposition de technologies abordables et de haute qualité.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
