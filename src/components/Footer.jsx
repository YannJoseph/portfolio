import React from 'react'
import "./footer.scss"
import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
    <LinkedIn  />
    <GitHub />
        </div>
        <p>Un realisation de Yann Joseph - 2022 </p>
    </div>
  )
}

export default Footer