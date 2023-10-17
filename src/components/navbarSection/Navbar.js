import React, { useState } from 'react'
import './Navbar.css'
import LoginSignup from '../loginSignUpComponent/LoginSignup'



function Navbar() {
  const [action, setAction] = useState('Login')
  return (
    <div>
        <nav className='container'>
            <div className="logo">
                <img src="./images/logo.png" alt="" />
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contect</li>
            </ul>
            <button className={action==="Login"?"nav-btn nav-button":"nav-button"} onClick={()=>{setAction(<LoginSignup/>)}}>Sign Up</button>

            <button className={action==="Sign Up"?"nav-btn nav-button":"nav-button"} onClick={()=>{setAction(<LoginSignup/>)}}>Login </button>
            
        </nav>
    </div>
  )
}

export default Navbar