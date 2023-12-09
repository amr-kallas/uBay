import { createContext, useContext } from 'react'

type postId={
    id:string,
    setId:React.Dispatch<React.SetStateAction<string>>
}
const PostId = createContext<postId>({} as postId)

export const usePostIdContext = () => {
  return useContext(PostId)
}

export default PostId
