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
import {
  ChangePassword,
  Edit,
  ForgotPassword,
  Layout,
  LogoutForm,
  Personal,
  Preferences,
} from './features/account'
import Chat from './pages/chat'
import Conversation from './features/chat/components/Conversation'
import SomethingWentWrong from './components/feedback/SomethingWentWrong'

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
      <Route element={<Auth />}>
        <Route element={<HomePage />}>
          <Route path="" element={<Post />} />
          <Route path="posts/new" element={<AddPost />} />
          <Route path="posts/edit/:id" element={<EditPost />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="" element={<Layout />} />
            <Route path="account" element={<Layout />} />
            <Route path="logout" element={<LogoutForm />} />
            <Route path="preferences" element={<Preferences />} />
          </Route>
          <Route path="/settings/profile" element={<Personal />} />
          <Route path="/settings/profile/edit" element={<Edit />} />
          <Route
            path="/settings/password-change"
            element={<ChangePassword />}
          />
          <Route
            path="/settings/password-forgot"
            element={<ForgotPassword />}
          />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/chats/:id" element={<Conversation />} />
          <Route path="*" element={<SomethingWentWrong />} />
        </Route>
      </Route>
    </Route>
  )
)
