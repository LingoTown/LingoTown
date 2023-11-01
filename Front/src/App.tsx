import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import KakaoCallback from "./component/login/KakaoCallbackComp";
import GoogleCallback from "./component/login/GoogleCallbackComp";
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import { CanvasPage } from "./pages/CanvasPage";
import { IntroducePage } from "./pages/IntroducePage";
import { RestaurantComp } from "./component/theme/RestaurantComp";
import { PolygoniaComp } from "./component/theme/PolygoniaComp";
import { IntroduceComp } from "./component/introduce/IntroduceComp";
import { ParkComp } from "./component/theme/ParkComp";
import { EventHallComp } from "./component/theme/EventHallComp";
import DeparturePage from "./pages/DeparturePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/main" element={ <MainPage/> }></Route>
        <Route path="/kakao/callback" element={ <KakaoCallback/> }/>
        <Route path="/google/callback" element={ <GoogleCallback/> }/>
        <Route path="/restaurant" element={ <CanvasPage theme={ <RestaurantComp/> }/> }/>
        <Route path="/polygonia" element={ <CanvasPage theme={ <PolygoniaComp/> }/> }/>
        <Route path="/introduce" element={ <IntroducePage theme={ <IntroduceComp/> }/> }/>
        <Route path="/park" element={ <CanvasPage theme={ <ParkComp/> }/> }/>
        <Route path="/eventhall" element={ <CanvasPage theme={ <EventHallComp/> }/> }/>
        <Route path="/*" element={ <NotFound/> }/>
        <Route path="/departurePage" element={ <DeparturePage/> }/>

      </Routes>
    </BrowserRouter>
  )
}


export default App;