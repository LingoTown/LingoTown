import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MinsungRoute } from "./router/Minsung";
import NotFound from './pages/NotFoundPage';
import { CanvasPage } from "./pages/CanvasPage";
import { PolygoniaComp } from "./component/theme/PolygoniaComp";
import { ParkComp } from "./component/theme/ParkComp";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <MinsungRoute />
        <Route path="/polygonia" element={ <CanvasPage theme={ <PolygoniaComp/> }/> }/>
        <Route path="/park" element={ <CanvasPage theme={ <ParkComp/> }/> }/>
        <Route path="/*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;