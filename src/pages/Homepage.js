import React, { Fragment } from 'react'
import Hero from '../components/Hero/Hero';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import Navbar from '../components/Navbar/Navbar';
import { Stack, Typography } from '@mui/material';


// import EventCard from '../components/EventCard/EventCard';
import FeaturedArticles from '../components/FeaturedArticles/FeaturedArticles';

export default function Homepage() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <br />
      <FeatureCard />



      {/* <Stack direction={{ xs: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }} style={{ justifyContent: "center", marginTop: "10%" }}>
        <Typography fontSize="13px" color="aqua" align='center'>

          UPCOMING ONLINE MEETUPS
        </Typography>
        <Typography fontSize="60px" color="white" align='center'>

          Featured Virtual Community Events
        </Typography>

        <Typography fontSize="20px" color="white" align='center'>

          Create amazing experiences for the web in record time—without <br /> thinking once about servers or devops.
        </Typography>

      </Stack>

      <EventCard /> */}
      <Stack direction={{ xs: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }} style={{ justifyContent: "center", marginTop: "7%" }}>
        <Typography fontSize="13px" color="aqua" align='center'>

          FROM THE COMMUNITY
        </Typography>
        <Typography fontSize="48px" color="white" align='center'>

          Featured Articles Today
        </Typography>


      </Stack>
      <Stack direction={{ xs: 'column', sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }} style={{ justifyContent: "center", marginTop: "30px" }}>
        <FeaturedArticles />
        <FeaturedArticles />
        <FeaturedArticles />
      </Stack>



    </Fragment>
  )
}
