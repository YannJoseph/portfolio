import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar2.scss"

function Navbar2() {
  return (
    <div className='navbar-container'>
        <div className='nav'>
            <ul className='nav__menu'>
                <li className='nav__item'> <Link to="/">Home</Link></li>
                <li className='nav__item'>Competences</li>
                <li className='nav__item'>Projects</li>
                <li className='nav__item'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar2