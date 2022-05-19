import { Button } from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { toast } from 'react-toastify'
import { db, storage } from '../../firebase/firebase.utils'

export default function EditArticle ({id, thumbnail}) {


  const handleEdit = async () =>{


  }
  return (
    <div>
      <Button style={{backgroundColor:"Green", color:"white"}} onClick={handleEdit}>Edit</Button>
    </div>
  )
}
