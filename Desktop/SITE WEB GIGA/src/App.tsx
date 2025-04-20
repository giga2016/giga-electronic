import React from 'react';
import { Menu, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Partners />
        <Team />
        <Contact />
      </main>
      <footer className="bg-gray-900 dark:bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">GIGA ELECTRONIC SARL</h3>
              <p className="text-gray-400 text-sm">Solutions technologiques innovantes pour votre entreprise</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Contact</h3>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2"><Phone size={14} /> +221 77 625 12 16 ou au +221 33 825 05 55</p>
                <p className="flex items-center gap-2"><Mail size={14} /> contact@giga-electronic.net</p>
                <p className="flex items-center gap-2"><MapPin size={14} /> 134, Zone de Captage Dakar-Sénégal</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Navigation</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2"><ChevronRight size={14} /> Accueil</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} /> Nos Offres</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} /> Contact</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} GIGA ELECTRONIC SARL. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;