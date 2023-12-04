import InfiniteScrollPost from '../../../../lib/infiniteScroll'
import queries from '../../api/queries'
import { product } from '../../api/type'
import ShowPost from './ShowPost'

const Post = () => {
  const showProduct=queries.GetAll({limit:10,is_paid:false})
  console.log(showProduct)

  return (
    <InfiniteScrollPost query={showProduct}>
      {showProduct.data?.pages.map((page: any) =>
        page.data.map((post: product) => <ShowPost postDetails={post} />)
      )}
    </InfiniteScrollPost>
  )
}

export default Post
