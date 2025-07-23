import React from 'react'
import Image from 'next/image'
import addon from '../assets/addon.png'
import check from '../assets/check.png';

const AddOn = () => {
  return (
    <div className="px-4 md:px-8 ">
        <section className=" text-[#636363CC]  px-4 h-full ">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap- items-center mt-6">
              <div className="order-last md:order-first">
                <div className="relative w-full h-auto max-w-full rounded-lg mb-4">
                  <div className="relative md:w-[450px] aspect-square sm:aspect-auto sm:h-[300px] md:h-[700px] lg:h-[700px]">
                    <Image 
                      src={addon} 
                      alt='what you get illustration' 
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
             <div className='md:w-[550px]'>
                <h1 className="text-[32px] md:text-[30px] text-[#101010] sm:text-[32px] font-bold mb-4 text-center md:text-left">Add-ons (available on request)</h1>
                <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                    <div className="mr-2 flex-shrink-0 mt-0.5 w-5 h-5">
                        <Image src={check} alt='check' width={18} height={18} />
                    </div>
                    <span className="text-[16px] sm:text-base">End-to-End Book Publishing Package: From editing to design, printing, and listing - your book, done right.</span>
                    </li>
                    <li className="flex items-start">
                    <div className="mr-2 flex-shrink-0 mt-0.5  w-5 h-5">
                        <Image src={check} alt='check' width={18} height={18} />
                    </div>
                    <span className="text-[16px] sm:text-base">Media & Publicity Support: Get featured. Get seen. From interviews to launch campaigns, we help you shine.</span>
                    </li>
                    
                </ul>
                <p className='text-[16px] mb-3 text-center md:text-left'>You're Not Just Writing a Book, You're stepping into your mantle of influence. This is your moment. Your movement.AmplifyYOU group coaching starts in September. Early bird offers available now.</p>
                <div className="flex justify-center md:justify-start">
                  <a href="https://selar.com/8g3657" target="_blank" rel="noopener noreferrer">
                    <button className="mt-[20px] bg-[#DF3841] drop-shadow-sm text-white rounded-[10px] w-[299px] h-[51px] text-[16px]">
                    Pre-order the book + unlock your bonus
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

export default AddOn