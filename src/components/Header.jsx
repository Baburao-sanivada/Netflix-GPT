import React from 'react'
import netflixLogo from "../utils/Images/Netflix_Logo.png"

const Header = () => {
  return (
    <div className='absolute w-44 bg-gradient-to-b from-black z-20'>
        <img src={netflixLogo} alt="NetflixLogo"/>
    </div>
  )
}

export default Header