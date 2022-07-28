import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Reg from './pages/Reg';
import React from 'react';
import {
  BrowserRouter ,
  Routes ,
  Route
} from "react-router-dom";
import Home1 from './pages/Home1';
import Districts from './pages/Districts';
import Hello from './pages/Hello';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home1/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
     
    <Route path='/Districts' element={<Districts/>}></Route>
    <Route path='/Hello' element={<Hello/>}></Route>
      
    </Routes>
    
    </BrowserRouter>

    
  );
}

export default App;
