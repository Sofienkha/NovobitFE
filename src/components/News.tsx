import React from 'react';

const News = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-8">NOVOBIT AKTUELL</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/podcast.jpg" alt="Podcast" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Podcast bei NIEDERSACHSEN NEXT</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-6 h-full flex items-center justify-center bg-gray-200">
              <div>
                <h3 className="text-4xl font-light mb-2">newsletter</h3>
                <p className="text-3xl">04|25</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/presentation.jpg" alt="Presentation" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Vortrag beim GERMAN EMIRATES CLUB, Dubai</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;