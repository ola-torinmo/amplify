import React from 'react';

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
    <div className="max-w-6xl mx-auto px-4 " id="how-it-works">
  <h1 className="text-[44px] font-medium text-center mb-4">What you’ll learn</h1>
  <p className="text-center text-gray-600 mb-12 w-[350px] md:w-full mx-auto">
    Walk through our 5-step framework to write with purpose and show up like the powerhouse you are.
  </p>
  
  <div className="flex flex-col items-center space-y-8">
    {/* Top row - 3 cards centered */}
    <div className="flex flex-wrap justify-center gap-8">
      {processSteps.slice(0, 3).map((step) => (
        <div key={step.number} className="bg-white rounded-[18px] shadow-sm w-[314px] border border-gray-100 p-6">
          <div className="flex flex-col h-full">
            <div className="w-8 h-8 rounded-full border bg-[#DF3841] text-white flex items-center justify-center mb-4">
              <span className="text-sm font-medium">{step.number}</span>
            </div>
            <h3 className="font-medium text-lg mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
   
    {/* Bottom row - 2 cards centered */}
    <div className="flex flex-wrap justify-center gap-8">
      {processSteps.slice(3).map((step) => (
        <div key={step.number} className="bg-white rounded-[18px] w-[314px] shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col h-full">
            <div className="w-8 h-8 rounded-full border bg-[#DF3841] text-white flex items-center justify-center mb-4">
              <span className="text-sm font-medium">{step.number}</span>
            </div>
            <h3 className="font-medium text-lg mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Framework;