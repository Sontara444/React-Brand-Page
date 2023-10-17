import React, { useState } from 'react'
import './LoginSignup.css'

function LoginSignup() {
  const [action, setAction] = useState('Login')
  return (
    <div className='container-box'>
      <div className="header">
        <div className="text">{action}</div>
          <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:
        <div className="input">
        <img src="./images/Assets/person.png" alt="person-img" />
        <input type="text" placeholder='Name'/>
      </div>}
        
      </div>
      <div className="inputs">
        <div className="input">
          <img src="./images/Assets/email.png" alt="email-img" />
          <input type="email"  placeholder='Email Id'/>
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="./images/Assets/password.png" alt="password-img" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:
      <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"? "submit gray": "submit"} onClick={() => {setAction('Sign Up')}}>Sign Up</div>
        <div className={action==="Sign Up"? "submit gray": "submit"} onClick={() => {setAction('Login')}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup