import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaYoutube, FaDiscord } from 'react-icons/fa6';

const icons = [
  { icon: <FaXTwitter />, link: '#' },
  { icon: <FaLinkedinIn />, link: '#' },
  { icon: <FaYoutube />, link: '#' },
  { icon: <FaDiscord />, link: '#' },
];

const FooterSocial = () => (
  <div className="flex justify-center gap-4 mt-8">
    {icons.map((item, idx) => (
      <a
        key={idx}
        href={item.link}
        className="bg-purple-600 hover:bg-purple-700 text-white w-10 h-10 flex items-center justify-center rounded-lg text-xl transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.icon}
      </a>
    ))}
  </div>
);

export default FooterSocial;