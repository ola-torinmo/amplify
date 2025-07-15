import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png';
import check from '../assets/check.png';

const Hero = () => {
  return (
    <section>
        <Image
          src={logo}
          className='w-[300px] h-[60px] mx-auto mt-[40px]'
          alt='logo'
        />
        <div className='flex flex-col items-center justify-center py-[75px] px-10 border border-[#DADEE3] rounded-[25px] mt-[40px] md:mx-[80px] mx-[20px] mb-16 '>
            <div className=' text-center mb-[16px] md:w-[900px] w-[300px]'>
                <h1 className=' md:text-[48px] text-[34px] font-semibold '>Your Message, Your Medium, Your Mantle</h1>
                <p className='text-[16px] text-[#636363CC] '>You're not just here to write, you're here to rise, to own your voice, to build your platform, to walk boldly in your calling.</p>
            </div>
            <div className=' text-center mb-[16px] md:w-[920px] w-[300px] '>
                <h2 className='md:text-[36px] text-[28px] font-bold'>At AmplifyYOU</h2>
                <p className='text-[16px] text-[#636363CC]'>Whether you're a thought leader, expert, or everyday woman with a story that won't let you rest, AmplifyYOU is your roadmap from hidden to heard, from message to movement..</p>
            </div>
            <div className='text-center mb-[16px] md:w-[750px] w-[300px]'>
                <h1 className=' md:text-[32px] text-[32px] font-semibold'>Introducing the AmplifyYOU program</h1>
                <p className='text-[16px] text-[#636363CC]'>A visibility and legacy-building journey for women ready to stop playing small. This isn’t just a writing course, it’s a 12-week transformation experience for women who are ready to:</p>
                <ul className="space-y-4 mt-[15px]">
                    <li className="flex items-start justify-center">
                        <div className="mr-2 flex-shrink-0 mt-0.5 w-5 h-5">
                            <Image src={check} alt='check' width={18} height={18} />
                        </div>
                        <span className="text-[14px] sm:text-base text-[#636363CC]">Own their message</span>
                    </li>
                    <li className="flex items-start justify-center">
                        <div className="mr-2 flex-shrink-0 mt-0.5 w-5 h-5">
                            <Image src={check} alt='check' width={18} height={18} />
                        </div>
                        <span className="text-[14px] sm:text-base text-[#636363CC]">Create their signature body of work</span>
                    </li>
                    <li className="flex items-start justify-center">
                        <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                            <Image src={check} alt='check' width={18} height={18} />
                        </div>
                        <span className="text-[14px] sm:text-base text-[#636363CC]">Build a compelling personal brand</span>
                    </li>
                    <li className="flex items-start justify-center">
                        <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                            <Image src={check} alt='check' width={18} height={18} />
                        </div>
                        <span className="text-[14px] sm:text-base text-[#636363CC]">Finally share their story with the world</span>
                    </li>
                </ul>
                <div className=" justify-center ">
                    <a href="https://selar.com/8g3657" target="_blank" rel="noopener noreferrer">
                    <button className="mt-[40px] bg-[#E8B4B8] drop-shadow-sm text-white rounded-[10px]  w-[269px] h-[51px] text-[16px] ">
                Pre-order the book
                </button></a>
                
                </div>
            </div>

        </div>
        

        
    </section>
  )
}

export default Hero