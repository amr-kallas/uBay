import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useTheme,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { tabs } from '../constant/tabs'
const MobileNavigation = () => {
  const location = useLocation().pathname.slice(1)
  const [value, setValue] = useState(location)
  const theme = useTheme()
  const navigate = useNavigate()
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
  return (
    <Paper
      sx={{
        display: { xs: 'flex', sm: 'none' },
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          width: 500,
          '.Mui-selected': {
            svg: {
              color: theme.palette.primary.main,
            },
          },
          svg: {
            color: 'grey',
          },
        }}
        value={value}
        onChange={handleChange}
      >
        {tabs.slice(0, 3).map((tab) => (
          <BottomNavigationAction
            key={tab.value}
            value={tab.value}
            icon={tab.icon}
            onClick={() => navigate(tab.path)}
          />
        ))}

        <BottomNavigationAction
          value="none"
          sx={{ position: 'absolute', marginLeft: -9999 }}
        />
      </BottomNavigation>
    </Paper>
  )
}

export default MobileNavigation
