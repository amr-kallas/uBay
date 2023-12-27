import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { useMutation, useQuery } from 'react-query'
import { User } from './type'

export const keys = createQueryKeys('users', {
  getMe: () => ({
    queryFn: API.getMe,
    queryKey: [''],
  }),
})

const queries = {
  GetMe: () => useQuery<User>(keys.getMe()),
  UpdateMe:()=>useMutation(API.updateMe)
}
export default queries
