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
          marginTop="50px"
        >
          <Container maxWidth="xl" >
            <Typography 
              component="h1"
              variant="h2"
              align="left"
              color="aqua"
              className='devhouse'
             
              fontSize= "58px"
              fontWeight= "bold"
              gutterBottom
            >
              <span style={{color:"white"}}>Where <span style={{color:"aqua"}}>Global</span>  Tech <br /> Conversations  Begins</span>
            </Typography>
            <Typography fontSize="17px" align="left" color="white" paragraph>
            Taking Developer Conversations To The Moon🚀
            </Typography>

            <Typography fontSize="13px" align="left" color="#8896A3" style={{fontSize:"16px"}}> Built for Techies to connect, build communities and find new opportunities. </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="left"
            >
             <Button href="/onboard" variant="outlined" style={{color:"black" ,backgroundColor:"aqua", textAlign:"left"}}> Get Started - it's free⚡</Button>    
              
           
            </Stack>
          </Container>
        </Box>
 </React.Fragment>
    
  )
}
