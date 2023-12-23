import { useParams } from 'react-router-dom'
import queries from '../../api/queries'
import Loading from './Loading'
import ShowPost from './ShowPost'
import { Box } from '@mui/material'

const PostDetails = () => {
  const { id } = useParams() as { id: string }
  const { data, isLoading } = queries.Get(id)
  return (
    <Box mt={6}>
      {isLoading && <Loading />}
      {data && <ShowPost postDetails={data} />}
    </Box>
  )
}

export default PostDetails
