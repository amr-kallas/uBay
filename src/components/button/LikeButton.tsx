import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import queries, { keys } from '../../features/post/api/queries'
import { useQueryClient } from 'react-query'
import { Button } from '@mui/material'
import { product } from '../../features/post/api/type'
type LikdedButton = {
  postId: string
}
const LikeButton = ({ postId }: LikdedButton) => {
  const likedByMe = queries.Like()
  const me = queries.GetMe()
  const queryClient = useQueryClient()
  let liked = false

  const handleClick = () => {
    // liked = !liked;
    // queryClient.setQueriesData(keys.getAll._def, (oldData) =>{
        
    //     oldData.data.map((post) => {
    //         if (post._id == postId) {
    //             return {
    //                 ...post,
    //                 likedByMe: true,
    //                 likes: liked ? post.likes + 1 : post.likes - 1,
    //             };
    //         } 
    //             return {...post};
            
    //     })
    // }
    // );
    // likedByMe.mutate(me.data!._id, {
    //   onSuccess: () => {
       
    //   },
    // })
    // console.log(liked)
  }
  return (
    <Button
      sx={{
        flex: 1,
        textAlign: 'center',
        cursor: 'pointer',
        p: '8px 0',
      }}
      onClick={handleClick}
    >
      <ThumbUpOffAltIcon />
    </Button>
  )
}

export default LikeButton
