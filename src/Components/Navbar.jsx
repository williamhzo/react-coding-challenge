import React from 'react'
import {NavLink} from  'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink className='nav__link' to='/'>Home</NavLink>
      <NavLink className='nav__link' to='/temperature'>Temperature</NavLink>
      <NavLink className='nav__link' to='/custom-image'>Custom Image</NavLink>
    </div>
  )
}

export default Navbar
