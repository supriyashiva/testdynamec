import React from 'react';
import { Typography, Container, Button, Grid, Paper, TextField, Box } from '@material-ui/core'


export default function Reports(){
    return(
        <Container>
           <form>
               <Grid container style={{width:"60%"}} >
                 
                   <Grid item xs={4}>
               <Typography style={{alignSelf:"center",marginTop:"10px"}}>Case #</Typography>
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
               <Typography style={{alignSelf:"center",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}>Amount</Typography>
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
               <Typography style={{alignSelf:"center",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}>Paid Date</Typography>
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
               <Typography style={{alignSelf:"center",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}>Mode of Payment</Typography>
               </Grid>
               <Grid item xs={6}>
               <TextField 
               style={{width:"100%",marginTop:"10px"}}
               variant="outlined"/>
               </Grid>
               
               </Grid> 
           </form>
        </Container>
    )
}


