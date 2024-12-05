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

  const mockAnalysisData = {
  score: 75,
  keySuggestions: [
    "Highlight your achievements with quantifiable results",
    "Include relevant keywords from the job description",
    "Tailor your resume for each specific job application"
  ],
  areasForImprovement: [
    "Strengthen your professional summary",
    "Add more details to your work experience",
    "Include relevant certifications or training"
  ],
  grammarErrors: [
    "Incorrect use of 'their' instead of 'there' in the second paragraph",
    "Missing comma in the list of skills"
  ],
  repetitiveWords: ["Responsible for", "Managed", "Developed"],
  improvementSuggestions: [
    "Use action verbs to start each bullet point",
    "Incorporate industry-specific terminology",
    "Optimize your resume for ATS (Applicant Tracking Systems)"
  ],
  sectionFeedback: [
    {
      section: "Personal Information",
      score: 90,
      feedback: "Well-structured and complete.",
      keyImprovements: [
        "Consider adding a professional title",
        "Ensure contact information is up-to-date"
      ]
    },
    {
      section: "Professional Summary",
      score: 70,
      feedback: "Good start, but could be more impactful.",
      keyImprovements: [
        "Focus on your unique value proposition",
        "Tailor the summary to the specific job you're applying for"
      ]
    },
    {
      section: "Work Experience",
      score: 80,
      feedback: "Strong experience, but try to quantify your achievements more.",
      keyImprovements: [
        "Add specific metrics to showcase your impact",
        "Use action verbs to start each bullet point"
      ]
    },
    {
      section: "Education",
      score: 85,
      feedback: "Well-presented education section.",
      keyImprovements: [
        "Consider adding relevant coursework",
        "Highlight academic achievements or honors"
      ]
    },
    {
      section: "Skills",
      score: 75,
      feedback: "Good range of skills listed.",
      keyImprovements: [
        "Align skills more closely with the job description",
        "Categorize skills (e.g., technical, soft skills) for better readability"
      ]
    }
  ]
}

  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="w-full min-h-screen">
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
            {/* <div>
              <GenerateAIButton />
            </div> */}
        </div>

        <div className="grid grid-cols-2">
          <div className="opacity-1 animate-fade-in-down">
            <div className="w-11/12 space-y-6 opacity-0 animate-fade-in-left">

              <ResumeScore
                score={mockAnalysisData.score}
                totalScore={100}
              />

              <FeedbackCard mockData={mockAnalysisData} />
              <AdditionalFeedback mockData = {mockAnalysisData} />
            </div>
          </div>

          <div className="flex flex-col gap-11">
            <ResumePreview />
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Sectional Feedback</h2>
              <SectionalFeedback mockData = {mockAnalysisData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeAnalysis;
