import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './MainPage/mainpage'
import HeaderMain from './Header/HeaderMain'
import Home from './Home/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
        
        <HeaderMain>

        </HeaderMain>
        <MainPage>
          
        </MainPage>
        
    </div>
     
  );
}

export default App
