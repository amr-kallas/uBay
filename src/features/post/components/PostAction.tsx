import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Divider, IconButton, Menu, MenuItem } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import queries from '../../account/api/queries'
import { WEB_SITE_URL } from '../../../constant/domain'
import API_ROUTES from '../../../constant/apiRoutes'
import { useSnackbarContext } from '../../../context/snackbarContext'
type user = {
  userId?: string
  postId?: string
}
const PostAction = ({ userId, postId }: user) => {
  const snackbar = useSnackbarContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const isMe = queries.GetMe()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleCopyPost = () => {
    navigator.clipboard
      .writeText(`${WEB_SITE_URL}/${API_ROUTES.Post.root}/${postId}`)
      .then(() => {
        snackbar({
          message: 'the link has been copied to clipboard',
          severity: 'success',
        })
      })
    setAnchorEl(null)
  }
  return (
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
        {isMe.data?._id == userId && (
          <Box>
            <MenuItem onClick={handleClose}>
              <EditIcon sx={{ mr: 1.2 }} /> Edit
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <DeleteIcon sx={{ mr: 1.2 }} /> Remove
            </MenuItem>
            <Divider />
          </Box>
        )}
        <MenuItem onClick={handleCopyPost}>
          <ContentCopyIcon sx={{ mr: 1.2 }} /> Copy Link
        </MenuItem>
      </Menu>
    </>
  )
}

export default PostAction
