import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Main Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[##010001] overflow-hidden backdrop-blur-md">
        {/* Glowing background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* 3D Cube Logo */}
                <div className="w-12 h-12 relative transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  {/* Cube faces */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg shadow-lg transform skew-y-12 skew-x-12"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg transform translate-x-2 translate-y-2 skew-y-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-blue-400 rounded-lg shadow-lg"></div>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-purple-400/50 rounded-lg blur-md animate-pulse"></div>
                </div>
              </div>
              <div className="text-white font-bold text-xl tracking-wide">
                <span className="text-purple-300">ICB</span>
                <span className="ml-1">LABS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#" 
                className="relative px-6 py-2 text-white font-medium rounded-full border border-purple-400/50 bg-purple-500/20 backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                About Us
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                Our Ecosystem
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                Contact Us
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            </nav>

            {/* ICB Network Button */}
            <div className="hidden md:block">
              <button className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 group overflow-hidden">
                <span className="relative z-10">ICB Network</span>
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                {/* Shadow glow */}
                <div className="absolute inset-0 rounded-full shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-all duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 hover:bg-purple-500/20 rounded-lg transition-colors duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-transparent backdrop-blur-md z-50 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2 hover:bg-purple-500/20 rounded-lg transition-colors duration-300"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-5 h-0.5 bg-white rotate-45 absolute"></div>
              <div className="w-5 h-0.5 bg-white -rotate-45 absolute"></div>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mx-auto"></div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-6 space-y-6">
          <a 
            href="#" 
            className="relative px-6 py-3 text-white font-medium rounded-full border border-purple-400/50 bg-purple-500/20 backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 text-center"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white font-medium transition-colors duration-300 py-3 px-6 rounded-lg bg-purple-900/40 hover:bg-purple-900/60"
          >
            About Us
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white font-medium transition-colors duration-300 py-3 px-6 rounded-lg bg-purple-900/40 hover:bg-purple-900/60"
          >
            Our Ecosystem
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white font-medium transition-colors duration-300 py-3 px-6 rounded-lg bg-purple-900/40 hover:bg-purple-900/60"
          >
            Contact Us
          </a>
          
          {/* Mobile ICB Network Button */}
          <button className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 group overflow-hidden mt-4">
            <span className="relative z-10">ICB Network</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-all duration-300"></div>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;