import { ArrowBack } from '@mui/icons-material'
import { Avatar, IconButton, Stack, Typography } from '@mui/material'
import person from '../../../assets/person.jpg'
import { Link } from 'react-router-dom'
const UserInformation = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        p: 1,
        bgcolor: 'white',
        alignItems: 'center',
      }}
    >
      <IconButton component={Link} to="/chats">
        <ArrowBack />
      </IconButton>
      <Avatar src={person} />
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h6">براد</Typography>
        <Typography variant="h6">| Zoher Alaswad </Typography>
      </Stack>
    </Stack>
  )
}

export default UserInformation
