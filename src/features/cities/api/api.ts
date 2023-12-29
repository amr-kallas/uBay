import API_ROUTES from '../../../constant/apiRoutes'
import axios from '../../../lib/axios'
import { AddCity, EditCity } from './type'

const API = {
  Cities: async () => {
    const { data } = await axios.get(API_ROUTES.Cities.GETALL)
    return data
  },
  GetCity: async (id: string) => {
    const { data } = await axios.get(API_ROUTES.Cities.GET(id))
    return data
  },
  Add: async (body: AddCity) => {
    const { data } = await axios.post(API_ROUTES.Cities.Add, body)
    return data
  },
  Edit: async ({ id, ...body }: EditCity) => {
    const { data } = await axios.patch(API_ROUTES.Cities.EDIT(id), body)
    return data
  },
  Delete: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.Cities.DELETE(id))
    return data
  },
}
export default API
