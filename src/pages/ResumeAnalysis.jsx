import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles } from "lucide-react";
import ResumeScore from "@/components/resume-analysis/ResumeScore";
import FeedbackCard from "@/components/resume-analysis/FeedbackCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ResumePreview from "@/components/resume-analysis/ResumePreview";
import AdditionalFeedback from "@/components/resume-analysis/AdditionalFeedback";
import SectionalFeedback from "@/components/resume-analysis/SectionalFeedback";
import FileUploadModal from "@/components/resume-analysis/FileUploadModal";

function GenerateAIButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg flex items-center space-x-2 overflow-hidden relative"
    >
      <span className="relative z-10">Generate Resume with AI</span>

      <Sparkles className="w-5 h-5 relative z-10" />
    </motion.button>
  );
}

function ResumeAnalysis() {
  const [isFileSelected, setIsFileSelected] = useState(null);
  const [isDataUploading, setIsDataUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData , setAnalysisData] = useState(null);
  const [isModalOpen , setIsModalOpen] = useState(true);



  console.log(isFileSelected);

  const startAnalysis = async (file) => {
    setIsDataUploading(true);
    // try {
    //   // Mock API call to upload file and analyze resume
    //   const formData = new FormData();
    //   formData.append("resume", file);

    //   const response = await fetch("", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     setIsDataUploading(false);
    //     setIsAnalyzing(true);

    //     // Simulate backend processing and response
    //     const result = await response.json();
    //     setAnalysisData(result); // Assuming backend sends analysis data
    //     setIsAnalyzing(false);
    //     setIsModalOpen(false);
    //   } else {
    //     throw new Error("Failed to analyze resume");
    //   }
    // } catch (error) {
    //   console.error("Error analyzing resume:", error);
    //   setIsDataUploading(false);
    // }
    setIsDataUploading(false)
  };

  const mockAnalysisData = {
    "score": 75,
    "keySuggestions": [
        "Improve the formatting and structure for better readability.",
        "Quantify achievements whenever possible.",
        "Add a summary or objective statement.",
        "Use action verbs to start bullet points.",
        "Reduce repetition of words and phrases."
    ],
    "areasForImprovement": [
        "Inconsistent formatting throughout the resume.",
        "Lack of a compelling summary or objective statement.",
        "Some bullet points could be more concise and impactful.",
        "Overuse of certain words and phrases."
    ],
    "grammarErrors": [],
    "repetitiveWords": [
        "website",
        "users",
        "generate",
        "resume",
        "Python"
    ],
    "improvementSuggestions": [
        "Use a modern and clean resume template.",
        "Tailor the resume to each job application.",
        "Highlight quantifiable achievements and results.",
        "Proofread carefully for any errors."
    ],
    "sectionFeedback": [
        {
            "section": "Education",
            "score": 85,
            "feedback": "Education section is well-structured and provides relevant information. Consider adding a brief description of any relevant coursework or projects completed.",
            "keyImprovements": [
                "Add relevant coursework or project details.",
                "Use consistent formatting for dates."
            ]
        },
        {
            "section": "Skills",
            "score": 90,
            "feedback": "Skills section is comprehensive and lists relevant technical skills. Categorizing skills (e.g., Programming Languages, Frameworks, Databases) could improve readability.",
            "keyImprovements": [
                "Categorize skills for better organization.",
                "Consider adding proficiency levels."
            ]
        },
        {
            "section": "Work Experience",
            "score": 70,
            "feedback": "Work experience section is decent, but bullet points could be more action-oriented and quantify achievements. The description of the internship could be more concise.",
            "keyImprovements": [
                "Use action verbs to start bullet points.",
                "Quantify accomplishments (e.g., 'Increased website traffic by 15%').",
                "Focus on results rather than just tasks."
            ]
        },
        {
            "section": "Projects",
            "score": 80,
            "feedback": "Projects section is good, showcasing relevant skills and accomplishments. Consider using more concise language and quantifying the impact of each project.",
            "keyImprovements": [
                "Use stronger action verbs.",
                "Quantify the impact of each project (e.g., 'Reduced development time by 20%').",
                "Focus on the most impressive projects."
            ]
        },
        {
            "section": "Achievements",
            "score": 75,
            "feedback": "Achievements section is okay, but could be improved by adding more context and quantifying the achievements whenever possible.",
            "keyImprovements": [
                "Add more detail to each achievement.",
                "Quantify achievements (e.g., 'Scored in the top 10% of participants').",
                "Use action verbs."
            ]
        }
    ]
}


  return (
    <div className="w-full min-h-screen">
      {isModalOpen ?
        <FileUploadModal
          isFileSelected={isFileSelected}
          setIsFileSelected={setIsFileSelected}
          isDataUploading={isDataUploading}
          startAnalysis = {startAnalysis}
          setIsModalOpen = {setIsModalOpen}
        />
       :
       isDataUploading?
       <div><p>Uploading</p></div>
       :isAnalyzing?
       <div><p>analyzing</p></div>
      : mockAnalysisData ? (
          <div className="w-[100%] py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-3 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-xl">
                  <FileText className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Resume Analysis</h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="opacity-1 animate-fade-in-down">
                <div className="w-11/12 space-y-6 opacity-0 animate-fade-in-left">
                  <ResumeScore
                    score={mockAnalysisData.score}
                    totalScore={100}
                  />

                  <FeedbackCard mockData={mockAnalysisData} />
                  <AdditionalFeedback mockData={mockAnalysisData} />
                </div>
              </div>

              <div className="flex flex-col gap-11">
                <ResumePreview />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                    Sectional Feedback
                  </h2>
                  <SectionalFeedback mockData={mockAnalysisData} />
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  );
}

export default ResumeAnalysis;
