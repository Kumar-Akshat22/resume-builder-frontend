import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import bitEmoji from "../../../assets/bitmoji.png";
import { FaDownload } from "react-icons/fa6";
import { formatDateRange } from "@/utils/dateFormatter";

const PersonalInfo = ({userInfo}) => {
  return (
    <div  className=" text-base flex flex-col gap-4">
       {userInfo?.firstName && userInfo?.lastName && (
            <div>
              I'm {userInfo.firstName} {userInfo.lastName}
            </div>
          )}

          {userInfo?.majorJobProfile && (
            <div className="font-semibold">{userInfo.majorJobProfile}</div>
          )}

          {userInfo?.email && (
            <div className="text-base">
              <span className="text-dark-primary">Email: </span>
              {userInfo.email}
            </div>
          )}

          {userInfo?.phone && (
            <div className="text-base">
              <span className="text-dark-primary">Phone: </span>
              {userInfo.phone}
            </div>
          )}

          {userInfo?.gDriveResumeLink && (
            <div
              onClick={() => window.open(userInfo.gDriveResumeLink, "_blank")}
              className="cursor-pointer font-semibold text-sm bg-dark-primary justify-center items-center rounded-xl text-white flex w-28 text-center gap-2 py-1"
            >
              <FaDownload /> Resume
            </div>
          )}
    </div>
  )
}
const Education = ({education}) => {
  return (
    <div id="education" className="scroll-mt-32 education-component p-4">
      <h2 className="text-xl font-bold mb-4 text-white">Education</h2>
      <div className="space-y-6">
        {/* Validate if education is an array and iterate safely */}
        {Array.isArray(education) && education.length > 0 ? (
          education.map((edu, index) => (
            <div
              key={index}
              className="p-4 rounded-md shadow-md transition-transform duration-300 cursor-pointer"
            >
              {/* Validate and display institute name */}
              {edu.instituteName && (
                <h3 className="text-lg font-semibold text-dark-primary">
                  {edu.instituteName}
                </h3>
              )}

              {/* Validate and display degree and specialization */}
              <p className="text-gray-400">
                {edu.degree}
                {edu.specialization ? ` in ${edu.specialization}` : ""}
              </p>

              {/* Validate and display location */}
              {edu.location && (
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Location:</strong> {edu.location}
                </p>
              )}

              {/* Validate and display date range */}
             {edu.startDate && <p className="text-sm text-gray-500 mt-1">
                <strong>Duration:</strong> {formatDateRange(edu.startDate, edu.endDate)}
              </p>}
            </div>
          ))
        ) : (
          // Handle empty or invalid education array
          <p className="text-gray-400">No education details available.</p>
        )}
      </div>
    </div>
  )
}
const Skills = ({skills}) => {
  return (
    <div id="skills" className="flex gap-4 text-sm max-w-full flex-wrap">
      {
        skills.map(skill=>(
          <div className='flex bg-dark-primary px-4 py-1 rounded-xl'>
          <span className="">
            {skill.emoji}</span><span> {skill.label}
          </span>
          </div>
        ))
      }
    </div>
  )
}

const TabComponent = ({ tabs , selectedTab, setSelectedTab}) => {
  // Filter tabs based on valid lengths
  const validTabs = [
    { key: "personalInfo", label: "Personal Info" },
    ...(tabs?.education?.length > 0
      ? [{ key: "education", label: `Education ` }]
      : []),
    ...(tabs?.skills?.length > 0
      ? [{ key: "skills", label: `Skills ` }]
      : []),
  ];

  return (
    <div className=" p-4 text-white  min-h-80">
      {/* Tab Navigation */}
      <div className="flex text-base border-b border-gray-600">
        {validTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`px-4 py-2 transition-all duration-300 ${
              selectedTab === tab.key
                ? "text-dark-primary border-b-2 border-b-dark-primary"
                : "text-white hover:text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {(() => {
          switch (selectedTab) {
            case "personalInfo":
              return <PersonalInfo userInfo={tabs.personalInfo} />;
            case "education":
              return <Education education={tabs.education} />;
            case "skills":
              return <Skills skills={tabs.skills} />;
            default:
              return <PersonalInfo userInfo={tabs.personalInfo} />;
          }
        })()}
      </div>
    </div>
  );
};


const About = ({ userInfo, education, skills, selectedTab, setSelectedTab }) => {
  const tabs = {
    personalInfo: 'Personal Info',
    education: 'Education',
    skills: 'Skills'
  }
  return (
    <div
      id="about"
      className="flex text-white scroll-mt-20 flex-col items-center justify-center"
    >

      <div className="w-full flex gap-5 max-w-screen-xl mx-auto my-8 ">
        <div className="w-1/3 ">
          <img
            className="rounded-lg bg-[#252525] overflow-hidden"
            src={userInfo?.profilePhoto || bitEmoji}
          />
        </div>
        <div className="text-xl w-2/3 gap-3 flex flex-col font-semibold font-poppins">
        <div className="font-poppins text-white font-extrabold text-4xl flex gap-3 mb-5">
          <MdPerson className="text-dark-primary" />{" "}
          <span>
            About <span className="">Me</span>
          </span>
        </div>

          {userInfo?.userSummery && (
            <div className="text-base">{userInfo.userSummery}</div>
          )}

          <TabComponent 
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabs={{personalInfo:userInfo, skills:skills?.technicalSkills, education }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
