import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import KakaoCallbackComp from "../component/login/KakaoCallbackComp";
import GoogleCallbackComp from "../component/login/GoogleCallbackComp";
import MainPage from "../pages/MainPage";
import { CanvasPage } from "../pages/CanvasPage";
import { RestaurantComp } from "../component/theme/RestaurantComp";

export const MinsungRoute = () => {
  return(
    <>
      <Route path="/" element={ <LoginPage/> }/>
      <Route path="/main" element={ <MainPage/> }></Route>
      <Route path="/kakao/callback" element={ <KakaoCallbackComp/> }/>
      <Route path="/google/callback" element={ <GoogleCallbackComp/> }/>
      <Route path="/restaurant" element={ <CanvasPage theme={ <RestaurantComp/> }/> }/> 
    </>
  )
}