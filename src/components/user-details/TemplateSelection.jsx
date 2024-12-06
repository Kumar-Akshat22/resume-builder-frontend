import React from 'react'
import { useNavigate } from 'react-router-dom';

const templates = [

    {id:1 , name:"RoverResume"},
    {id:2 , name:"Resume2"}
]

function TemplateSelection() {

    const [resumeName , setResumeName] = useState('');
    const navigate = useNavigate();

    const handleResumeSelection = (name)=>{

        setResumeName(name);
        
    }

  return (

    <div></div>
  )
}

export default TemplateSelection