import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import TemplateOne from '../assets/Template-1.png'
import TemplateTwo from '../assets/Template-2.png'
import { useNavigate } from 'react-router-dom';

const SavedResume = () => {
  const [savedResume , setSavedResume] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  // const [resumeName, setResumeName] = useState(localStorage.getItem(resumeName))

  const fetchData = async()=>{
      setIsLoading(true)
      const res = await axios.get('/api/v1/users/get-user-info' , {
          headers: { Authorization: localStorage.getItem("AccessToken") },
      });

      console.log(res.data);
      if(res.data.statusCode === 200){

          setSavedResume(res.data.data.savedResume);
          toast.success('Successfully Fetched the Saved Resume');
          setIsLoading(false)
          console.log(res.data.data.SavedResume);
      }

  }

  const navigate = useNavigate()
  const navigationHandler = (resume)=>{
    localStorage.setItem('savedResume',JSON.stringify(resume.resumeDetails))
    navigate(`/setting/saved-resume/${resume.resumeName||'roverResume'}/preview`)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className=''>
      <h2 className='font-poppins text-3xl font-semibold text-center m-3'>Saved Resumes</h2>
      <div className='grid grid-cols-4'>
      {
        savedResume?.map(resume=>(
          <div className='' key={resume.resumeName}>
            <img onClick={()=>navigationHandler(resume)} className='w-56 rounded-lg  border-2 m-3 border-black' src={resume.resumeName=='resume-slash'? TemplateTwo:TemplateOne}/>
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default SavedResume