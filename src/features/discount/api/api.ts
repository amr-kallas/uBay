import API_ROUTES from '../../../constant/apiRoutes'
import axios from '../../../lib/axios'
import { AddCoupons, Coupons, CouponsDetails } from './type'

const API = {
  getAll: async (id:string) => {
    const { data } = await axios.get<Coupons<CouponsDetails>>(API_ROUTES.Post.COUPONS(id))
    return data
  },
  getMine: async () => {
    const { data } = await axios.get(API_ROUTES.Coupons.MY)
    return data
  },
  get: async (id: string) => {
    const { data } = await axios.get(API_ROUTES.Coupons.GET(id))
    return data
  },
  add: async (body: AddCoupons) => {
    const { data } = await axios.post(API_ROUTES.Coupons.Add, body)
    return data
  },
  edit: async ({ id, body }: any) => {
    const { data } = await axios.patch(API_ROUTES.Coupons.EDIT(id), body)
    return data
  },
  delete: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.Coupons.DELETE(id))
    return data
  },
}
export default API
