import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
  Avatar,
  Paper,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CommentAction from '../../CommentAction'
import { queries } from '../../api/queries'
import { Comment } from '../../api/type'
import Timeago from '../../../../lib/timeago'
import AddComment from '../AddComment'
import Loading from './Loading'
type DrawerOpen = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  PostID: string
}
const DrawerComment = ({ open, setOpen, PostID }: DrawerOpen) => {
  const { data, isLoading } = queries.Comments(PostID)
  console.log(PostID)
  const toggleDrawer = () => {
    setOpen(false)
  }
  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={toggleDrawer}
      sx={{
        '.MuiPaper-root': {
          maxWidth:{xs:1,sm:390},
          width: 1,
          margin:{xs:'auto',sm:''}
        },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: {xs:1,sm:390},
          bgcolor: 'white',
          zIndex: 11,
        }}
      >
        <Stack direction="row" alignItems="center" p={1}>
          <IconButton onClick={toggleDrawer}>
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
            Comments
          </Typography>
        </Stack>
        <Divider />
      </Box>
      <Box my={data?.data ? 8 : 0} p={'0 16px'}>
        {data?.data.map((comment: Comment) => {
          return (
            <Paper key={comment._id} sx={{ p: 2, mb:'16px !important' }}>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" alignItems="center">
                  <Box mr={1.5}>
                    <Avatar
                      src={comment.user.photo}
                      sx={{ width: 30, height: 30 }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body1">{comment.user.name}</Typography>
                    <Typography sx={{ color: '#777', fontSize: 10 }}>
                      <Timeago date={comment.createdAt} />
                    </Typography>
                  </Box>
                </Stack>
                <Box mt={-0.5}>
                  <CommentAction />
                </Box>
              </Stack>
              <Typography
                sx={{
                  py: 2,
                }}
              >
                {comment.content}
              </Typography>
            </Paper>
          )
        })}
      </Box>
      {isLoading && (
        <>
          <Box my={8} mx={2}>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </Box>
        </>
       )}

      <AddComment PostID={PostID} />
    </Drawer>
  )
}

export default DrawerComment
