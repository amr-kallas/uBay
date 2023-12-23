import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import AddComment from '../AddComment'
import { usePostIdContext } from '../../../../context/postIdContext'
import Comments from '.'

const DrawerComment = () => {
  const { id, setId } = usePostIdContext()
  const toggleDrawer = () => {
    setId('')
  }
  return (
    <Drawer
      anchor="right"
      open={!!id}
      onClose={toggleDrawer}
      sx={{
        '.MuiPaper-root': {
          maxWidth: { xs: 1, sm: 390 },
          width: 1,
          margin: { xs: 'auto', sm: '' },
          zIndex:3333
        },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: { xs: 1, sm: 390 },
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
      <Comments />
      <AddComment PostID={id} />
    </Drawer>
  )
}

export default DrawerComment
