import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { useMutation, useQuery } from 'react-query'
import { Coupons, CouponsDetails } from './type'

export const keys = createQueryKeys('coupons', {
  getMine: () => ({
    queryFn: API.getMine,
    queryKey: [''],
  }),
  getAll: (id: string) => ({
    queryFn:()=> API.getAll(id),
    queryKey: [id],
  }),
  get: (id: string) => ({
    queryFn:()=> API.get(id),
    queryKey: [id],
  }),
})
export const queries = {
  GetMine: () => useQuery(keys.getMine()),
  Get: (id: string) => useQuery(keys.get(id)),
  GetAll: (id: string) => useQuery<Coupons<CouponsDetails>>(keys.getAll(id)),
  Add: () => useMutation(API.add),
  Edit: () => useMutation(API.edit),
  Delete: () => useMutation(API.delete),
}
