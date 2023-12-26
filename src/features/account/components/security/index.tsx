import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const Security = () => {
  return (
    <List
    subheader={
      <ListSubheader component="div">Privacy and security</ListSubheader>
    }
    sx={{
      maxWidth: '600px',
      width:'100%',
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
      <ListItemText primary="Change password" />
      <ArrowBackIcon />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Forget My Password" />
      <ArrowBackIcon />
    </ListItemButton>
  </List>
  )
}

export default Security