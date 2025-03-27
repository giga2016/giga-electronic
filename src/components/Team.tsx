import React, { useState, useEffect } from 'react';
import { Building2, Landmark, Guitar as Hospital, Ban as Bank } from 'lucide-react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const collaborations = [
    {
      name: "DGID",
      description: "Direction Générale des Impôts et Domaines",
      icon: <Landmark size={32} />
    },
    {
      name: "Douanes Sénégalaises",
      description: "Administration des Douanes",
      icon: <Building2 size={32} />
    },
    {
      name: "Assemblée Nationale",
      description: "Institution Parlementaire",
      icon: <Building2 size={32} />
    },
    {
      name: "Hôpital Militaire de Ouakam",
      description: "Centre Hospitalier Militaire",
      icon: <Hospital size={32} />
    },
    {
      name: "BICIS",
      description: "Banque Internationale pour le Commerce et l'Industrie du Sénégal",
      icon: <Bank size={32} />
    },
    {
      name: "BOA",
      description: "Bank Of Africa",
      icon: <Bank size={32} />
    },
    {
      name: "Port Autonome de Dakar",
      description: "Infrastructure Portuaire",
      icon: <Building2 size={32} />
    },
    {
      name: "CBAO",
      description: "Compagnie Bancaire de l'Afrique Occidentale",
      icon: <Bank size={32} />
    },
    {
      name: "Ecobank",
      description: "Banque Panafricaine",
      icon: <Bank size={32} />
    },
     {
      name: "BAT",
      description: "Banque Atlantique",
      icon: <Bank size={32} />
    },
     {
      name: "SUNU BIS",
      description: "Banque Assurance",
      icon: <Bank size={32} />
    },
    {
      name: "Hôpital Principal de Dakar",
      description: "Centre Hospitalier",
      icon: <Hospital size={32} />
    },
    {
      name: "Direction du Commerce",
      description: "Administration Commerciale",
      icon: <Building2 size={32} />
    },
    {
      name: "IPRES",
      description: "Institution de Prévoyance Retraite du Sénégal",
      icon: <Landmark size={32} />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === collaborations.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-800" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">NOS COLLABORATIONS</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-3"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Ils nous ont fait confiance
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
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center h-40">
                  <div className="w-12 h-12 mx-auto mb-3 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                    <div className="text-red-600 dark:text-red-400">{collab.icon}</div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1 dark:text-white text-center">{collab.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-[90%] truncate">{collab.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: collaborations.length - 2 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                currentIndex === i 
                  ? 'bg-red-600' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-red-400 dark:hover:bg-red-800'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
