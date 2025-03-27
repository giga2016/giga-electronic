import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://giga-backend.vercel.app/send-email', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ nom, email, telephone, message })  
      });

      if (response.ok) {
        alert("Demande envoyée avec succès !");
        setNom('');
        setEmail('');
        setTelephone('');
        setMessage('');
      } else {
        alert("Erreur dans l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">CONTACT & DEVIS</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 dark:text-white">Nos Coordonnées</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-sm dark:text-gray-300">
                  <Phone className="text-red-600 dark:text-red-400" size={16} />
                  <span>+221 77 625 12 16 ou au +221 33 825 05 55</span>
                </p>
                <p className="flex items-center gap-2 text-sm dark:text-gray-300">
                  <Mail className="text-red-600 dark:text-red-400" size={16} />
                  <span>contact@giga-electronic.net</span>
                </p>
                <p className="flex items-center gap-2 text-sm dark:text-gray-300">
                  <MapPin className="text-red-600 dark:text-red-400" size={16} />
                  <span>134, Zone de Captage Dakar-Sénégal</span>
                </p>
              </div>
            </div>

            <div 
              className="h-48 rounded-xl overflow-hidden relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
              <a
                href="https://www.google.com/maps?q=134,+Zone+de+Captage,+Dakar,+Sénégal"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
              >
                📍 Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;