import { Stack, useMediaQuery, useTheme } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import Search from './Search'
import Tabs from './Tabs'
import HideOnScroll from './HideOnScroll'
const AppBar = () => {
  const location = useLocation().pathname
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <HideOnScroll direction="down" active={isSmallScreen}>
      <Stack
        direction="row"
        sx={{
          height: 54,
          bgcolor: 'white',
          p: '8px 16px 0',
          alignItems: 'center',
          zIndex: 999,
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          boxShadow:'0 0 1px black'
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          height={1}
          flex={1.3}
        >
          <Link to="/" style={{ height: '100%' }}>
            <img style={{ width: '30px', height: '100%' }} src={logo} alt="" />
          </Link>
          {location == '/' && <Search />}
        </Stack>
        <Tabs />
      </Stack>
    </HideOnScroll>
  )
}

export default AppBar
