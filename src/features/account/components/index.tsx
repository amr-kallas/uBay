import {
  Avatar,
  Box,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material'
import queries from '../api/queries'
import { useState } from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import TuneIcon from '@mui/icons-material/Tune'
import Profile from './profile'
import Security from './security'
import Logout from './Logout'
const Account = () => {
  const [value, setValue] = useState('account')
  const theme = useTheme()
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const me = queries.GetMe()
  return (
    <Box>
      <Box
        sx={{
          p: '35px 24px 0',
          bgcolor: 'white',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box>
            {me.isLoading && (
              <Skeleton width={50} height={50} variant="circular" />
            )}
            {me.data && (
              <Avatar src={me.data?.photo} sx={{ width: 50, height: 50 }} />
            )}
          </Box>
          <Typography variant="h4">Settings</Typography>
        </Stack>
        <Tabs
          onChange={handleChange}
          value={value}
          sx={{
            '.MuiTabs-flexContainer': { justifyContent: 'center' },
            '.Mui-selected': {
              svg: {
                color: theme.palette.primary.main,
              },
            },
          }}
        >
          <Tab
            icon={<PermIdentityIcon />}
            iconPosition="start"
            value="account"
            label="Account and Security"
            sx={{
              svg: {
                color: 'grey',
              },
            }}
          />
          <Tab
            sx={{
              svg: {
                color: 'grey',
              },
            }}
            icon={<TuneIcon />}
            iconPosition="start"
            value="post"
            label="Post Preferences"
          />
        </Tabs>
      </Box>
      <Stack
        spacing={3}
        mt={4}
        sx={{
          '.MuiListSubheader-root': {
            p: '16px 0',
            fontSize: 20,
            color: 'black',
          },
          svg: {
            color: '#424242',
          },
        }}
      >
        <Profile />
        <Security />
        <Logout />
      </Stack>
    </Box>
  )
}

export default Account
