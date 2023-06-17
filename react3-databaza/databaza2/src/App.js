import {BrowserRouter,Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import AllMovies from "./pages/AllMovies"
import OneMovie from "./pages/OneMovie"
import SharedLayout from "./pages/SharedLayout"
import Form from "./pages/Form"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<SharedLayout/>}>

              <Route index element={<Home />}></Route>
              <Route path="all-movies" element={<AllMovies />}></Route>
              <Route path="form" element={<Form/>}></Route>
              <Route path="one-movie/:movieId"  element={<OneMovie />}></Route>

          </Route>
           
        </Routes>
    </BrowserRouter>
  )
}

export default App