import {
  Box,
  Stack,
  Typography,
  Avatar,
  Paper,
  Fade,
  Slide,
} from '@mui/material'
import { Comment } from '../../api/type'
import Timeago from '../../../../lib/timeago'
import CommentAction from '../../CommentAction'
import dayjs from 'dayjs'
import { useState } from 'react'
import EditComment from '../EditComment'
type CommentProps = {
  comment: Comment
}
const CommentCard = ({ comment }: CommentProps) => {
  const [open, setOpen] = useState(true)
  const [edit, setEdit] = useState(false)
  const newComment = dayjs(Date.now()).diff(comment.createdAt, 'seconds') < 15
  const onRemove = () => {
    setOpen(false)
  }
  const onEdit = () => {
    setEdit(true)
  }
  const cancelEdit = () => {
    setEdit(false)
  }
  return (
    <Fade in timeout={3000} appear={newComment}>
      <Slide
        in={open}
        appear={false}
        unmountOnExit
        direction="right"
        timeout={500}
      >
        <Paper key={comment._id} sx={{ p: 2, mb: '16px !important' }}>
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
              <CommentAction
                commentId={comment._id}
                userId={comment.user._id}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            </Box>
          </Stack>
          {!edit && (
            <Typography
              sx={{
                py: 2,
              }}
            >
              {comment.content}
            </Typography>
          )}
          {edit && (
            <EditComment
              content={comment.content}
              id={comment._id}
              postId={comment.product}
              userId={comment.user._id}
              cancelEdit={cancelEdit}
            />
          )}
        </Paper>
      </Slide>
    </Fade>
  )
}

export default CommentCard
