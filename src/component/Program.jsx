import React from 'react'
import Image from 'next/image'
import check from '../assets/check.png';
import program from '../assets/program.png';

const Program = () => {
  return (
  <div className="px-4 md:px-8 py-16 ">
      <section className=" text-[#636363CC]  px-4 h-full ">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mt-6">
            <div className="order-last md:order-first">
              <div className="relative w-full h-auto max-w-full rounded-lg mb-4">
                <div className="relative w-full aspect-square sm:aspect-auto sm:h-[400px] md:h-[00px] lg:h-[500px]">
                  <Image 
                    src={program} 
                    alt='what you get illustration' 
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[38px] text-[#101010] sm:text-[32px] font-bold mb-4 text-center md:text-left">Introducing the AmplifyYOU program</h1>
              <p className='text-[16px] mb-6 text-center md:text-left'>A visibility and legacy-building journey for women ready to stop playing small. This isn’t just a writing course. It isn’t just personal branding, it is a 12-week transformational experience for women who are ready to:</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 flex-shrink-0 mt-0.5 w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                  </div>
                  <span className="text-[16px] sm:text-base">Own their message</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 flex-shrink-0 mt-0.5  w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                  </div>
                  <span className="text-[16px] sm:text-base">Create their signature body of work</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                  </div>
                  <span className="text-[16px] sm:text-base">Build a compelling personal brand</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                  </div>
                  <span className="text-[16px] sm:text-base">Finally share their story with the world</span>
                </li>
                
              </ul>
              <div className="flex justify-center md:justify-start">
                <a href="https://selar.com/8g3657" target="_blank" rel="noopener noreferrer">
                  <button className="mt-[20px] bg-[#DF3841] drop-shadow-sm text-white rounded-[10px] w-[329px] h-[51px] text-[16px]">
                  Pre-order the book
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

export default Program