import { Grid } from '@material-ui/core';
import React from 'react';
import Cardtab from '../components/Cardtab';
import Cardtab1 from './Cardtab1';
import Cardtab2 from './Cardtab2';


export default function Cardtabdisp(){
    return(
        
        <Grid container >
            <Grid item xs={12} style={{display:"flex"}}>
                <Cardtab/>
                <Cardtab1/>
                <Cardtab2/>
                {/* <Cardtab/> */}
                
           </Grid>
           {/* <Grid item xs={12} style={{display:"flex"}}>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                
           </Grid>
           <Grid item xs={12} style={{display:"flex"}}>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                
           </Grid> */}
           
            

        </Grid>
        
    )
}




