import { useState } from 'react'
import PostId from '../context/postIdContext'

const PostIdProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState<string>('')
  return <PostId.Provider value={{ id, setId }}>{children}</PostId.Provider>
}

export default PostIdProvider
