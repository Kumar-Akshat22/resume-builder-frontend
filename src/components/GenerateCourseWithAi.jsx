import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent , CardHeader , CardFooter , CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import UploadModal from "./common/UploadModal";
import LoadingScreen from "./ui/LoadingScreen";
import { Images } from "lucide-react";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { fetchAllCourses } from "@/services/courseService";

const GenerateCourseWithAi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCourseDetails = async () => {

    // TODO: GET /courses
    setLoading(true);
    try {
      
      const response = await fetchAllCourses();
      console.log("Course Details: " , response);
      setCourseData(response);

    } catch (error) {
      
      console.error("Error fetching courses:", error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(()=>{

    fetchCourseDetails()
  } , [])

  return (
    <div className="container p-0 mx-auto space-y-6">
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Generate course with AI
          </h1>
          <div className="space-x-2">
            <Button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
              className="mt-4 text-black bg-white hover:bg-slate-50"
            >
              <PlusCircle className="w-4 h-4 mr-2" /> Generate Your Course
            </Button>
          </div>
        </div>
      </header>

      <UploadModal
        modalTitle="Generate course with AI"
        inputLabel="Title"
        inputPlaceholder="Enter your topic name"
        isOpen={isModalOpen}
        onClose={()=>setIsModalOpen(false)}
        onCourseCreated={fetchCourseDetails}
      />

{loading ? (
  <LoadingScreen />
) : courseData.length === 0 ? (
  <div className="py-12 text-center">
    <p className="text-xl text-muted-foreground">
      You haven't created any courses yet.
    </p>
  </div>
) : (
  <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {courseData.map((course, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className="relative overflow-hidden transition-shadow duration-300 shadow-md hover:shadow-xl rounded-2xl">
          <CardHeader className="p-0">
            <div className="relative aspect-video bg-muted">
              {course.image ? (
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <Images size={48} />
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-2">
            <CardTitle className="text-xl font-semibold">{course.title}</CardTitle>
            <p className="text-sm font-medium text-blue-500">{course.subject}</p>
            <p className="text-sm leading-snug text-gray-600 line-clamp-3">
              {course.description}
            </p>
            <p className="mt-2 text-xs text-gray-400">
              Modules: <span className="font-medium">{course.modules}</span>
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button onClick={() => navigate(course.route)} className="w-full">
              Start Course
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    ))}
  </div>
)}
    </div>
  );
};

export default GenerateCourseWithAi;
