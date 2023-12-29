import { Divider, Paper, Stack, Typography, useTheme } from '@mui/material'
import PasswordInput from '../../../../auth/components/PasswordInput'
import { useForm } from 'react-hook-form'
import Submit from '../../../../../components/button/Submit'
import { Link } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { changePasswordSchema, defaultValues } from './validation'
import { ChangePassword } from '../../../api/type'
import queries from '../../../api/queries'
import { useSnackbarContext } from '../../../../../context/snackbarContext'
import parseError from '../../../../../utils/apiHelpers'
import Storage from '../../../../../utils/Storage'

const ChangePassword = () => {
  const theme = useTheme()
  const { control, handleSubmit, setError } = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: defaultValues,
  })
  const snackbar = useSnackbarContext()
  const change = queries.ChangePassword()
  const onSubmit = (data: ChangePassword) => {
    console.log(data)
    change.mutate(data, {
      onSuccess: (user) => {
        console.log(user)
        Storage.setToken(user.token)
        snackbar({message:"the Password was changed successfuly",severity:'success'})
      },
      onError: (err) => {
        console.log(err)
        parseError({ feedback: setError, Err: err, snackbar })
      },
    })
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        mt: { xs: 7, sm: 10 },
        maxWidth: { xs: 1, sm: 600 },
        width: 1,
        mx: 'auto',
        py: 2,
        px: 6,
        height: { xs: 'calc(100vh - 56px)', sm: 1 },
      }}
    >
      <Typography variant="h5" color="primary" textAlign="center" pt={2}>
        Change Password
      </Typography>
      <Stack spacing={2} mt={4} mb={3} mx="auto" width="80%">
        <PasswordInput
          name="passwordCurrent"
          control={control}
          label="currentPassword"
        />
        <PasswordInput name="password" control={control} label="newPassword" />
        <Submit isLoading={change.isLoading} sx={{ mt: '48px !important' }}>
          Save
        </Submit>
      </Stack>
      <Divider />
      <Typography textAlign="center" p={2} sx={{}}>
        Forgot your password?{' '}
        <Link
          style={{ color: theme.palette.primary.main }}
          to="/settings/password-forgot"
        >
          Reset Password
        </Link>
      </Typography>
    </Paper>
  )
}

export default ChangePassword
