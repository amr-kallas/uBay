import { Box } from '@mui/material'
import { useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { UseInfiniteQueryResult } from 'react-query'
type infinite = {
  query: UseInfiniteQueryResult<any, unknown>
  children: React.ReactNode
}
const InfiniteScrollPost = ({ children, query }: infinite) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (
      window.innerHeight > (ref.current!.scrollHeight + 1000 ?? 0) &&
      query.data
    ) {
      query.fetchNextPage()
    }
  }, [query])
  return (
    <InfiniteScroll
      dataLength={query.data?.pages.length ?? 0}
      next={query.fetchNextPage}
      hasMore={query.hasNextPage ?? false}
      loader={<h4>Loading...</h4>}
    >
      <Box mt={6} ref={ref}>{children}</Box>
    </InfiniteScroll>
  )
}

export default InfiniteScrollPost
