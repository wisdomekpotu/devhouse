import React, { Fragment } from 'react'
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";


export default function Onboard() {
  return (
<Fragment>
  <Box>
    <Container maxWidth="xl" >   
         <Typography variant="h5" fontSize={31} marginTop={8} color="aqua" align='center'>
          Signin to Your Account
         </Typography>
         <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             <Button href="/onboard" variant="outlined" style={{color:"white" , borderRadius:"13px", textAlign:"center"}}> Continue with Google</Button>    
              
             <Button href="/explore"  variant="outlined" style={{color:"white", borderRadius:"13px",textAlign:"center"}}>Continue with Github</Button>  
            </Stack>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             <Button href="/onboard" variant="outlined"  style={{color:"white", textAlign:"center",borderRadius:"13px"}}> Continue with LinkedIn</Button>    
              
             <Button href="/explore"  variant="outlined" style={{color:"white", borderRadius:"13px" ,textAlign:"center"}}>Continue with Facebook</Button>  
            </Stack>
    </Container>
  </Box>
</Fragment>
   
  )
}
