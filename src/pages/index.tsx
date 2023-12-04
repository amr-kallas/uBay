import { Outlet } from 'react-router-dom'
import { AppBar } from '../features/layout'

const HomePage = () => {
  return (
    <>
      <AppBar />
      <Outlet/>
    </>
  )
}

export default HomePage
