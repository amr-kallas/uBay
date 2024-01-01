import { Box, CircularProgress } from '@mui/material'
import Infinite from 'react-infinite-scroll-component'
import { UseInfiniteQueryResult } from 'react-query'
type infinite = {
  query: UseInfiniteQueryResult<any, unknown>
  children: React.ReactNode
}
const InfiniteScroll = ({ children, query }: infinite) => {
  const { hasNextPage, data, fetchNextPage } = query
  return (
    <Infinite
      dataLength={data?.pages.length ?? 0}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            overflow: 'hidden',
            bottom: { xs: 56, sm: 0 },
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      {children}
    </Infinite>
  )
}

export default InfiniteScroll
