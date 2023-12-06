import API_ROUTES from "../../../constant/apiRoutes"
import axios from "../../../lib/axios"
import { User } from "./type"

const API={
    getMe: async () => {
        const { data } = await axios.get<User>(API_ROUTES.Users.ME)
        return data
      },
}
export default API