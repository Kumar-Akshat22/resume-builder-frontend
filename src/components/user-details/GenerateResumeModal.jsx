import React, { useEffect, useState } from "react";
import { X, Upload, Link, CheckCircle2, Ban, Sparkle, Sparkles } from "lucide-react";
import UploadModal from "./UploadModal";
import { Block } from "@mui/icons-material";
import { BsLockFill } from "react-icons/bs";
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import { generatePortfolio, getLinkAvailability } from "@/services/portfolioService";
import toast from "react-hot-toast";
import { generateResume, generateResumeWithAI } from "@/services/resumeService";
import { TailSpin } from "react-loader-spinner";

function GenerateResumeModal({ isOpen, onClose, baseUrl }) {
  
    const [formData, setFormData] = useState({
      title:""
  });
  const [isGenerating, setIsGenerating] = useState(false)


  const queryClient = useQueryClient();
  const generateAIResumeMutation = useMutation({
    mutationFn: () => generateResumeWithAI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries('resumes')
      setIsGenerating(false)
      toast.success("Resume generated successfully")
      onClose()
    },
    onError: (err) => {
      console.error("Error generating portfolio", err);
      setIsGenerating(false)
      toast.error("Error generating portfolio: "+ err.message)
    },
  })
  const generateResumeMutation = useMutation({
    mutationFn: () => generateResume(formData),
    onSuccess: () => {
      queryClient.invalidateQueries('resumes')
      setIsGenerating(false)
      toast.success("Resume generated successfully")
      onClose()
    },
    onError: (err) => {
      console.error("Error generating portfolio", err);
      setIsGenerating(false)
      toast.error("Error generating portfolio: "+ err.message)
    },
  })
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsGenerating(true)
    setTimeout(()=>setIsGenerating(false), 2000)

  };


  return (
    <UploadModal isOpen={isOpen} onClose={onClose}>
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 transform transition-all">
      <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Generate Resume
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* PDF Upload */}
   

          {/* Custom URL */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Resume Title
            </label>
            <div className="flex items-center">
              <div className="flex-shrink-0">
 
              </div>
              <input
                type="text"
                disabled={isGenerating}
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({
                    title: e.target.value,
                  }))
                }
                placeholder="Resume Title"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-r-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

          </div>
          {isGenerating?
            <button
              disabled={!formData.title || isGenerating}
              className={` w-full flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${(!isGenerating && formData.title)?'bg-blue-600 hover:bg-blue-700':'bg-blue-500 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
            >
              <TailSpin color="white" width={42} height={20} strokeWidth={8}/> 
              Generating...
            </button>
          :
          <div className=" flex gap-3">
          <button
           variant="contained"
           onClick={()=>{
            setIsGenerating(true);
            generateResumeMutation.mutate();
           }}
            disabled={!formData.title || isGenerating}
            className={` w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${(!isGenerating && formData.title)?'bg-blue-600 hover:bg-blue-700':'bg-blue-500 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
          >
            {"Generate Resume"}
          </button>
          <button
           variant="contained"
           onClick={()=>{
            setIsGenerating(true);
            generateAIResumeMutation.mutate();
           }}
            disabled={!formData.title || isGenerating}
            className={` w-full flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${(!isGenerating && formData.title)?'bg-blue-600 hover:bg-blue-700':'bg-blue-500 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
          >
            Generate With AI &nbsp;<Sparkles size={16}/>
          </button>
          </div>}
        </form>
      </div>
    </UploadModal>
  );
}

export default GenerateResumeModal;
