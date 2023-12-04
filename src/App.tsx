import { RouterProvider } from "react-router-dom"
import Wrapper from "./wrapper"
import routes from "./routes"
function App() {

  return (
    <Wrapper>
      <RouterProvider router={routes}/>
    </Wrapper>
  )
}

export default App
