import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const Logout = () => {
  return (
    <List
      subheader={<ListSubheader component="div">Account</ListSubheader>}
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
        mb:'24px !important'
      }}
    >
      <ListItemButton>
        <ListItemText primary="Logout" />
        <ArrowBackIcon />
      </ListItemButton>
    </List>
  )
}

export default Logout
