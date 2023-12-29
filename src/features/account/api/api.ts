import API_ROUTES from '../../../constant/apiRoutes'
import axios from '../../../lib/axios'
import objectToFormData from '../../../utils/objectToFormData'
import { ChangePassword, Favorite, ForgotPassword, Update, User } from './type'

const API = {
  getMe: async () => {
    const { data } = await axios.get<User>(API_ROUTES.Users.ME)
    return data
  },
  updateMe: async (body: Update) => {
    const { data } = await axios.patch<User>(
      API_ROUTES.Users.ME,
      objectToFormData(body)
    )
    return data
  },
  changePassword: async (body: ChangePassword) => {
    const { data } = await axios.patch(API_ROUTES.Users.UPDATE_PASSWORD, body)
    return data
  },
  forgotPassword: async (body: ForgotPassword) => {
    const { data } = await axios.post(API_ROUTES.Users.FORGOT_PASSWORD, body)
    return data
  },
  favorite: async (body: Favorite) => {
    const { data } = await axios.patch(API_ROUTES.Users.FAVORITE, body)
    return data
  },
}
export default API
