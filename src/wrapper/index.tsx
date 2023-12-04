import { CssBaseline } from '@mui/material'
import ThemeProvider from './themeProvider'
import QueryProvider from './QueryProvider'
import SnackbarProvider from './SnackbarProvider'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <SnackbarProvider>
          <CssBaseline />
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </QueryProvider>
  )
}

export default Wrapper
