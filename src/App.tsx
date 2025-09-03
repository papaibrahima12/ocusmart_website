import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Team from './components/Team';
import Ambitions from './components/Ambitions';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Team />
        <Ambitions />
        <Contact />
      </main>
    </div>
  );
}

export default App;