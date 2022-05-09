import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from "../../firebase/firebase.utils"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      console.log(onSnapshot)
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);


  return (
    <div>

      {articles.length === 0 ? (
        <p>No articles</p>

      ) : (articles.map(({
        id,
        title,
        description,
        thumbnail,
        createdAt,
        createdBy,
        userId,
        userImg,
        likes,
        comments,
      }) => (


        <Card sx={{ maxWidth: 345 }} key={id}>
          <Link to={`/feed/article/${id}`}>
            <CardMedia component="img" height="194" image={thumbnail} alt="Paella dish" />
          </Link>

          <CardContent>
            <Typography fontSize={20} fontWeight="bold" color="black">
              {title}
            </Typography>
            <Typography fontSize={13} color="grey">
              {description}
            </Typography>

          </CardContent>

          <CardHeader
            avatar={
              <Avatar alt="Remy Sharp" src={userImg} />
            }
            action={
              <IconButton>
                <FavoriteIcon />
              </IconButton>
            }
            title={createdBy}
            subheader={createdAt.toDate().toDateString()}
          />
        </Card>

      ))
      )
      }
    </div >
  )
}
