import React, { useState } from "react";
import { X, Upload, Link, CheckCircle2 } from "lucide-react";
import UploadModal from "./UploadModal";

function PortfolioDataUpload({ isOpen, onClose, onSubmit, baseUrl }) {
  
    const [formData, setFormData] = useState({
    file: null,
    url: "",
    useProfileData: false,
  });

  const handleFileChange = (e) => {

    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file: file }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendFormData = new FormData();
    sendFormData.append('file', formData.file);
    sendFormData.append('url', formData.url);
    sendFormData.append('useProfileData', formData.useProfileData);
    //TODO: send request to backend
    onSubmit(formData);
    onClose();

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
          Generate Portfolio
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* PDF Upload */}
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
                  formData.file
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center gap-2 text-sm">
                  <Upload
                    className={`h-5 w-5 ${
                      formData.file ? "text-blue-500" : "text-gray-400"
                    }`}
                  />
                  {formData.file ? (
                    <span className="text-blue-500 font-medium">
                      {formData.file.name}
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      Choose PDF file 
                    </span>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Custom URL */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Custom Portfolio URL
            </label>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  <Link className="h-4 w-4 mr-2" />
                  {baseUrl}
                </span>
              </div>
              <input
                type="text"
                value={formData.url}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    url: e.target.value,
                  }))
                }
                placeholder="your-custom-url"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-r-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Use Current Data Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="use-current-data"
              checked={formData.useProfileData}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  useProfileData: e.target.checked,
                }))
              }
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="use-current-data"
              className="text-sm text-gray-700 select-none flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-blue-500" />
              Use current resume data
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Generate Portfolio
          </button>
        </form>
      </div>
    </UploadModal>
  );
}

export default PortfolioDataUpload;
