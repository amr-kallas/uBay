import { Box, Divider, InputAdornment, Paper, Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import SaveIcon from '@mui/icons-material/Save'
import queries, { keys } from '../../api/queries'
import TextField from '../../../../components/input/TextField'
import { useForm } from 'react-hook-form'
import EmailInput from '../../../auth/components/EmailInput'
import Submit from '../../../../components/button/Submit'
import { useEffect } from 'react'
import { defaultValues, editSchema, Profile } from './validation'
import Image from './Image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from 'react-query'
import parseError from '../../../../utils/apiHelpers'
import { useSnackbarContext } from '../../../../context/snackbarContext'
import { Update } from '../../api/type'

const Edit = () => {
  const me = queries.GetMe()
  const update = queries.UpdateMe()
  const queryClient = useQueryClient()
  const snackbar = useSnackbarContext()
  const { control, reset, handleSubmit, setValue, setError } = useForm({
    defaultValues: me.isSuccess ? Profile(me.data) : defaultValues,
    resolver: zodResolver(editSchema),
  })
  useEffect(() => {
    if (me.data) {
      reset(Profile(me.data))
    }
  }, [me.data, reset])
  const updatePhoto = (file: File) => {
    setValue('photo', file)
  }
  const onSubmit = (data: Update) => {
    update.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries(keys.getMe._def)
      },
      onError: (err) => {
        parseError({ feedback: setError, Err: err, snackbar: snackbar })
      },
    })
  }

  return (
    <Box mx={1} mt={8} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Paper
        sx={{
          maxWidth: 600,
          width: 1,
          m: 'auto',
          position: 'relative',
          minHeight: 400,
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 1,
            height: '80%',
            clipPath: 'ellipse(110% 71% at 53% -7%)',
            background: (th) =>
              `linear-gradient(0deg, ${th.palette.primary['700']}, ${th.palette.primary['500']})`,
          }}
        ></Box>
        <Image
          loading={me.isLoading}
          photo={me.data! && me.data.photo}
          update={updatePhoto}
        />
        <Box mt={32.5} p={2}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            spacing={1}
          >
            <TextField
              name="name"
              label="Name"
              control={control}
              sx={{ flex: 1 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <EmailInput control={control} sx={{ flex: 1 }} />
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Box width={1} textAlign="center">
            <Submit sx={{ gap: 1 }} isLoading={update.isLoading}>
              Submit {!update.isLoading && <SaveIcon sx={{ color: 'white' }} />}
            </Submit>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Edit
