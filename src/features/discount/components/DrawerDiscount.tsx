import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Discount from '.'

type DrawerDiscount = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  id:string
}
const DrawerDiscount = ({ open, setOpen ,id}: DrawerDiscount) => {
  const closeDrawer = () => {
    setOpen(false)
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
        },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: { xs: 1, sm: 390 },
          bgcolor: 'white',
          zIndex: 11,
        }}
      >
        <Stack direction="row" alignItems="center" p={1}>
          <IconButton onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="primary"
            sx={{
              flex: 1,
              textAlign: 'center',
            }}
          >
            Discounts
          </Typography>
        </Stack>
        <Divider />
      </Box>
      <Discount id={id}/>
    </Drawer>
  )
}

export default DrawerDiscount
