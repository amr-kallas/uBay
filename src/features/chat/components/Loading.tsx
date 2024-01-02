import { Box, Stack } from '@mui/material'
import Skeleton from '../../../components/feedback/Skeleton'

const Loading = () => {
  return (
    <Stack
      p="24px 16px"
      direction="row"
      spacing={1}
      sx={{
        ':hover': {
          bgcolor: 'rgba(109, 40, 217, 0.04)',
        },
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'black',
      }}
    >
      <Skeleton
        sx={{ width: '40px !important', height: '40px !important' }}
        variant="circular"
      />
      <Box>
        <Skeleton widthRange={{ min: 40, max: 50 }} />
        <Skeleton widthRange={{ min: 50, max: 60 }} />
      </Box>
    </Stack>
  )
}

export default Loading
