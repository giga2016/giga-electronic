import React, { useState } from 'react';
import { Shield, Users, Target, ChevronDown, Sparkles } from 'lucide-react';

const About = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="py-6 bg-white dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">
            DES PROFESSIONNELS À VOTRE SERVICE
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mb-3"></div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-1.5">
              <Shield className="text-red-600 dark:text-red-400" size={16} />
            </div>
            <h3 className="text-xs font-semibold mb-0.5 text-gray-800 dark:text-white">Expertise</h3>
            <p className="text-[11px] text-gray-600 dark:text-gray-300">Plus de 10 ans d'expérience</p>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-1.5">
              <Users className="text-red-600 dark:text-red-400" size={16} />
            </div>
            <h3 className="text-xs font-semibold mb-0.5 text-gray-800 dark:text-white">Support Client</h3>
            <p className="text-[11px] text-gray-600 dark:text-gray-300">Une équipe dédiée</p>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-1.5">
              <Target className="text-red-600 dark:text-red-400" size={16} />
            </div>
            <h3 className="text-xs font-semibold mb-0.5 text-gray-800 dark:text-white">Solutions</h3>
            <p className="text-[11px] text-gray-600 dark:text-gray-300">Adaptées à vos besoins</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-6">
          <button
            onClick={() => setIsRevealed(!isRevealed)}
            className={`w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-t-lg p-3 flex items-center justify-between transition-all duration-300 ${
              isRevealed ? 'rounded-t-lg' : 'rounded-lg shadow hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Sparkles className="text-yellow-300" size={16} />
              <span className="font-medium text-sm">Découvrez Notre Histoire</span>
            </div>
            <ChevronDown
              className={`transition-transform duration-300 ${
                isRevealed ? 'rotate-180' : ''
              }`}
              size={16}
            />
          </button>
          
          <div
            className={`bg-gray-50 dark:bg-gray-800 rounded-b-lg overflow-hidden transition-all duration-500 ease-in-out ${
              isRevealed
                ? 'max-h-[400px] opacity-100 shadow'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 space-y-3">
              <div className="prose dark:prose-invert max-w-none">
                <div className="space-y-3 text-xs leading-relaxed text-gray-700 dark:text-gray-300">
                  <p className="animate-fade-in-up" style={{
                    animationDelay: '0.2s',
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-out'
                  }}>
                    <strong>GIGA ELECTRONIC SARL</strong> est votre partenaire de confiance dans le domaine des Technologies de l'Information et de la Communication. Notre mission est d'apporter des solutions technologiques innovantes et adaptées aux besoins de votre entreprise, en garantissant qualité, performance et satisfaction client.
                  </p>
                  <p className="animate-fade-in-up" style={{
                    animationDelay: '0.4s',
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-out 0.2s'
                  }}>
                    <strong>GIGA ELECTRONIC</strong> capitalise une solide expérience dans les TIC et une expertise avérée pour la mise en place et l'entretien des systèmes d'affichage dynamique et de gestion de file d'attente. Notre objectif est de mettre à la portée des entreprises les moyens de leurs ambitions, par des services d'appoints et la mise à leur disposition de technologies abordables et de haute qualité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;