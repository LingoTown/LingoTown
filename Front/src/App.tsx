import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import KakaoCallback from "./component/KakaoCallback";
import GoogleCallback from "./component/GoogleCallback";
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import { ThreeDemensionCanvas } from "./pages/ThreeDemensionCanvas";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/kakao/callback" element={ <KakaoCallback/> }> </Route>
        <Route path="/google/callback" element={ <GoogleCallback/> }> </Route>
        <Route path="/main" element={ <MainPage/> }></Route>
        <Route path="/explore" element={ <ThreeDemensionCanvas/> }></Route>
        <Route path="/*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;