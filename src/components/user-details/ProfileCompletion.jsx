import React, { useState } from "react";
import useProfileCompletion from "@/hooks/useProfileCompletion";
import { Skeleton } from "../ui/skeleton";
import {
  ServerCrash,
  CheckCircle2,
  Circle,
  ChevronDown,
  AlertCircle,
  User
} from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, NavLink } from "react-router-dom";

export default function ProfileCompletion() {
  //   const { profileCompletionData, isLoading, error } = useProfileCompletion(
  //     "/api/v1/users/status"
  //   );

  const [isLoading, setIsLoading] = useState(false);
  const profileCompletionData = {
    percentComplete: 90,
    mandatoryFieldsCompleted: true,
    completionColor: "#2ECC40",
    fieldsToComplete: [
      {
        category: "Personal Info",
        fields: [
          {
            name: "First Name",
            completed: true,
            href: "/profile/personal-info",
          },
          {
            name: "Last Name",
            completed: true,
            href: "/profile/personal-info",
          },
          {
            name: "Phone",
            completed: true,
            href: "/profile/contact",
          },
          {
            name: "Email",
            completed: true,
            href: "/profile/contact",
          },
          {
            name: "LinkedIn",
            completed: true,
            href: "/profile/social-links",
          },
        ],
      },
      {
        category: "Professional Details",
        fields: [
          {
            name: "Education",
            completed: true,
            href: "/profile/education",
          },
          {
            name: "Projects",
            completed: true,
            href: "/profile/projects",
          },
          {
            name: "Skills",
            completed: true,
            href: "/profile/skills",
          },
        ],
      },
      {
        category: "Additional Personal Info",
        fields: [
          {
            name: "About",
            completed: true,
            href: "/profile/about",
          },
          {
            name: "Profile Picture",
            completed: true,
            href: "/profile/photos",
          },
          {
            name: "Address",
            completed: true,
            href: "/profile/address",
          },
        ],
      },
      {
        category: "Professional Extras",
        fields: [
          {
            name: "Experience",
            completed: true,
            href: "/profile/experience",
          },
          {
            name: "Certifications",
            completed: true,
            href: "/profile/certifications",
          },
          {
            name: "Achievements",
            completed: true,
            href: "/profile/achievements",
          },
        ],
      },
    ],
  };

  //   console.log(profileCompletionData);

  const [expandSection, setExpandSection] = useState(null);

  //   if (error) {
  //     return (
  //       <div className="container min-h-screen flex flex-col justify-center items-center">
  //         <ServerCrash size={50} color="black" />
  //         <h1 className="text-teal-700 text-xl mt-2">
  //           There was a problem in fetching the data from the server.
  //         </h1>
  //       </div>
  //     );
  //   }

  return (
    <div className="container py-7 px-5">
      {isLoading ? (
        <div className="flex flex-col space-y-3 mt-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Hold On, Fetching the data
          </h1>
          <Skeleton className="h-[325px] w-[100%] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[85%]" />
          </div>
        </div>
      ) : (
        <div className="px-2 py-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-stone-100 p-3 rounded-full">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Complete Your Profile
              </h1>
              <p className="text-muted-foreground mt-1">
                A complete profile helps you stand out and connect with better
                opportunities
              </p>
            </div>
          </div>
          <div className="grid space-y-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-400 to-green-500 text-white">
                  <CardTitle className="text-lg font-semibold text-black">
                    Overall Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">
                      {profileCompletionData.percentComplete}% Complete
                    </span>
                    <Badge
                      variant={
                        profileCompletionData.mandatoryFieldsCompleted
                          ? "default"
                          : "secondary"
                      }
                      className="text-md rounded-md bg-blue-500"
                    >
                      {profileCompletionData.mandatoryFieldsCompleted
                        ? "All mandatory fields completed"
                        : "Keep going! Your profile is almost complete"}
                    </Badge>
                  </div>
                  <Progress
                    value={profileCompletionData.percentComplete}
                    className="w-full h-3"
                    indicatorColor={profileCompletionData.completionColor}
                  />
                </CardContent>
              </Card>
            </motion.div>
            {profileCompletionData.fieldsToComplete.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() =>
                      setExpandSection(
                        expandSection === category.category
                          ? null
                          : category.category
                      )
                    }
                  >
                    <CardTitle className="flex items-center justify-between">
                      {category.category}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          expandSection === category.category
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </CardTitle>
                  </CardHeader>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandSection === category.category ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent>
                      <ul className="grid gap-2 sm:grid-cols-5 mt-2">
                        {category.fields.map((field, fieldIndex) => (
                          <motion.li
                            className=""
                            key={fieldIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: fieldIndex * 0.05,
                            }}
                          >
                            <NavLink
                              to={field.href}
                              className="flex items-center"
                            >
                              {field.completed ? (
                                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                              ) : (
                                <AlertCircle className="mr-2 h-5 w-5 text-yellow-300" />
                              )}
                              <span
                                className={
                                  field.completed
                                    ? "text-muted-foreground"
                                    : "font-medium"
                                }
                              >
                                {field.name}
                              </span>
                            </NavLink>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
