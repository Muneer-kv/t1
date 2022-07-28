import React from 'react'

import './Login.css'
import {Link} from 'react-router-dom'

export default function Reg() {
  return (
    <div class="login-box">
    <h2>Sign up</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required=""/>
        <label>Name</label>
      </div>
      <div class="user-box">
        <input type="text" name="" required=""/>
        <label>Email</label>
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
      <Link to='/Login'>login</Link>

    </form>
  </div>
    
  )
}
