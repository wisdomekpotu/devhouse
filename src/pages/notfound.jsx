import not from "../assets/not.png"
import { Link } from 'react-router-dom'
import { Button, Grid } from '@mui/material'

export default function NotFound() {
  return (
    <>
    <Grid container spacing={{ xs: 1, sm: 2, md: 4 }} style={{ justifyContent: "center", margin: "auto" }}>
      <img src={not} alt=" " style={{ margin: "auto", width: "400px",marginRight: "400px", marginTop: "90px", marginLeft: "400px", align: "center" ,textDecoration: "none", fontWeight:"bold" }}/> <br/>
      <br/>
      <Link to="/">
        <Button style={{ color: "white", backgroundColor: "#445063" , margin: "auto", width: "100px", marginTop: "90px", marginLeft: "550px",marginRight: "550px", align: "center"}}>Go Back</Button>
      </Link>
      </Grid>
    </>
  )
}
