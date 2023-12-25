import { useParams } from 'react-router-dom'
import queries from '../../api/queries'
import ShowPost from './ShowPost'
import { Box } from '@mui/material'

const PostDetails = () => {
  const { id } = useParams() as { id: string }
  const { data, isLoading } = queries.Get(id)
  return (
    <Box mt={6}>
      {isLoading && <ShowPost postDetails={undefined} skeleton={true} />}
      {data && <ShowPost postDetails={data}  skeleton={undefined}/>}
    </Box>
  )
}

export default PostDetails
