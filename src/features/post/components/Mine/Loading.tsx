import { Box, Paper, Stack } from '@mui/material'
import Skeleton from '../../../../components/feedback/Skeleton'

const Loading = () => {
  return (
    <Paper
      sx={{
        width: { xs: '100%', sm: '500px' },
        bgcolor: 'white',
        m: '12px auto',
      }}
    >
      <Stack direction="row">
        <Stack p={2}>
          <Skeleton widthRange={{ min: 60, max: 80 }} />
          <Skeleton widthRange={{ min: 60, max: 80 }} />
          <Skeleton widthRange={{ min: 60, max: 80 }} />
        </Stack>
        <Box
          sx={{
            flexBasis: '40%',
            height: 150,
            ml: 'auto',
          }}
        >
          <Skeleton
            sx={{
              width: '100% !important',
              height: '100% !important',
              transform: 'none',
            }}
          />
        </Box>
      </Stack>
    </Paper>
  )
}

export default Loading
