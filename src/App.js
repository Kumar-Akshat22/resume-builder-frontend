import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes , Route } from 'react-router-dom'
import ResumeDetails from './pages/ResumeDetails';
import Education from './components/ResumeDetails.js/Education';
import Projects from './components/ResumeDetails.js/Projects';
import Experience from './components/ResumeDetails.js/Experience';
import Extra from './components/ResumeDetails.js/Extra';
import PersonalDetails from './components/ResumeDetails.js/Personal';

function App() {
  return (

    <div className="">
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path='/resume-details' element={<ResumeDetails></ResumeDetails>}>
          
          <Route path = 'education' element={<Education />} />
          <Route path = 'projects' element={<Projects />} />
          <Route path = 'experience' element={<Experience />} />
          <Route path = 'extra' element={<Extra />} />
          <Route path = 'personal-details' element={<PersonalDetails />} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
