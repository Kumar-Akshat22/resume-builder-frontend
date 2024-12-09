import React from 'react'
import axios from 'axios'

const fetchResumeData = async(resumeId) => {

    try{

        const res = await axios.get(`api/v1/resume/${resumeId}`)

    } catch(error){

    } finally{
        
    }
}
function useResumeData() {
  return (
    <div>useResumeData</div>
  )
}

export default useResumeData