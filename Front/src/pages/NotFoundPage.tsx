import style from "../style/AppNotFound.module.css"
import { useNavigate } from "react-router-dom";


const AppNotFound = () => {

  const navigate = useNavigate();

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>404</h1>
          <h2 className={style.subTitle}>페이지를 찾을 수 없습니다.</h2>
          <p className={style.content2}>죄송합니다. 이 페이지를 사용할 수 없습니다.</p>
          <a className={style.clickHome} onClick={() => {
            navigate("/")
          }}>로그인페이지로 돌아가기</a>
        </div>
      </div>
    </div>
  )
}

export default AppNotFound;
