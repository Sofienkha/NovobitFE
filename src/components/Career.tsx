import React from 'react';

const Career = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Braunschweig Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 mb-12">KARRIERE IN BRAUNSCHWEIG</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-96 overflow-hidden rounded-lg col-span-2">
              <img 
                src="/braunschweig-view.jpg" 
                alt="Braunschweig View" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-4xl font-light mb-4">Schöne Aussichten</h3>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-sage-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">JOBS IN BRAUNSCHWEIG</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded hover:bg-gray-50 transition cursor-pointer">
                    <p>SOFTWARE-ENTWICKLER (M/W/D)</p>
                  </div>
                  <div className="p-4 bg-white rounded hover:bg-gray-50 transition cursor-pointer">
                    <p>FULL-STACK-ENTWICKLER JAVA (M/W/D)</p>
                  </div>
                  <div className="p-4 bg-white rounded hover:bg-gray-50 transition cursor-pointer">
                    <p>INITIATIVBEWERBUNG (M/W/D)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tunis Section */}
        <div>
          <h2 className="text-3xl font-light text-gray-900 mb-12">KARRIERE IN TUNIS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-96 overflow-hidden rounded-lg col-span-2">
              <img 
                src="/tunis-view.jpg" 
                alt="Tunis View" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-4xl font-light mb-4">Schöne Aussichten</h3>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-sage-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">JOBS IN TUNIS</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded hover:bg-gray-50 transition cursor-pointer">
                    <p>SOFTWARE-ENTWICKLER (M/W/D)</p>
                    <p className="text-sm text-gray-500">AUCH FÜR STUDIENABBRECHER</p>
                  </div>
                  <div className="p-4 bg-white rounded hover:bg-gray-50 transition cursor-pointer">
                    <p>FULL-STACK-ENTWICKLER JAVA (M/W/D)</p>
                  </div>
                  <div className="p-4 bg-white rounded hover:bg-gray-50 transition cursor-pointer">
                    <p>INITIATIVBEWERBUNG (M/W/D)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;