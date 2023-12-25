import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { useInfiniteQuery, useMutation, useQuery } from 'react-query'
import { Category, CategoryDetails, Mine, Post, Store, StoreDetails } from './type'

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
  }),
  Categories:()=>({
    queryFn:API.Categories,
    queryKey:['']
  }),
  Stores:()=>({
    queryFn:API.Stores,
    queryKey:['']
  }),
  Mine:(isBuy:boolean)=>({
    queryFn:()=>API.Mine(isBuy),
    queryKey:[isBuy]
  })
})

const queries = {
  GetAll: (params: any) => useInfiniteQuery(keys.getAll(params)),
  Get: (id:string) => useQuery<Post>(keys.get(id)),
  Add: () => useMutation(API.add),
  Edit: () => useMutation(API.edit),
  Delete: () => useMutation(API.delete),
  Like: () => useMutation(API.likePost),
  UnLike: () => useMutation(API.unLikePost),
  Categories:()=>useQuery<Category<CategoryDetails>>(keys.Categories()),
  Stores:()=>useQuery<Store<StoreDetails>>(keys.Stores()),
  Pay: () => useMutation(API.Pay),
  Mine:(isBuy:boolean) =>useQuery<Mine>(keys.Mine(isBuy))

}
export default queries
