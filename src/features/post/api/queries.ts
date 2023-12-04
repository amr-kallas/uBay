import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { useInfiniteQuery, useMutation, useQuery } from 'react-query'
import { User } from './type'

export const keys = createQueryKeys('product', {
  getAll: (params: any) => ({
    async queryFn({pageParam=1}) {
      params.page = pageParam
      return await API.getAll(params)
    },
    queryKey: [params],
  }),
  getMe: () => ({
    queryFn: API.getMe,
    queryKey: [''],
  }),
})
const queries = {
  GetAll: (params: any) => useInfiniteQuery(keys.getAll(params)),
  GetMe: () => useQuery<User>(keys.getMe()),
  Like: () => useMutation(API.likeProduct),
}
export default queries
