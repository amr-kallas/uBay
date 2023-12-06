import API_ROUTES from '../../../constant/apiRoutes'
import axios from '../../../lib/axios'
import { APIList } from '../../../type/api'
import { paginateParams } from '../../../utils/apiHelpers'
import { Post } from './type'

const API = {
  getAll: async (params: any) => {
    const { data } = await axios.get<APIList<Post>>(
      API_ROUTES.Post.GET_ALL,
      {
        params: paginateParams(params),
      }
    )
    return data
  },
  get:async(id:string)=>{
    const {data}=await axios.get(API_ROUTES.Post.GET(id))
    return data
  },
  edit:async(id:string)=>{
    const {data}=await axios.patch(API_ROUTES.Post.EDIT(id))
    return data
  },
  delete:async(id:string)=>{
    const {data}=await axios.delete(API_ROUTES.Post.DELETE(id))
    return data
  },
  likePost: async (id: string) => {
    const { data } = await axios.post(API_ROUTES.Post.LIKE(id))
    return data
  },
  unLikePost: async (id: string) => {
    const { data } = await axios.delete(API_ROUTES.Post.UNLIKE(id))
    return data
  },
}
export default API
