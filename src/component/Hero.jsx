import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png';


const Hero = () => {
  return (
    <section>
        <Image
          src={logo}
          className='md:w-[180px] md:h-[180px] w-[100px] h-[100px] mx-auto mt-[40px]'
          alt='logo'
        />
       
        <div className="bg-white md:pb-12 pb-16 pt-3 md:pt-12 mx:px-10 px-3 my-1  ">
      <div className="flex flex-col-reverse mx-auto min-h-screen bg-[#DF3841] text-white border rounded-[40px]  pb-[90px] pt-10">
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
            <p className="text-white text-[16px] mb-6  leading-9">
              This message is for YOU<br/>
               Yes, You.<br /> 
               Do you know that You’re Not Just Meant to Work?<br/>
               You’re Meant to Be Seen.<br/>
               You’ve done the work.<br/>
               You’ve earned the degrees.<br/>
               You’ve built the experience.<br/>
               But still, the world doesn’t fully see you.<br/>
               At AmplifyYOU, we help expert women like you, break free from invisibility,<br/>
               silence perfectionism, and show up with boldness, clarity, and confidence<br/>
               Because brilliance should never stay buried.


            </p>
            
            
          </div>
        </div>
      </div>
    </div>

        
    </section>
  )
}

export default Hero