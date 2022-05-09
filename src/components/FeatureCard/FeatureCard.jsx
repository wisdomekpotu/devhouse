import * as React from 'react';
import "./FeatureCard.css"
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';


export default function card() {

  return (
    <Stack className='feature' direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 1, sm: 2, md: 4 }}  marginTop="80px"  marginLeft="40px" marginRight="40px">
       
      <Typography gutterBottom variant="h6" component="div"  color="white"  backgroundColor="#001E3C" height="70px" border= '2px solid #132F4C' borderRadius= '16px' padding="20px"   >
    1.  Discover New Opportunities<Typography fontSize="13px" color="#8896A3" align='left'>
          
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,conse
      
        </Typography>
        </Typography>       
   
   

       <Typography gutterBottom variant="h6" component="div"   color="white" backgroundColor="#001E3C" height="70px" border= '2px solid #132F4C' borderRadius= '16px' padding="20px"   
  >
     2.  Share Your Knowledge
     <Typography fontSize="13px" color="#8896A3" align="left">
        
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,conse
      
        </Typography>
         </Typography>
       
        
   
        <Typography gutterBottom variant="h6" component="div"   color="white"  backgroundColor="#001E3C" height="70px" border= '2px solid #132F4C' borderRadius= '16px' padding="20px"   >
3. Grow Your Professional Network

<Typography fontSize="13px" color="#8896A3" align='left'>
         
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,conse
          </Typography>
          </Typography>
         
    
    
 </Stack>

  );
}
