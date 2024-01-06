import {
  Box,
  Divider,
  Paper,
  Slide,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import EmailInput from '../EmailInput'
import PasswordInput from '../PasswordInput'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Submit from '../../../../components/button/Submit'
import { zodResolver } from '@hookform/resolvers/zod'
import queries from '../../api/queries'
import parseError from '../../../../utils/apiHelpers'
import Storage from '../../../../utils/Storage'
import { useSnackbarContext } from '../../../../context/snackbarContext'
import loginSchema, { defaultValues, login } from './validation'
const Login = () => {
  const { control, handleSubmit, setError } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultValues,
  })
  const navigate = useNavigate()
  const snackbar = useSnackbarContext()
  const theme = useTheme()
  const login = queries.Login()
  const onSubmit = (data: login) => {
    login.mutate(data, {
      onSuccess: (body) => {
        Storage.setToken(body.token)
        navigate('/')
      },
      onError: (error) => {
        parseError({ feedback: setError, Err: error, snackbar: snackbar })
      },
    })
  }
  return (
    <Slide in direction="up" timeout={300}>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
        }}
      >
        <Paper
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: { xs: '100%', md: '50%' },
            width: 1,
            m: { md: 'auto' },
            bgcolor: 'white',
            p: 3,
            height: { xs: '100vh', md: 'auto' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack flex={2}>
            <Typography
              variant="h4"
              sx={{
                m: '16px auto 32px',
                textAlign: 'center',
                color: theme.palette.primary.main,
              }}
            >
              Login
            </Typography>
            <Stack gap={2} flex={2}>
              <EmailInput control={control} sx={{ width: '80%' }} />
              <PasswordInput
                control={control}
                name="password"
                label="Password"
                key="Password"
                sx={{ width: '80%' }}
              />

              <Submit
                isLoading={login.isLoading}
                variant="contained"
                sx={{
                  width: {
                    xs: '80%',
                    md: 'fit-content',
                  },
                  mx: 'auto !important',
                  p:'8px 24px'
                }}
              >
                Login
              </Submit>
            </Stack>
            <Box sx={{ m: '30px auto 0', textAlign: 'center' }} component="p">
              Don't have an account?
              <Link to="/signup" style={{ color: theme.palette.primary[900],marginLeft:'5px' }}>
                Create an account now
              </Link>
            </Box>
            <Divider sx={{ margin: '20px' }}/>
            <Box sx={{ m: '0 auto', textAlign: 'center' }} component="p">
              Forgot your password?{' '}
              <Link
                to="/forgot-password"
                style={{ color: theme.palette.primary[900] }}
              >
                Reset password
              </Link>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Slide>
  )
}

export default Login
