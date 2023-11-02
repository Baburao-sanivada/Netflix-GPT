import React from 'react'
import netflixLogo from "../utils/Images/Netflix_Logo.png"

const Header = () => {
  return (
    <div className='w-44 bg-gradient-to-b from-black'>
        <img src={netflixLogo} alt="NetflixLogo"/>
    </div>
  )
}

export default Header