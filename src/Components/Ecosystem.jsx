import React from 'react';

const ICBLabsEcosystem = () => {
  const cards = [
    {
      id: 'network',
      title: ' Cosmic AI Network',
      subtitle: ' Cosmic AI NETWORK',
      description: 'A POS-based web 3 blockchain offering seamless transactions for users. It is powered to transform the digital industries.',
      gradient: 'from-blue-600 to-blue-800',
      icon: '🔷',
      position: 'top-left'
    },
    {
      id: 'verse',
      title: ' Cosmic AI Verse',
      subtitle: ' Cosmic AI VERSE',
      description: 'A groundbreaking Metaverse city featuring cutting-edge gaming experiences with dynamic interactions, multiplayer connectivity and bridging gap between reality and digital world.',
      gradient: 'from-teal-600 to-teal-800',
      icon: '🎮',
      position: 'top-center'
    },
    {
      id: 'nft',
      title: 'NFT Talent',
      subtitle: 'NFT TALENT',
      description: 'NFT Talent revolutionizes arts, technology, entertainment, and sports by providing exceptional talent and technology like your dream.',
      gradient: 'from-purple-600 to-purple-800',
      icon: '🎨',
      position: 'top-right'
    },
    {
      id: 'kyc',
      title: ' Cosmic AI KYC',
      subtitle: ' Cosmic AI KYC',
      description: 'A secure, efficient identity verification platform powered by NFT technology ensuring seamless user onboarding, compliance, trust, and streamlined KYC/AML processes.',
      gradient: 'from-green-600 to-green-800',
      icon: '✓',
      position: 'bottom-left'
    },
    {
      id: 'dex',
      title: ' Cosmic AI Dex',
      subtitle: ' Cosmic AI DEX',
      description: `Coming Soon\n\nA secure, decentralized  Cosmic AI's trading that facilitates seamless cryptocurrency trading with enhanced security, user control over their transactions.`,
      gradient: 'from-yellow-600 to-yellow-800',
      icon: '📊',
      position: 'bottom-center',
      comingSoon: true
    },
    {
      id: 'game',
      title: ' Cosmic AI Game',
      subtitle: ' Cosmic AI GAME',
      description: 'Coming Soon\n\nA decentralized gaming platform that offers immersive experiences across multiple genres with Play-to-Earn mechanics and blockchain technology.',
      gradient: 'from-red-600 to-red-800',
      icon: '🎯',
      position: 'bottom-right',
      comingSoon: true
    }
  ];

  const CardComponent = ({ card }) => (
    <div className="relative group">
      {/* Main Card */}
      <div className={`relative bg-gradient-to-br ${card.gradient} rounded-2xl p-6 h-64 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 text-6xl opacity-30">{card.icon}</div>
        </div>
        
        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon and Title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              {card.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{card.title}</h3>
              <p className="text-white/70 text-xs font-medium tracking-wider">{card.subtitle}</p>
            </div>
          </div>
          
          {/* Description */}
          <div className="flex-1">
            {card.comingSoon && (
              <div className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium mb-3 w-fit">
                Coming Soon
              </div>
            )}
            <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">
              {card.description}
            </p>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Bottom Cutout Circle */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-8 bg-gray-900 rounded-full border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
          <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="text-purple-400 text-sm font-medium tracking-wider mb-4">OUR ECOSYSTEM</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
           Cosmic AI Labs Ecosystem
        </h1>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
          Our ecosystem of blockchain-based products powers seamless interactions, secure transactions, 
          and decentralized solutions, transforming industries and paving the way for a smarter, more connected future.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Top Row */}
          {cards.slice(0, 3).map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bottom Row */}
          {cards.slice(3, 6).map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default  ICBLabsEcosystem;