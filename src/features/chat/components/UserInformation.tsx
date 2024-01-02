import { ArrowBack } from '@mui/icons-material'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { queries as chatQuery } from '../api/queries'
import queries from '../../account/api/queries'
import Skeleton from '../../../components/feedback/Skeleton'
const UserInformation = () => {
  const { id } = useParams()
  const chat = chatQuery.GetChat(id as string)
  const me = queries.GetMe()
  const isLoading = me.isLoading || chat.isLoading
  const iAmSeller = chat.data?.seller._id == me.data?._id
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        p: 1,
        bgcolor: 'white',
        alignItems: 'center',
      }}
    >
      <IconButton component={Link} to="/chats">
        <ArrowBack />
      </IconButton>
      <Box>
        {isLoading && (
          <Skeleton
            sx={{ width: '40px !important', height: '40px !important' }}
            variant="circular"
          />
        )}
        {!isLoading && (
          <Avatar
            src={
              iAmSeller ? chat.data?.customer.photo : chat.data?.seller.photo
            }
          />
        )}
      </Box>
      <Stack direction="row" spacing={1} alignItems="center">
        {isLoading && <Skeleton widthRange={{ min: 40, max: 50 }} />}
        {!isLoading && (
          <>
            <Typography variant="h6">{chat.data?.product.title}</Typography>
            <Typography variant="h6">
              | {iAmSeller ? chat.data?.customer.name : chat.data?.seller.name}{' '}
            </Typography>
          </>
        )}
      </Stack>
    </Stack>
  )
}

export default UserInformation
