import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  CircularProgress,
} from '@mui/material'
import query from '../account/api/queries'
import { useState } from 'react'
import { keys, queries } from './api/queries'
import { useQueryClient } from 'react-query'

type commentAction = {
  commentId: string
  onRemove: () => void
  onEdit: () => void
  userId: string
}
const CommentAction = ({
  commentId,
  onRemove,
  onEdit,
  userId,
}: commentAction) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const removeComment = queries.RemoveComment()
  const queryClient = useQueryClient()

  const isMe = query.GetMe()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleRemove = () => {
    console.log(commentId)
    removeComment.mutate(commentId, {
      onSuccess: (d) => {
        onRemove()
        console.log(d)
        queryClient.invalidateQueries(keys.getAll._def)
        queryClient.removeQueries(keys.getComments(commentId))
        handleClose()
      },
      onError: (err) => {
        console.log(err)
        handleClose()
      },
    })
  }
  const handleEdit = () => {
    onEdit()
    handleClose()
  }

  return (
    isMe.data?._id == userId && (
      <>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
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
              width: 170,
            },
            '.MuiPaper-root': {
              left: 614,
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Box>
            <MenuItem onClick={handleEdit}>
              <EditIcon sx={{ mr: 1.2 }} /> Edit
            </MenuItem>
            <MenuItem onClick={handleRemove}>
              {removeComment.isLoading ? (
                <CircularProgress size={15} sx={{ mr: 1.2 }} />
              ) : (
                <DeleteIcon sx={{ mr: 1.2 }} />
              )}
              Remove
            </MenuItem>
          </Box>
        </Menu>
      </>
    )
  )
}

export default CommentAction
