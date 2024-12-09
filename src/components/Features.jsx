import React from "react";
import StepOneImage from "../assets/ResumeTemplate.svg";
import StepTwoImage from "../assets/AddDetails.svg";
import StepThreeImage from "../assets/Edit.svg";
import StepFourImage from "../assets/Download.svg";
import { FileText, PenTool , Globe , Sparkles , BarChart } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Globe,
    title: "Portfolio Website Generation",
    description:
      "Create a stunning portfolio website showcasing your work and experience.",
  },
  {
    icon: FileText,
    title: "Portfolio Editor",
    description:
      "Easily manage and update your portfolio website with our intuitive editor.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Resume Generation",
    description:
      "Let our AI create a professional resume tailored to your industry and experience.",
  },
  {
    icon: BarChart,
    title: "Resume Analysis",
    description:
      "Get instant feedback and suggestions to improve your resume impact.",
  },
  {
    icon: PenTool,
    title: "AI Content Enhancement",
    description:
      "Transform basic bullet points into compelling achievements with our AI writer.",
  },
  
  
];

function Features() {
  return (
    <section className="w-full">
      {/* <div className='container max-w-[1140px] mx-auto flex flex-col items-center py-20'> */}

      {/* Title */}
      {/* <h1 className='text-[2.2rem] font-poppins pb-12 bg-gradient-to-r from-[#5433FF] to-[#20BDFF] inline-block text-transparent bg-clip-text'>Just four simple steps to download your resume:</h1> */}

      {/* Steps */}
      {/* <div className='w-full mx-auto flex justify-around gap-6 py-16'>

          <div className='flex flex-col items-baseline justify-center gap-4'>
            <div className='aspect-square'>

              <img src={StepOneImage} width='156' height='235'></img>
            </div>
            <div className='font-poppins w-[2.4rem] bg-[#aac8f8] aspect-square rounded-full text-center flex justify-center items-center mt-5'>
              <span className='text-white'>1</span>
            </div>

            <p className='font-poppins'>Choose a template</p>
          </div>

          <div className='flex flex-col items-baseline justify-center gap-4'>

            <div className='aspect-square'>

              <img className='' src={StepTwoImage} width='156' height='235' ></img>
            </div>
            <div className='font-poppins w-[2.4rem] bg-[#aac8f8] aspect-square rounded-full text-center flex justify-center items-center mt-5' >
              <span className='text-white font-poppins'>2</span>
            </div>

            <p className='font-poppins'>Enter your details</p>
          </div>

          <div className='flex flex-col items-baseline justify-center gap-4'>
            <div className='aspect-square'>

              <img className='' src={StepThreeImage} width='156' height='235'></img>
            </div>
            <div className='font-poppins w-[2.4rem] bg-[#aac8f8] aspect-square rounded-full text-center flex justify-center items-center mt-5'>
              <span className='text-white font-poppins'>3</span>
            </div>

            <p className='font-poppins'>Customize the content</p>
          </div>

          <div className='flex flex-col items-baseline justify-center gap-4'>

            <div className='aspect-square'>

              <img src={StepFourImage} width='156' height='235'></img>
            </div>
            <div className='w-[2.4rem] bg-[#aac8f8] aspect-square rounded-full text-center flex justify-center items-center mt-5'>
              <span className='text-white font-poppins'>4</span>
            </div>

            <p className='font-poppins'>Download the resume in PDF.</p>

          </div>

        </div> */}

      {/* Button */}
      {/* <button className='mt-[1.7rem] bg-[#f1f8fe] px-[2.5rem] py-[0.6rem] rounded-full text-lg uppercase font-poppins text-[#3983fa] font-semibold hover:bg-[#3983fa] hover:text-white transition-all duration-300'>Create my Resume</button> */}

      {/* </div> */}

      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900">
                Powered by AI
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Leverage cutting-edge AI technology to build your career
              </p>
            </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white cursor-pointer p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-200">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
