import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { Category, CategoryDetails } from './type'
import { useMutation, useQuery } from 'react-query'

export const keys = createQueryKeys('category', {
  getAll: () => ({
    queryFn: API.Categories,
    queryKey: [''],
  }),
  getCategory: (id: string) => ({
    queryFn: () => API.GetCategory(id),
    queryKey: [id],
  }),
})

export const queries = {
  Categories: () => useQuery<Category<CategoryDetails>>(keys.getAll()),
  GetCategory: (id: string) => useQuery<CategoryDetails>(keys.getCategory(id)),
  Add: () => useMutation(API.Add),
  Edit: () => useMutation(API.Edit),
  Delete: () => useMutation(API.Delete),
}
