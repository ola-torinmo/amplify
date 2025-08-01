import React from 'react';
import Image from 'next/image';
import copyright from '../assets/copyright.png'; 
import addon from '../assets/addon.png'

const Footer = () => {
  return (

<div className="py-16 md:py-6 px-4">
  <div className="max-w-6xl mx-auto">
    <h1 className="md:text-[38px] text-[30px] font-bold mb-12 text-center text-[#101010]">More from coach Brenda</h1>
    
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image 
          src={addon} 
          alt="Coach Brenda" 
          width={500} 
          height={650} 
          className="rounded-2xl"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex-1 lg:pl-10 md:w-[353px] my-auto">
        <div className="space-y-6 mb-8">
          <blockquote className="text-[18px] text-[#101010] leading-relaxed">
            <a href="https://tribuneonlineng.com/as-a-woman-dont-focus-on-challenges-focus-on-strengths-brenda-unu/You"><span className='text-blue-600'>"As a woman, don't focus on challenges, focus on strengths"</span>  - Brenda Unu on Nigerian Tribune</a> 
          </blockquote>
          
          <blockquote className="text-[18px] text-[#101010] leading-relaxed">
            <a href="https://www.thisdaylive.com/2025/07/05/brenda-unuavworho-launches-amplify-you-to-empower-women-amplify-voice/"><span className='text-blue-600'>"Brenda Unuavworho launches Amplify-You to Empower Women Amplify Voice"</span>  - Brenda Unu on This Day</a>
            
          </blockquote>
        </div>
        
        {/* Buttons */}
        <div className="space-y-6 flex flex-col items-center sm:items-start">
          <a href="https://www.amazon.com/Books-Brenda-Unu/s?rh=n%3A283155%2Cp_27%3ABrenda+Unu" className="">
            <button className="bg-[#DF3841] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-red-700 transition-colors w-auto md:mb-3">
              Amazon Store
            </button>
          </a>
         
          <a href="https://selar.co/m/brendaunuwoa" className="text-[#2E6AD2]">
            <button className="bg-[#DF3841] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-red-700 transition-colors w-auto block md:mb-3">
              Selar Store
            </button>
          </a>
         
          <a href="https://www.iambrendaunu.com" className="text-[#2E6AD2]">
            <button className="bg-[#DF3841] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-red-700 transition-colors w-auto block">
              Learn More About Coach Brenda
            </button>
          </a>
        </div>
      </div>
    </div>
    
    {/* Copyright */}
    <div className="flex items-center justify-center mt-16 text-[14px] text-gray-600">
      <Image src={copyright} alt='copyright' width={16} height={16} className="mr-2" />
      Copyright 2025 Brenda Unu
    </div>
  </div>
</div>
  );
};

export default Footer;