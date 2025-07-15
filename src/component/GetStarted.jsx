import React from 'react'
import Image from 'next/image'
import gs from '../assets/gs.png'
import check from '../assets/check.png'

const GetStarted = () => {
  return (
    <div className="px-4 md:px-8 my-6">
    <section className=" text-[#636363CC] py-12 px-4 h-full sm:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mt-6">
          <div className="order-last md:order-first">
            <div className="relative w-full h-auto max-w-full rounded-lg mb-4">
              <div className="relative md:w-[450px] aspect-square sm:aspect-auto sm:h-[300px] md:h-[600px] lg:h-[600px]">
                <Image 
                  src={gs} 
                  alt='what you get illustration' 
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
         <div className='md:w-[550px]'>
            <h1 className="text-[32px] md:text-[30px] text-[#101010] sm:text-[32px] font-bold mb-6 text-center md:text-left">Get Started with your Amplify journey</h1>
            <p className='text-[18px] mb-6 text-center md:text-left'>A practical session to kickstart your visibility and voice. This bonus is only available to those who preorder. Inside this book you will discover:</p>
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
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[16px] sm:text-base">How to build clarity and courage to show up</span>
                </li>
                <li className="flex items-start">
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                    <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-[16px] sm:text-base">Your first steps toward legacy and visibility</span>
                </li>
            </ul>
            <div className="flex justify-center md:justify-start">
                <button className="mt-[20px] bg-[#E8B4B8] drop-shadow-sm text-white rounded-[10px] w-[269px] h-[51px] text-[16px]">
                Pre-order the book
                </button>
            </div>
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default GetStarted