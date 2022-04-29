import * as React from 'react';
import "./FeatureCard.css"
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


export default function card() {

  return (
    <Stack className='feature' direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Button sx={{ maxWidth: "xl" }}  >
      <CardContent>
      <Typography gutterBottom variant="h6" component="div" align='left' color="#CCD6F6">
    1.  Blog on your domain
        </Typography>
        <Typography fontSize="13px" color="#8896A3" align='left'>
          
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,conse
      
        </Typography>
      </CardContent>
    </Button>
       <Button sx={{ maxWidth: "xl" }}   backgroundColor="#132F4C">
     
       <CardContent>
       <Typography gutterBottom variant="h6" component="div"  align='left'  color="#CCD6F6">
     2.  Instantly find  your  audience
         </Typography>
         <Typography fontSize="13px" color="#8896A3" align="left">
        
         Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,conse
       
         </Typography>
       </CardContent>
     </Button>
        <Button sx={{ maxWidth: "xl" }}  >
        <CardContent>
        <Typography gutterBottom variant="h6" component="div"  align='left' color="#CCD6F6">
        3. No annoying 
       ads/pop-ups
          </Typography>
          <Typography fontSize="13px" color="#8896A3" align='left'>
         
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,conse
          </Typography>
        </CardContent>
      </Button>
     
    
 </Stack>

  );
}
