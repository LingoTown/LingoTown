import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import KakaoCallback from "./component/login/KakaoCallbackComp";
import GoogleCallback from "./component/login/GoogleCallbackComp";
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import { CanvasPage } from "./pages/CanvasPage";
import { IntroducePage } from "./pages/IntroducePage";
import { RestaurantComp } from "./component/theme/RestaurantComp";
import { PolyginiaComp } from "./component/theme/PolyginiaComp";
import { IntroduceComp } from "./component/introduce/IntroduceComp";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/kakao/callback" element={ <KakaoCallback/> }/>
        <Route path="/google/callback" element={ <GoogleCallback/> }/>
        <Route path="/main" element={ <MainPage/> }/>
        <Route path="/restaurant" element={ <CanvasPage theme={ <RestaurantComp/> }/> }/>
        <Route path="/polyginia" element={<CanvasPage theme={<PolyginiaComp />} />} />
        <Route path="/introduce" element={ <IntroducePage theme={ <IntroduceComp/> }/> }/>
        <Route path="/*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;