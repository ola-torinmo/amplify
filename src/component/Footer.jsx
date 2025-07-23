import React from 'react';
import Image from 'next/image';
import copyright from '../assets/copyright.png'; 

const Footer = () => {
  return (
    <footer className="py-8">
  <div className="max-w-6xl mx-auto px-4">
    <div className='text-center mb-12'>
      <h1 className='md:text-[38px] text-[32px] text-[#101010] mb-5'>More from coach Brenda</h1>
    <p className='text-[18px] mb-3'>Amazon store - <a href=" https://www.amazon.com/Books-Brenda-Unu/s?rh=n%3A283155%2Cp_27%3ABrenda+Unu" className='text-[#2E6AD2]'> https://www.amazon.com/Books-Brenda-Unu/s?rh=n%3A283155%2Cp_27%3ABrenda+Unu</a></p>
    <p className='text-[18px] mb-3'>Selar store - <a href="https://selar.co/m/brendaunuwoa" className='text-[#2E6AD2]'>https://selar.co/m/brendaunuwoa</a> </p>
    <p className='text-[18px]'>Learn more about coach Brenda - <a href="https://www.iambrendaunu.com" className='text-[#2E6AD2]'>https://www.iambrendaunu.com</a> </p>
    </div>
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