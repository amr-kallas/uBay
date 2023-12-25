import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import queries from '../../api/queries'
import Submit from '../../../../components/button/Submit'
import { useSnackbarContext } from '../../../../context/snackbarContext'
import parseError from '../../../../utils/apiHelpers'

type BuyProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  price?: number
  id?: string
}
const Buy = ({ open, setOpen, price, id }: BuyProps) => {
  const buy = queries.Pay()
  const theme = useTheme()
  const snackbar = useSnackbarContext()
  const closeDrawer = () => {
    setOpen(false)
  }
  const handleClick = () => {
    buy.mutate(
      { product: id, note: '.' },
      {
        onSuccess: () => {
          snackbar({
            message: 'The item has been purchased successfully',
            severity: 'success',
          })
          closeDrawer()
        },
        onError: (error) => {
          parseError({ Err: error, snackbar: snackbar })
        },
      }
    )
  }
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
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
        },
      }}
    >
      <Typography variant="h6" color="primary" p={2}>
        Confirm item purchase
      </Typography>
      <Divider />
      <List
        sx={{
          listStyleType: 'revert',
          paddingLeft: '20px',
          width: 'fit-content',
          m: 'auto',
          mt: 3,
        }}
      >
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <ListItemText
            sx={{ span: { fontSize: '0.8rem  !important' } }}
            primary="You will be notified to go to receive the piece as soon as the seller brings it"
          />
        </ListItem>
        <ListItem
          sx={{
            display: 'list-item',
            p: 0,
          }}
        >
          <ListItemText
            sx={{ span: { fontSize: '0.8rem  !important' } }}
            primary="When the notification arrives, please go to the warehouse mentioned in the notification"
          />
        </ListItem>
      </List>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ p: '16px 16px 8px' }}
      >
        <Typography>Price:</Typography>
        <Typography>{price} S.Y</Typography>
      </Stack>
      <Submit
        sx={{
          bgcolor: theme.palette.primary.main,
          color: 'white',
          '&:hover': { bgcolor: theme.palette.primary.main },
          margin: '0 20px 20px',
          fontSize: '18px',
        }}
        isLoading={buy.isLoading}
        onClick={handleClick}
      >
        Buy
        {!buy.isLoading && (
          <LocalGroceryStoreIcon sx={{ color: 'white', ml: '8px' }} />
        )}
      </Submit>
    </Drawer>
  )
}

export default Buy
