import React from 'react';
import AboutPageImg from '../assets/LeandingPage/AboutPage.png'

const BlockchainLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* 3D Robot/AI Figure */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-60">
        <div className="relative">
          {/* Robot Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-xl animate-bounce">
            <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-75"></div>
          </div>
          
          {/* Robot Body */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-xl">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded animate-pulse"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-cyan-400 rounded animate-pulse delay-300"></div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-cyan-400 rounded animate-pulse delay-700"></div>
          </div>

          {/* Robot Arms */}
          <div className="absolute top-24 left-8 w-4 h-16 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full animate-pulse delay-150"></div>
          <div className="absolute top-24 right-8 w-4 h-16 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-purple-900/50 rounded-full border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-300 text-sm font-medium tracking-wider">ABOUT US</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Who we are
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are pioneers in <span className="text-white font-semibold">decentralized technologies</span>, leveraging the power of{' '}
            <span className="text-white font-semibold">blockchain and AI</span> to transform industries, revolutionize digital
            finance, and enhance global transactions with transparency and trust
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Blockchain Visualization */}
          <div className="relative">
 <div className="absolute bottom-[-10rem] left-0 h-96 flex items-center justify-center">
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-xl transform rotate-12 skew-x-12"></div>
                
                <div className="relative">
                  <div className="absolute -top-8 -left-16 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform rotate-12 animate-float">
                    <div className="absolute inset-2 border border-purple-300/30 rounded"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded animate-ping"></div>
                  </div>
                  
                  <div className="absolute -top-4 left-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-xl transform rotate-12 animate-float delay-300">
                    <div className="absolute inset-2 border border-purple-300/30 rounded"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded animate-ping delay-500"></div>
                  </div>
                  
                  <div className="absolute -top-8 right-16 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform rotate-12 animate-float delay-700">
                    <div className="absolute inset-2 border border-purple-300/30 rounded"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400 rounded animate-ping delay-1000"></div>
                  </div>
                  
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-300 to-purple-500 rounded-lg shadow-2xl transform rotate-12 animate-pulse">
                    <div className="absolute inset-3 border-2 border-purple-200/40 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded animate-spin"></div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/4 w-8 h-px bg-gradient-to-r from-purple-400 to-transparent animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 w-8 h-px bg-gradient-to-l from-purple-400 to-transparent animate-pulse delay-500"></div>
                <div className="absolute top-1/3 left-1/2 w-px h-8 bg-gradient-to-b from-purple-400 to-transparent animate-pulse delay-1000"></div>

                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: '2s'
                    }}
                  ></div>
                ))}
              </div>
            <div className="bg-gradient-to-br from-purple-900/40 flex justify-center to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
              {/* 3D Isometric Blockchain Blocks */}
             
            <img src={AboutPageImg} className='w-[27rem] h-[27rem]' alt="" />
            </div>
          </div>

          {/* Mission Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              OUR MISSION
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              At  Cosmic AI, we tackle blockchain challenges by delivering secure, scalable, and 
              innovative solutions. Our mission is to:
            </p>

            <div className="space-y-6">
              {[
                "Develop advanced blockchain solutions to enhance security, speed, and interoperability.",
                "Enable decentralized systems that foster transparency and trust.",
                "Drive innovation through AI-powered smart contracts and next-gen fintech.",
                "Empower businesses and users with interconnected platforms in a decentralized digital world."
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse group-hover:animate-ping transition-all duration-300"></div>
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

  <div className="mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Vision Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                OUR VISION
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                We envision a world where blockchain serves as the backbone for trust, transparency, and 
                financial freedom. At  Cosmic AI, we believe the future of decentralized technology is 
                already unfolding
              </p>

              <div className="space-y-6">
                {[
                  "A decentralized world powered by secure, smart transactions",
                  "The seamless integration of AI and blockchain to transform finance",
                  "Borderless, trustless, and limitless opportunities for businesses globally"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse group-hover:animate-ping transition-all duration-300"></div>
                    </div>
                    <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Globe Visualization */}
            <div className="relative order-first lg:order-last">
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                {/* Diamond Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                                     linear-gradient(-45deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}></div>
                </div>

                {/* 3D Globe Scene */}
                <div className="relative h-96 flex items-center justify-center">
                  {/* Globe Base/Platform */}
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-purple-600/80 to-purple-800/80 rounded-full shadow-2xl animate-pulse"></div>
                  
                  {/* Main Globe */}
                  <div className="relative w-32 h-32 mx-auto">
                    {/* Globe Sphere */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-300 via-purple-400 to-purple-600 shadow-2xl relative overflow-hidden animate-slow-spin">
                      {/* Globe Surface Details */}
                      <div className="absolute inset-4 rounded-full border-2 border-purple-200/30"></div>
                      
                      {/* Continents/Land masses */}
                      <div className="absolute top-8 left-6 w-6 h-4 bg-purple-800/60 rounded-lg"></div>
                      <div className="absolute top-12 right-8 w-4 h-6 bg-purple-800/60 rounded-lg"></div>
                      <div className="absolute bottom-10 left-8 w-8 h-3 bg-purple-800/60 rounded-lg"></div>
                      <div className="absolute bottom-12 right-6 w-5 h-4 bg-purple-800/60 rounded-lg"></div>
                      
                      {/* Globe Shine Effect */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
                    </div>

                    {/* Orbital Rings */}
                    <div className="absolute inset-0 border-2 border-purple-400/40 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-2 border border-purple-300/30 rounded-full animate-reverse-spin"></div>
                  </div>

                  {/* Connected Devices/Platforms */}
                  {/* Left Device */}
                  <div className="absolute left-8 bottom-20 w-16 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-xl transform rotate-12 animate-float">
                    <div className="absolute inset-2 bg-purple-900/50 rounded"></div>
                    <div className="absolute top-2 left-2 w-2 h-1 bg-cyan-400 rounded animate-pulse"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-1 bg-cyan-400 rounded animate-pulse delay-300"></div>
                  </div>

                  {/* Right Device */}
                  <div className="absolute right-8 bottom-20 w-16 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-xl transform -rotate-12 animate-float delay-500">
                    <div className="absolute inset-2 bg-purple-900/50 rounded"></div>
                    <div className="absolute top-2 left-2 w-2 h-1 bg-cyan-400 rounded animate-pulse delay-700"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-1 bg-cyan-400 rounded animate-pulse delay-1000"></div>
                  </div>

                  {/* Connection Lines to Globe */}
                  <div className="absolute bottom-24 left-20 w-12 h-px bg-gradient-to-r from-purple-400 to-transparent rotate-45 animate-pulse"></div>
                  <div className="absolute bottom-24 right-20 w-12 h-px bg-gradient-to-l from-purple-400 to-transparent -rotate-45 animate-pulse delay-500"></div>

                  {/* Floating Network Particles */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${1.5 + Math.random() * 2}s`
                      }}
                    ></div>
                  ))}

                  {/* Data Flow Lines */}
                  <div className="absolute top-1/3 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
                  <div className="absolute top-2/3 right-1/4 w-16 h-px bg-gradient-to-l from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

  <div className="mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 3D Blockchain Community Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                {/* Diamond Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                                     linear-gradient(-45deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}></div>
                </div>

                {/* 3D Isometric Scene */}
                <div className="relative h-96 flex items-center justify-center">
                  {/* Platform Bases */}
                  <div className="absolute bottom-8 left-16 w-20 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-2xl transform rotate-12 skew-y-6 animate-float">
                    {/* Platform Lines */}
                    <div className="absolute inset-x-2 top-4 h-px bg-gray-600 opacity-50"></div>
                    <div className="absolute inset-x-2 top-8 h-px bg-gray-600 opacity-50"></div>
                    <div className="absolute inset-x-2 top-12 h-px bg-gray-600 opacity-50"></div>
                  </div>
                  
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-2xl transform rotate-12 skew-y-6 animate-float delay-300">
                    <div className="absolute inset-x-2 top-4 h-px bg-gray-600 opacity-50"></div>
                    <div className="absolute inset-x-2 top-8 h-px bg-gray-600 opacity-50"></div>
                    <div className="absolute inset-x-2 top-12 h-px bg-gray-600 opacity-50"></div>
                  </div>
                  
                  <div className="absolute bottom-8 right-16 w-20 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-2xl transform rotate-12 skew-y-6 animate-float delay-700">
                    <div className="absolute inset-x-2 top-4 h-px bg-gray-600 opacity-50"></div>
                    <div className="absolute inset-x-2 top-8 h-px bg-gray-600 opacity-50"></div>
                    <div className="absolute inset-x-2 top-12 h-px bg-gray-600 opacity-50"></div>
                  </div>

                  {/* Business People */}
                  {/* Person 1 */}
                  <div className="absolute bottom-40 left-20 w-8 h-12 animate-bounce">
                    {/* Head */}
                    <div className="w-4 h-4 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full mx-auto mb-1"></div>
                    {/* Body */}
                    <div className="w-6 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-sm mx-auto shadow-lg"></div>
                  </div>

                  {/* Person 2 */}
                  <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-8 h-12 animate-bounce delay-300">
                    <div className="w-4 h-4 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full mx-auto mb-1"></div>
                    <div className="w-6 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-sm mx-auto shadow-lg"></div>
                  </div>

                  {/* Person 3 */}
                  <div className="absolute bottom-40 right-20 w-8 h-12 animate-bounce delay-700">
                    <div className="w-4 h-4 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full mx-auto mb-1"></div>
                    <div className="w-6 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-sm mx-auto shadow-lg"></div>
                  </div>

                  {/* Blockchain Elements */}
                  {/* Left Chain */}
                  <div className="absolute top-16 left-8 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl animate-spin-slow">
                    <div className="absolute inset-1 border border-purple-300/50 rounded"></div>
                  </div>
                  
                  {/* Top Chain */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl animate-spin-slow delay-500">
                    <div className="absolute inset-1 border border-purple-300/50 rounded"></div>
                  </div>
                  
                  {/* Right Chain */}
                  <div className="absolute top-16 right-8 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl animate-spin-slow delay-1000">
                    <div className="absolute inset-1 border border-purple-300/50 rounded"></div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute top-20 left-16 w-24 h-px bg-gradient-to-r from-purple-400 to-transparent rotate-12 animate-pulse"></div>
                  <div className="absolute top-20 right-16 w-24 h-px bg-gradient-to-l from-purple-400 to-transparent -rotate-12 animate-pulse delay-500"></div>
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-purple-400 to-transparent animate-pulse delay-1000"></div>

                  {/* Floating Data Points */}
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${1 + Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Values Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                CORE VALUES
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                 Cosmic AI empowering innovation through decentralization. We unite projects to provide 
                transformative blockchain and metaverse solutions for businesses and users alike
              </p>

              <div className="space-y-6">
                {[
                  "Pushing boundaries with cutting-edge blockchain solutions",
                  "Building trust through secure, transparent, and decentralized systems",
                  "Partnering with visionary leaders to shape the future of Web3 and crypto"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse group-hover:animate-ping transition-all duration-300"></div>
                    </div>
                    <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>



      {/* Custom CSS for additional animations */}
 <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        .animate-spin-slow {
          animation: slow-spin 15s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BlockchainLanding;