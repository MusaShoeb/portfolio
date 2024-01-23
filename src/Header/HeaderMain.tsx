import React from "react";
import './HeaderMain.css'

export default function HeaderMain() { 
    
  
    return (
      <div className='HeaderMain'>
       <header>
          <ul>
            <li><a href = "Home.tsx"> Home</a></li>
            <li><a href = "#"> Create</a></li>
            <li><a href = "#"> Explore</a></li>
            <li><a href = "#"> Manage</a></li>
            <li><a href = "#">Profile</a></li>
          </ul>
       </header>
       
      </div>
       
    );
  }