import React from 'react'
import DescriptionImageOne from '../assets/DescriptionImage-1.png'
import DescriptionImageTwo from '../assets/DescriptionImage-2.png'
import PDFDownloadImage from '../assets/PDFDownloadImage.png'

function Details() {
  return (
    <section className='w-full bg-gradient-to-t from-white to-[#0b77ed40]'>
      <div className='container max-w-[1140px] mx-auto flex flex-col items-center py-20'>
        {/* Title */}
        <h1 className='text-[2.2rem] font-poppins pb-12 bg-gradient-to-r from-[#5433FF] to-[#ff20ec] inline-block text-transparent bg-clip-text'>Remove Headache of Creating a Resume!</h1>

        <div className='w-full flex py-20'>
          {/* Left Image */}
          <div className='w-full md:w-[50%]'>
            <img src={DescriptionImageOne} width='420'></img>
          </div>


          {/* Right Content */}
          <div className='w-full md:w-[50%]'>
            <div className="w-[95%] xl:w-[95%] px-5 lg:px-0">
              <h1
                className="font-poppins font-medium sm:text-[28px] text-[22px] md:text-[1.7rem] mt-5 md:mt-0 leading-[24px] md:leading-[57.6px]">
                Make your resume easily</h1>
              <p className="font-poppins sm:text-[1rem] text-[18px] mt-[24px] leading-8 text-[#233143]">Build your resume fast and easily with our online resume builder. Leave the hassle of taking care of formatting the text, handling the design. We have taken care of that, you just need to fill your details and generate your resume. It's that simple!</p>
            </div>
          </div>
        </div>

        <div className='w-full flex py-20'>
          {/* Left Content */}
          <div className='w-full md:w-[50%]'>

            <div className="w-[95%] xl:w-[95%] px-5 lg:px-0">
              <h1
                className="font-poppins font-medium sm:text-[28px] text-[22px] md:text-[1.7rem] mt-5 md:mt-0 leading-[24px] md:leading-[57.6px]">
                Choose from a wide range of templates
                </h1>
              <p className="font-poppins sm:text-[1rem] text-[18px] mt-[24px] leading-8 text-[#233143]">Select any template from a wide range of templates available on the website. All the templates are ATS friendly. These templates are creative and clean by their designs.</p>
            </div>

          </div>


          {/* Right Image */}
          <div className='w-full md:w-[50%]'>
            <img src={DescriptionImageTwo}></img>
          </div>
        </div>

        <div className='w-full flex py-20'>
          {/* Left Image */}
          <div className='w-full md:w-[50%]'>

            <img src={PDFDownloadImage}></img>
          </div>


          {/* Right Content */}
          <div className='w-full md:w-[50%]'>
            <div className="w-[95%] xl:w-[95%] px-5 lg:px-0">
              <h1
                className="font-poppins font-medium sm:text-[28px] text-[22px] md:text-[1.7rem] mt-5 md:mt-0 leading-[24px] md:leading-[57.6px]">
                Generate unlimited resumes in PDF fromat.</h1>
              <p className="font-poppins sm:text-[1rem] text-[18px] mt-[24px] leading-8 text-[#233143]">Create countless tailored resumes for every job you're applying for. Add or remove sections, change templates, or tweak the content as needed. Download your ready resume in PDF and start applying for jobs instantly.</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Details