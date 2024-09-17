import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
      <div className="navbar">
        <div className="logo">
                <p className="logo">ReelMotion</p>
        </div>

      <div className="menu">
          <ul className='m-5 mx-8'>
            <li><Link to="/" className="mx-6 text-orange-500 font-bold ">home</Link></li> 
            <li><Link to="/movies" className="mx-6 text-orange-500 font-bold">movies</Link></li>
            <li><Link to="/watchlist" className="text-orange-500 font-bold">watchlist</Link></li>
          </ul>
      </div>

        <div className="serchbox">
          <input type="text" placeholder="serching" />
          <div id="icon">
          <i class="fa-solid fa-magnifying-glass" style={{color:"black" }}></i>
          </div>
        </div>

                <div className="Login">
                    <button>Login</button>

                </div>
    </div>
  )
}

export default Navbar
