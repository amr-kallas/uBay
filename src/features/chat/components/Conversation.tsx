import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import Tabs from './Tabs'
import UserInformation from './UserInformation'
import Messages from './Messages'

const Conversation = () => {
  const theme = useTheme()
  const mdOrLarger = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Stack
      direction="row"
      sx={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {mdOrLarger && <Tabs />}
      <Box
        sx={{
          flex: 3,
          mt: 7,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <UserInformation />
        <Messages />
      </Box>
    </Stack>
  )
}

export default Conversation
