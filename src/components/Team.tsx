import React from 'react';

const Team = () => {
  const team = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      name: "Jean Dupont",
      role: "Directeur Général"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      name: "Marie Martin",
      role: "Responsable Technique"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      name: "Pierre Bernard",
      role: "Chef de Projet"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">NOTRE ÉQUIPE</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-3">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1 dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;