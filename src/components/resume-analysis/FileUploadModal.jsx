import React from "react";
import { X, Upload, Link, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

function FileUploadModal({
  file,
  setFile,
  isDataUploading,
  setIsModalOpen,
  onUpload,
  isAnalyzing,
  setIsAnalyzing,
  setPdfPreviewUrl

}) {
  const handleFileChange = (e) => {
    const resume = e.target.files?.[0] || null;
    console.log(resume);
    setPdfPreviewUrl(URL.createObjectURL(resume));

    setFile(resume);
    toast.success("File Selected Successfully")
  };

  const handleDataUpload = async (e) => {
    e.preventDefault();
    if (file) {
      setIsAnalyzing(true)
      onUpload(file)
    } else {
      toast.error("Please Select a file to proceed");
    }

    
  };


  return (
   
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 transform transition-all">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Analyze Resume
        </h2>

        {/* PDF Upload */}
        <form onSubmit={handleDataUpload} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload Resume (PDF)
            </label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="file"
              />
              <label
                htmlFor="file"
                className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                  file
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center gap-2 text-sm">
                  <Upload
                    className={`h-5 w-5 ${
                      file ? "text-blue-500" : "text-gray-400"
                    }`}
                  />
                  {file ? (
                    <span className="text-blue-500 font-medium">
                      {file?.name}
                    </span>
                  ) : (
                    <span className="text-gray-500">Choose PDF file</span>
                  )}
                </div>
              </label>

              <button
                type="submit"
                className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors mt-2`}
                disabled={!file || isAnalyzing}
              >
                {isAnalyzing ? "Anazyzing..." : "Analyze with AI"}
              </button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default FileUploadModal;
