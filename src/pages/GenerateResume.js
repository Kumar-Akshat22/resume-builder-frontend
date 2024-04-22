import React, { useEffect, useState } from "react";
import RoverResume from "../resume/RoverResume";
import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";
import toast from "react-hot-toast";

function GenerateResume() {

  const [resumeData , setResumeData] = useState({});
  const [isLoading , setIsLoading] = useState(true);
  // const [resumeName, setResumeName] = useState(localStorage.getItem(resumeName))

  const fetchData = async()=>{
      setIsLoading(true)
      const res = await axios.get('/api/v1/users/get-user-info' , {
          headers: { Authorization: localStorage.getItem("AccessToken") },
      });

      console.log(res.data);
      if(res.data.statusCode === 200){

          setResumeData(res.data.data.resumeDetails);
          toast.success('Successfully Fetched the Resume Data');
          setIsLoading(false)
          console.log(res.data.resumeData);
      }

  }

  useEffect(()=>{
    fetchData()
  },[])



  return (
    <div className="w-full h-screen">
      <div className="max-w-[1140px] mx-auto p-4">
      {
        isLoading?
        <div>Loading</div>
        :

          <PDFViewer className="w-full min-h-screen">
            <RoverResume resumeData={resumeData} />
          </PDFViewer>
      }
  
      </div>
    </div>
  );
}

export default GenerateResume;
