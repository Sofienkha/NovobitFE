import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12">KONTAKT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Photos */}
          <div className="relative h-96 overflow-hidden rounded-lg">
            <img 
              src="/team-member-1.jpg" 
              alt="Team Member" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Small Talk Section */}
          <div className="relative h-96 overflow-hidden rounded-lg lg:col-span-2">
            <img 
              src="/office-meeting.jpg" 
              alt="Office Meeting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40">
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
                <h3 className="text-4xl font-light mb-2">Small Talk?</h3>
                <p className="text-xl">Unsere Kontaktdaten</p>
              </div>
            </div>
          </div>

          {/* Additional Team Members */}
          <div className="relative h-96 overflow-hidden rounded-lg">
            <img 
              src="/team-member-2.jpg" 
              alt="Team Member" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-lg">
            <img 
              src="/team-member-3.jpg" 
              alt="Team Member" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;