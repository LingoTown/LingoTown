import { useNavigate } from "react-router-dom";


const AppNotFound = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/bgggg.PNG)' }}>
        <div className="flex items-center justify-center bg-gray-200 z-10 rounded">
          <div className="max-w-md shadow-lg rounded-lg p-10 ">
            <div className="text-center">
              <h1 className="text-8xl font-extrabold text-blue-500 mb-5">404</h1>
              <h2 className="text-2xl font-semibold mb-4">페이지를 찾을 수 없습니다.</h2>
              <p className="text-gray-500 mb-6 font-semibold">죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
              <a 
                onClick={() => { navigate("/") }}
                className="text-center block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-2 rounded-full shadow-md transition transform hover:scale-105"
              >
                로그인페이지로 돌아가기
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppNotFound;
