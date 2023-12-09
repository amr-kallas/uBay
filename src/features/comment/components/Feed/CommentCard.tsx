import { Box, Stack, Typography, Avatar, Paper, Fade } from '@mui/material'
import { Comment } from '../../api/type'
import Timeago from '../../../../lib/timeago'
import CommentAction from '../../CommentAction'
import dayjs from 'dayjs'
const CommentCard = ({ comment }: { comment: Comment }) => {
  const newComment = dayjs(Date.now()).diff(comment.createdAt, 'seconds') < 15
  return (
    <Fade in timeout={3000} appear={newComment}>
      <Paper key={comment._id} sx={{ p: 2, mb: '16px !important' }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Box mr={1.5}>
              <Avatar src={comment.user.photo} sx={{ width: 30, height: 30 }} />
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
    </Fade>
  )
}

export default CommentCard
