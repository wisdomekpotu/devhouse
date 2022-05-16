import * as React from 'react';
import "./FeatureCard.css"
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';


export default function card() {

  return (
    <Stack className='feature' direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 1, sm: 2, md: 4 }}  marginTop="45px"  marginLeft="40px" marginRight="40px">
       
      <Typography gutterBottom variant="h6" component="div"  color="white"  backgroundColor="#001E3C" height="70px" border= '2px solid #132F4C' borderRadius= '16px' padding="20px"   >
      Instantly find your audience
      <Typography fontSize="13px" color="#8896A3" align='left'>
      Devhouse publishes your articles and distributes them to the dev community through the feedpage.
   
        </Typography>
        </Typography>       
   
   

       <Typography gutterBottom variant="h6" component="div"   color="white" backgroundColor="#001E3C" height="70px" border= '2px solid #132F4C' borderRadius= '16px' padding="20px"   
  >
    No annoying ads/pop-ups
     <Typography fontSize="13px" color="#8896A3" align="left">
        
     Devhouse is and always will be a free platform for knowledge sharing.
        </Typography>
         </Typography>
       
        
   
        <Typography gutterBottom variant="h6" component="div"   color="white"  backgroundColor="#001E3C" height="70px" border= '2px solid #132F4C' borderRadius= '16px' padding="20px"   >
        Write in Markdown
<Typography fontSize="13px" color="#8896A3" align='left'>
         

Write your content in a distraction-free Markdown editor with proper syntax highlighting and see live previews instantly
          </Typography>
          </Typography>
         
    
    
 </Stack>

  );
}
