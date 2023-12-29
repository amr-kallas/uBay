import { Paper, Typography } from '@mui/material'
import Submit from '../../../../components/button/Submit'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import queries from '../../api/queries'
import { useSnackbarContext } from '../../../../context/snackbarContext'
import parseError from '../../../../utils/apiHelpers'
const ForgotPassword = () => {
  const snackbar = useSnackbarContext()
  const me = queries.GetMe()
  const forgot = queries.ForgotPassword()
  const onSubmit = () => {
    forgot.mutate(
      { email: me.data!.email },
      {
        onSuccess: () => {},
        onError: (err) => {
          parseError({ Err: err, snackbar })
        },
      }
    )
  }
  return (
    <Paper
      sx={{
        mt: { xs: 7, sm: 17 },
        maxWidth: { xs: 1, sm: 600 },
        width: 1,
        mx: 'auto',
        py: 2,
        px: { xs: 2, sm: 6 },
        height: { xs: 'calc(100vh - 56px)', sm: 1 },
      }}
    >
      <Typography
        variant="h5"
        color="primary"
        textAlign={{ xs: 'left', sm: 'center' }}
        pt={2}
      >
        Forgot my password
      </Typography>
      <Typography textAlign="center" mt={2}>
        Send the code to "{me.data?.email}"
      </Typography>
      <Submit
        onClick={onSubmit}
        sx={{
          display: 'flex',
          mt: 5,
          mx: 'auto',
        }}
        isLoading={forgot.isLoading}
        disabled={me.isLoading}
      >
        Send{' '}
        {!forgot.isLoading && (
          <ForwardToInboxIcon style={{ color: 'white', marginLeft: '8px' }} />
        )}
      </Submit>
    </Paper>
  )
}

export default ForgotPassword
