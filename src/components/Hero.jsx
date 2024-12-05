import React from "react";
import HeroImage from '../assets/HeroImage.png'
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

function Hero() {
  return (

    <section className="w-full border-b">

      <div className="container max-w-[1140px] mx-auto flex flex-row justify-between items-center py-24">


        {/* Left Div */}
        <div className="w-full px-5 lg:px-0 md:w-[60%]">

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
        </div>


        {/* Right Div */}
        <div className="w-[46%] h-auto">
          <img src={HeroImage}></img>
        </div>

      </div>

    </section>
  );
}

export default Hero;
