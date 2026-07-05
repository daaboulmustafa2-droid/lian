import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <main className="bg-cream min-h-screen text-primary selection:bg-secondary selection:text-white pt-20">
        <Navbar />
        <Hero />
        <Stats />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export default App;
