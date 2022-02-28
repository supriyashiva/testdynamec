import { Box, Button, ButtonGroup, Container, Grid, TextField, Typography } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import React  from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

function Signin1(){
    return(
            
            <Container style={{display:"flex" ,alignItems:"center",justifyContent:"center"}}>
            <form  >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                <Typography style={{display:"flex",alignItems:"center"}}> Login Form</Typography>
                </Grid>
                <Grid item xs={12}>
                <TextField  
                
                label="Enter your username"
                />
                </Grid>
                <Grid item xs={12}>
                 <TextField 
                label="Enter your password"
                
                 />
                 </Grid>
                 <Grid item xs={12}>

                 <button style={{
                     backgroundColor:"#33eb91",
                     borderRadius:"20px",
                     marginTop:"30px",
                    justifySelf:"center",
                    padding:"5px 50px",
                     }} variant="contained" > Login</button>
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
        </Container>
        
    )
}
export default Signin1 ;