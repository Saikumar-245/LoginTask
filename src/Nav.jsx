import React from 'react'

import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div className='nav'>
     <NavLink to="./addtask">  <p className='ppp'>+Add Task</p></NavLink>
       </div>
    </>
    
  )
}

export default Nav