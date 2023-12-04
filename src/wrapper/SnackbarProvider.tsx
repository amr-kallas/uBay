import { useState } from 'react'
import SnackbarContext, { snackbar } from '../context/snackbarContext'
import Snackbar from '../components/feedback/Snackbar'

const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [snackbarProps, setSnackbarProps] = useState<snackbar>({} as snackbar)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <SnackbarContext.Provider value={{ handleOpen, setSnackbarProps }}>
      {children}
      <Snackbar
        open={open}
        handleClose={handleClose}
        message={snackbarProps.message}
        severity={snackbarProps.severity}
      />
    </SnackbarContext.Provider>
  )
}

export default SnackbarProvider
