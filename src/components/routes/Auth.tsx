import { Navigate, Outlet } from 'react-router-dom'
import Storage from '../../utils/Storage'

const Auth = () => {
  const token = Storage.getToken()
  if (token) return <Outlet />
  return <Navigate to="/register" />
}
export default Auth
