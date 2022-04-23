import React from 'react'
import { useUserAuth } from "../context/UserAuthContext"
import Navbar from "../components/Navbar/Navbar"
export default function Dashboard() {

  const { user } = useUserAuth()

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "100px", color: "white", }}>Welcome back!🖐️
        <span style={{ color: "aqua" }}> {user.displayName} </span>
      </div>


    </>
  )
}
