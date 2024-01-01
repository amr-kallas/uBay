import { Box, Paper, Slide, Stack, Typography, useTheme } from '@mui/material'
import EmailInput from '../EmailInput'
import { useForm } from 'react-hook-form'
import Submit from '../../../../components/button/Submit'
import { zodResolver } from '@hookform/resolvers/zod'
import queries from '../../api/queries'
import parseError from '../../../../utils/apiHelpers'
import Storage from '../../../../utils/Storage'
import { useSnackbarContext } from '../../../../context/snackbarContext'
import resetSchema, { defaultValues, resetPassword } from './validation'
const Login = () => {
  const { control, handleSubmit, setError } = useForm({
    resolver: zodResolver(resetSchema),
    defaultValues: defaultValues,
  })
  const snackbar = useSnackbarContext()
  const theme = useTheme()
  const resetPassword = queries.ResetPassword()
  const onSubmit = (data: resetPassword) => {
    resetPassword.mutate(data, {
      onSuccess: (body) => {
        Storage.setToken(body.token)
        console.log(body)
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
                m: '16px auto',
                textAlign: 'center',
                color: theme.palette.primary.main,
              }}
            >
              Reset Password
            </Typography>
            <Typography sx={{ textAlign: 'center', mb: 6 }}>
              A code will be sent to your email
            </Typography>
            <Stack gap={2} flex={{xs:0,md:2}}>
              <EmailInput control={control} />
              <Submit
                isLoading={resetPassword.isLoading}
                variant="contained"
                sx={{
                  m:'auto'
                }}
              >
                Send Reset Code
              </Submit>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Slide>
  )
}

export default Login
