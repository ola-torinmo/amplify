import React from 'react';

const Framework = () => {
  const processSteps = [
    {
      number: 1,
      title: "Clarify",
      description: "Uncover your unique message, mission, and audience."
    },
    {
      number: 2,
      title: "Create",
      description: "Develop your book, signature content, or thought leadership platform."
    },
    {
      number: 3,
      title: "Brand",
      description: "Package your voice and visuals into a compelling personal brand."
    },
    {
      number: 4,
      title: "Publish",
      description: "Learn how to publish your book or message product — properly and professionally."
    },
    {
      number: 5,
      title: "Amplify",
      description: "Build your platform, land speaking gigs, and grow your digital presence."
    },
    
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6" id="how-it-works">
  <h1 className="text-[44px] font-medium text-center mb-12">The AmplifyYOU framework</h1>
  <p className="text-center text-gray-600 mb-12 w-[350px] md:w-full mx-auto">
    Walk through our signature 5-step framework to write with purpose and show up like the powerhouse you are:
  </p>
  
  <div className="flex flex-col items-center space-y-8">
    {/* Top row - 3 cards centered */}
    <div className="flex flex-wrap justify-center gap-8">
      {processSteps.slice(0, 3).map((step) => (
        <div key={step.number} className="bg-white rounded-[18px] shadow-sm w-[314px] border border-gray-100 p-6">
          <div className="flex flex-col h-full">
            <div className="w-8 h-8 rounded-full border border-[#E8B4B8] text-[#E8B4B8] flex items-center justify-center mb-4">
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
            <div className="w-8 h-8 rounded-full border border-[#E8B4B8] text-[#E8B4B8] flex items-center justify-center mb-4">
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