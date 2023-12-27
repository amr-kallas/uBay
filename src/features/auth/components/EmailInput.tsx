/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputAdornment } from '@mui/material'
import TextField from '../../../components/input/TextField'
import EmailIcon from '@mui/icons-material/Email'
import { Control } from 'react-hook-form'
const EmailInput = ({control,sx}:{control:Control<any>,sx:any}) => {
  return (
    <TextField
      control={control}
      name="email"
      label="Email"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <EmailIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        ...sx,
        // width: '70%',
        m: '0 auto',
      }}
    />
  )
}

export default EmailInput
