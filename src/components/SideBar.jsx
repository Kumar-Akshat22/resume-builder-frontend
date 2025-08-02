import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPerson, BsSave2 } from "react-icons/bs";
import { FaRegFileLines, FaGraduationCap } from "react-icons/fa6";
import { LuFolderGit2 } from "react-icons/lu";
import { IoBriefcase } from "react-icons/io5";
import { FaMedal } from "react-icons/fa6";
import { matchPath, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  BookMarked,
  FilesIcon,
  BookmarkCheck,
  ContactRound,
  FileText,
  BookA,
  NotebookPen,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { TailSpin } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const [isProfileCompleted, setIsProfileCompleted] = useState(true);

  const location = useLocation(); // Get the current location (URL)
  

  const matchRoute = (route)=>{

    return matchPath({path: route} , location.pathname);
  }

  // const [isSigningOut, setIsSigningOut] = useState(false);

  // const handleSignOut = async () => {
  //   setIsSigningOut(true);
  //   // Simulate sign-out process
  //   try {
  //     // Simulate sign-out process
  //     await new Promise((resolve) => setTimeout(resolve, 2000));

  //     const res = await axios.post("/api/v1/users/signout", {
  //       headers: { Authorization: localStorage.getItem("AccessToken") },
  //     });

  //     if (res.data.statusCode === 202) {
  //       localStorage.removeItem("AccessToken");
  //       localStorage.removeItem("RefreshToken");
  //       toast.success("Logged Out");
  //       navigate("/"); // Redirect to home or any other page after sign-out
  //     } else {
  //       toast.error("Error signing out, please try again.");
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong while signing out.");
  //   } finally {
  //     setIsSigningOut(false); // Close the modal after process is done
  //     navigate("/signin"); // Redirect to sign in page after sign-out
  //   }
  // };

  const sections = [

    {
      id: "profile-completion",
      label: "Profile Completion",
      icon: BookmarkCheck,
      path: "/dashboard/profile-completion",
    },
    {
      id: "personal-details",
      label: "Personal Details",
      icon: BsPerson,
      path: "/dashboard/personal-details",
    },
    {
      id: "education",
      label: "Education",
      icon: FaGraduationCap,
      path: "/dashboard/education",
    },
    {
      id: "project",
      label: "Projects",
      icon: LuFolderGit2,
      path: "/dashboard/project",
    },
    {
      id: "work-expr",
      label: "Work Experience",
      icon: IoBriefcase,
      path: "/dashboard/work-expr",
    },
    { id: "skills", label: "Skills", icon: FaMedal, path: "/dashboard/skills" },
    {
      id: "myPortfolio",
      label: "My Portfolio",
      icon: ContactRound,
      path: "/dashboard/myPortfolio",
    },
    {
      id: "myResumes",
      label: "My Resumes",
      icon: FileText,
      path: "/dashboard/myResume",
    },
    {
      id: "assets",
      label: "My Assets",
      icon: FilesIcon,
      path: "/dashboard/assets",
    },
    {
      id: "aiCourse",
      label: "My Course",
      icon: BookA,
      path: "/dashboard/generate-course-with-ai",
    },
    {
      id: "aiNotes",
      label: "My Notes",
      icon: NotebookPen,
      path: "/dashboard/generate-notes-with-ai",
    },
  ];

  useEffect(() => {
    //TODO: Backend API call
  }, []);

  return (
    <div className="fixed top-0 left-0 w-64 h-screen py-5 bg-white border-r">
      <div className="sticky top-0 flex items-center gap-3 p-2 bg-white border-b">
        <div>
          <FaRegFileLines className="text-blue-500 h-7 w-7" />
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-900">AI Career Builder</h1>
          <p className="text-sm text-gray-500">Build your resume & portfolio</p>
        </div>
      </div>

      <nav className="p-3 space-y-1">
        {sections.map(({ id, label, icon: Icon, path }) => (
          <NavLink key={path} to={path}>
            <button
              key={id}
              disabled={!isProfileCompleted}
              onClick={() => handleSectionClick(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                matchRoute(path)
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon
                className={`h-5 w-5 transition-colors duration-200 ${
                  matchRoute(path) ? "text-blue-500" : "text-gray-400"
                }`}
              />

              <span className="font-medium">{label}</span>
            </button>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="text-center text-gray-500 text-md">
          © {new Date().getFullYear()} Resume Builder
        </div>
      </div>
    </div>
  );
};

export default SideBar;
