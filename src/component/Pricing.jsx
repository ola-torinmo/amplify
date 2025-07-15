import React from 'react'
import Image from 'next/image'
import check from '../assets/check.png'

const Pricing = () => {
  return (
    // {/* Pricing Section */}
    <section className=" px-4" id="pricing">
    <div className=' items-center justify-center py-[75px] px-10 border border-[#DADEE3] rounded-[25px] mt-[40px] md:mx-[80px] mx-[20px] '> 
    <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
      <h1 className="text-[32px] md:text-[38px] font-semibold mb-4">Choose your path with Brenda</h1>
      <p className="text-[#636363CC] opacity-80">
       Free and transparent pricing, get started today!
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      {/* Starter Plan */}
      <div className="border border-[#E0E8E3] rounded-[22.5px] p-[14px]">
        <div className="mb-4 border border-[#E0E8E3] rounded-[10.5px] p-[14px]">
          <h3 className="font-medium">Group Coaching Program</h3>
          <div className="mt-4 mb-[14px] ">
            <span className="text-3xl font-bold">₦250,000</span>
            
             
          </div>
          <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Starts September 2025</span>
          
         <a href="https://selar.com/8g3657" target="_blank" rel="noopener noreferrer">
           <button className="w-full py-2 border border-[#E8B4B8] text-[#E8B4B8] rounded-md  mt-[14px]">
            Get Started
          </button>
         </a>
        </div>
        <div className="space-y-3 mt-6">
            <div className='flex-shrink-0'>
              <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Group coaching program includes::</span>

            </div>

          <div className="flex items-start">
            
          
            <div className="h-5 w-5  mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">12 weeks total (6 classes + 6 support)</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">Unlimited slots</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">Starts September 2025</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">Investment 250,000 naira</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">One-time payment</span>
          </div>
        </div>
      </div>

      {/* Growth Plan */}
      <div className="border border-[#E8B4B8] rounded-[22.5px] p-[14px] pb-[30px]  bg-white">
        <div className="mb-4 border border-white bg-[#E8B4B812] rounded-[10.5px] p-[14px]">
          <h3 className="font-medium">1-on-1 Coaching</h3>
          <div className="mt-4 mb-[14px]">
            <span className="text-3xl font-bold">₦750,000</span>
           
          </div>
          <div className='w-[250px]'>
          <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Immediate start</span>

          </div>
          
          <a href="https://selar.com/8g3657" target="_blank" rel="noopener noreferrer">
            <button className="w-full py-2 bg-[#E8B4B8] text-white rounded-md mt-[14px]">
            Get Started
          </button>
          </a>
        </div>
        <div className="space-y-3 mt-6">
            <div className='flex-shrink-0'>
              <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>1-on-1 coaching program includes:</span>

            </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">Personalized experience with Brenda</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">Limited slots</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">Immediate start and deeper feedback</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">Investment 750,000 naira</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
            <span className="text-sm mt-1">One-time payment</span>
          </div>
        </div>
      </div>

    </div>
    </div>
  </section>
  )
}

export default Pricing