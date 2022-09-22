import { Button, Grid, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <div className='contact_container'>

    <div className='form'>



        {/* <TextField id='email' label='Email' variant='outlined' size='small'/> 

        <TextField id='outlined-basic' label='Name' variant='outlined' size='small' /> 

        <TextField id='outlined-basic' label='Description' variant='outlined' size='medium'/> 


        

        <TextareaAutosize minRows="4" maxRows="10"> test </TextareaAutosize> */}
<Grid container columns={24} >
 <Grid item xs={12} sm={6} >
 <TextField id='outlined-basic' label='First name' placeholder='Your first name' variant='outlined' size='small' fullWidth required/> 
 </Grid>

 <Grid item xs={12} sm={6}>
 <TextField id='outlined-basic' label='Last name' placeholder='Your last name' variant='outlined' size='small' fullWidth required/> 
 </Grid>
 </Grid>

 <Grid item xs={6} sm={3}>
 <TextField id='email' label='Email' variant='outlined' size='small' fullWidth required/> 
 </Grid>


 <Grid item xs={12} sm={6}>
 <TextField label='Message' multiline rows={5} placeholder="Type your message here" variant='outlined' size='small' fullWidth required/> 
 </Grid>

 <Button variant='outlined' size='small'>Envoyer</Button> 

 
    </div>

    </div>
    
  )
}

export default Contact