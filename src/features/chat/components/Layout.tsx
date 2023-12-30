import { Stack, useMediaQuery, useTheme } from '@mui/material'
import Tabs from './Tabs'
import StartChat from './StartChat'

const Layout = () => {
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
      <Tabs />
      {mdOrLarger && <StartChat />}
    </Stack>
  )
}

export default Layout
