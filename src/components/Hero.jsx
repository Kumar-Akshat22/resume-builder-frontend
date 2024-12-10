import React from "react";
import HeroImage from "../assets/HeroImage.png";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="w-full" id="hero">
      {/* <div className="container max-w-[1140px] mx-auto flex flex-row justify-between items-center py-24"> */}

      {/* Left Div */}
      {/* <div className="w-full px-5 lg:px-0 md:w-[60%]">

          <div className="md:w-[80%]">
            
            <h1 className="font-poppins text-[2.8rem] mt-0 leading-[3.6rem]"><span className="">Online Resume Builder </span> 
            That is {" "}
            <ReactTyped strings={["Quick" , "Easy" , "Free to use"]}
                        typeSpeed={200}
                        loop
                        backDelay={100}
                        backSpeed={70}
                        cursorChar="|"
                        showCursor={true}
                        className="text-[#3983fa]" />
            </h1>

            <h1>
              
            </h1>

            
            <p className="mt-[3rem] leading-8 font-poppins text-[18px] font-light">Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</p>

            <Link to="/user">
            <button className="mt-[1.7rem] bg-[#f1f8fe] px-[2.5rem] py-[0.6rem] rounded-full text-lg uppercase font-poppins text-[#3983fa] font-semibold hover:bg-[#3983fa] hover:text-white transition-all duration-300">Create your Resume Now</button>
            </Link>

          </div>
        </div> */}

      {/* Right Div */}
      {/* <div className="w-[46%] h-auto">
          <img src={HeroImage}></img>
        </div> */}

      {/* </div> */}
      <div className="pt-20 bg-gradient-to-b from-white to-indigo-50 min-h-[95vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-[50px]">
            <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
              <span className="block">Build Your Career with</span>
              <span className="block text-blue-500">
                AI-Powered Career Builder
              </span>
              <span>That is <ReactTyped strings={["Quick" , "Easy" , "Free to use"]}
                        typeSpeed={200}
                        loop
                        backDelay={100}
                        backSpeed={70}
                        cursorChar="|"
                        showCursor={true}
                        className="text-[#3983fa]" /></span> 
              
            </h1>
            
            <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Create professional resumes and portfolios in minutes with our
              AI-powered platform. Stand out from the crowd and land your dream
              job faster.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/signin">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 text-white md:py-4 md:text-lg md:px-10">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#features" >
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Learn More
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
