import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ICBLabsHero = () => {
  return (
    <div className="heroSection relative min-h-screen bg-black overflow-hidden" id="home">

      {/* Additional CSS-based background effects */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {/* Radial gradients for lighting effects */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center min-h-screen">
          <div className="max-w-4xl">
            {/* Main Title - t1 */}
            <div className="t1 text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                Cosmic AI
              </span>
            </div>

            {/* Subtitle - t2 */}
            <div className="t2 text-white text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Powering the Future of
              <br />
              Blockchain
            </div>

            {/* Description - t3 */}
            <div className="t3 text-gray-300 text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed">
              Building a secure, decentralized ecosystem for innovation & growth
            </div>

            <br />

            {/* CTA Button */}
            <div className="onSmallMakeCenter">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-500 transform hover:scale-105 overflow-hidden text-lg">
                <span className="relative z-10 flex items-center">
                  Explore Our Ecosystem
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                {/* Glowing shadow */}
                <div className="absolute inset-0 rounded-full shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/60 transition-all duration-500"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation container placeholder */}
      <div className="heroAnim absolute inset-0" style={{ zIndex: 1 }}></div>

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x { 
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }
        @media (max-width: 768px) {
          .onSmallMakeCenter {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default function ICBLabsPage() {
  return (
    <div>
      <ICBLabsHero />
    </div>
  );
};