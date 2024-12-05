import React from 'react'
import StepOneImage from '../assets/ResumeTemplate.svg'
import StepTwoImage from '../assets/AddDetails.svg'
import StepThreeImage from '../assets/Edit.svg'
import StepFourImage from '../assets/Download.svg'

function StepsSection() {
  return (
    <section className='w-full'>

      <div className='container max-w-[1140px] mx-auto flex flex-col items-center py-20'>

        {/* Title */}
        <h1 className='text-[2.2rem] font-poppins pb-12 bg-gradient-to-r from-[#5433FF] to-[#20BDFF] inline-block text-transparent bg-clip-text'>Just four simple steps to download your resume:</h1>

        {/* Steps */}
        <div className='w-full mx-auto flex justify-around gap-6 py-16'>

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

        </div>

        {/* Button */}
        <button className='mt-[1.7rem] bg-[#f1f8fe] px-[2.5rem] py-[0.6rem] rounded-full text-lg uppercase font-poppins text-[#3983fa] font-semibold hover:bg-[#3983fa] hover:text-white transition-all duration-300'>Create my Resume</button>


      </div>

    </section>
  )
}

export default StepsSection