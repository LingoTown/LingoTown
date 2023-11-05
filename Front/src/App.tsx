import { AppRouter } from "./router/AppRouter";

const App = () => {
  return (
    <div style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_small.png'), auto` }}>
      <AppRouter />
    </div>
  )
}

export default App;