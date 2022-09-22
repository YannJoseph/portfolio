import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'


function Home() {

    const [readMore, setReadMore]= useState(false)


  return (
    <div className='Home-container'>
        <h1>Welcome to my Portfolio</h1>

        <p className='text'> Young Developer Javascript, this is my story</p>
        {
            readMore? <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Eaque vel soluta placeat iure harum nisi amet praesentium et! 
                 Voluptatum quos odit nihil blanditiis ipsum minus, 
                 itaque quisquam sit laudantium ab!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Eaque vel soluta placeat iure harum nisi amet praesentium et! 
                 Voluptatum quos odit nihil blanditiis ipsum minus, 
                 itaque quisquam sit laudantium ab!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Eaque vel soluta placeat iure harum nisi amet praesentium et! 
                 Voluptatum quos odit nihil blanditiis ipsum minus, 
                 itaque quisquam sit laudantium ab!</p>:null
        }
        {/* <button onClick={() => setReadMore(!readMore)}  className='button' >{readMore ? "Read Less" : "Read More"}</button> */}
        <Button variant='outlined' size='small' onClick={() => setReadMore(!readMore)}>{readMore? "Read Less" : "Read More"}</Button>
        
    </div>
  )
}

export default Home