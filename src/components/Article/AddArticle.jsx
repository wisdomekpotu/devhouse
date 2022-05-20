import React, { Fragment, useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Container, Stack, Typography } from '@mui/material'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage, db } from '../../firebase/firebase.utils'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'
import SimpleMdeReact from 'react-simplemde-editor'
import { makeStyles } from '@material-ui/styles'
import 'easymde/dist/easymde.min.css'

const useStyles = makeStyles({
  input: {
    color: 'white',
  },
})

export default function AddArticle() {
  const [value, setValue] = useState('Tell your story...')

  const onChange = useCallback((value) => {
    setValue(value)
    console.log(value)
  }, [])

  const classes = useStyles()

  const { user } = useUserAuth()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    createdAt: Timestamp.now().toDate(),
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handlePublish = () => {
    if (!formData.title || !value || !formData.image) {
      toast('Please fill all the fields', { type: 'error' })
      return
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    )

    const uploadImage = uploadBytesResumable(storageRef, formData.image)

    uploadImage.on(
      (err) => {
        console.log(err)
      },

      () => {
        setFormData({
          title: '',
          image: '',
        })

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, 'Articles')

          addDoc(articleRef, {
            title: formData.title,
            description: value,
            thumbnail: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            userId: user.uid,
            userImg: user.photoURL,
            likes: [],
            comments: [],
          })
            .then(() => {
              toast('Article added successfully', { type: 'success' })
              navigate('/dashboard')
            })
            .catch((err) => {
              toast('Error adding article', { type: 'error' })
            })
        })
      }
    )
  }
  return (
    <Fragment>
      <Box>
        <Container maxWidth="xl" style={{ color: 'white' }}>
          <Typography
            variant="h5"
            fontSize={31}
            marginTop={1}
            marginBottom={9}
            color="white"
            align="center"
          >
            Create A Post
          </Typography>
          <Stack
            className="stack"
            sx={{ pt: 2 }}
            direction="column"
            margin="auto"
            width="700px"
            spacing={2}
            justifyContent="center"
          >
            <TextField
              id="outlined-basic"
              label="Title"
              inputProps={{ className: classes.input }}
              focused
              variant="outlined"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />

            <Button variant="contained" component="label">
              Upload File
              <input
                name="image"
                onChange={(e) => handleImageChange(e)}
                type="file"
                accept="image/*"
                hidden
              />
            </Button>
            <span>{formData.image.name}</span>
            {/* Markdown Editor */}
            <SimpleMdeReact
              style={{ backgroundColor: 'white' }}
              value={value}
              onChange={onChange}
            />
            <Button
              variant="contained"
              style={{ width: '209px', align: 'center' }}
              component="label"
            >
              Submit Post
              <input type="  Submit" onClick={handlePublish} hidden />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  )
}
