import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Status from '../../components/status/Status';
import Newpost from '../../components/newpost/Newpost';
import Rightbar from '../../components/rightbar/Rightbar';




export default function Home() {
  return (
    <div className='text'>
       <Topbar/> 
       <div className="homecontainer">
         <Sidebar/>
         <Status/>
         <Newpost/>
         <Rightbar/>
       </div>
       
       
       
       
       
         
    
    </div>
    

    

    
  )
}
