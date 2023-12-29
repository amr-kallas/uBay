import { Button, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

const Signup = () => {
  const theme = useTheme()

  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 17,
        borderRadius: '12px',
        p: '8px 14px',
        zIndex: 2,
        '&:hover': {
          bgcolor: theme.palette.secondary[700],
        },
      }}
    >
      <Link to='/signup' style={{textDecoration:'none',color:'white'}}>Sign up</Link>
    </Button>
  )
}

export default Signup
