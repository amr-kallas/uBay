import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import ForumIcon from '@mui/icons-material/Forum'
import { Link, useParams } from 'react-router-dom'
import { queries as chatsQuery } from '../api/queries'
import queries from '../../account/api/queries'
import Loading from './Loading'
const Purchases = () => {
  const chats = chatsQuery.Chats()
  const me = queries.GetMe()
  const { id } = useParams()
  const empty = chats.data?.data.filter(
    (chat) => chat.seller._id != me.data?.id
  )
  return (
    <Box  mb={{ xs: 7, sm: 0 }}>
      {chats.isLoading && (
        <>
          <Loading />
          <Loading />
          <Loading />
        </>
      )}
      {chats.isSuccess && empty?.length == 0 && (
        <Box
          sx={{
            width: 'fit-content',
            margin: 'auto',
            marginTop: 5,
            textAlign: 'center',
          }}
        >
          <ForumIcon sx={{ fontSize: '11rem', opacity: 0.5 }} />
          <Typography variant="h5" sx={{ color: 'grey' }}>
            There are no conversations...
          </Typography>
        </Box>
      )}
      {chats.data?.data.map(
        (chat) =>
          me.data?._id !== chat.seller._id && (
            <Box key={chat.id}>
              <Stack
                component={Link}
                to={`/chats/${chat.id}`}
                p="24px 16px"
                direction="row"
                spacing={1}
                sx={{
                  bgcolor: id == chat.id ? 'rgba(109, 40, 217, 0.04)' : 'none',
                  ':hover': {
                    bgcolor: 'rgba(109, 40, 217, 0.04)',
                  },
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <Avatar src={chat.seller.photo} />
                <Box>
                  <Typography variant="h6">{chat.seller.name}</Typography>
                  <Typography>{chat.product.title}</Typography>
                </Box>
              </Stack>
              <Divider />
            </Box>
          )
      )}
    </Box>
  )
}

export default Purchases
