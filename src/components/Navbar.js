import React from "react";
import Logo from '../assets/Logo.svg';

function Navbar() {
    return (
        <header className="w-full">
            <div className="max-w-[1140px] mx-auto flex flex-row justify-between items-center p-3">

                <div>
                    <img src={Logo} className="w-16 md:w-32 lg:w-43"></img>
                </div>

                <ul className="font-poppins flex gap-5">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Templates</li>
                    <li className="cursor-pointer">About Us</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>


                <div>
                    <button className="font-poppins bg-[#f1f8fe] text-[#3983fa] rounded-full px-[1.5rem] py-[0.6rem] border border-[#f1f8fe] hover:bg-[#3989fa] hover:text-white transition-all duration-300"><span className="uppercase font-semibold ">My Account</span></button>
                </div>

            </div>

        </header>
    );
}

export default Navbar;
