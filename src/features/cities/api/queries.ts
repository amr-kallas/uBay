import { createQueryKeys } from '@lukemorales/query-key-factory'
import API from './api'
import { useMutation, useQuery } from 'react-query'
import { City, CityDetails } from './type'

export const keys = createQueryKeys('cities', {
  getAll: () => ({
    queryFn: API.Cities,
    queryKey: [''],
  }),
  getCity: (id: string) => ({
    queryFn: () => API.GetCity(id),
    queryKey: [id],
  }),
})

export const queries = {
  Cities: () => useQuery<City<CityDetails>>(keys.getAll()),
  GetCategory: (id: string) => useQuery(keys.getCity(id)),
  Add: () => useMutation(API.Add),
  Edit: () => useMutation(API.Edit),
  Delete: () => useMutation(API.Delete),
}
