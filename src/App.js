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
import ResumeView from './components/ResumeView';
import Profile from './components/Profile';
import Setting from './pages/Setting';
import SavedResume from './components/SavedResume';

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
        <Route path="/signin" element={<Login></Login>}></Route>

        <Route path="/setting" element={<Setting/>}>

          <Route path = 'profile' element={<Profile/>} />
          <Route path = 'saved-resume' element={<SavedResume/>} />


        </Route>

        <Route path='/resume-details' element={<ResumeDetails></ResumeDetails>}>
          
          <Route path = 'education' element={<Education updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'projects' element={<Projects updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'experience' element={<Experience updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'extra' element={<Extra updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'personaldetails' element={<PersonalDetails updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'skills' element={<Skills updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'links' element={<Links updateResumeDetails={updateResumeDetails}/>} />

        </Route>

        <Route path='/view-resume' element={<ResumeView />} />
      </Routes>

    </div>
  );
}

export default App;
