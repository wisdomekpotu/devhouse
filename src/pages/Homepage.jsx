import React, { Fragment } from 'react'
import Hero from '../components/Hero/Hero';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import Navbar from '../components/Navbar/Navbar';
import { Grid, Stack, Typography } from '@mui/material';
import Card  from '../components/Card/Card';

export default function Homepage() {
  return (
    <Fragment>
     <Navbar/>
      <Hero />
      <br/>
     <FeatureCard/>
 
 <Stack  direction={{ xs: 'column' }}
spacing={{ xs: 1, sm: 2, md: 4 }}  style={{justifyContent:"center", marginTop:"10%"}}>
      <Typography fontSize="13px" color="#8896A3" align='center'>
         
         Neque porro quisquam est qui 
         </Typography>
         <Typography fontSize="60px" color="white" align='center'>
         
         Featured Virtual Community Events
         </Typography>
         
         <Typography fontSize="20px" color="white" align='center'>
         
         Create amazing experiences for the web in record time—without <br /> thinking once about servers or devops.
         </Typography>
         
 </Stack>


 <Stack  direction={{ xs: 'column' }}
spacing={{ xs: 1, sm: 2, md: 4 }}  style={{justifyContent:"center", marginTop:"10%"}}>
      <Typography fontSize="13px" color="#8896A3" align='center'>
         
         Neque porro quisquam est qui 
         </Typography>
         <Typography fontSize="60px" color="white" align='center'>
         
        Latest Techical Articles
         </Typography>
         
         <Typography fontSize="20px" color="white" align='center'>
         
         Create amazing experiences for the web in record time—without <br /> thinking once about servers or devops.
         </Typography>

        

 </Stack>
    </Fragment>
  )
}
