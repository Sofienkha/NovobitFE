import React from 'react';

const Akademie = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12">NOVOBIT AKADEMIE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-96 overflow-hidden rounded-lg col-span-full md:col-span-1">
            <div className="relative h-full">
              <img 
                src="/akademie-presentation.jpg" 
                alt="Akademie Presentation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/90 to-purple-600/90">
                <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
                  <h3 className="text-4xl font-light mb-4">
                    Nachher ist man immer schlauer...
                  </h3>
                  <div className="w-24 h-1 bg-white mb-4"></div>
                  <p className="text-xl">
                    Willkommen in der novobit Akademie
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-lg">
            <img 
              src="/akademie-workshop.jpg" 
              alt="Workshop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-light mb-2">Workshops</h3>
                <p className="text-sm">Praxisorientiertes Lernen</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-lg">
            <img 
              src="/akademie-training.jpg" 
              alt="Training" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-light mb-2">Training</h3>
                <p className="text-sm">Individuelle Entwicklung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Akademie;