import { Box, Typography } from '@mui/material'
import { usePostIdContext } from '../../../../context/postIdContext'
import { queries } from '../../api/queries'
import { Comment } from '../../api/type'
import CommentCard from './CommentCard'
import Loading from './Loading'
import InfiniteScroll from '../../../../lib/infiniteScroll'
import AddCommentTwoToneIcon from '@mui/icons-material/AddCommentTwoTone'
const Comments = () => {
  const { id } = usePostIdContext()
  const comments = queries.Comments({ id, limit: 10 })
  return (
    <InfiniteScroll query={comments}>
      <Box my={comments.data?.pages ? 8 : 0} p={'0 16px'}>
        {comments.data?.pages.map((page: any) =>
          page.data.map((comment: Comment) => (
            <CommentCard key={comment._id} comment={comment} />
          ))
        )}
        {comments.isLoading && (
          <Box my={8} mx={2}>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </Box>
        )}
        {comments.data?.pages[0].totalDataCount == 0 && (
          <Box
            sx={{
              width: 'fit-content',
              mx: 'auto',
              mt: 12,
              textAlign: 'center',
              svg: {
                fontSize: '150px',
              },
            }}
          >
            <AddCommentTwoToneIcon />
            <Typography variant="h5">Be the first to comment...</Typography>
          </Box>
        )}
      </Box>
    </InfiniteScroll>
  )
}

export default Comments
