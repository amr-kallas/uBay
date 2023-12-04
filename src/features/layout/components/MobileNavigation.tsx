import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ForumIcon from '@mui/icons-material/Forum'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
type Tabs = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}
const MobileNavigation = ({ value, setValue }: Tabs) => {
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
        zIndex:999
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction value="home" icon={<HomeIcon />} />
        <BottomNavigationAction value="sells" icon={<ForumIcon />} />
        <BottomNavigationAction value="chat" icon={<LocalGroceryStoreIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default MobileNavigation
