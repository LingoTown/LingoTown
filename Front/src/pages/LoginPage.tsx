function LoginPage() {

  function kakaoLogin() {
    window.location.href = import.meta.env.VITE_KAKAO_LOGIN;
  }

  function googleLogin() {
    window.location.href = import.meta.env.VITE_GOOGLE_LOGIN;
  }
  
  return(
    <>
      <h1>소셜로그인 테스트</h1>
      <button onClick={() => { kakaoLogin() }}>카카오 로그인</button><br></br>
      <button onClick={() => { googleLogin() }}>구글 로그인</button>
      <br/><br/>
    </>
  )
}


export default LoginPage;