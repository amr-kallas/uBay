import API_ROUTES from '../../../constant/apiRoutes'
import axios from '../../../lib/axios'
import { AddCategory, Category, CategoryDetails, EditCategory } from './type'

const API = {
  Categories: async () => {
    const { data } = await axios.get<Category<CategoryDetails>>(
      API_ROUTES.Categories.GETALL
    )
    return data
  },
  GetCategory: async (id:string) => {
    const { data } = await axios.get(API_ROUTES.Categories.GET(id))
    return data
  },
  Add: async (body: AddCategory) => {
    const { data } = await axios.post(API_ROUTES.Categories.Add, body)
    return data
  },
  Edit: async ({ id, ...body }: EditCategory) => {
    const { data } = await axios.patch(API_ROUTES.Categories.EDIT(id), body)
    return data
  },
  Delete: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.Categories.DELETE(id))
    return data
  },
}
export default API
