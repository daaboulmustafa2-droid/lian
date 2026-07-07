import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Transparency from './components/Transparency';
import Services from './components/Services';
import Developers from './components/Developers';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <main className="bg-primary min-h-screen text-white selection:bg-secondary selection:text-primary">
        <Navbar />
        <Hero />
        <Stats />
        <Transparency />
        <Services />
        <Developers />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export default App;
