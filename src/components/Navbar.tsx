import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="/novobit-logo.svg" alt="Novobit" className="h-8" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2">Über uns</a>
              <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2">Software Dienstleistungen</a>
              <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2">KI-Expertise</a>
              <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2">Akademie</a>
              <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2">Karriere</a>
              <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2">Kontakt</a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-red-600">
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;