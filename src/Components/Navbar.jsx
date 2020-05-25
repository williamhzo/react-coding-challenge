import React from 'react'
import {NavLink} from  'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/temperature'>Temperature</NavLink>
      <NavLink to='/custom-image'>Custom Image</NavLink>
    </div>
  )
}

export default Navbar
