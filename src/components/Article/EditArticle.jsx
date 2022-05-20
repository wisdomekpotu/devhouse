import { Button } from '@mui/material'

export default function EditArticle({ id, thumbnail }) {
  const handleEdit = async () => {}
  return (
    <div>
      <Button
        style={{ backgroundColor: 'Green', color: 'white' }}
        onClick={handleEdit}
      >
        Edit
      </Button>
    </div>
  )
}
