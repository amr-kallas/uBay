import { Stack } from "@mui/material"
import Profile from "./profile"
import Security from "./security"
import Logout from "./Logout"


const Layout = () => {
  return (
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
  )
}

export default Layout