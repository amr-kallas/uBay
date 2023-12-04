import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Login, Register, ResetPassword, Signup } from './features/auth'
import NotAuth from './components/routes/NotAuth'
import Auth from './components/routes/Auth'
import HomePage from './pages'
import { Post } from './features/post'

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<NotAuth />}>
        <Route path="register" element={<Register />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ResetPassword />} />
      </Route>
      <Route element={<Auth/>}>
        <Route path='' element={<HomePage/>}>
          <Route path='' element={<Post/>}/>
        </Route>
      </Route>
    </Route>
  )
)
