import { Box, Paper, Stack } from '@mui/material'
import Skeleton from '../../../../components/feedback/Skeleton'

const Loading = () => {
  return (
      <Paper sx={{ p: 2, mb:'16px !important' }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Box mr={1.5}>
              <Skeleton
                variant="circular"
                sx={{ width: '30px !important', height: 30 }}
              />
            </Box>
            <Box>
              <Skeleton widthRange={{ min: 50, max: 80 }} />
            </Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            py: 2,
          }}
        >
          <Skeleton widthRange={{ min: 100, max: 150 }} />
          <Skeleton widthRange={{ min: 100, max: 150 }} />
        </Box>
      </Paper>
  )
}

export default Loading
