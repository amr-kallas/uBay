import DeleteIcon from '@mui/icons-material/Delete'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  CircularProgress,
} from '@mui/material'
import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { keys, queries } from '../api/queries'
type DiscountActionProps = {
  onRemove: () => void
  id: string
}
const DiscountAction = ({ onRemove, id }: DiscountActionProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const remove = queries.Delete()
  const queryClient = useQueryClient()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleRemove = () => {
    remove.mutate(id, {
      onSuccess: () => {
        onRemove()
        queryClient.invalidateQueries(keys.getAll._def)
        handleClose()
      },
      onError: (err) => {
        console.log(err)
        handleClose()
      },
    })
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
        <Box>
          <MenuItem onClick={handleRemove}>
            {remove.isLoading ? (
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
}

export default DiscountAction
