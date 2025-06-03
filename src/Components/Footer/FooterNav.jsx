import React from 'react';
import logo from '../../assets/logo.png';
import { FaXTwitter, FaLinkedinIn, FaYoutube, FaDiscord } from 'react-icons/fa6';

const FooterNav = () => (
  <div className="w-full flex flex-col md:flex-row items-center justify-between"
       style={{ minHeight: '80px' }}>
    {/* Logo - 20% */}
    <div className="flex items-center justify-center md:justify-start" style={{ flexBasis: '20%', minWidth: 0 }}>
      <img
        src={logo}
        alt="ICB Labs"
        className="w-[10rem] object-contain"
        draggable={false}
      />
    
    </div>
    {/* Nav - 60% */}
    <nav
      className="flex-1 flex justify-center items-center"
      style={{ maxWidth: 605, flexBasis: '60%', minWidth: 0 }}
    >
      <div className="flex flex-wrap justify-center gap-6 text-white font-medium w-full">
        <a href="#" className="hover:text-purple-400 transition">Home</a>
        <a href="#" className="hover:text-purple-400 transition">About Us</a>
        <a href="#" className="hover:text-purple-400 transition">Our Ecosystem</a>
        <a href="#" className="hover:text-purple-400 transition">Contact Us</a>
      </div>
    </nav>
    {/* Icons - 20% */}
    <div
      className="flex items-center justify-center gap-4 mt-4 md:mt-0"
      style={{ flexBasis: '20%', minWidth: 0 }}
    >
      <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white w-9 h-9 flex items-center justify-center rounded-md text-lg transition"><FaXTwitter /></a>
      <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white w-9 h-9 flex items-center justify-center rounded-md text-lg transition"><FaLinkedinIn /></a>
      <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white w-9 h-9 flex items-center justify-center rounded-md text-lg transition"><FaYoutube /></a>
      <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white w-9 h-9 flex items-center justify-center rounded-md text-lg transition"><FaDiscord /></a>
    </div>
  </div>
);

export default FooterNav;