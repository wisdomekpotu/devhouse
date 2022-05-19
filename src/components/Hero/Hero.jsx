import React, {Fragment} from 'react';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { motion } from "framer-motion";


export default function Hero() {
  return (
<Fragment>

<Box sx={{  pt: 8, pb: 6,}} marginTop="50px">
          <Container maxWidth="xl" >
            <Typography 
              component="h1"
              variant="h2"
              align="center"
              color="aqua"
              className='devhouse'
             
              fontSize= "64px"
              fontWeight= "680"
              gutterBottom
            >
         
       
  <span style={{color:"white"}}>The Open <span style={{color:"aqua"}}>Source</span>  Blogging<br/> Platform  for Developers </span>
            </Typography>
   
            <Typography fontSize="23px" align="center" color="#8896A3" style={{fontSize:"16px"}}>   Taking Developer Conversations To The Moon🚀 </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             <Button
              component={motion.button}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }} 
              
              variant="outlined" style={{color:"black" ,backgroundColor:"aqua", textAlign:"center", fontWeight:"bold"}}   href="/onboard"> Join the Community - it's free⚡</Button>    
              
           
            </Stack>

          
          </Container>
        </Box>
 </Fragment>
    
  )
}
