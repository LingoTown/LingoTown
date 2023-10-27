const Background = () => {
  return(
    <>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center z-10" style={{ backgroundImage: 'url(https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/bgggg.PNG)' }}></div>
    </>
  )
}


export default Background;