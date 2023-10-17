import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'




function Navbar() {
  const [action, setAction] = useState('Sign Up')
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
            <Link className={action} onClick={()=>{setAction("Login")}} to='LoginSignup'><button>Login</button></Link>

            {/* <Link className={action} onClick={()=>{setAction("Sign Up")}} to='LoginSignup'><button>Sign Up</button></Link> */}


            
            
            {/* <Link to='LoginSignup'><button>Sign Up</button></Link> */}
            {/* <button className={action==="Login"?"nav-btn nav-button":"nav-button"} onClick={()=>{setAction("/Login")}}>Sign Up</button>

            <button className={action==="Sign Up"?"nav-btn nav-button":"nav-button"} onClick={()=>{setAction("/Login")}}>Login </button> */}
            
        </nav>
    </div>
  )
}

export default Navbar