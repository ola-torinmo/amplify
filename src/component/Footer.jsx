import React from 'react';
import Image from 'next/image';
import copyright from '../assets/copyright.png'; 

const Footer = () => {
  return (
    <footer className="py-8">
  <div className="max-w-6xl mx-auto px-4">
    {/* Copyright section */}
    <div className="text-center">
      <p className="text-[#5D5D5D] text-[14px] flex items-center justify-center gap-2">
        <Image src={copyright} alt='copyright' width={20} height={20} className='w-5 h-5'/>
        <span>Copyright 2025 Brenda Unu</span>
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;