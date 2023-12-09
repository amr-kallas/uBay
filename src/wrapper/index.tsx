import { CssBaseline } from '@mui/material'
import ThemeProvider from './themeProvider'
import QueryProvider from './QueryProvider'
import SnackbarProvider from './SnackbarProvider'
import PostIdProvider from './PostIdProvider'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <SnackbarProvider>
          <PostIdProvider>
            <CssBaseline />
            {children}
          </PostIdProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </QueryProvider>
  )
}

export default Wrapper
