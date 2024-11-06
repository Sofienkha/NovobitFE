import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import SoftwareServices from './components/SoftwareServices';
import AiExpertise from './components/AiExpertise';
import Akademie from './components/Akademie';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <News />
      <SoftwareServices />
      <AiExpertise />
      <Akademie />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;