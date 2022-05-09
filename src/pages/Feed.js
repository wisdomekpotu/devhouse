import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar/Navbar"
import { Stack } from '@mui/material';
import Articles from '../components/Article/Articles';


export default function ResponsiveGrid() {
  return (
    <Box style={{ marginTop: "14%" }}>
      <Navbar />
      <div>
        <Stack direction={{ xs: 'column', sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }} style={{ justifyContent: "center", marginTop: "30px" }}>
          <Articles />
        </Stack>
      </div>
    </Box>
  );
}
