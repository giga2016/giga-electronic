import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">CONTACT & DEVIS</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-red-500 focus:border-red-500 text-sm text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-red-500 focus:border-red-500 text-sm text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-red-500 focus:border-red-500 text-sm text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-red-500 focus:border-red-500 text-sm text-gray-900 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
              >
                Envoyer
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

            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl">
              <div className="w-full h-full rounded-xl bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-sm">Carte Google Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;