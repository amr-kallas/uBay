import { Box, Paper, Stack } from '@mui/material'
import Skeleton from '../../../../components/feedback/Skeleton'

const Loading = () => {
  return (
    <Box>
      <Stack>
        <Paper
          sx={{
            width: { xs: '100%', sm: '500px' },
            bgcolor: 'white',
            m: '12px auto 0',
            p: 2,
          }}
        >
          <Stack mb={2} direction="row" spacing={2} alignItems="center">
            <Skeleton
              sx={{ width: '30px !important', height: 30 }}
              variant="circular"
            />
            <Skeleton widthRange={{ min: 50, max: 60 }} height={20} />
          </Stack>
          <Box>
            <Skeleton widthRange={{ min: 150, max: 130 }} height={20} />
            <Skeleton widthRange={{ min: 120, max: 110 }} height={20} />
            <Skeleton widthRange={{ min: 110, max: 150 }} height={20} />
          </Box>
          <Box my={1}>
            <Skeleton
              variant="rounded"
              sx={{ width: '100% !important', maxWidth: 450, m: 'auto' }}
              height={300}
            />
          </Box>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Skeleton
              sx={{ width: '60px !important', textAlign: 'center' }}
              height={30}
            />
            <Skeleton
              sx={{ width: '60px !important', textAlign: 'center' }}
              height={30}
            />
            <Skeleton
              sx={{ width: '60px !important', textAlign: 'center' }}
              height={30}
            />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  )
}

export default Loading
