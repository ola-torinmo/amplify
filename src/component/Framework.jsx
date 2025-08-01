import React from 'react';
import Image from 'next/image'
import check from '../assets/check.png';
const Framework = () => {
  const processSteps = [
    {
      number: 1,
      title: "Clarify",
      description: "Uncover the message that's been buried under fear, imposter syndrome, or perfectionism. Identify your core message and ideal audience."
    },
    {
      number: 2,
      title: "Create",
      description: "Turn your story, lessons, or expertise into a legacy product-book, keynote, podcast, or online course. From rough ideas to refined content outline."
    },
    {
      number: 3,
      title: "Brand",
      description: "Build a strong personal brand that reflects your voice, values, and vision. You'll stand out with credibility and confidence."
    },
    {
      number: 4,
      title: "Publish",
      description: "You'll get tools, guidance, and templates to self-publish or partner with trusted publishing platforms. We'll help you bring your project to life professionally."
    },
    {
      number: 5,
      title: "Amplify",
      description: "Learn how to launch, promote, and scale your voice through platforms, media, and strategic visibility. Your voice will echo far beyond your inner circle."
    },
    
  ];

  return (
    <div className='md:px-4 px-3 '>
    <div className="max-w-6xl mx-auto md:my-4 border rounded-[40px] border-[#DADEE3] py-[60px]" id="how-it-works">
     <div className='mx-auto text-center md:w-[900px] mb-6'>
        <h1 className="text-[32px] text-[#101010] md:text-[38px] font-semibold mb-4">Introducing the AmplifyYOU program</h1>
        <p className='text-[16px] mb-6 leading-9 text-[#636363CC]'>A visibility and legacy-building journey for women ready to stop playing small.<br/>
        This isn't just a writing course. It isn't just personal branding,<br/>
        it is a 12-week transformational experience for women who are ready to:</p>
        <ul className="space-y-4 mx-auto w-fit text-center text-[#636363CC]">
          <li className="text-[16px] sm:text-base">
            <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
            Own their message
          </li>
          <li className="text-[16px] sm:text-base">
            <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
            Create their signature body of work
          </li>
          <li className="text-[16px] sm:text-base">
            <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
            Build a compelling personal brand
          </li>
          <li className="text-[16px] sm:text-base">
            <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
            Finally share their story with the world
          </li>
        </ul>
        <p className="text-center text-[#636363CC] mt-6 mb-6 w-[350px] md:w-full mx-auto">
          Walk through our 5-step framework to write with purpose and show up like the powerhouse you are.
        </p>
      </div>



  <h1 className="text-[38px] font-medium text-center pt-10 ">The AmplifyYOU Framework</h1>
  
  
  <div className="flex flex-col items-center space-y-8 pb-10 pt-6">
    {/* Top row - 3 cards centered */}
    <div className="flex flex-wrap justify-center gap-8">
      {processSteps.slice(0, 3).map((step) => (
        <div key={step.number} className="bg-[#DF3841] rounded-[18px] shadow-sm w-[314px] border border-gray-100 p-6">
          <div className="flex flex-col h-full">
            <div className="w-8 h-8 rounded-full border bg-white text-[#DF3841] flex items-center justify-center mb-4">
              <span className="text-sm font-medium">{step.number}</span>
            </div>
            <h3 className="font-medium text-lg mb-2 text-white">{step.title}</h3>
            <p className="text-gray-500 text-sm text-white">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
   
    {/* Bottom row - 2 cards centered */}
    <div className="flex flex-wrap justify-center gap-8">
      {processSteps.slice(3).map((step) => (
        <div key={step.number} className="bg-[#DF3841] rounded-[18px] w-[314px] shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col h-full">
            <div className="w-8 h-8 rounded-full border bg-white text-[#DF3841] flex items-center justify-center mb-4">
              <span className="text-sm font-medium">{step.number}</span>
            </div>
            <h3 className="font-medium text-lg mb-2 text-white">{step.title}</h3>
            <p className="text-gray-500 text-sm text-white">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="text-center pt-12">
  <h1 className="text-[32px] text-[#101010] sm:text-[38px] font-bold mb-4">What you'll get</h1>
  
  <ul className="space-y-4 mx-auto w-fit text-center text-[#636363CC]">
    <li className="text-[18px] sm:text-base">
      <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
      6 weeks of live group classes (one session per week)
    </li>
    <li className="text-[18px] sm:text-base">
      <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
      6 weeks of implementation support with direct feedback
    </li>
    <li className="text-[18px] sm:text-base">
      <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
      Workbooks, templates & publishing guides
    </li>
    <li className="text-[18px] sm:text-base">
      <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
      A thriving private community of women on the same journey
    </li>
    <li className="text-[18px] sm:text-base">
      <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
      Lifetime access to all replays and materials
    </li>
  </ul>

</div>
</div>
</div>
  );
};

export default Framework;