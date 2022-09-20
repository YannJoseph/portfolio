import React from 'react'
import "./navbar.scss"

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='About'>
            About
        </div>
        <div className='Competences'>
            Competences
        </div>
        <div className="Projects">
            Projects
        </div>
        <div className='Contact'>Contact</div>
    </div>
  )
}

export default Navbar