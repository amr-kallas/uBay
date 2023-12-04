import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import Search from './Search'
import Tabs from './Tabs'
const AppBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        height: 54,
        bgcolor: 'white',
        p: '8px 16px',
        alignItems: 'center',
        zIndex: 999,
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
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
        <Search />
      </Stack>
      <Tabs />
    </Stack>
  )
}

export default AppBar
