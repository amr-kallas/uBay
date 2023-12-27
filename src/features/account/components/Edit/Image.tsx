import { Avatar, Box, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Skeleton from '../../../../components/feedback/Skeleton'
import { useEffect, useState } from 'react'
type Image = {
  loading: boolean
  photo: string
  update: (file: File) => void
}
const Image = ({ loading, photo, update }: Image) => {
  const [img, setImg] = useState(photo ?? '')
  useEffect(() => {
    setImg(photo)
  }, [photo])
  const handleFileChange = (e: any) => {
    const imgFile = URL.createObjectURL(e.target.files[0])
    setImg(imgFile)
    update(e.target.files[0])
  }
  return (
    <Box
      sx={{
        width: '94px',
        height: '94px',
        position: 'absolute',
        left: '52%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      {photo && <Avatar src={img} sx={{ width: 1, height: 1 }} />}
      {loading && (
        <Skeleton
          variant="circular"
          sx={{
            width: '90px !important',
            height: '90px !important',
          }}
        />
      )}
      <IconButton
        sx={{
          position: 'absolute',
          bottom: '0',
          left: '-12px',
          background: 'rgb(188 175 175 / 30%)',
          borderRadius: '50%',
        }}
      >
        <Box
          component="label"
          htmlFor="file"
          sx={{
            display: 'flex',
            cursor: 'pointer',
          }}
        >
          <EditIcon />
        </Box>
      </IconButton>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        multiple
        id="file"
        onChange={handleFileChange}
        disabled={loading}
      />
    </Box>
  )
}

export default Image
