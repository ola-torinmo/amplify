import React from 'react'
import { Star } from 'lucide-react';

const testimonials = () => {
     const testimonials = [
    {
      name: "Karen Nissi",
      text: "I went from hiding behind my work to confidently sharing my expertise on LinkedIn. In just 12 weeks, I gained 3,000 new followers and landed two speaking opportunities. This program didn't just teach me to write it taught me to own my voice."
    },
    {
      name: "Adetokunbo Oluwatimilehin",
      text: "Before this program, I was the woman who had great ideas but never spoke up in meetings. Now I'm writing thought leadership articles, being quoted in industry publications, and my CEO asked me to represent our company at a major conference."
    },
    {
      name: "Aisha Raheem",
      text: "I've taken writing courses before, but this was different. It wasn't about grammar or structure it was about finding the courage to share my story. I went from zero online presence to being recognized as a thought leader in my field. The transformation was incredible."
    },
    {
      name: "Ebuka Igbinedion",
      text: "Before this program, I was the woman who had great ideas but never spoke up in meetings. Now I'm writing thought leadership articles, being quoted in industry publications, and my CEO asked me to represent our company at a major conference."
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
            
            <div className='flex flex-col items-center justify-center py-[75px] px-10 border border-[#DADEE3] rounded-[25px] mt-[40px] md:mx-[80px] mx-[20px] mb-12 '>
                <div className=' text-center mb-[16px] md:w-[790px] w-[300px]'>
                    <h1 className=' md:text-[38px] text-[34px] font-semibold'>What women are saying</h1>
                    <p className='text-[16px] text-[#636363CC] '>Whether you start with the book, join the program, or sign up for 1-on-1 coaching, this is your time to amplify your voice and legacy. The world needs your story. Your voice is valid. Your time is now.</p>
                </div>
                
              <div className="md:w-[950px] w-[310px] mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 -space-x-0.5">
                    {testimonials.map((testimonial, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-sm p-6 border border-gray-200 `}>
                        <StarRating />
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                        {testimonial.text}
                        </p>
                        <div className="text-center">
                        <h3 className="font-semibold text-gray-800 text-lg">
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