import API_ROUTES from '../../../constant/apiRoutes'
import axios from '../../../lib/axios'
import { API_List, AddComment, Comment } from './type'

const API = {
  getAll: async (id: string) => {
    const { data } = await axios.get<API_List<Comment>>(API_ROUTES.Post.COMMENTS(id))
    return data
  },
  getCommentById: async (id: string) => {
    const { data } = await axios.get(API_ROUTES.Comment.GET(id))
    return data
  },
  addComment: async (body:AddComment) => {
    const { data } = await axios.post(API_ROUTES.Comment.ADD,body)
    return data
  },
  editComment: async (id:string) => {
    const { data } = await axios.patch(API_ROUTES.Comment.EDIT(id))
    return data
  },
  deleteComment: async (id:string) => {
    const { data } = await axios.delete(API_ROUTES.Comment.DELETE(id))
    return data
  },
}
export default API
