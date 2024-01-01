import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
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
        mb: {xs:'78px !important',sm:'24px !important'},
      }}
    >
      <ListItemButton>
        <Link
          to="/settings/logout"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            textDecoration: 'none',
          }}
        >
          <ListItemText primary="Logout" />
          <ArrowBackIcon />
        </Link>
      </ListItemButton>
    </List>
  )
}

export default Logout
