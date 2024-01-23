import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resume from './Resume'; 
import Projects from './Projects'; 
import Contact from './Contact'; 
import About from './About'; 
import Home from './Home';
import './HeaderMain.css';

export default function HeaderMain() { 
  return (
    <Router>
      <div className='HeaderMain'>
        <nav>
          <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/resume'}>Resume</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" Component={Home}></Route>
          <Route path="/resume" Component={Resume}></Route>
          <Route path="/projects" Component={Projects}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
      </div>
    </Router>
  );
}
