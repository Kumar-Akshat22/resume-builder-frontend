import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes , Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Profile from './components/user-details/Profile';
import Setting from './pages/Setting';
import SavedResume from './components/SavedResume';

import SignUp from './pages/SignUp';
import GenerateResume from './pages/GenerateResume';
// import ResumeTemplates from './pages/ResumeTemplates';
import PreviewSavedResume from './components/PreviewSavedResume'
import Education from './components/user-details/Education';
import Projects from './components/user-details/Projects';
import WorkExp from './components/user-details/WorkExp';
import Skills from './components/user-details/Skills';
import ResumeAnalysis from './pages/ResumeAnalysis';
import MyPortfolio from './components/user-details/MyPortfolio';
import MyResume from './components/user-details/MyResume';
import Portfolio from './pages/Portfolio';


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
        <Route path='/signup' element={<SignUp />} />

        <Route path="/setting/" element={<Setting/>}>

          <Route path = 'personal-details' element={<Profile/>} />
          <Route path = 'education' element={<Education updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'project' element={<Projects/>} updateResumeDetails={updateResumeDetails}/>
          <Route path = 'work-expr' element={<WorkExp/>} updateResumeDetails={updateResumeDetails}/>
          <Route path = 'skills' element={<Skills/>} updateResumeDetails={updateResumeDetails}/>
          <Route path='myPortfolio' element={<MyPortfolio />} />
          <Route path='myResume' element={<MyResume />} />


        </Route>
        <Route path='/portfolio/:username' element={<Portfolio />} />
          
        {/* <Route path='/templates' element={<ResumeTemplates />} /> */}
        <Route path='/resume-analysis' element={<ResumeAnalysis />} />
        <Route path='/generate-resume/:resumeName/' element={<GenerateResume />} />
        <Route path='/setting/saved-resume/:resumeName/preview' element={<PreviewSavedResume />} />

      </Routes>

    </div>
  );
}

export default App;
