import React from 'react'
import Image from 'next/image'
import gs from '../assets/gs.png'
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
                  src={gs} 
                  alt='what you get illustration' 
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default WhatYouGet