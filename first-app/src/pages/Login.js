


import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <React.Fragment>
    <div class="login-box">
        <h2 style={{color:"blue"}}>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required=""/>
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required=""/>
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          <Link to='/Reg'>Register</Link>
        </form>
    </div>
    
    </React.Fragment>
  )
}
