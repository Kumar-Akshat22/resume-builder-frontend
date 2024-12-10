import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, Sparkle, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="bg-transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                AI Career Builder
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#templates"
              className="text-black text-[17px] hover:text-blue-600 transition-colors"
            >
              Templates
            </a>
            <a
              href="#features"
              className="text-black text-[17px] hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#team"
              className="text-black text-[17px] hover:text-blue-600 transition-colors"
            >
              Our Team
            </a>

          </div>
            <Link to="/signin">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
