import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import KakaoCallback from "./component/login/KakaoCallbackComp";
import GoogleCallback from "./component/login/GoogleCallbackComp";
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import { CanvasPage } from "./pages/CanvasPage";
import { RestaurantComp } from "./component/theme/RestaurantComp";
import { PolyginiaComp } from "./component/theme/PolyginiaComp";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/kakao/callback" element={ <KakaoCallback/> }/>
        <Route path="/google/callback" element={ <GoogleCallback/> }/>
        <Route path="/main" element={ <MainPage/> }/>
        <Route path="/restaurant" element={ <CanvasPage theme={ <RestaurantComp/> }/> }/>
        <Route path="/polygonia" element={ <CanvasPage theme={ <PolyginiaComp/> }/> }/>
        <Route path="/*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;