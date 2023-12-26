import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
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
      }}
    >
      <ListItemButton sx={{ borderBottom: '1px solid #ddd' }}>
        <ListItemText primary="Personal Information" />
        <ArrowBackIcon />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Update Personal Information" />
        <ArrowBackIcon />
      </ListItemButton>
    </List>
  )
}

export default Profile
