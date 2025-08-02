import React from "react";
import { X, Sparkles, Loader } from "lucide-react";
import { useState } from "react";
import { createCourse } from "@/services/courseService";
import { sub } from "date-fns";
import toast from "react-hot-toast";

const UploadModal = ({
  isOpen,
  onClose,
  modalTitle = "Modal Title",
  inputLabel = "Input Label",
  inputPlaceholder = "Enter here...",
  primaryButton = { text: "Generate", onClick: () => {} },
  onCourseCreated
}) => {
  const [title, setTitle] = useState("");
  const [topics, setTopics] = useState("");
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await createCourse(title , topics , subject , language)

      console.log("Course created:", response);
      toast.success("Course created successfully!");
      
      onClose();
      onCourseCreated()
      
    } catch (error) {
      console.error("Error creating course:", error);
      toast.error("Failed to create course. Please try again.")
      
    } finally {
      setTitle("");
      setTopics("");
      setSubject("");
      setLanguage("");
      setLoading(false);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 transition-all transform bg-white shadow-2xl rounded-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-gray-400 transition-colors right-4 top-4 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">{modalTitle}</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-1 text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
            required
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-1 text-sm font-medium text-gray-700">Topics</label>
          <input
            type="text"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            placeholder="Enter topics"
            required
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject name"
            required
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-1 text-sm font-medium text-gray-700">Language</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Enter language"
            required
            className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? <div><Loader className="animate-spin" /></div> : <div className="flex items-center gap-2">Generate <Sparkles size={16} /> </div>}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UploadModal;
