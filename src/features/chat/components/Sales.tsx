import ForumIcon from '@mui/icons-material/Forum'
import { Box, Typography } from '@mui/material'

const Sales = () => {
  return (
    <Box
      sx={{
        width: 'fit-content',
        margin: 'auto',
        marginTop: 5,
        textAlign: 'center',
      }}
    >
      <ForumIcon sx={{ fontSize: '11rem',opacity:.5 }} />
      <Typography variant="h5" sx={{ color: 'grey' }}>
        There are no conversations...
      </Typography>
    </Box>
  )
}

export default Sales
