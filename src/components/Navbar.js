import React from "react";
import Logo from '../assets/Logo.svg';

function Navbar() {
    return (
        <nav className="w-full shadow-md">
            <div className="max-w-[1140px] mx-auto p-2 flex justify-between items-center">

                <div>
                    <img src={Logo} className="w-16 md:w-32 lg:w-43"></img>
                </div>

                <div>
                    <p className="text-[2rem]">Resume Builder</p>
                </div>

                <div className="flex gap-4 cursor-pointer">
                    <button className="border px-3 py-1">Sign In</button>
                    <button className="border px-3 py-1">Sign Up</button>
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;
