import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function EventCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://i.ytimg.com/vi/-7HUpP96Vrk/mqdefault.jpg"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
