import axios from 'axios'
import toast from 'react-hot-toast'
import { courseEndpoints } from './apis'

const createCourse = async (title, topics, subject, language) => {
    const res = await axios.post(`${courseEndpoints.CREATE_COURSE}` , {title , topics: topics.split(',').map(topic => topic.trim()) , subject , language})
    if(res.data.statusCode == 404){
        throw new Error("Course not created")
    }
    return res.data;
}

const fetchAllCourses = async (searchTerm = "") => {

    const toastId = toast.loading("Loading...");
    let result = []
    try {
      const res = await axios.get(`${courseEndpoints.GET_COURSES}`, {
        params: { search: searchTerm }
      });
      result = res?.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Failed to fetch courses");
      throw error;
    }

    toast.dismiss(toastId);
    return result;
  };

   const fetchModuleByCourseId = async (courseId, moduleNo) => {
    const response = await axios.get(`/api/v1/courses/${courseId}/${moduleNo}`);
    return response.data;
  };

export {
    createCourse,
    fetchAllCourses,
    fetchModuleByCourseId
}