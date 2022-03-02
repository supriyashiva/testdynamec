import React from 'react';
import { Typography, Container, Button, Grid, Paper, TextField, Box, Select } from '@material-ui/core';



export default function Submitform(){
  
  return(
      
        <Container>
           <form>
               <Grid container style={{width:"60%"}} >
                 
                   <Grid item xs={4}>
                     
               <Typography style={{alignSelf:"center",marginTop:"10px"}}>Select Client</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField 
               
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"/>
               
               </Grid>

               <Grid item xs={4}>
                     
               <Typography style={{alignSelf:"center",marginTop:"10px"}}>Client Id</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField 
               
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"/>
               
               </Grid>
               
               
               <Grid item xs={4}>
               <Typography style={{alignSelf:"center",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}> Client Name</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField 
               
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"/>
               </Grid>
               
               <Grid item xs={4}>
               <Typography style={{alignSelf:"center",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}>Father Name</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField 
               
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"/>
               </Grid>
               {/* <Grid item xs={2}>
                 <Button  style={{marginLeft:"40px"}} variant="contained" color="primary">Add_Client</Button>
               </Grid> */}

               

               <Grid item xs={4}>
               <Typography style={{alignSelf:"center",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}>Husband Name</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField 
               
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"/>
               </Grid>
               {/* <Grid item xs={2}>
                 <Button style={{marginLeft:"40px"}} variant="contained" color="primary">Edit_Client</Button>
               </Grid>  */}



               <Grid item xs={4}>
               <Typography style={{alignSelf:"center",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}>Client Contact</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField
               
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"/>
               </Grid>
                <Grid item xs={2}>
                 <Button style={{marginLeft:"40px"}} variant="contained" color="primary">Save/Update</Button>
               </Grid> 

               <Grid item xs={4}>
               <Typography style={{alignSelf:"center",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}>Client permanent address</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField 
               
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"
               
               />
               </Grid>
               <Grid item xs={2}>
                 <Button style={{marginLeft:"40px",padding:"5px 40px"}} variant="contained" color="primary"> Close</Button>
               </Grid>

               <Grid item xs={4}>
               <Typography style={{alignSelf:"center",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}>Client present address</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField 
               
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"
               
               />
               </Grid>

               <Grid item xs={4}>
                     
               <Typography style={{alignSelf:"center",marginTop:"10px"}}>Brief Facts</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField 
               
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"
               multiline 
               rows={3}
               />
               
               </Grid>
               
               </Grid> 
           </form>
        </Container>
        
    )
}


  




