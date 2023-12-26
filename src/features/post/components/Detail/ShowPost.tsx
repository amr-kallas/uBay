import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
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
import Skeleton from '../../../../components/feedback/Skeleton'
import { useState } from 'react'
//@ts-expect-error nothing
import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Buy from './Buy'
type Details =
  | {
      postDetails: Post
      skeleton?: boolean
    }
  | {
      postDetails: undefined
      skeleton: boolean
    }
const ShowPost = ({ postDetails, skeleton }: Details) => {
  Modal.setAppElement('#root')
  const isMe = queries.GetMe()
  const { setId } = usePostIdContext()
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setModalIsOpen(true)
  }
  const openDrawer = () => {
    isMe.data?._id !== postDetails?.user._id && setOpen(true)
  }
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % postDetails!.photos.length)
  }
  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0
        ? postDetails!.photos.length - 1
        : currentImageIndex - 1
    )
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

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
            {postDetails && (
              <Avatar
                src={postDetails.user.photo}
                sx={{ width: 30, height: 30 }}
              />
            )}
            {skeleton && (
              <Skeleton
                variant="circular"
                sx={{ width: '30px !important', height: '30px !important' }}
              />
            )}
          </Box>
          <Stack flex={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              {postDetails && <Typography>{postDetails.user.name}</Typography>}
              {skeleton && <Skeleton widthRange={{ min: 30, max: 40 }} />}
              {postDetails && (
                <Box>
                  <Chip
                    variant="outlined"
                    color="primary"
                    label={postDetails.category.name}
                    clickable
                    sx={{ height: 'fit-content', p: '2px' }}
                  />
                </Box>
              )}
            </Stack>
            {postDetails && (
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
            )}
          </Stack>
          {postDetails && (
            <Box sx={{ mt: '-7px' }}>
              <PostAction
                userId={postDetails.user._id}
                postId={postDetails._id}
              />
            </Box>
          )}
        </Stack>
        <Box mb={3}>
          {postDetails && (
            <Box p={'0 16px'}>
              <Typography variant="h6">{postDetails.title}</Typography>
              <Typography variant="body1">{postDetails.content}</Typography>
            </Box>
          )}
          {skeleton && (
            <Box p={'0 16px'}>
              <Skeleton widthRange={{ min: 50, max: 60 }} />
              <Skeleton widthRange={{ min: 50, max: 60 }} />
            </Box>
          )}
        </Box>
        {postDetails && (
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
        )}
        <Divider />
        {postDetails && (
          <Stack direction="row">
            <LikeButton
              postId={postDetails?._id}
              liked={postDetails?.likedByMe}
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
            {postDetails?.user._id != isMe.data?._id && (
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
        )}

        {skeleton && (
          <Stack direction="row" justifyContent="space-around">
            <Skeleton
              sx={{ width: '35px !important', height: '20px !important' }}
            />
            <Skeleton
              sx={{ width: '35px !important', height: '20px !important' }}
            />
            <Skeleton
              sx={{ width: '35px !important', height: '20px !important' }}
            />
          </Stack>
        )}

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
            onClick={openDrawer}
          >
            <LocalGroceryStoreIcon sx={{ color: 'white' }} />
            {postDetails && (
              <Typography variant="body1">{postDetails.price} S.Y</Typography>
            )}
            {skeleton && <Skeleton widthRange={{ min: 20, max: 40 }} />}
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
          gap: '1px',
          height: 'calc(90vh - 56px)',
          mb: isSmallScreen ? 7 : 0,
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
          // '.MuiBox-root:last-of-type': {
          //   position: 'relative',
          //   ':before': {
          //     content: `"+${postDetails.photos.length - 3}"`,
          //     position: 'absolute',
          //     width: '100%',
          //     backgroundColor: 'rgba(0, 0, 0, 0.4)',
          //     height: '100%',
          //     textAlign: 'center',
          //     justifyContent: 'center',
          //     alignItems: 'center',
          //     color: 'white',
          //     fontSize: '2rem',
          //     display: postDetails.photos.length > 3 ? 'flex' : 'none',
          //   },
          // },
        }}
      >
        {postDetails && (
          <>
            {postDetails.photos.map((img: any, index: number) => {
              return (
                <Box
                  key={index}
                  onClick={() => openModal(index)}
                  sx={{ cursor: 'pointer' }}
                >
                  <img src={img} />
                </Box>
              )
            })}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Image Modal"
              style={{
                content: {
                  inset: '0',
                  top: '34px',
                  left: '0',
                  right: '0',
                  bottom: '0',
                },
              }}
            >
              <img
                src={postDetails.photos[currentImageIndex]}
                style={{ display: 'flex', margin: 'auto' }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '55px',
                  right: '15px',
                }}
                onClick={closeModal}
              >
                <CloseIcon sx={{ color: '#d32f2f' }} />
              </IconButton>
              <Button
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-50%)',
                }}
                onClick={prevImage}
              >
                <ArrowBackIosNewIcon fontSize="large" />
              </Button>
              <Button
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  transform: 'translateY(-50%)',
                }}
                onClick={nextImage}
              >
                <ArrowForwardIosIcon fontSize="large" />
              </Button>
            </Modal>
          </>
        )}
        {skeleton && (
          <>
            <Box height="60% !important">
              <Skeleton
                variant="text"
                sx={{
                  width: '100% !important',
                  height: isMediumScreen ? '300px' : '100% !important',
                  transform: 'none',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '45%',
              }}
            >
              <Skeleton
                variant="text"
                sx={{
                  width: '49.5% !important',
                  height: isMediumScreen ? '150px' : '100% !important',
                  transform: 'none',
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  width: '49.5% !important',
                  height: isMediumScreen ? '150px' : '100% !important',
                  transform: 'none',
                }}
              />
            </Box>
          </>
        )}
      </Stack>
      <DrawerComment />
      <Buy
        open={open}
        setOpen={setOpen}
        price={postDetails?.price}
        id={postDetails?._id}
      />
    </Stack>
  )
}

export default ShowPost
