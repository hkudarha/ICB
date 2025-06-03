import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const MediaPartnersSpotlight = () => {
  const leftCards = [
    {
      id: 1,
      title: '',
      img: 'https://icblabs.com/assets/Card%201-DKMx1AIp.png',
    },
    {
      id: 3,
      title: '.',
      img: 'https://icblabs.com/assets/Card%201-1-u-Hw4cJ9.png',
    },
  ];

  const centerCard = {
    id: 5,
    title: '',
    img: 'https://icblabs.com/assets/Card%202-C9wlal_T.png',
  };

  const rightCards = [
    {
      id: 2,
      title: '',
      img: 'https://icblabs.com/assets/Card%203-CXcwuYn7.png',
    },
    {
      id: 4,
      title: '',
      subtitle: 'Your Global News Destination',
      img: 'https://icblabs.com/assets/Card%203-1-DXN8mtzQ.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start py-16 px-4 text-white">
      {/* 🔥 Heading Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-purple-400 uppercase text-sm font-medium tracking-widest mb-2">
          Our Media Partners
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          ICB Labs in the Spotlight
        </h2>
        <p className="text-sm md:text-base text-white/80">
          Stay up to date with the latest news and industry recognition as ICB Labs gains global attention through leading media outlets.
        </p>
      </div>

      {/* 🔳 Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          {leftCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

        {/* Center Column */}
        <div className="flex justify-center">
          <Card {...centerCard} center />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10">
          {rightCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Card({ title, subtitle, img, center }) {
  return (
    <div
      className={`relative w-72 h-48 md:w-80 md:h-56 bg-gradient-to-br from-[#181c2b] to-[#2b1830] rounded-2xl border-2 border-purple-900 shadow-lg overflow-hidden flex flex-col items-center justify-center ${
        center ? 'md:my-4' : ''
      }`}
    >
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center">
        <h2 className="text-white font-bold text-2xl whitespace-pre-line drop-shadow-lg">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/80 text-sm mt-2">{subtitle}</p>
        )}
      </div>
      <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg z-20 border-4 border-black">
        <ArrowUpRight className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}

export default MediaPartnersSpotlight;