import React, { useEffect, useState } from 'react'
import '../styles/Navbar.scss'
import { NavLink } from 'react-router-dom'



const Navbar = ({handlePage}) => {

  const [page, setPage]= useState("H")

  const handelClick = (v)=>{
    handlePage(v)
    setPage(v)
  }

  return (
    <div className='navbar'>
        <nav>
            <div className="nav-item">
              <a className={page == "H" ? "active a" : "a"}  activeclassname="active" onClick={()=>{handelClick("H")}}>Home</a>
            </div>
            <div className="nav-item">
              <a className={page == "S" ? "active a" : "a"}  activeclassname="active"  onClick={()=>{handelClick("S")}}>Skill</a>
            </div>
            <div className="nav-item">
              <a className={page == "P" ? "active a" : "a"}  activeclassname="active"  onClick={()=>{handelClick("P")}}>Project</a>
            </div>
            {/* <div className="nav-item">
              <NavLink className='a' to="/about" activeclassname="active">About</NavLink>
            </div> */}
            <div className="nav-item">
              <a className={page == "C" ? "active a" : "a"}  activeclassname="active"  onClick={()=>{handelClick("C")}}>Contact</a>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar
