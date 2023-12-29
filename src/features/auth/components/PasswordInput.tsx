/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'
import TextField from '../../../components/input/TextField'
import { Control } from 'react-hook-form'

type passwordProps = {
  label: string
  name: string
  control: Control<any>
  sx?:any
}
const PasswordInput = ({ label, name, control,sx }: passwordProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <TextField
      control={control}
      name={name}
      label={label}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </Box>
          </InputAdornment>
        ),
      }}
      sx={{
        // width: '70%',
        ...sx,
        m: '0 auto',
      }}
    />
  )
}

export default PasswordInput
