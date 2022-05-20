import { useUserAuth } from '../context/UserAuthContext'
import Navbar from "../components/Navbar/Navbar"
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import DashControl from '../components/DashControl/DashControl'



export default function Dashboard() {
  const { user } = useUserAuth()

  return (
    <>
      <Navbar />

      <h1 style={{ color: "white", marginTop: "79px", fontSize: "28px" }}>Welcome,
        <span style={{ color: "aqua" }}>{user.displayName}!🖐️</span>
      </h1>

      <Stack className='feature' direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} marginTop="80px" marginLeft="40px" marginRight="40px">

        <Link to="/create/story" style={{ textDecoration: "none" }}>

          <Typography to="/" gutterBottom variant="h6" component="div" color="white" backgroundColor="#001E3C" height="70px" border='2px solid #132F4C' borderRadius='16px' padding="20px">
            Click here to write an article
            <Typography fontSize="13px" color="#8896A3" align="left">
              Share your thoughts, and connect with the community by writing an article.
            </Typography>
          </Typography>

        </Link>

        <Typography gutterBottom variant="h6" component="div" color="white" backgroundColor="#001E3C" height="70px" border='2px solid #132F4C' borderRadius='16px' padding="20px"
        >
          2.  Share Your Knowledge
          <Typography fontSize="13px" color="#8896A3" align="left">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,conse
          </Typography>
        </Typography>



        <Typography gutterBottom variant="h6" component="div" color="white" backgroundColor="#001E3C" height="70px" border='2px solid #132F4C' borderRadius='16px' padding="20px"   >
          3. Grow Your Professional Network
          <Typography fontSize="13px" color="#8896A3" align='left'>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,conse
          </Typography>
        </Typography>

      </Stack>

      <DashControl/>

    </>

  )
}
