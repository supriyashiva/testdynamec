import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

export default function Cardtab1(){
    return(
        <Card  style={{width:"200px",height:"18vh",marginTop:"10px",backgroundColor:"orange",marginLeft:"10px"}}>
            <CardContent>
                <Typography>
                    No of Cases
                </Typography>
            </CardContent>
        </Card>
    )
}