import React, { useState, useEffect } from 'react';
import AIBD from '../assets/AIBD.png';
import AssembleNationale from '../assets/Assemblé national.jpeg';
import ArmeeSenegalaise from '../assets/Armée Sénégalaise.jpeg';
import BankOfAfrica from '../assets/Bank Of Africa.png';
import BanqueAtlantique from '../assets/Banque Atlantique.jpeg';
import BanqueIslamique from '../assets/Banque Islamique du Sénégal.jpg';
import BCEAO from '../assets/BCEAO.png';
import BDK from '../assets/BDK.png';
import BICIS from '../assets/BICIS.jpeg';
import BNDE from '../assets/BNDE.jpg';
import CBAO from '../assets/CBAO.png';
import DemDikk from '../assets/DemDikk.png';
import DGID from '../assets/DGID.jpg';
import Ecobank from '../assets/Ecobank.webp';
import IRESSEF from '../assets/iressef.png';
import MuseeCivilisations from '../assets/Musée des Civilisations noire.png';
import Orabank from '../assets/Orabank.jpeg';
import PAMECAS from '../assets/PAMECAS.jpg';
import PNUD from '../assets/PNUD et Sénégal Numérique.jpg';
import SENEAU from '../assets/SEN\'EAU.png';
import SocieteGenerale from '../assets/Société Générale.png';
import SUNU from '../assets/SUNU BIS.jpg';
import { ChevronRight } from 'lucide-react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const collaborations = [
    {
      name: "AIBD",
      description: "Installation du système de gestion de file d'attente et d'affichage dynamique à l'aéroport international Blaise Diagne",
      logo: AIBD
    },
    {
      name: "Assemblée nationale du Sénégal",
      description: "Digitalisation du temps de parole des parlementaires et installation du système d'affichage dynamique",
      logo: AssembleNationale
    },
    {
      name: "DGID",
      description: "Installation du système de gestion de file d'attente, d'affichage dynamique et feedback pour 7 agences",
      logo: DGID
    },
    {
      name: "BCEAO",
      description: "Installation du réseau de système d'affichage dynamique pour le Sénégal et la Côte d'Ivoire",
      logo: BCEAO
    },
    {
      name: "Armée Sénégalaise",
      description: "Installation d'un système de gestion de file d'attente et affichage dynamique",
      logo: ArmeeSenegalaise
    },
    {
      name: "Musée des Civilisations noire",
      description: "Installation du réseau de système d'affichage dynamique",
      logo: MuseeCivilisations
    },
    {
      name: "IPRESSEF",
      description: "Installation de ses 3 agences, Siège, Ngor et Diamniadio. GFA, Affichage dynamique et système Feedback",
      logo: IRESSEF
    },
    {
      name: "PNUD et Sénégal Numérique",
      description: "Digitalisation du parcours du clients dans 13 bureaux d'Espaces Sénégal Numérique",
      logo: PNUD
    },
    {
      name: "DemDikk",
      description: "Installation de l'agence principale GFA, Affichage dynamique",
      logo: DemDikk
    },
    {
      name: "SEN'EAU",
      description: "Fourniture et pose d'équipement numérique",
      logo: SENEAU
    },
    {
      name: "Société Générale",
      description: "Installation de 37 agences et le siège. Gestion de file d'attente smart, Affichage dynamique et système Feedback",
      logo: SocieteGenerale
    },
    {
      name: "BICIS",
      description: "Installation de 31 agences et le siège GFA, Affichage dynamique et système Feedback",
      logo: BICIS
    },
    {
      name: "Bank Of Africa",
      description: "Installation de 52 agences et le siège Gestion de file d'attente smart, Affichage dynamique et système Feedback",
      logo: BankOfAfrica
    },
    {
      name: "Orabank",
      description: "Installation de 13 agences et le siège Gestion de file d'attente smart, Affichage dynamique et système Feedback",
      logo: Orabank
    },
    {
      name: "Banque Islamique du Sénégal",
      description: "Installation de 43 agences et le siège Gestion de file d'attente smart, Affichage dynamique et système Feedback",
      logo: BanqueIslamique
    },
    {
      name: "Banque Atlantique",
      description: "Installation de 11 agences et le siège Gestion de file d'attente smart, Affichage dynamique et système Feedback",
      logo: BanqueAtlantique
    },
    {
      name: "BDK",
      description: "Installation de 5 agences Installation de la Bannière de communication au niveau du Siège GFA et affichage dynamique",
      logo: BDK
    },
    {
      name: "Ecobank",
      description: "Installation de 12 agences GFA et Affichage dynamique",
      logo: Ecobank
    },
    {
      name: "CBAO",
      description: "Installation de 5 agences Gestion de file d'attente smart, Affichage dynamique et système Feedback",
      logo: CBAO
    },
    {
      name: "SUNU",
      description: "Installation de système d'affichage dynamique pour 2 agences et Affichage dynamique et système Feedback",
      logo: SUNU
    },
    {
      name: "BNDE",
      description: "Installation d'une agence Gestion de file d'attente smart et Affichage dynamique et système Feedback",
      logo: BNDE
    },
    {
      name: "PAMECAS",
      description: "Installation de 18 agences Affichage dynamique",
      logo: PAMECAS
    }
  ];

  useEffect(() => {
    if (!showAll) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === collaborations.length - 3 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showAll]);

  if (showAll) {
    return (
      <section className="py-8 bg-gray-50 dark:bg-gray-800" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 dark:text-white">TOUTES NOS COLLABORATIONS</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-3"></div>
            <button
              onClick={() => setShowAll(false)}
              className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1 mx-auto"
            >
              Retour au carrousel
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {collaborations.map((collab, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center group hover:-translate-y-1"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-100 dark:border-red-900 group-hover:border-red-500 transition-colors duration-300 bg-white mb-4">
                  <img 
                    src={collab.logo} 
                    alt={collab.name}
                    className="w-full h-full object-contain rounded-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white text-center">{collab.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{collab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-800" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">NOS COLLABORATIONS</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-3"></div>
          <p className="text-gray-600 dark:text-gray-300 text-xs mb-6">
            Ils nous font confiance pour leur transformation digitale
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {collaborations.map((collab, index) => (
              <div 
                key={index}
                className="w-1/3 flex-shrink-0 px-2"
              >
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 h-[180px] flex flex-col group hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-2 border-red-100 dark:border-red-900 group-hover:border-red-500 transition-colors duration-300 bg-white">
                    <img 
                      src={collab.logo} 
                      alt={collab.name}
                      className="w-full h-full object-contain rounded-full transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm font-semibold mb-1 dark:text-white text-center line-clamp-1">{collab.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 text-center line-clamp-3 flex-1">{collab.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-4 gap-4">
          <div className="flex justify-center space-x-1">
            {Array.from({ length: collaborations.length - 2 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                  currentIndex === i 
                    ? 'bg-red-600' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-red-400 dark:hover:bg-red-800'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setShowAll(true)}
            className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1"
          >
            Voir toutes nos collaborations
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;