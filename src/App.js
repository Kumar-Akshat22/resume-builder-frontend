import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes , Route } from 'react-router-dom'
import ResumeDetails from './pages/ResumeDetails';
import Education from './components/ResumeDetails/Education';
import Projects from './components/ResumeDetails/Projects';
import Experience from './components/ResumeDetails/Experience';
import Extra from './components/ResumeDetails/Extra';
import PersonalDetails from './components/ResumeDetails/Personal';
import Skills from './components/ResumeDetails/Skills';
import Links from './components/ResumeDetails/Links';
import { useEffect, useState } from 'react';

function App() {

  const [resumeDetails , setResumeDetails] = useState({});

  const updateResumeDetails = (key , value) => {

    setResumeDetails((prevDetails)=> ({...prevDetails , [key]:value}));
  };

  useEffect(()=>{

    console.log(resumeDetails);

  }, [resumeDetails]);

  return (

    <div className="">
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path='/resume-details' element={<ResumeDetails></ResumeDetails>}>
          
          <Route path = 'education' element={<Education updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'projects' element={<Projects updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'experience' element={<Experience updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'extra' element={<Extra updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'personaldetails' element={<PersonalDetails updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'skills' element={<Skills updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'links' element={<Links updateResumeDetails={updateResumeDetails}/>} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
