import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { useInfiniteQuery, useMutation, useQuery } from 'react-query'

export const keys = createQueryKeys('product', {
  getAll: (params: any) => ({
    async queryFn({ pageParam = 1 }) {
      params.page = pageParam
      return await API.getAll(params)
    },
    queryKey: [params],
  }),
  get:(id:string)=>({
    queryFn:()=>API.get(id),
    queryKey:[id]
  })
})

const queries = {
  GetAll: (params: any) => useInfiniteQuery(keys.getAll(params)),
  Get: (id:string) => useQuery(keys.get(id)),
  Edit: () => useMutation(API.edit),
  Delete: () => useMutation(API.delete),
  Like: () => useMutation(API.likePost),
  UnLike: () => useMutation(API.unLikePost),
}
export default queries
