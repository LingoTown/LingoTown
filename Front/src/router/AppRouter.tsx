import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import KakaoCallback from "../component/login/KakaoCallbackComp";
import GoogleCallback from "../component/login/GoogleCallbackComp";
import MyPage from '../pages/MyPage';
import NotFound from '../pages/NotFoundPage';
import { CanvasPage } from "../pages/CanvasPage";
import { IntroducePage } from "../pages/IntroducePage";
import { ThemePage } from "../pages/ThemePage";
import { RestaurantComp } from "../component/theme/RestaurantComp";
import { PolygoniaComp } from "../component/theme/unused/PolygoniaComp";
import { ParkComp } from "../component/theme/ParkComp";
import { EventHallComp } from "../component/theme/EventHallComp";
import { GalleryComp } from "../component/theme/GalleryComp";
import DeparturePage from "../pages/DeparturePage";
import { AuthRouter } from "../router/AuthRouter";
import LoadingPage from "../pages/LoadingPage";
import { ExplorePage } from "../pages/ExplorePage";
import { ExploreComp } from "../component/explore/ExploreComp";
import { PlayerSelectPage } from "../pages/PlayerSelectPage"
import { PlayerSelect } from "../component/playerSelect/PlayerSelectComp"
import { MobilePage } from "../pages/MobilePage";

export const AppRouter = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          {/* 비로그인 사용 가능 */}
          <Route path="/" element={ <LoginPage/> }/>
          <Route path="/mypage" element={ <MyPage/> }></Route>
          <Route path="/kakao/callback" element={ <KakaoCallback/> }/>
          <Route path="/google/callback" element={ <GoogleCallback/> }/>
          <Route path="/explore" element={ <ExplorePage theme={ <ExploreComp/> }/> }/>
          <Route path="/mobile" element={ <MobilePage /> } />
          {/* 로그인 후 사용할 수 있는 페이지  */}
          <Route element={ <AuthRouter />} >
            <Route path="/restaurant" element={ <CanvasPage theme={ <RestaurantComp/> }/> }/>
            <Route path="/polygonia" element={ <CanvasPage theme={ <PolygoniaComp/> }/> }/>
            <Route path="/introduce" element={ <IntroducePage/>  }/>
            <Route path="/park" element={ <CanvasPage theme={ <ParkComp/> }/> }/>
            <Route path="/eventhall" element={ <CanvasPage theme={ <EventHallComp/> }/> }/>
            <Route path="/gallery" element={ <CanvasPage theme={ <GalleryComp/> }/> }/>
            <Route path="/departure" element={ <DeparturePage/> }/>
            <Route path="/theme" element={ <ThemePage />} />
            <Route path="/playerSelect" element={ <PlayerSelectPage theme = { <PlayerSelect /> } /> } />
          </Route>

          {/* 로딩페이지 확인용 */}
          <Route path="/loading" element={ <LoadingPage />} /> 
          <Route path="/*" element={ <NotFound/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}