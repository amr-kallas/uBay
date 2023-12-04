import API_ROUTES from '../../../constant/apiRoutes'
import axios from '../../../lib/axios'
import { loginType, resetPasswordType, signupType, user } from './type'

const API = {
  signup: async (body: signupType) => {
    const { data } = await axios.post<user>(API_ROUTES.Auth.SIGN, body)
    return data
  },
  login: async (body: loginType) => {
    const { data } = await axios.post<user>(API_ROUTES.Auth.LOGIN, body)
    return data
  },
  resetPassword: async (body: resetPasswordType) => {
    const { data } = await axios.post<user>(
      API_ROUTES.Auth.FORGOT_PASSWORD,
      body
    )
    return data
  },
}
export default API
