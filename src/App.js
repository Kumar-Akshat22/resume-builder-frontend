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
import SignUp from './pages/SignUp';
import GenerateResume from './pages/GenerateResume';
import ResumeTemplates from './pages/ResumeTemplates';

function App() {

  const [resumeDetails , setResumeDetails] = useState({});


  const updateResumeDetails = (key , value) => {

    setResumeDetails((prevDetails)=> ({...prevDetails , [key]:value}));
  };

  // const getData = async () => {
  //   const res = await axios.get("/api/v1/users/get-user-info", {
  //     headers: { Authorization: localStorage.getItem("AccessToken") },
  //   });
  //   console.log(res.data);
  //   if (res.data.statusCode == 200) {
  //     setResumeData(res.data.data.resumeDatails);
  //   }
  // };

  useEffect(()=>{
    console.log(resumeDetails);

  }, [resumeDetails]);



  return (

    <div className="">
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp />} />

        <Route path='/templates' element={<ResumeTemplates />} />

        <Route path='/resume-details/:resumeName/' element={<ResumeDetails></ResumeDetails>}>
          {/* <Route index element={<PersonalDetails/>}/> */}
          <Route path = 'education' element={<Education updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'projects' element={<Projects updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'experience' element={<Experience updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'extra' element={<Extra resumeDetails = {resumeDetails} updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'personaldetails' element={<PersonalDetails updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'skills' element={<Skills updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'links' element={<Links updateResumeDetails={updateResumeDetails}/>} />

        </Route>

        <Route path='/generate-resume' element={<GenerateResume />} />

      </Routes>

    </div>
  );
}

export default App;
