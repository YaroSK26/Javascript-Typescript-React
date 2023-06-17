import { BrowserRouter,Routes,Route } from "react-router-dom";
import  Home  from "./pages/Home";
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";
import Error from "./pages/Error";
import SharedLayout  from "./pages/SharedLayout";
import OneMovie from "./components/OneMovie";


const App = () => {
  return (
    <div>
        <BrowserRouter>
              <Routes>

                      <Route path="/" element={<SharedLayout/>}>
                              <Route index element={<Home/>}/>
                              <Route path="movies" element={<Movies />}></Route>
                              <Route path="/serials" element={<Serials />} />
                              <Route path="/all-movies/:movieId/" element={<OneMovie/>}></Route>
                              <Route path="*" element={<Error />}></Route>
                      </Route>

              </Routes>
              <p>serus</p>
        </BrowserRouter>
    </div>
  )
}

export default App