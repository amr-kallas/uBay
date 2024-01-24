import { Button, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
  const theme = useTheme()
  return (
    <Button
      //   variant="contained"
      sx={{
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: theme.palette.primary.main,
        bgcolor: '#f1f1f1',
        p: '8px 14px',
        fontSize: 17,
        borderRadius: '12px',
        position: 'relative',
        left: '-5px',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        '&:hover': {
          color: theme.palette.secondary[700],
        },
      }}
    >
      <Link
        to="/login"
        style={{ textDecoration: 'none', color: theme.palette.primary.main }}
      >
        Login
      </Link>
    </Button>
  )
}

export default Login
