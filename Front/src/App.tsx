import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import KakaoCallback from "./component/login/KakaoCallbackComp";
import GoogleCallback from "./component/login/GoogleCallbackComp";
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import { ThreeDemensionCanvas } from "./pages/MapCanvasPage";
import { STTAndRecord } from "./component/town/SttAndRecordComp";
import { RestaurantTheme } from "./component/theme/RestaurantTheme";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/kakao/callback" element={ <KakaoCallback/> }> </Route>
        <Route path="/google/callback" element={ <GoogleCallback/> }> </Route>
        <Route path="/main" element={ <MainPage/> }></Route>
        <Route path="/explore" element={ <ThreeDemensionCanvas customComponent={ <RestaurantTheme/> }/> }></Route>
        <Route path="/stt" element={ <STTAndRecord/> }></Route>
        <Route path="/*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;