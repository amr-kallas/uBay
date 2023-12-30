import { Stack, useTheme } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TextField from './TextField'
import { Control } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'
type Message = {
  control: Control<any>
  name: string
  isLoading: boolean
  sx?: any
}
const MessageInput = ({ control, name, isLoading, sx }: Message) => {
  const theme = useTheme()
  return (
    <Stack
      component="form"
      direction="row"
      alignItems="center"
      sx={{
        '.MuiInputBase-root': {
          height: 35,
        },
        width: 1,
        ...sx,
      }}
    >
      <TextField
        control={control}
        name={name}
        sx={{
          flex: 1,
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderWidth: '1px !important',
              borderColor:`${theme.palette.primary.main} !important`
            },
          },
          fieldset: {
            border: 'none',
            bgcolor: '#eee',
            zIndex: -1,
          },
        }}
      />
      <LoadingButton
        type="submit"
        loading={isLoading}
        startIcon={!isLoading && <SendIcon />}
        sx={{
          minWidth: 0,
          ml: 2,
          width: 20,
        }}
      />
    </Stack>
  )
}

export default MessageInput
