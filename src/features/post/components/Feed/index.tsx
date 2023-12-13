import { Box } from '@mui/material'
import useQuerySearchParams from '../../../../hooks/useQuerySearchParams'
import InfiniteScroll from '../../../../lib/infiniteScroll'
import { DrawerComment } from '../../../comment'
import queries from '../../api/queries'
import { Post } from '../../api/type'
import Loading from './Loading'
import ShowPost from './ShowPost'
import AddButton from '../../../../components/button/AddButton'
import { Link } from 'react-router-dom'

const Post = () => {
  const { q } = useQuerySearchParams()
  const showPost = queries.GetAll({ limit: 10, is_paid: false, q })
  return (
    <InfiniteScroll query={showPost}>
      <Box mt={6} mb={{ xs: 7, sm: 0 }} px={1}>
        {showPost.isLoading && (
          <>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </>
        )}
        {showPost.data?.pages.map((page: any) =>
          page.data.map((post: Post) => (
            <ShowPost postDetails={post} key={post._id} />
          ))
        )}
      </Box>
      <Link to='posts/new'>
      <AddButton/>
      </Link>
      <DrawerComment />
    </InfiniteScroll>
  )
}

export default Post
