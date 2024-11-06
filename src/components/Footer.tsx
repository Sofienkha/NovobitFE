import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-sm text-gray-600 flex flex-wrap justify-center gap-x-2">
            <span>Copyright © 2024 all rights reserved</span>
            <span>|</span>
            <a href="#" className="hover:text-gray-900">Impressum</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-900">Datenschutzerklärung</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-900">Privatsphäre-Einstellungen ändern</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-900">Historie der Privatsphäre-Einstellungen</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-900">Einwilligungen widerrufen</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-red-600 hover:text-red-700">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;