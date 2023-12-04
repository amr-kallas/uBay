import { Navigate, Outlet } from 'react-router-dom'
import Storage from '../../utils/Storage'

const NotAuth = () => {
  const token = Storage.getToken()
  if (!token) return <Outlet />
  return <Navigate to="/" />
}
export default NotAuth
