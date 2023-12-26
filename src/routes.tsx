import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Login, Register, ResetPassword, Signup } from './features/auth'
import NotAuth from './components/routes/NotAuth'
import Auth from './components/routes/Auth'
import HomePage from './pages'
import { AddPost, EditPost, Post, PostDetails } from './features/post'
import Transaction from './pages/transaction'
import Settings from './pages/settings'

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
          <Route path='posts/new' element={<AddPost/>}/>
          <Route path='posts/edit/:id' element={<EditPost/>}/>
          <Route path='posts/:id' element={<PostDetails/>}/>
          <Route path='/transactions' element={<Transaction/>}/>
          <Route path='/settings/account' element={<Settings/>}/>
        </Route>
      </Route>
    </Route>
  )
)
