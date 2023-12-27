import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Typography,
  CircularProgress,
} from '@mui/material'
import queries from '../api/queries'
import CloseIcon from '@mui/icons-material/Close'
import QRCode from 'qrcode.react'
import { useEffect } from 'react'
import { Wait } from '../api/type'
import parseError from '../../../utils/apiHelpers'
import { useSnackbarContext } from '../../../context/snackbarContext'
type ProductQR = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  person: string
  products: Wait | undefined
}
const ProductQR = ({ open, setOpen, person, products }: ProductQR) => {
  const snackbar=useSnackbarContext()
  const seller = queries.Seller()
  const customer = queries.Customer()
  const closeDrawer = () => {
    setOpen(false)
  }
  const body = {
    isDeliver: person == 'seller' ? true : false,
    product: products?.product._id,
    payment: products?.payment._id,
  }
  const value = JSON.stringify(body)
  useEffect(() => {
    if (open && person == 'seller') {
      const product = products!.product._id
      seller.mutate(product, {
        onSuccess: (d) => {
          console.log(d)
        },
        onError: (err) => {
          parseError({Err:err,snackbar:snackbar})
        },
      })
    } else if (open && person == 'purchese') {
      customer.mutate(products!._id, {
        onSuccess: (d) => {
          console.log(d)
        },
        onError: (err) => {
          console.log(err)
          parseError({Err:err,snackbar:snackbar})

        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, person])
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={closeDrawer}
      sx={{
        '.MuiPaper-root': {
          maxWidth: { xs: 1, sm: 390 },
          width: 1,
          margin: { xs: 'auto', sm: '' },
          zIndex: 3333,
        },
      }}
    >
      <Box position="relative">
        <Typography p={2} textAlign="center" color="primary" variant="h5">
          Piece delivery:{products?.product.title}
        </Typography>
        <IconButton
          sx={{
            position: 'absolute',
            left: 10,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          onClick={closeDrawer}
        >
          <CloseIcon />
        </IconButton>
        <Divider />
      </Box>
      <Box m="auto">
        {(seller.isLoading || customer.isLoading) && (
          <CircularProgress
            sx={{ width: '50px !important', height: '50px !important' }}
          />
        )}
        {(seller.isSuccess || customer.isSuccess) && (
          <QRCode value={value} size={256} />
        )}
      </Box>
    </Drawer>
  )
}

export default ProductQR
