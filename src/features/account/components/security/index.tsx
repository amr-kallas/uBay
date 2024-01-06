import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { SecurityList } from '../constant/List'
import { Link } from 'react-router-dom'
const Security = () => {
  return (
    <List
      subheader={
        <ListSubheader component="div">Privacy and security</ListSubheader>
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
        '.MuiListItemButton-root:not(:last-child)': {
          borderBottom: '1px solid #ddd',
        },
      }}
    >
      {SecurityList.map((item) => (
        <ListItemButton key={item.title}>
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
            <ListItemText primary={item.title} />
            <ArrowForwardIcon />
          </Link>
        </ListItemButton>
      ))}
    </List>
  )
}

export default Security
