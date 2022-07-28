import React from 'react'
import './Home1.css'
import { Link } from 'react-router-dom'

export default function Home1() {
  return (
    <div class="landing-page">
    <div class="container">
      <div class="header-area">
        <div class="logo">tourism <b>website</b></div>
        <ul class="links">
          <li><a href="/index.html">Home</a></li>
          <li><a class="jj" href="/district/district.html">Districts</a></li>
          <Link to='/Login'>Login</Link>

          <Link to='/Districts'>Districts</Link>
          <Link to='/Hello'>Hello</Link>

        </ul>
      </div>
      <div class="info">
        <h1>Feel the beauty</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste,
          Repellendus odit nihil</p>
        <button>Explore More</button>
      </div>
      <div class="image">
        <img src="/images/joshua-earle--87JyMb9ZfU-unsplash.jpg" id="imgg"/>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
  )
}
