import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Slide,
  Stack,
  Typography,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Post } from '../../api/type'
import LikeButton from '../../../../components/button/LikeButton'
import PostAction from '../PostAction'
import queries from '../../../account/api/queries'
import Timeago from '../../../../lib/timeago'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { usePostIdContext } from '../../../../context/postIdContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type PostCard = {
  postDetails: Post
}

const ShowPost = ({ postDetails }: PostCard) => {
  const { setId } = usePostIdContext()
  const [open,setOpen]=useState(true)
  const isMe = queries.GetMe()
  const navigate=useNavigate()
  const onRemove=()=>{
    setOpen(false)
  }
  const DetailPost=()=>{
    navigate(`/posts/${postDetails._id}`)
  }
  return (
    <Slide in={open} appear={false} unmountOnExit direction='right' timeout={500}>
      <Box>
        <Stack key={postDetails._id}>
          <Paper
            sx={{
              width: { xs: '100%', sm: '500px' },
              bgcolor: 'white',
              m: '12px auto',
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
                    <Chip
                      label={`${postDetails.price} SYP`}
                      color="secondary"
                      sx={{ height: 'fit-content', p: '2px', ml: 0.5 }}
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
                   | <LocationOnIcon sx={{fontSize:10,color:'grey'}}/>
                    {`${postDetails.store.name} - ${
                      postDetails.store.city.name
                    }`}
                  </Typography>
                </Box>
              </Stack>
              <Box sx={{ mt: '-7px' }}>
                <PostAction
                  userId={postDetails.user._id}
                  postId={postDetails._id}
                  onRemove={onRemove}
                />
              </Box>
            </Stack>
            <Box mb={1} sx={{cursor:'pointer'}} onClick={DetailPost}>
              <Box p={'0 16px'}>
                <Typography variant="h6">{postDetails.title}</Typography>
                <Typography variant="body1">{postDetails.content}</Typography>
              </Box>
              <Stack
                p={'0 4px'}
                direction="row"
                mt={2}
                sx={{
                  flexWrap: 'wrap',
                  gap: '5px',
                  '.MuiBox-root:first-of-type': {
                    flex: '1 100%',
                    height: '315px',
                    img: {
                      width: '100%',
                      height: '100%',
                    },
                  },

                  '.MuiBox-root:not(:first-of-type)': {
                    flex: '1 48%',
                    height: '160px',
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
                {postDetails.photos
                  .slice(0, 3)
                  .map((img: any, index: number) => {
                    return (
                      <Box key={index}>
                        <img src={img} />
                      </Box>
                    )
                  })}
              </Stack>
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
              <LikeButton
                postId={postDetails._id}
                liked={postDetails.likedByMe}
              />
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
          </Paper>
        </Stack>
      </Box>
    </Slide>
  )
}

export default ShowPost
