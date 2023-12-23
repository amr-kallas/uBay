import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import PostAction from '../PostAction'
import Timeago from '../../../../lib/timeago'
import { Post } from '../../api/type'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import TelegramIcon from '@mui/icons-material/Telegram'
import queries from '../../../account/api/queries'
import LikeButton from '../../../../components/button/LikeButton'
import { usePostIdContext } from '../../../../context/postIdContext'
import { DrawerComment } from '../../../comment'

const ShowPost = ({ postDetails }: { postDetails: Post }) => {
  const isMe = queries.GetMe()
  const { setId } = usePostIdContext()
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Stack direction={isMediumScreen ? 'column' : 'row'}>
      <Stack
        sx={{
          width: isMediumScreen ? 1 : 340,
          height: isMediumScreen ? 'auto' : 'calc(100vh - 50px)',
          bgcolor: 'white',
          position: isMediumScreen ? 'static' : 'fixed',
        }}
      >
        <Stack direction="row" p={2}>
          <Box mr={2}>
            <Avatar
              src={postDetails.user.photo}
              sx={{ width: 30, height: 30 }}
            />
          </Box>
          <Stack flex={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <Typography>{postDetails.user.name}</Typography>
              <Box>
                <Chip
                  variant="outlined"
                  color="primary"
                  label={postDetails.category.name}
                  clickable
                  sx={{ height: 'fit-content', p: '2px' }}
                />
              </Box>
            </Stack>
            <Box>
              <Typography
                sx={{
                  fontSize: '9px',
                  color: 'rgba(0,0,0,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                }}
                variant="body2"
              >
                <Timeago date={postDetails.createdAt} />
                {'\u00A0'}
                | <LocationOnIcon sx={{ fontSize: 10, color: 'grey' }} />
                {`${postDetails.store.name} - ${postDetails.store.city.name}`}
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ mt: '-7px' }}>
            <PostAction
              userId={postDetails.user._id}
              postId={postDetails._id}
            />
          </Box>
        </Stack>
        <Box mb={3}>
          <Box p={'0 16px'}>
            <Typography variant="h6">{postDetails.title}</Typography>
            <Typography variant="body1">{postDetails.content}</Typography>
          </Box>
        </Box>
        <Stack direction="row" p={'0 16px'} spacing={1}>
          {postDetails.likes != 0 && (
            <Typography
              variant="body1"
              sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}
            >
              {postDetails.likes} Likes
            </Typography>
          )}
          {postDetails.comments != 0 && (
            <Typography
              variant="body1"
              sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}
            >
              {postDetails.comments} Comment
            </Typography>
          )}
        </Stack>
        <Divider />
        <Stack direction="row">
          <LikeButton postId={postDetails._id} liked={postDetails.likedByMe} />
          <Button
            sx={{
              flex: 1,
              textAlign: 'center',
              cursor: 'pointer',
              p: '8px 0',
            }}
            onClick={() => setId(postDetails._id)}
          >
            <ChatBubbleIcon />
          </Button>
          {postDetails.user._id != isMe.data?._id && (
            <Button
              sx={{
                flex: 1,
                textAlign: 'center',
                cursor: 'pointer',
                p: '8px 0',
              }}
            >
              <TelegramIcon />
            </Button>
          )}
        </Stack>
        <Divider />
        <Box
          sx={{
            mt: 'auto',
            textAlign: 'right',
            borderTop: isMediumScreen ? 'unset' : '1px solid #ddd',
            pt: 1,
            pb: isMediumScreen ? 1 : 0,
            pr: 2,
          }}
        >
          <Button
            sx={{
              bgcolor: theme.palette.primary.main,
              color: 'white',
              justifyContent: 'space-around',
              minWidth: 100,
              '&:hover': {
                bgcolor: theme.palette.primary.main,
              },
            }}
          >
            <LocalGroceryStoreIcon sx={{ color: 'white' }} />
            <Typography variant="body1">{postDetails.price} S.Y</Typography>
          </Button>
        </Box>
      </Stack>
      <Stack
        p={'0 4px'}
        direction="row"
        mt={2}
        sx={{
          flex: 1,
          ml: isMediumScreen ? 0 : '340px',
          flexWrap: 'wrap',
          gap: '5px',
          height: 'calc(90vh - 56px)',
          '.MuiBox-root:first-of-type': {
            flex: '1 100%',
            height: '100%',
            img: {
              width: '100%',
              height: '100%',
            },
          },

          '.MuiBox-root:not(:first-of-type)': {
            flex: isSmallScreen ? '1 50%' : '1 48%',
            img: {
              width: '100%',
              height: '100%',
            },
          },
          '.MuiBox-root:last-of-type': {
            position: 'relative',
            ':before': {
              content: `"+${postDetails.photos.length - 3}"`,
              position: 'absolute',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              height: '100%',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '2rem',
              display: postDetails.photos.length > 3 ? 'flex' : 'none',
            },
          },
        }}
      >
        {postDetails.photos.slice(0, 3).map((img: any, index: number) => {
          return (
            <Box key={index}>
              <img src={img} />
            </Box>
          )
        })}
      </Stack>
      <DrawerComment />
    </Stack>
  )
}

export default ShowPost
