import React, { Fragment } from 'react'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import { Stack } from '@mui/material';



export default function ProfilePopover() {
  return (
    <Box >
      <Container maxWidth="xl" >
        <IconButton sx={{ p: 0 }} >
              <Avatar alt="Remy Sharp" sx={{ width: 90, height: 90 }} src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" />
        </IconButton>
 <br />
 <br />
        <Typography textAlign="left" fontWeight= "bold" variant='h5'> <span>Sign up or log in to <br /> your DevHouse <br /> account.</span></Typography>
<br />
        <span style={{color:"grey"}} >Takes less than a few seconds.</span> <br />

        <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              
            >
        <Button href="/onboard" variant="outlined" style={{color:"white" ,backgroundColor:"#05152E", textAlign:"center"}}> Signup</Button>    
              
              <Button href="/onboard"  variant="outlined" style={{color:"#05152E", textAlign:"center"}}>Login</Button>

              </Stack>
              </Container>
    </Box>
  )
}