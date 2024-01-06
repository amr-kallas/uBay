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
import { useNavigate } from 'react-router-dom'
import Storage from '../../../utils/Storage'
const Account = () => {
  const [value, setValue] = useState(Storage.getAccountTab() ?? 'account')
  const theme = useTheme()
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    Storage.setAccountTab(newValue)
  }
  const navigate = useNavigate()
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
            onClick={() => navigate('/settings/account')}
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
            value="preferences"
            label="Post Preferences"
            onClick={() => navigate('/settings/preferences')}
          />
        </Tabs>
      </Box>
    </Box>
  )
}

export default Account
