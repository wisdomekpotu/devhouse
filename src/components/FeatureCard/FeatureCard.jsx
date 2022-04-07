import * as React from 'react';
import "./FeatureCard.css"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
      <Typography gutterBottom variant="h5" component="div" align='left' color="#CCD6F6">
      Blog on your <br /> personal domain
        </Typography>
        <Typography variant="body2" color="#8896A3" align='left'>
        Map your custom domain in just seconds. Serve your blog over HTTPS with no extra configuration. Get a high performance, secure, and fully-optimized dev blog that delights your readers.
      
        </Typography>
      </CardContent>
    </Button>
       <Button sx={{ maxWidth: "xl" }}   backgroundColor="#132F4C">
     
       <CardContent>
       <Typography gutterBottom variant="h5" component="div"  align='left'  color="#CCD6F6">
       Instantly find  your <br /> audience
         </Typography>
         <Typography variant="body2" color="#8896A3" align='left'>
         Every time you write an article, Hashnode publishes it on your domain and shares it with the dev community members on the homepage. The readers are directed to your website to read and interact
       
         </Typography>
       </CardContent>
     </Button>
        <Button sx={{ maxWidth: "xl" }}  >
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='left' color="#CCD6F6">
        No annoying <br />
       ads/pop-ups
          </Typography>
          <Typography variant="body2" color="#8896A3" align='left'>
          Knowledge sharing on Hashnode is and will always be completely free. Because we value the relationship between you and your readers, we won't show ads or pop-ups on your articles.
        
          </Typography>
        </CardContent>
      </Button>
     
    
 </Stack>

  );
}
