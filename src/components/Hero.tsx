import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600 opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-left">
          <h1 className="text-8xl font-light text-white mb-8">
            Get inspired
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Willkommen bei novobit, einer IT-Company mit Hauptsitz in Braunschweig und einem zweiten Standort in Tunis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;