import React from 'react';
import './Hero.css';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
// import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import { Link } from "react-router-dom";


export default function Hero() {
  return (
<React.Fragment >

<Box className= "hero"
          sx={{
            
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="xl" >
            <Typography 
              component="h1"
              variant="h2"
              align="center"
              color="aqua"
             
              fontSize= "83px"
              fontWeight= "bold"
              gutterBottom
            >
              Dev <span style={{color:"white"}}>House</span>
            </Typography>
            <Typography variant="h6" align="center" color="white" paragraph>
            Taking Developer Conversations To The Moon🚀
            </Typography>

            <Typography variant="h6" align="center" color="#8896A3" style={{fontSize:"16px"}}> Built for Techies to connect, build communities and find new opportunities. </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             <Button href="/onboard" variant="outlined" style={{color:"black" ,backgroundColor:"aqua", textAlign:"center"}}> Get Started - it's free⚡</Button>    
              
             <Button href="/explore"  variant="outlined" style={{color:"aqua", textAlign:"center"}}>Explore</Button>

             
            </Stack>
          </Container>
        </Box>
 </React.Fragment>
    
  )
}
