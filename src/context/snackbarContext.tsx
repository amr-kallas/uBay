import { createContext, useContext } from 'react'
export type AlertSeverity = 'success' | 'error'
export type snackbar = {
  message: string
  severity: AlertSeverity
}
type SnackbarProps = {
  handleOpen: () => void
  setSnackbarProps: React.Dispatch<React.SetStateAction<snackbar>>
}

const SnackbarContext = createContext<SnackbarProps>({} as SnackbarProps)

export const useSnackbarContext = () => {
  const { setSnackbarProps, handleOpen } = useContext(SnackbarContext)
  const showSnackbar = (props: snackbar) => {
    handleOpen()
    setSnackbarProps(props)
  }
  return showSnackbar
}

export default SnackbarContext
