import React from 'react'
import { useUserAuth } from "../context/UserAuthContext"
import Navbar from "../components/Navbar/Navbar"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Dashboard() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const { user } = useUserAuth()


  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Navbar />

      <form>






      </form>
    </Box>
  );
}
