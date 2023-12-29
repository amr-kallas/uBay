import {
  Box,
  InputAdornment,
  Paper,
  Slide,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import TextField from '../../../../components/input/TextField'
import PersonIcon from '@mui/icons-material/Person'
import EmailInput from '../EmailInput'
import PasswordInput from '../PasswordInput'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Submit from '../../../../components/button/Submit'
import { zodResolver } from '@hookform/resolvers/zod'
import signupSchema, { defaultValues, signup } from './validation'
import queries from '../../api/queries'
import parseError from '../../../../utils/apiHelpers'
import Storage from '../../../../utils/Storage'
import { useSnackbarContext } from '../../../../context/snackbarContext'
const Signup = () => {
  const { control, handleSubmit, setError } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: defaultValues,
  })
  const snackbar = useSnackbarContext()
  const navigate = useNavigate()
  const theme = useTheme()
  const sign = queries.Signup()
  const onSubmit = (data: signup) => {
    sign.mutate(data, {
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
    <Slide in dir="up" timeout={300}>
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: { xs: '100%', md: '50%' },
          m: { md: '16px auto' },
          bgcolor: 'white',
          p: 3,
          height: { xs: '100vh', md: 'auto' },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            m: '16px auto 32px',
            textAlign: 'center',
            color: theme.palette.primary.main,
          }}
        >
          Create Account
        </Typography>
        <Stack gap={2} mt={10}>
          <TextField
            control={control}
            name="name"
            label="Name"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              width: '70%',
              m: 'auto',
            }}
          />
          <EmailInput control={control} sx={{ width: '70%' }} />
          <PasswordInput
            control={control}
            name="password"
            label="Password"
            key="Password"
            sx={{ width: '70%' }}
          />
          <PasswordInput
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            key="Confirm Password"
            sx={{ width: '70%' }}
          />
          <Submit
            isLoading={sign.isLoading}
            variant="contained"
            sx={{
              width: { xs: '70%', md: 'fit-content' },
              mx:'auto !important'
            }}
          >
            Create Account
          </Submit>
          <Box sx={{ m: '30px auto 0', display: 'flex' }} component="span">
            have an account?{' '}
            <Link to="/login" style={{ color: theme.palette.primary[900] }}>
              Login
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Slide>
  )
}

export default Signup
