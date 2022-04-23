import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {

  let { user } = useUserAuth()
  if (!user) {
    return <Navigate to="/" />
  }
  return children


};

