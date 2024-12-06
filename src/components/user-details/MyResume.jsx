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

// I will get the following data from Backend
const mockResumes = [
  { id: 1, name: "Software Engineer Resume", lastModified: "2023-05-15" },
  { id: 2, name: "Product Manager Resume", lastModified: "2023-06-02" },
  { id: 3, name: "Data Analyst Resume", lastModified: "2023-06-10" },
];

function MyResume() {
  const [resumes, setResumes] = useState(mockResumes);
  const navigate = useNavigate();

  const handleAnalyzeResume = ()=>{

    navigate('/resume-analysis');
  }

  // API Data   

  const handleCreateNewResume = () => {
    // Implement create new resume logic
    console.log("Creating new resume");
  };

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

          <Button className="mt-4 bg-white text-black hover:bg-slate-50">
            <PlusCircle className="mr-2 h-4 w-4" /> Generate Your Resume
          </Button>
          <Button className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white" onClick={handleAnalyzeResume}>
            <BarChart2 className="mr-2 h-4 w-4" /> Analyze Your Resume
          </Button>
          </div>
        </div>
      </header>
      {resumes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            You haven't created any resumes yet.
          </p>
          <Button className="mt-4" onClick={handleCreateNewResume}>
            <PlusCircle className="mr-2 h-4 w-4" /> Create Your First Resume
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          {resumes.map((resume) => (
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
                  <CardTitle className="text-lg mb-2">{resume.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Last modified: {resume.lastModified}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline">
                    View
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg flex items-center space-x-2 overflow-hidden relative"
                    onClick={() => handleEnhanceResume(resume.id)}
                  >
                    <Wand2 className="mr-2 h-4 w-4" /> Enhance with AI
                  </Button>
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
