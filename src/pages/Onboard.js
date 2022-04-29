import React, { Fragment , useState} from 'react'
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import { useUserAuth } from '../context/UserAuthContext'
import { Link, useNavigate } from "react-router-dom";
import logo from "../components/Navbar/logo.png"
import google from "../pages/google.png"
import github from "../pages/github.png"



export default function Onboard() {
const {error, setError} = useState("")

const navigate = useNavigate()

const {googleSignIn} = useUserAuth()

const handleGoogleSignIn = async (e) =>{
e.preventDefault()
  try {
    await googleSignIn();
    navigate("/feed")
  } catch (err) {
    setError(err.message)
    console.log(error)
  }
}


  return (
<Fragment>

 
  <Box>
    <Container maxWidth="xl"  > 
    <Link to="/">
          <Typography 
            align='center'
            variant="h6"
            noWrap
            component="div"
            marginTop={8}
          > 
          <img src={logo}  style={{height:"50px", width:"50px" }} alt='logo'/>
          </Typography> 
          </Link> 
         <Typography variant="h5" fontSize={31} marginTop={1} color="white" align='center'>
         Welcome to Devhouse
         </Typography>
         <Typography  fontSize={14} marginTop={8} color="white" align='center'>
         Log in with one of the following:
         </Typography>
   


         <Stack className='stack'
              sx={{ pt: 2 }}
              
              direction="column"
          margin="auto"
            width="305px"

              spacing={2}
              justifyContent="center"
            >
            
             <Button onClick={handleGoogleSignIn} variant="contained" style={{ backgroundColor:"white", textTransform: "capitalize",color:"black"}}><img src={google} alt="googleicon" style={{height:"13px" ,width:"13px"}}/>&nbsp;Google</Button>  

    <Button href="/explore"   variant="contained" style={{ backgroundColor:"white", textTransform: "capitalize", color:"black"}}><img src={github} alt="googleicon" style={{height:"23px" ,width:"23px"}}/>Github</Button>  
             <Button href="/onboard"  variant="contained" style={{ backgroundColor:"#0077b5" , textTransform: "capitalize"}}>LinkedIn</Button>    
              <Button href="/explore"   variant="contained"  style={{ backgroundColor:"#4267B2", textTransform: "capitalize"}}>Facebook</Button> 
            </Stack>

            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            > */}
        
            {/* </Stack> */}
           
         <Typography  fontSize={14} marginTop={8} color="white" align='center'>
         By signing in to Devhouse, you agree to our 
         &nbsp;
         <Link to="/legal/terms-of-service-agreement" style={{color:"aqua"}}>terms of service.</Link>
         </Typography> 
   
    </Container>

  </Box>
 
</Fragment>
   
  )
}
