import {
  Box,
  Tab,
  Tabs as MuiTabs,
  Avatar,
  IconButton,
  useTheme,
  Skeleton,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { tabs } from '../constant/tabs'
import { useLocation, useNavigate } from 'react-router-dom'
import queries from '../../account/api/queries'

const Tabs = () => {
  const location = useLocation().pathname.slice(1)
  const [value, setValue] = useState('home')
  const navigate = useNavigate()
  const me = queries.GetMe()

  useEffect(() => {
    if (
      tabs.some(
        (tab) =>
          tab.value === location || (tab.value == 'home' && location == '')
      )
    ) {
      setValue(location == '' ? 'home' : location)
    } else {
      setValue('none')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const theme = useTheme()
  return (
    <Box sx={{ flex: { xs: 0, sm: 2 } }}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '.Mui-selected': {
            svg: {
              color: theme.palette.primary.main,
            },
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            sx={{
              svg: {
                color: 'grey',
              },
              ml: tab.value == 'settings' ? 'auto' : 'undefined',
            }}
            value={tab.value}
            icon={
              tab.icon.props && tab.icon.props.src
                ? {
                    ...tab.icon,
                    props: { ...tab.icon.props, src: me.data?.photo },
                  }
                : tab.icon
            }
            onClick={() => navigate(tab.path)}
          />
        ))}
        <Tab value="none" sx={{ position: 'absolute', marginLeft: -9999 }} />
      </MuiTabs>
      <IconButton sx={{ display: { xs: 'block', sm: 'none' }, ml: 'auto' }} onClick={() => navigate('/settings')}>
        {me.isLoading ? (
          <Skeleton variant="circular" width={30} height={30} />
        ) : (
          <Box >
            <Avatar src={me.data?.photo} sx={{ width: 30, height: 30 }} />
          </Box>
        )}
      </IconButton>
    </Box>
  )
}

export default Tabs
