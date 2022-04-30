import { CardActionArea, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function EventCard() {
  return (
    <div>
      <Stack direction={{ xs: 'column', sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }} style={{ justifyContent: "center", marginTop: "30px" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://media-exp1.licdn.com/dms/image/C5622AQFZcD_wQjD7GQ/feedshare-shrink_800/0/1650914368270?e=2147483647&v=beta&t=FV5PqiUn4O9CGXEaNGU9XfhupbgqVPgIlAVeL1e2pz8"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://media-exp1.licdn.com/dms/image/C4E22AQFyWsQeKdUqeA/feedshare-shrink_800/0/1647466348657?e=2147483647&v=beta&t=p-zCGjoe8H9-OklQPLKTQ3mSqXBw6WZGCwg5kbUmubk"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://media-exp1.licdn.com/dms/image/C5622AQHBG-sRURkUUw/feedshare-shrink_2048_1536/0/1649343603330?e=2147483647&v=beta&t=sJHZQ7FyOHCaaFw5Bork6yV_AC2a2m3WDAwLVjBRODY"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Stack>
    </div>
  );
}
