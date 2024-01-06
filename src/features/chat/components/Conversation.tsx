import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material'
import Tabs from './Tabs'
import UserInformation from './UserInformation'
import Messages from './Messages'
import DiscountIcon from '@mui/icons-material/Discount'
import { useState } from 'react'
import { DialogDiscount } from '../../discount'
import { Chat } from '../api/type'

const Conversation = () => {
  const [open, setOpen] = useState(false)
  const [iAmSeller, setIAmSeller] = useState(false)
  const [product, setProduct] = useState<Chat>({} as Chat)
  const isMeSeller = (isMe: boolean, product: any) => {
    setIAmSeller(isMe)
    setProduct(product)
  }
  const theme = useTheme()
  const mdOrLarger = useMediaQuery(theme.breakpoints.up('md'))
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <Stack
      direction="row"
      sx={{
        height: 'calc(100vh - 56px)',
        overflow: 'hidden',
        mt: 7,
      }}
    >
      {mdOrLarger && <Tabs />}
      <Box
        sx={{
          flex: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'white',
          }}
        >
          <UserInformation isMeSeller={isMeSeller} />
          {iAmSeller && (
            <IconButton
              sx={{ ml: 'auto !important', mr: 1 }}
              onClick={handleOpen}
            >
              <DiscountIcon sx={{ color: '#be185d' }} />
            </IconButton>
          )}
        </Box>
        <Messages />
      </Box>
      <DialogDiscount
        open={open}
        setOpen={setOpen}
        user={product?.customer}
        post={product?.product}
      />
    </Stack>
  )
}

export default Conversation
