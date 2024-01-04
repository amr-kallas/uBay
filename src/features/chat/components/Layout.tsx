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
        height: 'calc(100vh - 56px)',
        mt: 7,
      }}
    >
      <Tabs />
      {mdOrLarger && <StartChat />}
    </Stack>
  )
}

export default Layout
