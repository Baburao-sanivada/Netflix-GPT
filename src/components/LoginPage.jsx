import React from 'react'
import loginpageBgImage from "../utils/Images/loginPageBgImage.jpg"
import Header from './Header'

const LoginPage = () => {
  return (
    <div>
        {/* Logo */}
        <div className='absolute'>
            <Header/>
        </div>
        {/* Backgorund Image */}
        <div>
            <img src={loginpageBgImage}></img>
        </div>
    </div>
  )
}

export default LoginPage