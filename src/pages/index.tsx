import { Outlet } from 'react-router-dom'
import { AppBar, MobileNavigation } from '../features/layout'

const HomePage = () => {
  return (
    <>
      <AppBar />
      <Outlet/>
      <MobileNavigation />

    </>
  )
}

export default HomePage
