import API_ROUTES from '../../../constant/apiRoutes'
import axios from '../../../lib/axios'
import { APIList } from '../../../type/api'
import { paginateParams } from '../../../utils/apiHelpers'
import { User, product } from './type'

const API = {
  getAll: async (params:any) => {
    const { data } = await axios.get<APIList<product>>(API_ROUTES.Product.GET_ALL,{
        params:paginateParams(params)
    })
    return data
  },
  likeProduct:async(id:string)=>{
    const {data}=await axios.post(API_ROUTES.Product.LIKE(id))
    return data
  },
  getMe:async()=>{
    const {data}=await axios.get<User>(API_ROUTES.Users.ME)
    return data
  }
}
export default API
