import React from "react";
import Logo from '../assets/Logo.svg';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="w-full">
            <div className="max-w-[1140px] mx-auto flex flex-row justify-between items-center p-3">

                <div>
                    <img src={Logo} className="w-16 md:w-32 lg:w-43"></img>
                </div>

                <ul className="font-poppins flex gap-5">

                    <Link to={'/'}>
                    <li className="cursor-pointer text-lg px-4 py-1 rounded-full transition-all duration-300 hover:text-[white] hover:bg-[#3989fa]">Home</li>
                    </Link>

                    <Link to={'/templates'}>

                    <li className="cursor-pointer text-lg px-4 py-1 rounded-full transition-all duration-300 hover:text-[white] hover:bg-[#3989fa]">Templates</li>
                    </Link>

                    <li className="cursor-pointer text-lg px-4 py-1 rounded-full transition-all duration-300 hover:text-[white] hover:bg-[#3989fa]">About Us</li>
                    <li className="cursor-pointer text-lg px-4 py-1 rounded-full transition-all duration-300 hover:text-[white] hover:bg-[#3989fa]">Contact</li>
                </ul>


                <div>
                    <Link to='/signin'>
                    <button className="font-poppins bg-[#f1f8fe] text-[#3983fa] rounded-full px-[1.5rem] py-[0.6rem] border border-[#f1f8fe] hover:bg-[#3989fa] hover:text-white transition-all duration-300"><span className="uppercase font-semibold ">My Account</span></button>
                    </Link>
                </div>

            </div>

        </header>
    );
}

export default Navbar;
