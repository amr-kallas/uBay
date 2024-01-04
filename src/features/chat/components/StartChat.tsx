import { Box, Stack, Typography } from '@mui/material'
import MapsUgcIcon from '@mui/icons-material/MapsUgc'
const StartChat = () => {
  return (
    <Box
      sx={{
        flex: 3,
        bgcolor: 'white',
      }}
    >
      <Stack
        sx={{
          height: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MapsUgcIcon sx={{ fontSize: '11rem', mb: 3 }} />
        <Typography variant="h6">
          To start a conversation, please click on one of the conversations on
          the side
        </Typography>
      </Stack>
    </Box>
  )
}

export default StartChat
