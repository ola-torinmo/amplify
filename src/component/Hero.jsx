import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png';


const Hero = () => {
  return (
    <section>
        <Image
          src={logo}
          className='w-[300px] h-[60px] mx-auto mt-[40px]'
          alt='logo'
        />
       
        <div className="bg-white md:pb-12 pt-3 md:pt-1 ">
      <div className="flex flex-col-reverse mx-auto min-h-screen ">
        {/* Left side - Video section */}
        <div className="mx-auto flex items-center justify-center">
          <div className="md:mx-20 my-auto">
            {/* YouTube Video Embed */}
            <iframe
              className="rounded-[20px] md:w-[500px] md:h-[650px] h-[470px] w-[330px]"
              src="https://www.youtube.com/embed/eBszrV1KNd0?si=kya5I05I0V0W530S"
              title="AmplifyYOU Program Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right side - Content section */}
        <div className=" px-4 lg:px-8 pt-12 pb-6  flex flex-col justify-center">
          <div className="max-w-[1043px] mx-auto text-center">
            {/* Main heading */}
            <h1 className="md:text-[48px] text-[34px]  font-semibold mb-4 leading-tight">
              Where Women Get Their Message, Their Medium, and Their Mantle
            </h1>
            
            {/* Subtitle */}
            <p className="text-[#636363CC] text-[20px] mb-6 leading-relaxed">
              This message is for YOU, Yes, You. Do you know that You’re Not Just Meant to Work? You’re Meant to Be Seen. You’ve done the work. You’ve earned the degrees. You’ve built the experience. But still, the world doesn’t fully see you. At AmplifyYOU, we help expert women like you, break free from invisibility, silence perfectionism, and show up with boldness, clarity, and confidence because brilliance should never stay buried.


            </p>
            
            
          </div>
        </div>
      </div>
    </div>

        
    </section>
  )
}

export default Hero