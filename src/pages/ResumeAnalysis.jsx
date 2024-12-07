import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, BarChart2, FileText, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ResumePreview from "@/components/resume-analysis/ResumePreview";
import FileUploadModal from "@/components/resume-analysis/FileUploadModal";
import axios from "axios";
import toast from "react-hot-toast";
import { Triangle } from "react-loader-spinner";
import Sidebar from "@/components/resume-analysis/Sidebar";
import AnalyticsContent from "@/components/resume-analysis/AnalyticsContent";

// function GenerateAIButton() {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg flex items-center space-x-2 overflow-hidden relative"
//     >
//       <span className="relative z-10">Generate Resume with AI</span>

//       <Sparkles className="w-5 h-5 relative z-10" />
//     </motion.button>
//   );
// }

function ResumeAnalysis() {
  const [isFileSelected, setIsFileSelected] = useState(null);
  const [isDataUploading, setIsDataUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [activeSection, setActiveSection] = useState("score");

  console.log(isFileSelected);

  const startAnalysis = async (file) => {
    setIsDataUploading(true);
    try {
      // Mock API call to upload file and analyze resume
      const formData = new FormData();
      formData.append("resume", file);

      const response = await axios.get("/api/v1/users/signin", {
        usernameORemail: "",
        password: "",
      });

      if (response.data.statusCode === 200) {
        setAnalysisData(response.data.data);
        setIsAnalyzing(false);
        setIsModalOpen(false);
      } else {
        throw new Error("Failed to analyze resume");
      }
    } catch (error) {
      toast.error("Error analyzing resume");
    } finally {
      setIsDataUploading(false);
    }
  };

  const mockAnalysisData = {
    score: 75,
    keySuggestions: [
      "Improve the formatting and structure for better readability.",
      "Quantify achievements whenever possible.",
      "Add a summary or objective statement.",
      "Use action verbs to start bullet points.",
      "Reduce repetition of words and phrases.",
    ],
    areasForImprovement: [
      "Inconsistent formatting throughout the resume.",
      "Lack of a compelling summary or objective statement.",
      "Some bullet points could be more concise and impactful.",
      "Overuse of certain words and phrases.",
    ],
    grammarErrors: [],
    repetitiveWords: ["website", "users", "generate", "resume", "Python"],
    improvementSuggestions: [
      "Use a modern and clean resume template.",
      "Tailor the resume to each job application.",
      "Highlight quantifiable achievements and results.",
      "Proofread carefully for any errors.",
    ],
    sectionFeedback: [
      {
        section: "Education",
        score: 85,
        feedback:
          "Education section is well-structured and provides relevant information. Consider adding a brief description of any relevant coursework or projects completed.",
        keyImprovements: [
          "Add relevant coursework or project details.",
          "Use consistent formatting for dates.",
        ],
      },
      {
        section: "Skills",
        score: 90,
        feedback:
          "Skills section is comprehensive and lists relevant technical skills. Categorizing skills (e.g., Programming Languages, Frameworks, Databases) could improve readability.",
        keyImprovements: [
          "Categorize skills for better organization.",
          "Consider adding proficiency levels.",
        ],
      },
      {
        section: "Work Experience",
        score: 70,
        feedback:
          "Work experience section is decent, but bullet points could be more action-oriented and quantify achievements. The description of the internship could be more concise.",
        keyImprovements: [
          "Use action verbs to start bullet points.",
          "Quantify accomplishments (e.g., 'Increased website traffic by 15%').",
          "Focus on results rather than just tasks.",
        ],
      },
      {
        section: "Projects",
        score: 80,
        feedback:
          "Projects section is good, showcasing relevant skills and accomplishments. Consider using more concise language and quantifying the impact of each project.",
        keyImprovements: [
          "Use stronger action verbs.",
          "Quantify the impact of each project (e.g., 'Reduced development time by 20%').",
          "Focus on the most impressive projects.",
        ],
      },
      {
        section: "Achievements",
        score: 75,
        feedback:
          "Achievements section is okay, but could be improved by adding more context and quantifying the achievements whenever possible.",
        keyImprovements: [
          "Add more detail to each achievement.",
          "Quantify achievements (e.g., 'Scored in the top 10% of participants').",
          "Use action verbs.",
        ],
      },
    ],
  };

  return (
    <div className="w-full min-h-screen">
      {isModalOpen ? (
        <FileUploadModal
          isFileSelected={isFileSelected}
          setIsFileSelected={setIsFileSelected}
          isDataUploading={isDataUploading}
          startAnalysis={startAnalysis}
          setIsModalOpen={setIsModalOpen}
        />
      ) : isDataUploading ? (
        <div>
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
          ></Triangle>
          <h2>Data Uploading</h2>
        </div>
      ) : isAnalyzing ? (
        <div>
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
          ></Triangle>
          <h2>RBuilder is Analyzing....</h2>
        </div>
      ) : mockAnalysisData ? (
        <div className="max-w-8xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-xl">
                  <BarChart2 className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Resume Analysis</h1>
                </div>
              </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          
            <div className="lg:col-span-3">
              <Sidebar
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>
            <div className="lg:col-span-4">
              <AnalyticsContent
                activeSection={activeSection}
                data={mockAnalysisData}
              />
            </div>
            <div className="lg:col-span-5">
              <ResumePreview />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ResumeAnalysis;
