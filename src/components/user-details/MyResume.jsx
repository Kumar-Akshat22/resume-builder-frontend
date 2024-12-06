import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, PlusCircle, Wand2 , BarChart2, Plus } from "lucide-react";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { Create } from "@mui/icons-material";
import { useQuery } from "react-query";
import { getAllResume } from "@/services/resumeService";
import GenerateResume from "@/pages/GenerateResume";
import GenerateResumeModal from "./GenerateResumeModal";

function MyResume() {
  const navigate = useNavigate();
  const [isModalOpen , setIsModalOpen] = useState(false);

  const handleAnalyzeResume = ()=>{

    navigate('/resume-analysis');
  }

  // API Data   

  const {data: resumes, isLoading} = useQuery({
    queryKey:'resumes',
    queryFn: () => getAllResume(),
  })

  const handleEnhanceResume = (id) => {
    // Implement enhance resume logic
    console.log(`Enhancing resume with id: ${id}`);
  };


  return (
    <div className="container mx-auto p-0 space-y-6">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">My Resume</h1>
          <div className="space-x-2">

          <Button onClick={()=>{setIsModalOpen(!isModalOpen)}} className="mt-4 bg-white text-black hover:bg-slate-50">
            <PlusCircle className="mr-2 h-4 w-4" /> Generate Your Resume
          </Button>
          <Button className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white" onClick={handleAnalyzeResume}>
            <BarChart2 className="mr-2 h-4 w-4" /> Analyze Your Resume
          </Button>
          </div>
        </div>
      </header>
      <GenerateResumeModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} onSubmit={null} baseUrl={'http://localhost:5173/portfolio/'}/>

      {
      isLoading ?
      <div className="text-center py-12">
        <p className="text-xl text-muted-foreground">Loading...</p>
      </div>
      :
      Array.isArray(resumes) && resumes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            You haven't created any resumes yet.
          </p>
          {/* <Button className="mt-4" onClick={handleCreateNewResume}>
            <PlusCircle className="mr-2 h-4 w-4" /> Create Your First Resume
          </Button> */}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          {Array.isArray(resumes) && resumes.map((resume) => (
            <motion.div
              key={resume.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-0">
                <CardHeader className="p-0">
                  <div className="flex justify-center items-center aspect-video bg-muted">
                    {/* Replace with actual resume thumbnail */}

                        <FileText className="absolute mx-auto text-center text-stone-600" size={64}/>
                    
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{resume.title}</CardTitle>
                  {resume.createdAt && <p className="text-sm text-muted-foreground">
                    Created At : {new Date(resume.createdAt).toLocaleString()}
                  </p>}
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline">
                    View
                  </Button>
                  {resume.generatedWithAi && <div
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg flex items-center space-x-2 overflow-hidden relative"
                  >
                    <Wand2 className="mr-2 h-4 w-4" /> AI Generated
                  </div>}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyResume;
