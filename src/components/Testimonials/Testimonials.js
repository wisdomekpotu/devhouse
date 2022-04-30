import React from 'react';
import TestimonialCard from 'material-testimonial-card';
import { Stack } from '@mui/material';

const Testimonials = () => {
  return <Stack direction={{ xs: 'column', sm: "row" }}
    spacing={{ xs: 1, sm: 2, md: 4 }} style={{ justifyContent: "center", }}>
    <TestimonialCard
      name={"John Smith"}
      image={"https://media-exp1.licdn.com/dms/image/C5603AQGqeTeypcw7cw/profile-displayphoto-shrink_200_200/0/1650116270011?e=1656547200&v=beta&t=KmyCIoG9oWGnx9TapBgrJw-qt0OR7KIGfbRRsepIxqs"}
      content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
      project={"Testimonial card"}
    />


    <TestimonialCard
      name={"John Smith"}
      image={"https://media-exp1.licdn.com/dms/image/C5603AQG17T5aVrQgSQ/profile-displayphoto-shrink_200_200/0/1651267372006?e=1656547200&v=beta&t=fLe4WvHo8TCrf_o3CcW6wxiwhTWraPph-o4bt8s9iPs"}
      content={"Wow! This testimonial card is so amazing! I would like to use it in my project!"}
      project={"Testimonial card"}
    />
  </Stack>
}

export default Testimonials;