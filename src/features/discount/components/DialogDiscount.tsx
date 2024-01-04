import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  FormHelperText,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '../../../components/input/TextField'
import Submit from '../../../components/button/Submit'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { queries } from '../api/queries'
import { useSnackbarContext } from '../../../context/snackbarContext'
import dayjs from 'dayjs'
import { AddCoupons } from '../api/type'
type DialogDiscount = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  user: any
  post: any
}
const schemaDiscount = (price: number) => {
  return z
    .object({
      discount: z.coerce.number().positive(),
      user: z.string(),
      product: z.string(),
      expire: z
        .string()
        .optional()
        .refine(
          (value) => {
            if (value === undefined) return true
            return dayjs(value).isValid() && dayjs(value).isAfter(dayjs())
          },
          {
            message: 'invalid Date',
          }
        ),
    })
    .refine((data) => data.discount <= price, {
      message: 'Discount cannot be larger than the price',
      path: ['discount'],
    })
}
const DialogDiscount = ({ open, setOpen, user, post }: DialogDiscount) => {
  const add = queries.Add()
  const snackbar = useSnackbarContext()
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      discount: 0,
      expire: undefined,
      user: user?._id,
      product: post?._id,
    },
    resolver: zodResolver(schemaDiscount(post?.price)),
  })
  const handleClose = () => {
    setOpen(false)
    reset({
      discount: 0,
      expire: undefined,
      user: user?._id,
      product: post?._id,
    })
  }
  const onSubmit = (data: AddCoupons) => {
    console.log(data)
    add.mutate(data, {
      onSuccess: () => {
        snackbar({
          message: 'A discount it given successfuly',
          severity: 'success',
        })
      },
      onError: (err) => {
        console.log(err)
        snackbar({
          message:
            'A discount cannot be given to someone who already has a discount!',
          severity: 'error',
        })
      },
    })
  }
  return (
    <Dialog
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        '.MuiDialog-paper': {
          minWidth: 400,
        },
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{
          ml: 'auto',
          mr: 1,
          mt: 1,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle
        color="primary"
        sx={{
          textAlign: 'center',
          mb: 2,
        }}
      >
        Add a discount to the piece: {post?.title}
      </DialogTitle>
      <DialogContent
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: '20px 42px',
        }}
      >
        <Typography>The user who will receive the discount</Typography>
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '12px',
            background: '#eee',
            padding: '8px',
            borderRadius: '12px',
          }}
        >
          <Avatar src={user?.photo} sx={{ width: 50, height: 50 }} />
          <Typography variant="h6">{user?.name}</Typography>
        </Stack>
        <Box
          sx={{
            width: 1,
            my: 1,
          }}
        >
          <TextField
            type="number"
            label="Discount"
            fullWidth
            control={control}
            name="discount"
          />
          {!errors.discount && (
            <FormHelperText sx={{ pl: 2 }}>
              The price will become {post?.price - watch('discount')} S.Y
            </FormHelperText>
          )}
        </Box>
        <TextField
          type="date"
          label="expire date (optional)"
          fullWidth
          focused
          control={control}
          name="expire"
        />
        <Submit
          sx={{
            width: 'fit-content',
            m: 'auto',
          }}
          isLoading={add.isLoading}
        >
          Addition
        </Submit>
      </DialogContent>
    </Dialog>
  )
}

export default DialogDiscount
