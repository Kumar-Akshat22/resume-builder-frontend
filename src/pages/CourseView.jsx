import CourseModuleView from "@/components/course/CourseModuleView";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockCourse } from "@/utils/dummyCourse";
import { fetchModuleByCourseId } from "@/services/courseService";

const CourseView = () => {
  const { courseId, moduleNo } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch the current course details with the exact module details
  const fetchCourseDetails = async () => {
    setLoading(true);
    try {
      const { course, module } = await fetchModuleByCourseId(
        courseId,
        moduleNo
      );
      setCourseData(course);
      setModuleData(module);
    } catch (error) {
      console.error("Error fetching course/module data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, [courseId , moduleNo]);

  if (loading || !courseData || !moduleData) {
    return <div className="p-4">Loading...</div>
  }

  return (
    <div>
      <CourseModuleView course={courseData} initialModule={moduleData}/>
    </div>
  );
};

export default CourseView;
