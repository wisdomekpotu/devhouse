import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Grid from "@mui/material/Grid"


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
    <Card  style={{backgroundColor:"#05152E",  color:"white" ,}}>
       <CardMedia
        component="img"
        height="174"
        
       
        image="https://blog.openreplay.com/static/81f1bd1e9f170b06505967315e5dc3c7/99fbb/hero.webp"
        alt="Paella dish"
      />
       
      <CardContent style={{color:"white"}} >
      <Typography gutterBottom component="div" color="white" fontSize="20px">
      Building a Progressive Web App with React 18
        </Typography>
        {/* <Typography variant="body2"  color="">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests...
      
        </Typography> */}
      </CardContent>
      <CardHeader style={{color:"#9CA3AF", fontWeight:"bold", }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton >
            <FavoriteIcon style={{color:"aqua"}}/> 
            <ShareIcon />
             <MoreVertIcon />
          </IconButton>
         
       

        }

     
        title="wisdom ekpotu"
        subheader="September 14, 2016"
      />
     
    
    </Card>
  );
}
