import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import person from '../../../assets/person.jpg'
import { Link } from 'react-router-dom'
const Purchases = () => {
  return (
    <Box >
      <Stack
      component={Link}
      to={'/chats/fda'}
        p="24px 16px"
        direction="row"
        spacing={1}
        sx={{
          ':hover': {
            bgcolor: 'rgba(109, 40, 217, 0.04)',
          },
          cursor: 'pointer',
          textDecoration:'none',
          color:'black'
        }}
      >
        <Avatar src={person} />
        <Box>
          <Typography variant="h6">Zoher Alaswad</Typography>
          <Typography>براد</Typography>
        </Box>
      </Stack>
      <Divider />
      <Stack
       component={Link}
       to={'/chats/fda'}
        p="24px 16px"
        direction="row"
        spacing={1}
        sx={{
          ':hover': {
            bgcolor: 'rgba(109, 40, 217, 0.04)',
          },
          cursor: 'pointer',
          textDecoration:'none',
          color:'black'
        }}
      >
        <Avatar src={person} />
        <Box>
          <Typography variant="h6">Zoher Alaswad</Typography>
          <Typography>براد</Typography>
        </Box>
      </Stack>
      <Divider />
    </Box>
  )
}

export default Purchases
