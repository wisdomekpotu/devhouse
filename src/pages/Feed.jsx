import React, { Fragment } from 'react'
import Card from "../components/Card/Card"
import { Stack } from '@mui/material';


function Feed() {
  return (
    <Fragment>
    <div>Feed</div>
    <Stack spacing={2}  direction="row"  >
        <Card/>
        <Card/>
        <Card/>
    </Stack>
    </Fragment>
  )
}

export default Feed