import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar/Navbar"
import { Stack } from '@mui/material';
import Articles from '../components/Article/Articles';


export default function Feed() {
  return (
    <Box style={{ marginTop: "14%" }}>
      <Navbar />
      <div style={{ align: 'center' }}>

        <Articles />


      </div>
    </Box>
  );
}
