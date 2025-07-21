import React from 'react'
import Image from 'next/image'
import wyg from '../assets/wyg2.png'
import check from '../assets/check.png'

const WhatYouGet = () => {
  return (
    <div className="px-4 md:px-8 ">
    <section className=" text-[#636363CC]  px-4 h-full ">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mt-6">
          <div className="order-last md:order-first">
            <div className="relative w-full h-auto max-w-full rounded-lg mb-4">
              <div className="relative w-full aspect-square sm:aspect-auto sm:h-[400px] md:h-[700px] lg:h-[700px]">
                <Image 
                  src={wyg} 
                  alt='what you get illustration' 
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[38px] text-[#101010] sm:text-[32px] font-bold mb-4 text-center md:text-left">What’s included</h1>
            <p className='text-[20px] mb-6 text-center md:text-left'>Below are the few values you’d get from joining the program</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-2 flex-shrink-0 mt-0.5 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[18px] sm:text-base">6 weeks of structured live teaching</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 flex-shrink-0 mt-0.5  w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[18px] sm:text-base">6 weeks of guided implementation & support</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[18px] sm:text-base">Access to video modules, templates & worksheets</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[18px] sm:text-base">Private community for engagement & accountability</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[18px] sm:text-base">Lifetime access to all replays and materials</span>
              </li>
              
            </ul>
            <div className="flex justify-center md:justify-start">
              <a href="https://selar.com/8g3657" target="_blank" rel="noopener noreferrer">
                <button className="mt-[20px] bg-[#DF3841] drop-shadow-sm text-white rounded-[10px] w-[329px] h-[51px] text-[16px]">
                Pre-order The AmplifyYOU Manual Now
                </button>

              </a>
                
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default WhatYouGet