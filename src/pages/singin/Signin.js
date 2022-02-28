import React, { useRef } from 'react'
import { auth } from '../../firebase';
import './Signin.css';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import { Box, Button, ButtonGroup, Container, Grid, TextField, Typography } from '@material-ui/core';




const Signin = () => {
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="signin">
            <form action="">
                  <h1>Sign in</h1>
                < input ref={emailRef} type="email" />
                <input ref={passwordRef} type="password" />
                <button onClick={signIn}>Sign in </button>  

 <Grid container spacing={2}>
                    <Grid item xs={12}>
                <Typography style={{display:"flex",alignItems:"center"}}> Login Form</Typography>
                </Grid>
                <Grid item xs={12}>
                <TextField  
                label="Enter your email"
                />
                </Grid>
                <Grid item xs={12}>
                 <TextField 
                 label="Enter your password"
                />
                 </Grid>
                 <Grid item xs={12}>

                 <Button
                   
                 style={{
                     backgroundColor:"#33eb91",
                     borderRadius:"20px",
                     marginTop:"30px",
                    justifySelf:"center",
                    padding:"5px 50px",
                     }} variant="contained"  > Login</Button>
                     </Grid>
                     <Grid item xs={12}>
                         <Typography style={{fontSize:"15px",fontweight:"50px"}}>or sign in with :</Typography>
                     </Grid>
                     <Grid item xs={12}>
                         
                         <TwitterIcon style={{color:"#2196f3",marginRight:"20px"}}/>
                         <FacebookIcon style={{color:"#2196f3",marginRight:"20px"}}/>
                         <EmailIcon style={{color:"#2196f3",marginRight:"20px"}}/>
                         
                     </Grid>
                     
                     </Grid> 
            </form>
        </div>
    )
}

export default Signin