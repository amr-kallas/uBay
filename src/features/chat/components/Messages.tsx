import { Box, Stack, Typography, useTheme } from '@mui/material'
import MessageInput from '../../../components/input/messageInput'
import { useForm } from 'react-hook-form'

const Messages = () => {
  const { control } = useForm()
  const theme = useTheme()
  return (
    <Box
      sx={{
        flex: 1,
      }}
    >
      <Stack
        sx={{
          height: 1,
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            width: '85px',
            padding: '8px 12px',
            margin: '8px',
            color: 'white',
            borderRadius: '0px 8px 8px 8px',
            position:'relative'
          }}
        >
          مرحبا
          <Typography
            sx={{
              position: 'absolute',
              right: '5px',
              fontSize: '12px',
              color: '#fff7',
              bottom: 0,
            }}
          >
            17:42
          </Typography>
        </Box>
        <MessageInput
          control={control}
          name="message"
          isLoading={false}
          sx={{
            bgcolor: 'white',
            p: 1,
            mb:{xs:7,sm:0},
            fieldset: {
              border: '1px solid rgba(0, 0, 0, 0.23) !important',
              bgcolor: 'inherit !important',
              zIndex: 'auto !important',
            },
          }}
        />
      </Stack>
    </Box>
  )
}

export default Messages
