import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
