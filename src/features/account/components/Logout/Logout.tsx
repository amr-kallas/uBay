import { Button, Dialog, IconButton, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Submit from '../../../../components/button/Submit'
import LogoutIcon from '@mui/icons-material/Logout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Storage from '../../../../utils/Storage'

const LogoutForm = () => {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  const handleClose = () => {
    setOpen(false)
    navigate('/settings')
  }
  const handleLogout=()=>{
    Storage.removeToken()
    navigate('/register')
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '.MuiPaper-root': {
          p: 2,
          width: 450,
        },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Are You Sure?</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Typography p={2}>
        Do you want to log out of your current account?
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        pt={1}
        alignItems="center"
        justifyContent="center"
      >
        <Submit color="error" onClick={handleLogout}>
          Logout <LogoutIcon style={{ color: 'white', marginLeft: '8px' }} />
        </Submit>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
      </Stack>
    </Dialog>
  )
}

export default LogoutForm
