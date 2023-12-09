import { Box, CircularProgress } from '@mui/material'
import Infinite from 'react-infinite-scroll-component'
import { UseInfiniteQueryResult } from 'react-query'
type infinite = {
  query: UseInfiniteQueryResult<any, unknown>
  children: React.ReactNode
}
const InfiniteScroll = ({ children, query }: infinite) => {
  console.log(query)
  const {hasNextPage,data,fetchNextPage}=query
  return (
    <Infinite
      dataLength={data?.pages.length ?? 0}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50px"
          position='relative'
          top='-50px'
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
