import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './MainPage/mainpage'
import HeaderMain from './Header/HeaderMain'
import Resume from './Resume/Resume'; 
import Projects from './Projects'; 
import Contact from './Contact'; 
import About from './About'; 
import Home from './Home';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Router>
      <HeaderMain />
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <MainPage />
      </Router>
    </div>
  );
}

export default App;
