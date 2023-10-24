import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import KakaoCallback from "./component/KakaoCallback";
import GoogleCallback from "./component/GoogleCallback";
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import Speech from './pages/SpeechTestPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/kakao/callback" element={ <KakaoCallback/> }> </Route>
        <Route path="/google/callback" element={ <GoogleCallback/> }> </Route>
        <Route path="/main" element={ <MainPage/> }></Route>
        <Route path="/explore" element={ <Speech/> }></Route>
        <Route path="/*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;