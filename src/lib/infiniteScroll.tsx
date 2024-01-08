import { Box, CircularProgress } from '@mui/material'
import Infinite from 'react-infinite-scroll-component'
import { UseInfiniteQueryResult } from 'react-query'
type infinite = {
  query: UseInfiniteQueryResult<any, unknown>
  children: React.ReactNode
  isComment?: boolean
  scrollId?: string
}
const InfiniteScroll = ({ children, query, isComment, scrollId }: infinite) => {
  const { hasNextPage, data, fetchNextPage } = query
  return (
    <Infinite
      dataLength={data?.pages.length ?? 0}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      scrollableTarget={scrollId}
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
            bottom: { xs: 56, sm: isComment ? 56 : 0 },
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Box>{children}</Box>
    </Infinite>
  )
}

export default InfiniteScroll
