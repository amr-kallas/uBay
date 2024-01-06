import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import UploadIcon from '@mui/icons-material/Upload'
import { useEffect, useState } from 'react'
type UploadImg = {
  onUpload: (file: File[]) => void
  onRemove: () => void
  error: any
  imgURL?: string[]
}
const UploadImg = ({ onRemove, onUpload, error, imgURL }: UploadImg) => {
  const initialArray = typeof imgURL == 'string' ? [imgURL] : imgURL ?? []
  const [uploadFiles, setUploadFiles] = useState<string[]>(initialArray)
  useEffect(() => {
    setUploadFiles(imgURL ? (Array.isArray(imgURL) ? imgURL : [imgURL]) : [])
  }, [imgURL])
  const handleFileChange = (e: any) => {
    const files: File[] = Array.from(e.target.files)
    files.map((file: File) => {
      setUploadFiles((prev) => [...prev, URL.createObjectURL(file)])
    })
    onUpload(e.target.files)
  }
  const handleRemove = () => {
    setUploadFiles([])
    onRemove()
  }
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel shrink={uploadFiles.length != 0} sx={{ bgcolor: 'white' }}>
        Photos
      </InputLabel>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        multiple
        id="file"
        disabled={uploadFiles.length != 0}
        onChange={handleFileChange}
      />
      <Box
        component="label"
        htmlFor="file"
        sx={{
          width: '100%',
          minHeight: '52px',
          border: `1px solid ${error ? '#d32f2f' : 'rgba(0, 0, 0, 0.23)'}`,
          borderRadius: '12px',
          cursor: 'pointer',
          position:'relative',
          '&:hover': {
            border: `1px solid ${error ? '#d32f2f' : 'black'}`,
          },
        }}
      >
        {uploadFiles.length == 0 && (
          <Box
            sx={{
              display: 'inline-flex',
              position: 'absolute',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <UploadIcon />
          </Box>
        )}
        {uploadFiles.length != 0 && (
          <>
            <Box
              sx={{
                p: '12px 12px 6px',
                display: 'flex',
                gap: 2,
                cursor: 'auto',
                flexWrap: 'wrap',
                'img:first-of-type': {
                  flex: 1,
                  width: 1,
                },
                'img:not(:first-of-type)': {
                  width: '30%',
                  flex: 1,
                },
              }}
            >
              {uploadFiles.map((image) => (
                <img
                  key={image}
                  src={image}
                  style={{
                    minHeight: '100%',
                    borderRadius: '12px',
                    objectFit: 'cover',
                  }}
                />
              ))}
            </Box>
          </>
        )}
      </Box>
      {uploadFiles.length != 0 && (
        <IconButton
          onClick={handleRemove}
          sx={{
            position: 'absolute',
            right: '20px',
            top: '20px',
          }}
        >
          <CancelIcon sx={{ color: '#d32f2f' }} />
        </IconButton>
      )}
      <FormHelperText>{error && error.message}</FormHelperText>
    </FormControl>
  )
}

export default UploadImg
