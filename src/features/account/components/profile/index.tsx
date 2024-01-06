import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import { ProfileList } from '../constant/List'
const Profile = () => {
  return (
    <List
      subheader={
        <ListSubheader component="div">Profile personly</ListSubheader>
      }
      sx={{
        maxWidth: '600px',
        width: '100%',
        marginX: 'auto !important',
        p: '0 24px 8px',
        background: 'white',
        borderRadius: '25px',
        overflow: 'hidden',
        textTransform: 'uppercase',
        span: {
          fontSize: 18,
          color: '#424242',
        },
        '.MuiListItemButton-root:not(:last-child)':{
          borderBottom: '1px solid #ddd'
        }
      }}
    >
      {ProfileList.map((item)=>(
        <ListItemButton key={item.title} >
        <Link
          to={item.path}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            textDecoration: 'none',
          }}
        >
          <ListItemText primary={item.title}/>
          <ArrowForwardIcon />
        </Link>
      </ListItemButton>
      ))}
    </List>
  )
}

export default Profile
