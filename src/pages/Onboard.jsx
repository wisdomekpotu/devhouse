import React, { Fragment } from 'react'
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import { signInWithGoogle } from '../firebase/signInWithGoogle';


export default function Onboard() {
  return (
<Fragment>
  <Box>
    <Container maxWidth="xl" >   
         <Typography variant="h5" fontSize={31} marginTop={8} color="aqua" align='center'>
          Signin to Your Account
         </Typography>
         <Stack
              sx={{ pt: 6 }}
              
              direction="column"
              spacing={2}
              justifyContent="center"
            >
             <Button onClick={signInWithGoogle} variant="outlined" style={{color:"white" , borderRadius:"13px", textAlign:"center"}}><span><img src="" alt="" /></span> Continue with Google</Button>    
              
             <Button href="/explore"  variant="outlined" style={{color:"white", borderRadius:"13px",textAlign:"center"}}>Continue with Github</Button>  
             <Button href="/onboard" variant="outlined"  style={{color:"white", textAlign:"center",borderRadius:"13px"}}> Continue with LinkedIn</Button>    
              
              <Button href="/explore"  variant="outlined" style={{color:"white", borderRadius:"13px" ,textAlign:"center"}}>Continue with Facebook</Button> 
            </Stack>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            > */}
        
            {/* </Stack> */}
    </Container>
  </Box>
</Fragment>
   
  )
}
