import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { useMutation, useQuery } from 'react-query'
import { API_List, Comment } from './type'

export const keys = createQueryKeys('comment', {
  getComments: (id:string) => ({
    queryFn: () => API.getCommentById(id),
    queryKey: [id],
  }),
  getAll:(id:string)=>({
    queryFn:()=>API.getAll(id),
    queryKey:[id]
  })
})
export const queries={
    Comments:(id:string)=>useQuery<API_List<Comment>>({...keys.getAll(id),enabled:!!id}),
    CommentById:(id:string)=>useQuery({...keys.getComments(id),enabled:!!id}),
    AddComment:()=>useMutation(API.addComment),
    EditComment:()=>useMutation(API.editComment),
    RemoveComment:()=>useMutation(API.deleteComment)
}
