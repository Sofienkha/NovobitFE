import React from 'react';

const AiExpertise = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12">KI-EXPERTISE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600">
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <h3 className="text-3xl text-white font-light mb-4">Know-how ist das neue hip</h3>
              <p className="text-white text-lg">Wie wir Effizienz neu entwickeln</p>
              <div className="mt-4">
                <img src="/ai-lab-logo.png" alt="AI Lab" className="h-12" />
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg">
            <img 
              src="/ai-team.jpg" 
              alt="AI Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg">
            <img 
              src="/ai-data.jpg" 
              alt="AI Data Visualization" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg">
            <img 
              src="/ai-workspace.jpg" 
              alt="AI Workspace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg bg-gray-900">
            <img 
              src="/ai-flow.jpg" 
              alt="AI Flow" 
              className="w-full h-full object-contain p-8"
            />
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg">
            <img 
              src="/ai-vision.jpg" 
              alt="AI Vision" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-light mb-2">Wir entwickeln Visionen</h3>
                <p className="text-sm">Produktentwicklung @ novobit</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg">
            <div className="relative h-full">
              <img 
                src="/ai-project.jpg" 
                alt="AI Project" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 rounded-full p-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl text-white font-light">og</div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg">
            <img 
              src="/ai-collaboration.jpg" 
              alt="AI Collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 rounded-full p-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiExpertise;