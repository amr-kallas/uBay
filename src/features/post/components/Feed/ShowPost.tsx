import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import TelegramIcon from '@mui/icons-material/Telegram'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { useState } from 'react'
import { product } from '../../api/type'
import LikeButton from '../../../../components/button/LikeButton'

const ShowPost = ({ postDetails }:{postDetails:product}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  console.log(postDetails)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Stack key={postDetails._id} mb={{ xs: 7, sm: 0 }}>
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
                  }}
                  variant="body2"
                >
                  {`${postDetails.store.name} - ${postDetails.store.city.name}`}
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ mt: '-7px' }}>
              <IconButton onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Stack>
          <Box mb={1}>
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
              {postDetails.photos.slice(0, 3).map((img: any, index: number) => {
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
            <LikeButton postId={postDetails._id} />
            <Button
              sx={{
                flex: 1,
                textAlign: 'center',
                cursor: 'pointer',
                p: '8px 0',
              }}
            >
              <ChatBubbleIcon />
            </Button>
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
          </Stack>
        </Paper>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            ul: {
              p: 0,
            },
            li: {
              width: 140,
            },
            boxShadow: '0 0 4px ddd',
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <ContentCopyIcon sx={{ mr: 1.2 }} /> Copy Link
          </MenuItem>
        </Menu>
      </Stack>
    </Box>
  )
}

export default ShowPost
