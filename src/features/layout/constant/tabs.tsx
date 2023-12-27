import HomeIcon from '@mui/icons-material/Home'
import ForumIcon from '@mui/icons-material/Forum'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import { Avatar } from '@mui/material'
import person from '../../../assets/person.jpg'

export const tabs = [
    {
      value: 'home',
      icon: <HomeIcon sx={{ width: 24, height: 30 }} />,
      path: '',
    },
    {
      value: 'transactions',
      icon: <LocalGroceryStoreIcon sx={{ width: 24, height: 30 }} />,
      path: 'transactions',
    },
    {
      value: 'chats',
      icon: <ForumIcon sx={{ width: 24, height: 30 }} />,
      path: 'chats',
    },
    {
      value: 'settings',
      icon: <Avatar src={person} sx={{ width: 30, height: 30 }} />,
      path: 'settings',
    },
  ]