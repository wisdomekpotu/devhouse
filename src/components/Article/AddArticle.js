
import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage, db } from "../../firebase/firebase.utils"
import { toast } from "react-toastify";
// import { Link, Navigate } from "react-router-dom"
import { useUserAuth } from '../../context/UserAuthContext'



export default function AddArticle() {

  const { user } = useUserAuth()




  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      toast("Please fill all the fields", { type: "error" });
      return;
    }


    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      (err) => {
        console.log(err);
      },

      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {

          const articleRef = collection(db, "Articles");

          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            thumbnail: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            userId: user.uid,
            userImg: user.photoURL,
            likes: [],
            comments: []
          })


            .then(() => {

              toast("Article added successfully", { type: "success" });


            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });

        });


      }
    );



  }
  return (
    <Fragment>
      <Box>
        <Container maxWidth="xl" style={{ color: "white" }}>
          <Typography variant="h5" fontSize={31} marginTop={1} marginBottom={9} color="white" align='center'>
            Create A Post
          </Typography>
          <Stack className='stack'
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

              focused
              variant="outlined"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />

            <br /> <br /> <br />
            <TextField

              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="standard"
              name="description"

              value={formData.description}
              onChange={(e) => handleChange(e)}

            />

            <br /> <br /> <br />
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                name='image'
                onChange={(e) => handleImageChange(e)}
                type="file"
                accept="image/*"
                hidden
              />
            </Button>
            <span>{formData.image.name}</span>

            <Button
              variant="contained"
              style={{ width: "209px", align: "center" }}
              component="label"
            >
              Submit Post
              <input
                type="  Submit"
                onClick={handlePublish}
                hidden
              />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Fragment >



  );
}
