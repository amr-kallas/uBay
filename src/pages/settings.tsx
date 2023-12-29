import { Box } from '@mui/material'
import { Account } from '../features/account'
import { Outlet } from 'react-router-dom'

const Settings = () => {
  return (
    <Box mt={7}>
      <Account />
      <Outlet />
    </Box>
  )
}

export default Settings
