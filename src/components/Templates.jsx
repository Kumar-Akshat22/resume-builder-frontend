import { useCallback } from "react";
import React, { useState } from "react";
import TemplateOne from "../assets/Template-1.png";
import TemplateTwo from "../assets/Template-2.png";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft , ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const templates = [
  {
    id: 1,
    name: "Classic Resume",
    category: "Corporate",
    image:
      TemplateOne,
  },
  {
    id: 2,
    name: "Creative Portfolio",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 3,
    name: "Tech Innovator",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 4,
    name: "Executive Suite",
    category: "Management",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070",
  },
];

function Templates() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
      });
    
      const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
      }, [emblaApi]);
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, [emblaApi]);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-indigo-50" id="templates">
      {/* <div className='container max-w-[1140px] mx-auto flex flex-col items-center py-20'> */}
      {/* Title */}
      {/* <h1 className='text-[2.2rem] font-poppins pb-12 bg-gradient-to-r from-[#5433FF] to-[#20BDFF] inline-block text-transparent bg-clip-text'>Start by picking a template:</h1> */}

      {/* Resume Cards */}
      {/* <div className='w-full flex justify-around gap-9 py-12'>

                <div className='border-2 border-[#3983fa] w-[40%] relative group cursor-pointer'>
                    <img src={TemplateOne}></img>
                
                    <button className='absolute bottom-[9%] left-24 bg-[#f1f8fe] px-[2.5rem] py-[0.6rem] rounded-full text-lg uppercase font-poppins text-[#3983fa] font-semibold hover:bg-[#3983fa] hover:text-white transition-all duration-300 hidden group-hover:block' onClick= {()=>{handleResumeChange('roverResume')}}>Use this Template</button>
                    
                </div>

                <div className='border-2 border-[#3983fa] w-[40%] relative group cursor-pointer'>
                    <img src={TemplateTwo}></img>

                    <button onClick={()=>{handleResumeChange('resume-slash')}} className='absolute bottom-[9%] left-24 bg-[#f1f8fe] px-[2.5rem] py-[0.6rem] rounded-full text-lg uppercase font-poppins text-[#3983fa] font-semibold hover:bg-[#3983fa] hover:text-white transition-all duration-300 hidden group-hover:block' >Use this Template</button>

                </div>
            </div> */}

      {/* <div className='bg-[#4885e6] mt-9 p-4 rounded-full text-white cursor-pointer hover:bg-[#f1f8fe] hover:text-black transition-all duration-300'>
                <p className='font-poppins text-xl font-medium'>More resume templates will be added soon</p>
            </div> */}
      {/* </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-600">
            Professional Templates
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our collection of expertly designed templates
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
            
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                <div className="group relative overflow-hidden rounded-2xl bg-gray-800">
                  <div className="aspect-[4/5]">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {template.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      {template.category}
                    </p>
                  </div>
                </div>
                </motion.div>
              ))}
            </div>
            <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          </div>
          

          <div className="text-center mt-12">
          <motion.button
            
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            More Templates Will Be Added Soon 
          </motion.button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Templates;
