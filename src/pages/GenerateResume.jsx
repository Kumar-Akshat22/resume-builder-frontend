import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, RefreshCw, FileText, CheckCircle2 } from "lucide-react";
import RoverResume from "../resume/RoverResume";
import Resume1 from "../resume/Resume1";  
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  pdf,
} from "@react-pdf/renderer";
import axios from "axios";
import toast from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getResumeById } from "@/services/resumeService";


function GenerateResume() {

  const {resumeId} = useParams();

  const handleDownload = async () => {
    if (!resumeData) {
      console.log("No Resume data available for download");
      return;
    }

    try {
      const blob = await pdf(<Resume1 resumeData={resumeData} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Error generating PDF", error);
      toast.error("Failed to download the Resume");
    }
  };

  const {data: resumeData, isLoading, error} = useQuery({
    queryKey: ["resume", resumeId],
    queryFn:  () => getResumeById(resumeId) ,
    onError: (error) => {
      console.error("Error in fetching resume data", error);
      toast.error("Failed to fetch Resume data");
    },
  })


  useEffect(()=>{
    console.log("resume data", resumeData);
    
  },[resumeData])
  if(error){
    toast.error("Failed to fetch Resume data");
    return <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Failed to fetch Resume data : {error.data}
      </h1>
      <Button
        className="w-full"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Return to Home
      </Button>
    </div>
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      {isLoading ? (
        <div className="flex flex-col space-y-3 mt-5">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Hold On, Fetching your Resume...
          </h1>
          <Skeleton className="h-[325px] w-[100%] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[85%]" />
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              Your Resume is Ready!
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="col-span-1 lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    Resume Preview
                  </h2>
                  <div className="space-x-4">

                    <Button
                      onClick={handleDownload}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>

                <div
                  className="border rounded-lg overflow-hidden"
                  style={{ height: "70vh" }}
                >
                  { resumeData ? (
                    <PDFViewer width="100%" height="100%">
                      <Resume1 resumeData={resumeData} />
                    </PDFViewer>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <FileText className="h-16 w-16 text-gray-400" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default GenerateResume;
