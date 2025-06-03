import React from 'react';
import FooterNav from './FooterNav';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';

const Footer = () => (
  <footer className="w-full bg-black pt-8">
    
    <FooterNav />
    <FooterCopyright />
  </footer>
);

export default Footer;