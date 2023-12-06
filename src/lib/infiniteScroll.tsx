import { Box, CircularProgress } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'
import { UseInfiniteQueryResult } from 'react-query'
type infinite = {
  query: UseInfiniteQueryResult<any, unknown>
  children: React.ReactNode
}
const InfiniteScrollPost = ({ children, query }: infinite) => {
  const {hasNextPage,data,fetchNextPage}=query
  return (
    <InfiniteScroll
      dataLength={data?.pages.length ?? 0}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100px"
        >
          <CircularProgress />
        </Box>
      }
    >
      <Box mt={6} mb={{ xs: 7, sm: 0 }} px={1} >
        {children}
      </Box>
    </InfiniteScroll>
  )
}

export default InfiniteScrollPost
