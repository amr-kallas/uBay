import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { useInfiniteQuery, useMutation, useQuery } from 'react-query'
import { API_List, Comment, ParamsWithId } from './type'

export const keys = createQueryKeys('comment', {
  getComments: (id: string) => ({
    queryFn: () => API.getCommentById(id),
    queryKey: [id],
  }),
  getAll: (params: ParamsWithId) => ({
    queryFn: async ({ pageParam = 1 }) => {
      params.page = pageParam
      const data = await API.getAll(params)
      return data
    },
    queryKey: [params],
  }),
})
export const queries = {
  Comments: (params: ParamsWithId) =>
    useInfiniteQuery<API_List<Comment>>(keys.getAll(params)),
  CommentById: (id: string) => useQuery(keys.getComments(id)),
  AddComment: () => useMutation(API.addComment),
  EditComment: () => useMutation(API.editComment),
  RemoveComment: () => useMutation(API.deleteComment),
}
