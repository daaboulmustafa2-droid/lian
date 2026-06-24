import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-cream min-h-screen text-primary selection:bg-secondary selection:text-white pt-20">
      <Navbar />
      <Hero />
      <Stats />
      <Contact />
    </main>
  );
}

export default App;
