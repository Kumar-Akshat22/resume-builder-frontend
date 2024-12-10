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
import ProfileCompletion from './components/user-details/ProfileCompletion';
import { QueryClient, QueryClientProvider } from 'react-query';
import PortfolioPage from './components/PortfolioPage';
import PortfolioDark from './components/Portfolio/TemplateDark/PortfolioDark';
import Assets from './components/Assets';
import SignOut from './components/SignOut';


function App() {

  const queryClient = new QueryClient();
  const [resumeDetails , setResumeDetails] = useState({});


  const updateResumeDetails = (key , value) => {

    setResumeDetails((prevDetails)=> ({...prevDetails , [key]:value}));
  };

  useEffect(()=>{
    console.log(resumeDetails);

  }, [resumeDetails]);



  return (

    <div className="">
      <QueryClientProvider client={queryClient} >
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/test' element={<PortfolioDark />} />

        <Route path="/dashboard/" element={<Setting/>}>

          <Route path='profile-completion' element={<ProfileCompletion />} />
          <Route path = 'personal-details' element={<Profile/>} />
          <Route path = 'education' element={<Education updateResumeDetails={updateResumeDetails}/>} />
          <Route path = 'project' element={<Projects/>} updateResumeDetails={updateResumeDetails}/>
          <Route path = 'work-expr' element={<WorkExp/>} updateResumeDetails={updateResumeDetails}/>
          <Route path = 'skills' element={<Skills/>} updateResumeDetails={updateResumeDetails}/>
          <Route path='myPortfolio' element={<MyPortfolio />} />
          <Route path='portfolio/:link/edit' element={<PortfolioPage />} />
          <Route path='myResume' element={<MyResume />} />
          <Route path='assets' element={<Assets  />} />


        </Route>
        <Route path='/portfolio/:link' element={<Portfolio />} />
          
        {/* <Route path='/templates' element={<ResumeTemplates />} /> */}
        <Route path='/resume-analysis' element={<ResumeAnalysis />} />
        <Route path='/resume/:resumeId/' element={<GenerateResume />} />
        <Route path='/setting/saved-resume/:resumeName/preview' element={<PreviewSavedResume />} />

      </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
