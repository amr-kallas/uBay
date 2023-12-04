import { Alert, Snackbar as MuiSnackbar } from '@mui/material'
import { AlertSeverity } from '../../context/snackbarContext'
type MuiSnackbarType = {
  handleClose: () => void
  open: boolean
  message: string
  severity: AlertSeverity
}
const Snackbar = ({
  handleClose,
  open,
  message,
  severity,
}: MuiSnackbarType) => {
  return (
    <>
      <MuiSnackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
      >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
      </MuiSnackbar>
    </>
  )
}

export default Snackbar
