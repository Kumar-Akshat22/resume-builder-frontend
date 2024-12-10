import React from "react";
import { Briefcase } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      {/* <div className='container max-w-[1140px] mx-auto flex justify-between py-20'> */}

      {/* Column 1 */}
      {/* <div className='w-[20%] h-auto flex flex-col gap-5 font-poppins'> */}

      {/* <h1 className='text-lg font-bold'>Resume Builder</h1> */}

      {/* <div>
                        <p className='text-sm text-[#233143]'>Resume builder is a site that helps user to create resumes with just some clicks.</p>
                    </div> */}

      {/* <button className='bg-[#4885e6] mt-9 p-4 rounded-full text-white cursor-pointer hover:bg-[#f1f8fe] hover:text-black transition-all duration-300 uppercase font-semibold'>
                        Create My Resume
                    </button> */}

      {/* Social Links */}
      {/* <div className='mx-auto flex gap-5 mt-5'>
                    <FaGithub size={30} className='cursor-pointer'/>
                    <FaLinkedin size={30} className='cursor-pointer'/>
                    <FaXTwitter size={30} className='cursor-pointer'/>
                    </div> */}
      {/* </div> */}

      {/* Column 2 */}
      {/* <div className='w-[20%] h-auto flex flex-col gap-5 font-poppins'>
                    <h1 className='text-lg font-bold'>Resume</h1>

                    <div>
                        <ul className='flex flex-col gap-3 cursor-pointer'>
                            <li className='text-sm text-[#233143] hover:text-[#6096ed]'>Resume Builder</li>
                            <li className='text-sm text-[#233143] hover:text-[#6096ed]'>Resume Templates</li>
                        </ul>
                    </div>
                </div> */}

      {/* Column 3 */}
      {/* <div className='w-[20%] h-auto flex flex-col gap-5 font-poppins'>

                    <h1 className='text-lg font-bold'>Support</h1>

                    <div>
                        <ul className='flex flex-col gap-3 cursor-pointer'>
                            <li className='text-sm text-[#233143] hover:text-[#6096ed]'>About</li>
                            <li className='text-sm text-[#233143] hover:text-[#6096ed]'>Contact</li>
                        </ul>
                    </div>
                </div> */}

      {/* </div> */}

      {/* <div className='flex justify-center border-t-2 p-4'>

                <p className='font-poppins font-semibold'>© 2024 All rights reserved</p>

            </div> */}
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">AI Career Builder</span>
              </div>
              <p className="mt-4 text-gray-400">
                Building the future of career development with AI
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/signin"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link to="/signin"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio Generator
                  </Link>
                </li>
                <li>
                  <a href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI Features
                  </a>
                </li>
                <li>
                  <a href="#templates"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#team"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link to="https://github.com/Kumar-Akshat22/resume-builder-frontend">
                  <FaGithub className="w-6 h-6" />
                  </Link>
                
                <Link to="">
                  <FaLinkedin className="w-6 h-6" />
</Link>
                <Link to="">
                  <FaXTwitter className="w-6 h-6" />
                  </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-white">
            <p>© 2024 AI Career Builder. All rights reserved.</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
