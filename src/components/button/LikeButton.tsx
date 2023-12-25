import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { keys } from '../../features/post/api/queries'
import queries from '../../features/post/api/queries'
import { useQueryClient } from 'react-query'
import { Button } from '@mui/material'
import { Post } from '../../features/post/api/type'
import { APIList } from '../../type/api'
type LikdedButton = {
  postId: string
  liked: boolean
}
const LikeButton = ({ postId, liked }: LikdedButton) => {
  const like = queries.Like()
  const unLike = queries.UnLike()
  const queryClient = useQueryClient()
  const handleClick = () => {
    queryClient.setQueriesData(keys.getAll._def, (oldData: any) => {
      const newPages = oldData.pages.map((page: APIList<Post>) => {
        const newData = page.data.map((post: Post) => {
          if (post._id == postId) {
            return {
              ...post,
              likedByMe: !post.likedByMe,
              likes: !post.likedByMe ? post.likes + 1 : post.likes - 1,
            }
          }
          return { ...post }
        })
        return { ...page, data: newData }
      })
      return { ...oldData, pages: newPages }
    })

    queryClient.setQueryData(keys.get(postId).queryKey, (post:any) => {
      if(!post) return undefined;
      return {
        ...post,
        likedByMe: !post.likedByMe,
        likes: !post.likedByMe ? post.likes + 1 : post.likes - 1,
      }
    })
    ;(!liked ? like : unLike).mutate(postId, {
      onSuccess: () => {
        queryClient.invalidateQueries(keys.getAll._def)
      },
    })
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
      {liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
    </Button>
  )
}

export default LikeButton
