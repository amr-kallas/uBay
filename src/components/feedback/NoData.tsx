import ErrorIcon from '@mui/icons-material/Error'
import { Box, Typography } from '@mui/material'

const NoData = () => {
  return (
    <Box sx={{
        textAlign:'center'
    }}>
      <ErrorIcon sx={{fontSize:'11rem'}}/>
      <Typography variant='h6' color='primary'>No Data</Typography>
    </Box>
  )
}

export default NoData
