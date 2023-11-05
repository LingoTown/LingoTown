import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import KakaoCallback from "../component/login/KakaoCallbackComp";
import GoogleCallback from "../component/login/GoogleCallbackComp";
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFoundPage';
import { CanvasPage } from "../pages/CanvasPage";
import { IntroducePage } from "../pages/IntroducePage";
import { ThemePage } from "../pages/ThemePage";
import { RestaurantComp } from "../component/theme/RestaurantComp";
import { PolygoniaComp } from "../component/theme/PolygoniaComp";
import { IntroduceComp } from "../component/introduce/IntroduceComp";
import { ParkComp } from "../component/theme/ParkComp";
import { EventHallComp } from "../component/theme/EventHallComp";
import { GalleryComp } from "../component/theme/GalleryComp";
import DeparturePage from "../pages/DeparturePage";
import { AuthRouter } from "../router/AuthRouter";


export const AppRouter = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          {/* 비로그인 사용 가능 */}
          <Route path="/" element={ <LoginPage/> }/>
          <Route path="/main" element={ <MainPage/> }></Route>
          <Route path="/kakao/callback" element={ <KakaoCallback/> }/>
          <Route path="/google/callback" element={ <GoogleCallback/> }/>
          {/* 로그인 후 사용할 수 있는 페이지  */}
          <Route element={ <AuthRouter />} >
            <Route path="/restaurant" element={ <CanvasPage theme={ <RestaurantComp/> }/> }/>
            <Route path="/polygonia" element={ <CanvasPage theme={ <PolygoniaComp/> }/> }/>
            <Route path="/introduce" element={ <IntroducePage theme={ <IntroduceComp/> }/> }/>
            <Route path="/park" element={ <CanvasPage theme={ <ParkComp/> }/> }/>
            <Route path="/eventhall" element={ <CanvasPage theme={ <EventHallComp/> }/> }/>
            <Route path="/gallery" element={ <CanvasPage theme={ <GalleryComp/> }/> }/>
            <Route path="/departurePage" element={ <DeparturePage/> }/>
            <Route path="/themePage" element={ <ThemePage />} />
          </Route>

          <Route path="/*" element={ <NotFound/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}