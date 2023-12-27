import API_ROUTES from "../../../constant/apiRoutes"
import axios from "../../../lib/axios"
import objectToFormData from "../../../utils/objectToFormData"
import { Update, User } from "./type"

const API={
    getMe: async () => {
        const { data } = await axios.get<User>(API_ROUTES.Users.ME)
        return data
      },
      updateMe: async (body:Update) => {
        const { data } = await axios.patch<User>(API_ROUTES.Users.ME,objectToFormData(body))
        return data
      },
}
export default API