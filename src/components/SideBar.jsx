import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPerson, BsSave2 } from "react-icons/bs";
import { PiSignOut } from "react-icons/pi";
import { FaRegFileLines, FaGraduationCap } from "react-icons/fa6";
import { LuFolderGit2 } from "react-icons/lu";
import { IoBriefcase } from "react-icons/io5";
import { FaMedal } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ContactRound, FileText } from "lucide-react";

const SideBar = () => {
  const navigate = useNavigate();

  const [sectionId, setSectionId] = useState();
  const [isProfileCompleted , setIsProfileCompleted] = useState(true)

  const handleSectionClick = (id) => {
    setSectionId(id);
  };

  const handleSignOut = async () => {
    const res = await axios.post("/api/v1/users/signout", {
      headers: { Authorization: localStorage.getItem("AccessToken") },
    });
    if (res.data.statusCode === 202) {
      localStorage.removeItem("AccessToken");
      localStorage.removeItem("RefreshToken");
      toast.success("Logged Out !!! ");
      navigate("/");
    }
  };
  const sections = [
    { id: "personal-details", label: "Personal Details", icon: BsPerson , path: '/setting/personal-details' },
    { id: "education", label: "Education", icon: FaGraduationCap , path: '/setting/education'  },
    { id: "project", label: "Projects", icon: LuFolderGit2 , path: '/setting/project' },
    { id: "work-expr", label: "Work Experience", icon: IoBriefcase , path: '/setting/work-expr' },
    { id: "skills", label: "Skills", icon: FaMedal , path: '/setting/skills' },
    { id: "myPortfolio", label: "My Portfolio", icon:  ContactRound, path: '/setting/myPortfolio' },
    { id: "myResumes", label: "My Resumes", icon:  FileText, path: '/setting/myResume' },
  ];

  useEffect(()=>{

    //TODO: Backend API call

  },[])

  return (
    <div className="w-64 fixed top-0 left-0 bg-white border-r h-screen py-5">
      <div className="sticky top-0 bg-white border-b flex items-center gap-3 p-2">
        <div>
          <FaRegFileLines className="h-7 w-7 text-blue-500" />
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-900">Resume Builder</h1>
          <p className="text-sm text-gray-500">Build your perfect resume</p>
        </div>
      </div>

      <nav className="p-3 space-y-1">
        {sections.map(({ id, label, icon: Icon , path }) => (
          <NavLink key={path} to={path}>

          <button
            key={id}
            disabled = {!isProfileCompleted}
            onClick={() => handleSectionClick(id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
              sectionId === id
                ? "bg-blue-50 text-blue-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Icon
              className={`h-5 w-5 transition-colors duration-200 ${
                sectionId === id ? "text-blue-500" : "text-gray-400"
              }`}
            />

            <span className="font-medium">{label}</span>
          </button>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
        <div className="text-md text-center text-gray-500">
          © {new Date().getFullYear()} Resume Builder
        </div>
      </div>
    </div>
  );
};

export default SideBar;
