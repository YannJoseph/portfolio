import React from 'react'
import "./navbar2.scss"

function Navbar2() {
  return (
    <div className='navbar-container'>
        <div className='nav'>
            <ul className='nav__menu'>
                <li className='nav__item'>Home</li>
                <li className='nav__item'>Competences</li>
                <li className='nav__item'>Projects</li>
                <li className='nav__item'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar2