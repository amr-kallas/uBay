import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
// import queries from '../account/api/queries'
import { useState } from 'react'

const CommentAction = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
//   const isMe = queries.GetMe()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
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
        {/* {isMe.data?._id == userId && ( */}
          <Box>
            <MenuItem onClick={handleClose}>
              <EditIcon sx={{ mr: 1.2 }} /> Edit
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <DeleteIcon sx={{ mr: 1.2 }} /> Remove
            </MenuItem>
          </Box>
        {/* )} */}
      </Menu>
    </>
  )
}

export default CommentAction
