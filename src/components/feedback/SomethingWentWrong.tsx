import ErrorIcon from '@mui/icons-material/Error'
import { Box, Typography } from '@mui/material'
const SomethingWentWrong = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt:12
      }}
    >
      <ErrorIcon sx={{ fontSize: '11rem' }} />
      <Typography variant="h6" color="primary">
        Something Went Wrong, please try later
      </Typography>
    </Box>
  )
}

export default SomethingWentWrong
