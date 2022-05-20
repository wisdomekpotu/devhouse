import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase.utils'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CardActions from '@mui/material/CardActions'
import { Link } from 'react-router-dom'

export default function Articles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const articleRef = collection(db, 'Articles')
    const q = query(articleRef, orderBy('createdAt', 'desc'))
    onSnapshot(q, (snapshot) => {
      console.log(onSnapshot)
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setArticles(articles)
      console.log(articles)
    })
  }, [])

  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 4 }}
        style={{ justifyContent: 'center', margin: 'auto' }}
      >
        {articles.length === 0 ? (
          <p>No articles</p>
        ) : (
          articles.map(
            ({
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
              <Card
                sx={{ maxWidth: 345 }}
                xs={2}
                md={4}
                key={id}
                style={{ marginRight: '19px', marginBottom: '19px' }}
              >
                <Link to={`/feed/article/${id}`}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={thumbnail}
                    alt="Paella dish"
                  />
                </Link>

                <CardContent>
                  <Typography fontSize={20} fontWeight="bold" color="black">
                    {title}
                  </Typography>
                </CardContent>

                <CardHeader
                  style={{}}
                  avatar={
                    <Link to={`/author/${createdBy}`}>
                      <Avatar alt="Remy Sharp" src={userImg} />
                    </Link>
                  }
                  title={createdBy}
                  subheader={createdAt.toDate().toDateString()}
                  action={
                    <CardActions
                      disableSpacing
                      style={{ justifyContent: 'right' }}
                    >
                      <IconButton aria-label="likes">
                        <FavoriteIcon />
                      </IconButton>
                    </CardActions>
                  }
                />
              </Card>
            )
          )
        )}
      </Grid>
    </>
  )
}
