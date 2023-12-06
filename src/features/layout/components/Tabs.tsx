import { Box, Tab, Tabs as MuiTabs, Avatar, IconButton, useTheme } from '@mui/material'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import ForumIcon from '@mui/icons-material/Forum'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import person from '../../../assets/person.jpg'
const Tabs = () => {
  const [value, setValue] = useState('home')

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const theme=useTheme()
  return (
    <Box sx={{flex:{xs:0,sm:2}}}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ display: { xs: 'none', sm: 'block' },
         '.Mui-selected':{
          svg:{
            color:theme.palette.primary.main
          } }}}
      >
        <Tab
         sx={{
          svg:{
            color: 'grey',
          },
        }}
          value="home"
          icon={<HomeIcon sx={{ width: 24, height: 30 }} />}
        />
        <Tab
         sx={{
          svg:{
            color: 'grey',
          },
        }}
          value="sells"
          icon={<ForumIcon sx={{ width: 24, height: 30 }} />}
        />
        <Tab
          value="chat"
          sx={{
            svg:{
              color: 'grey',
            },
          }}
          icon={<LocalGroceryStoreIcon sx={{ width: 24, height: 30 }} />}
        />
        <Tab
          value="img"
          sx={{ ml: 'auto' }}
          icon={<Avatar src={person} sx={{ width: 30, height: 30 }} />}
        />
      </MuiTabs>
      <IconButton sx={{display: { xs: 'block', sm: 'none' },ml:'auto'}}>
        <Avatar src={person} sx={{ width: 30, height: 30 }} />
      </IconButton>
    </Box>
  )
}

export default Tabs
