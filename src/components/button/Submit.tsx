import { LoadingButton } from '@mui/lab'
import { ButtonProps } from '@mui/material'

type submitButton = {
  children: React.ReactNode
  isLoading?: boolean
} & ButtonProps
const Submit = ({ children, sx, isLoading, ...props }: submitButton) => {
  return (
    <LoadingButton
      variant="contained"
      type="submit"
      loading={isLoading}
      {...props}
      sx={{ ...sx }}
    >
      {children}
    </LoadingButton>
  )
}

export default Submit
