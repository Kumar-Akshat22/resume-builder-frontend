import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPerson, BsSave2 } from "react-icons/bs";
import { FaRegFileLines, FaGraduationCap } from "react-icons/fa6";
import { LuFolderGit2 } from "react-icons/lu";
import { IoBriefcase } from "react-icons/io5";
import { FaMedal } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  BookMarked,
  FilesIcon,
  BookmarkCheck,
  ContactRound,
  FileText,
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

  const [sectionId, setSectionId] = useState("profile-completion");
  const [isProfileCompleted, setIsProfileCompleted] = useState(true);

  const location = useLocation(); // Get the current location (URL)
  

  useEffect(() => {
    // Set the active section based on the URL path
    const currentPath = location.pathname.split('/').pop(); // Get the last part of the URL
    setSectionId(currentPath); // Update the active section ID
  }, [location.pathname]); // Re-run whenever the path changes
  const handleSectionClick = (id) => {
    setSectionId(id);
  };

  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    // Simulate sign-out process
    try {
      // Simulate sign-out process
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const res = await axios.post("/api/v1/users/signout", {
        headers: { Authorization: localStorage.getItem("AccessToken") },
      });

      if (res.data.statusCode === 202) {
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("RefreshToken");
        toast.success("Logged Out");
        navigate("/"); // Redirect to home or any other page after sign-out
      } else {
        toast.error("Error signing out, please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong while signing out.");
    } finally {
      setIsSigningOut(false); // Close the modal after process is done
      navigate("/signin"); // Redirect to sign in page after sign-out
    }
  };

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
  ];

  useEffect(() => {
    //TODO: Backend API call
  }, []);

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
        {sections.map(({ id, label, icon: Icon, path }) => (
          <NavLink key={path} to={path}>
            <button
              key={id}
              disabled={!isProfileCompleted}
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

        <div className="relative w-20">
          <Button
            className="fixed w-40 bottom-20 left-10 bg-blue-500 text-sm rounded-md transition-all duration-200 hover:bg-blue-700"
            onClick={() => setIsSigningOut(true)}
          >
            <LogOut className="rotate-180" />
            Sign Out
          </Button>
          <Dialog open={isSigningOut} onOpenChange={setIsSigningOut}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-xl">Sign Out</DialogTitle>
                <DialogDescription className="text-base">
                  Please wait while we securely sign you out...
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button
                  onClick={handleSignOut} // Call the handleSignOut function when clicked
                  className="bg-red-500 text-white rounded-md"
                >
                  
                  
                    Confirm Sign Out
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
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
