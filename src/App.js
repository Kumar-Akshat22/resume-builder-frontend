import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes , Route } from 'react-router-dom'

function App() {
  return (

    <div className="w-full min-h-screen">
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
