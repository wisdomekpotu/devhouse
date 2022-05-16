//import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Navigate } from 'react-router-dom'

export default function RestrictPage({ children }) {

  let { user } = useUserAuth()

  if (!user) {
    return children
  } else {
    return <Navigate to="/" />
  }
};

