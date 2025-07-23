import React from 'react'
import Image from 'next/image'
import wyg2 from '../assets/wyg2.png'
import check from '../assets/check.png'

const GetStarted = () => {
  return (
    <div className="px-4 md:px-8 ">
    <section className=" text-[#636363CC]  px-4 h-full ">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap- items-center mt-6">
          <div className="order-last md:order-first">
            <div className="relative w-full h-auto max-w-full rounded-lg mb-4">
              <div className="relative md:w-[450px] aspect-square sm:aspect-auto sm:h-[300px] md:h-[700px] lg:h-[700px]">
                <Image 
                  src={wyg2} 
                  alt='what you get illustration' 
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
         <div className='md:w-[550px]'>
            <h1 className="text-[32px] md:text-[30px] text-[#101010] sm:text-[32px] font-bold mb-4 text-center md:text-left">Not ready for the program yet?</h1>
            <p className='text-[16px] mb-3 text-center md:text-left'>Start Here: Introducing The AmplifyYOU Manual RISE. WRITE. ROAR. – How to Amplify You By Owning Your Story. My new book is the perfect place to begin your journey. Preorder now for just N12,000 (before it goes up to N20,000! and get access to a powerful exclusive bonus:</p>
             <p className='text-[16px] mb-6 text-center md:text-left'><span className='font-bold text-[#101010]'>FREE Masterclass:</span> “Get Started With Your Amplify Journey” — a practical session to kickstart your visibility and voice. This bonus is only available to those who preorder. Inside the book you’ll discover:</p>
            <ul className="space-y-4">
                <li className="flex items-start">
                <div className="mr-2 flex-shrink-0 mt-0.5 w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[16px] sm:text-base">Why expert women stay stuck and small</span>
                </li>
                <li className="flex items-start">
                <div className="mr-2 flex-shrink-0 mt-0.5  w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[16px] sm:text-base">How to break the cycle of perfectionism and procrastination</span>
                </li>
                <li className="flex items-start">
                <div className="mr-2 flex-shrink-0 mt-0.5  w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[16px] sm:text-base">How to build clarity and courage to show up</span>
                </li>
                <li className="flex items-start">
                <div className="mr-2 flex-shrink-0 mt-0.5  w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[16px] sm:text-base">Your first steps toward legacy and visibility</span>
                </li>
                <li className="flex items-start">
                <div className="mr-2 flex-shrink-0 mt-0.5  w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[16px] sm:text-base">An introduction to the Amplify You Framework</span>
                </li>
                
            </ul>
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

export default GetStarted