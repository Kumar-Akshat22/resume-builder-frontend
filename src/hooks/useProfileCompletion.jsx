import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function useProfileCompletion(url) {

    const [profileCompletionData , setProfileCompletionData] = useState(null);
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(null);

    const fetchData = async ()=>{

        setIsLoading(true);
        const status = localStorage.getItem('status');
        if(status){
            setProfileCompletionData(JSON.parse(status));
            return;
        }

        try{

            const response = await axios.get(url);
            if(response.status === 200){

                setProfileCompletionData(response.data.data);
                // TODO: check if its work or not
                localStorage.setItem('status', JSON.stringify(response.data.data));

                toast.success("Profile Data loaded successfully");
            } else {
                throw new Error(`Unexpected response: ${response.status}`);
              }

        }
        catch(err){

            console.error("Error fetching profile completion data:", err);
        setError(err.message);
        toast.error("Failed to load profile completion data.");

        }
        finally{

            setIsLoading(false);

        }
    }

    useEffect(()=>{fetchData()},[])

  return (
    {profileCompletionData , isLoading , error} 
  )
}

export default useProfileCompletion