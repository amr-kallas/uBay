import useQuerySearchParams from '../../../../hooks/useQuerySearchParams'
import InfiniteScrollPost from '../../../../lib/infiniteScroll'
import queries from '../../api/queries'
import { Post } from '../../api/type'
import Loading from './Loading'
import ShowPost from './ShowPost'

const Post = () => {
  const { q } = useQuerySearchParams()
  const showPost = queries.GetAll({ limit: 10, is_paid: false, q })

  return (
    <InfiniteScrollPost query={showPost}>
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
      
    </InfiniteScrollPost>
  )
}

export default Post
