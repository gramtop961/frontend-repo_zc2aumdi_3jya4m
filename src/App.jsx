import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <NavBar />
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
    </div>
  );
}

export default App;
