import React, { useEffect, useState } from "react";
import { FaEdit, FaExchangeAlt, FaGithub, FaSave } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Globe, User, Upload } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TailSpin } from "react-loader-spinner";

const Profile = () => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [isEditable, setIsEditable] = useState(false);
  const [userDetailForm, setUserDetailForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    profession: '',
    about: '',
    username: '',
    links: {
    linkedIn: "",
    github: "",
    portfolio: "",
  },
  });
  const [errors, setErrors] = useState({});
  const [isDataUploading, setIsDataUploading] = useState(false);

  // To validate teh input fields
  const validateInput = (name, value) => {
    let error = "";
    if (name === "firstName" || name === "lastName") {
      if (!value.trim()) error = "This field is required.";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) error = "Email is required.";
      else if (!emailRegex.test(value)) error = "Invalid email format.";
    } else if (name === "contact") {
      const phoneRegex = /^[0-9]+$/;
      if (!value.trim()) error = "Contact number is required.";
      else if (!phoneRegex.test(value)) error = "Only numbers are allowed.";
      else if (value.length < 10 || value.length > 15)
        error = "Contact number should be between 10 and 15 digits.";
    } else if (name === "newPassword" || name === "oldPassword") {
      if (value.length < 8)
        error = "Password must be at least 8 characters long.";
    }
    return error;
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setUserDetailForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update errors in real-time
    const errorMessage = validateInput(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };


  const updateDetail = async () => {
    if (isEditable) {
      console.log("userDetailForm", userDetailForm);
      const res = await axios.post(
        "/api/v1/users/upload-details",
        { userData: JSON.stringify(userDetailForm) },
        { headers: { Authorization: localStorage.getItem("AccessToken") } }
      );
      console.log(res);
      localStorage.removeItem("status");
    }};
      
  const linksFormHandler = (name , value) => {
    setUserDetailForm((prev)=>({

      ...prev,
      links:{
        ...prev.links,
        [name]:value
      }
    }))
  }

  const changePassword = async () => {
    if (
      password?.newPassword.trim() == "" ||
      password.oldPassword.trim() == ""
    ) {
      return;
    }

    const res = await axios.post(
      "/api/v1/users/change-password",
      { oldPassword: password.oldPassword, newPassword: password.newPassword },
      { headers: { Authorization: localStorage.getItem("AccessToken") } }
    );

    if (res.data.statusCode === 200) {
      toast.success("Password Updated ");
    }
  };
  const [profilePicture, setProfilePicture] = useState();

  const handleDataUpload = async () => {
    if (!Object.keys(userDetailForm).length) return;

    setIsDataUploading(true);
    try {
      const res = await axios.post(
        "/api/v1/users/upload-details",
        { profileInfo: userDetailForm },
        { headers: { Authorization: localStorage.getItem("AccessToken") } }
      );
      if (res.data.statusCode === 200) {
        console.log(res);
        toast.success("Profile updated successfully!");
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsDataUploading(false);
    }
  };

  const [loading, setLoading] = useState(false);

  const getUserInfo = async () => {
    setLoading(true);
    try{

      const res = await axios.get("/api/v1/users/get-user-info", {
        headers: { Authorization: localStorage.getItem("AccessToken") },
      });
      
      console.log(res);
      if(res.status===200) toast.success("Profile Data fetched successfully");
      setProfilePicture(res.data.data.profileInfo.profilePicture);
      setUserDetailForm({
        ...res.data.data.profileInfo,
        firstName: res.data.data.profileInfo.firstName || "",
        lastName: res.data.data.profileInfo.lastName || "",
        email: res.data.data.email || "",
        contact: res.data.data.profileInfo.contact || "",
        profession: res.data.data.profileInfo.profession || "",
        about: res.data.data.profileInfo.about || " ",
        username: res.data.data.username || "",
        links: res.data.data.profileInfo.links,

      });
    }
    catch(error){

      toast.error("An error occured while fetching data");

    }
    finally{

      setLoading(false);
    }
  };

  console.log(userDetailForm);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="w-full flex flex-col p-3">
      {loading ? (
        <div className="flex mx-auto">
          <TailSpin color="red"/>
          <p>Loading..</p>
        </div>
      ) : (
        <div>
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
              
            </div>
          </header>

          <div className="flex items-start mt-5 px-10">
            <Card className="p-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={profilePicture} />
                    <AvatarFallback className="text-lg bg-primary/10">
                      <User className="h-12 w-12" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold">
                    {userDetailForm.firstName && userDetailForm.lastName
                      ? userDetailForm.firstName + " " + userDetailForm.lastName
                      : "No Username available"}
                  </h1>
                  <p className="text-muted-foreground">
                    {userDetailForm.email
                      ? userDetailForm.email
                      : "No Email available"}
                  </p>
                </div>
              </div>
            </Card>
            <div className="mx-auto">
              <Tabs defaultValue="personal-details" className="w-[700px]">
                <TabsList className="">
                  <TabsTrigger value="personal-details">
                    Personal Details
                  </TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="social-links">Social Links</TabsTrigger>
                </TabsList>

                <TabsContent value="personal-details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Information</CardTitle>
                      <CardDescription>
                        Update your personal information and how others see you
                        on the platform.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="p-2 grid grid-cols-2 gap-8">
                        {/* First Name */}
                        <div className="fex flex-col">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            onChange={(e)=> formHandler(e)}
                            name="firstName"
                            className={`bg-transparent font-semibold p-2 m-1 flex w-full ${
                              isEditable
                                ? "bg-white border-gray-300"
                                : "cursor-not-allowed"
                            }`}
                            disabled={!isEditable}
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            value={userDetailForm.firstName || ""}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        {/* Last Name */}
                        <div className="fex flex-col  ">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            name="lastName"
                            onChange={(e)=> formHandler(e)}
                            className={`bg-transparent font-semibold p-2 m-1 flex w-full ${
                              isEditable ? "bg-white rounded-xl" : ""
                            }`}
                            disabled={!isEditable}
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            value={userDetailForm.lastName}
                          />
                        </div>

                        {/* Email */}
                        <div className="fex flex-col">
                          <label htmlFor="email">Email</label>
                          <input
                            name="email"
                            onChange={(e)=> formHandler(e)}
                            className={`bg-transparent font-semibold p-2 m-1 flex w-full ${
                              isEditable
                                ? `bg-white rounded-xl ${
                                    errors.firstName
                                      ? "border-red-500"
                                      : "border-gray-300"
                                  }`
                                : ""
                            }`}
                            disabled={!isEditable}
                            type="text"
                            id="email"
                            placeholder="Email Address"
                            value={userDetailForm.email}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Username */}
                        <div className="fex flex-col  ">
                          <label htmlFor="username">Username</label>
                          <input
                            name="username"
                            onChange={(e)=> formHandler(e)}
                            className={`bg-transparent font-semibold p-2 m-1 flex w-full ${
                              isEditable ? "bg-white rounded-xl" : ""
                            }`}
                            disabled
                            type="text"
                            id="username"
                            placeholder="User Name"
                            value={userDetailForm.username}
                          />
                        </div>

                        {/* Last Name */}
                        <div className="fex flex-col">
                          <label htmlFor="contact">Contact Number</label>
                          <input
                            name="contact"
                            onChange={(e)=> formHandler(e)}
                            className={`bg-transparent font-semibold p-2 m-1 flex w-full ${
                              isEditable ? "bg-white rounded-xl" : ""
                            }`}
                            disabled={!isEditable}
                            type="text"
                            id="contact"
                            placeholder="e.g. +91 8654321098"
                            value={userDetailForm.contact}
                          />
                        </div>

                        {/* Profession */}
                        <div className="fex flex-col  ">
                          <label htmlFor="profession">Profession</label>
                          <input
                            name="profession"
                            onChange={(e)=> formHandler(e)}
                            className={`bg-transparent font-semibold p-2 m-1 flex w-full ${
                              isEditable ? "bg-white rounded-xl" : ""
                            }`}
                            disabled={!isEditable}
                            type="text"
                            id="profession"
                            placeholder="Your Profession"
                            value={userDetailForm.profession}
                          />
                        </div>

                        <div className="fex flex-col col-span-2 ">
                          <label htmlFor="about">About</label>
                          <input
                            name="about"
                            onChange={(e)=> formHandler(e)}
                            className={`bg-transparent font-semibold p-2 m-1 flex w-full ${
                              isEditable ? "bg-white rounded-xl" : ""
                            }`}
                            disabled={!isEditable}
                            type="text"
                            id="about"
                            placeholder="About yourself"
                            value={userDetailForm.about}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => {
                          
                          if (isEditable) {
                            handleDataUpload()
            }
                          
                          setIsEditable((prev) => !prev);
                          
                        
                        }}
                        className="flex items-center gap-2 font-semibold px-4 py-2 rounded-xl h-min"
                      >
                        {isEditable ? (
                          <div className="flex font-semibold items-center gap-2">
                            <FaEdit /> Save
                          </div>
                        ) : (
                          <div className="flex font-semibold items-center gap-2">
                            <FaSave /> Edit
                          </div>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here. After saving, you'll be
                        logged out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="p-2 grid grid-cols-2 gap-8">
                        {/* Old Password */}
                        <div className="fex flex-col  ">
                          <label htmlFor="oldpassword">Old Password</label>
                          <input
                            onChange={(e) =>
                              setPassword((prev) => ({
                                ...prev,
                                oldPassword: e.target.value,
                              }))
                            }
                            name="oldpassword"
                            className=" font-semibold p-2 m-1 flex w-full bg-white rounded-xl"
                            type="password"
                            id="oldpassword"
                            placeholder="Old Password"
                            value={password.oldPassword}
                            
                          />
                        </div>

                        {/* New Password*/}
                        <div className="fex flex-col  ">
                          <label htmlFor="newpassword">New Password</label>
                          <input
                            onChange={(e) =>
                              setPassword((prev) => ({
                                ...prev,
                                newPassword: e.target.value,
                              }))
                            }
                            name="newpassword"
                            className=" font-semibold p-2 m-1 flex w-full bg-white rounded-xl"
                            type="password"
                            id="newpassword"
                            placeholder="New Password"
                            value={password.newPassword}
                
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={changePassword}
                        className=" flex items-center gap-2 font-semibold px-4 py-2 rounded-xl h-min hover:bg-yellow-700 "
                      >
                        <div className="flex font-semibold items-center gap-2">
                          <FaExchangeAlt /> Change Password{" "}
                        </div>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="social-links" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Social Links</CardTitle>
                      <CardDescription>
                        Connect your social profiles and portfolio.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <label htmlFor="linkedIn" className="font-semibold">
                          LinkedIn Profile
                        </label>
                        <div className="mt-2 flex items-center gap-2">
                          <FaLinkedin className="h-5 w-5 text-muted-foreground" />
                          <input
                            id="linkedIn"
                            name="linkedIn"
                            onChange={(e) => linksFormHandler('linkedIn', e.target.value)}
                            value={userDetailForm?.links?.linkedIn || ""}
                            className={`bg-white font-semibold p-2 m-1 flex w-full rounded-md shadow-sm border ${
                              isEditable ? "bg-white rounded-xl" : ""
                            }`}
                            disabled={!isEditable}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="github" className="font-semibold">
                          GitHub Profile
                        </label>
                        <div className="mt-2 flex items-center gap-2">
                          <FaGithub className="h-5 w-5 text-muted-foreground" />
                          <input
                            id="github"
                            name="github"
                            onChange={(e) => linksFormHandler('github', e.target.value)}
                            value={userDetailForm?.links?.github || ""}
                            className={`bg-white font-semibold p-2 m-1 flex w-full rounded-md shadow-sm border ${
                              isEditable ? "bg-white rounded-xl" : ""
                            }`}
                            disabled={!isEditable}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="portfolio" className="font-semibold">
                          Portfolio Website
                        </label>
                        <div className="mt-2 flex items-center gap-2">
                          <Globe className="h-5 w-5 text-muted-foreground" />

                          <input
                            id="portfolio"
                            name="portfolio"
                            onChange={(e) => linksFormHandler('portfolio', e.target.value)}
                            value={userDetailForm?.links?.portfolio || ""}
                            className={`bg-white font-semibold p-2 m-1 flex w-full rounded-md shadow-sm border ${
                              isEditable ? "bg-white rounded-xl" : ""
                            }`}
                            disabled={!isEditable}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => {
                          if (isEditable) {
              handleDataUpload();
            }

                          setIsEditable((prev) => !prev);
                          
                        }}
                        className="flex items-center gap-2 font-semibold px-4 py-2 rounded-xl h-min"
                      >
                        {isEditable ? (
                          <div className="flex font-semibold items-center gap-2">
                            <FaEdit /> Save
                          </div>
                        ) : (
                          <div className="flex font-semibold items-center gap-2">
                            <FaSave /> Edit
                          </div>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </div>
  )};

export default Profile;
