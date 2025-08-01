import React from 'react'
import { Star } from 'lucide-react';

const testimonials = () => {
     const testimonials = [
    {
      name: "Joan Oke, 60+ Author, “The Heartbeat of the Home”",
      text: "Before joining this course, I felt a strong urge to share a message that resonated deeply with me, but I hadn't found my voice. However, through this course's structured and supportive approach, I've been empowered to articulate my thoughts and bring my book to life. I wholeheartedly recommend this class to anyone looking to share their story."
    },
    {
      name: "Bridget Adegboye, 30+ Teens Coach",
      text: "Working with Coach Brenda under the Executive Authors program made me realize that everyone has a message to the world. I gained clarity about the message I have been given, I understood my audience and Coach B is guiding me to write in their language. Through this program, I have learned to take small steps in the right direction.Thank you Coach B for being a blessing."
    },
    {
      name: "Salome Danjuma, 40+, Hotel Management professional",
      text: "This training helped me move from procrastination to progress. The structure, support, and clarity I gained made writing feel doable and even exciting. I finally believe in my voice again. Highly recommended"
    },
    {
      name: "Fifunwa Ikobayo, 40+, author of “Walking with God, waiting by Faith” ",
      text: "I feel really privileged to have attended the Executive Authors program. Prior to joining by Divine Providence, I was a bit scattered on my book writing journey but after joining I received clarity and direction. Thank you for the opportunity."
    }
  ];

  const StarRating = () => (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
  return (
     <section>
            
            <div className='flex flex-col items-center justify-center py-[60px] px-10 border border-[#DADEE3] rounded-[25px] mt-6 md:mx-[80px] mx-[20px] mb-10 '>
                <div className=' text-center mb-[16px] md:w-[790px] w-[300px]'>
                    <h1 className=' md:text-[38px] text-[34px] mb-4 font-semibold'>What women are saying</h1>
                    <p className='text-[16px] text-[#636363CC] '>Whether you start with the book, join the program, or sign up for 1-on-1 coaching, this is your time to amplify your voice and legacy. The world needs your story. Your voice is valid. Your time is now.</p>
                </div>

                <div className="bg-white py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4">
        {/* First Video */}
        <div className="flex-shrink-0">
          <iframe
            className="rounded-[20px] md:w-[400px] md:h-[450px] h-[400px] w-[290px]"
            src="https://www.youtube.com/embed/w68MPEQcqUc?si=aGME6rVvPf-fsQcs"
            title="Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Second Video */}
        <div className="flex-shrink-0">
          <iframe
            className="rounded-[20px] md:w-[400px] md:h-[450px] h-[400px] w-[290px]"
            src="https://www.youtube.com/embed/Hu7N6rqat2M?si=gfcgA04eW8CVdLpc"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
                
              <div className="md:w-[950px] w-[350px] p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:-space-x-0.5">
                    {testimonials.map((testimonial, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-sm p-6 border border-gray-200 `}>
                        <StarRating />
                        <p className="text-[#636363CC] text-center leading-relaxed mb-6">
                        {testimonial.text}
                        </p>
                        <div className="text-center">
                        <h3 className="font-extrabold text-[#101010] text-lg">
                            {testimonial.name}
                        </h3>
                        </div>
                    </div>
                    ))}
                </div>
    </div>
            
                
    
            </div>
            
    
            
        </section>
  )
}

export default testimonials