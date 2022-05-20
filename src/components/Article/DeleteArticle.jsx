import { Button } from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import { toast } from 'react-toastify'
import { db, storage } from '../../firebase/firebase.utils'

export default function DeleteArticle({ id, thumbnail }) {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'Articles', id))
      toast('Article Deleted', { type: 'success' })

      const storageRef = ref(storage, thumbnail)
      await deleteObject(storageRef)
    } catch (error) {
      toast('Article Not Deleted', { type: 'error' })
      console.log(error)
    }
  }
  return (
    <div>
      <Button
        style={{ backgroundColor: 'red', color: 'white' }}
        onClick={handleDelete}
      >
        Delete
      </Button>
    </div>
  )
}
