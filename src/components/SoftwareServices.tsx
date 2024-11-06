import React from 'react';

const SoftwareServices = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12">SOFTWARE DIENSTLEISTUNGEN</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img 
                src="/developer.jpg" 
                alt="Developer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-light mb-2">Software-Entwicklung</h3>
                  <p className="text-sm">Software-Entwicklung in DevOps-Kultur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative h-80 overflow-hidden rounded-lg bg-gray-800">
              <img 
                src="/lifecycle.jpg" 
                alt="Lifecycle" 
                className="w-full h-full object-contain p-8"
              />
              <div className="absolute inset-0 bg-black/30">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-light mb-2">Life Cycle</h3>
                  <p className="text-sm">Von der Planung bis zur Wartung</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img 
                src="/automation.jpg" 
                alt="Automation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-light mb-2">Automatisierung</h3>
                  <p className="text-sm">Effiziente Prozessoptimierung</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="relative group">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img 
                src="/analytics.jpg" 
                alt="Analytics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-light mb-2">Datenanalyse</h3>
                  <p className="text-sm">Intelligente Auswertungen</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img 
                src="/cloud.jpg" 
                alt="Cloud Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-light mb-2">Cloud Services</h3>
                  <p className="text-sm">AWS & Azure Lösungen</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img 
                src="/consulting.jpg" 
                alt="Consulting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-light mb-2">Consulting</h3>
                  <p className="text-sm">Strategische Beratung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;