// import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import progress from '../../public/progress.json';


const LoadingPage = () => {


  // const [animationData, setAnimationData] = useState(null);

  // useEffect(() => {
  //   const fetchAnimationData = async () => {
  //     try {
  //       const response = await fetch('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Effect/progress.json');
  //       const data = await response.json();
  //       setAnimationData(data);
  //     } catch (error) {
  //       console.error('Error fetching animation data:', error);
  //     }
  //   };

  //   fetchAnimationData();
  // }, []);

  
  return(
  <>
    <div className="absolute inset-0 bg-black opacity-50 z-30"></div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center z-30" style={{ backgroundImage: 'url(https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/bgggg.PNG)' }}>
      <div className="text-center z-30">
        <div>
          <h1 className="text-5xl font-bold text-[#fff] font-['passero-one'] pb-5">Explore New Language with</h1>
          <h2 className="text-8xl mt-2 font-extrabold text-[#FFE58A] font-['passero-one']">LingoTown</h2>
          <img className='ml-[520px] mt-[-120px]' src='https://b305finalproject.s3.ap-northeast-2.amazonaws.com/Effect/shineEffect.png'/>
        </div>
      </div>
      <div className="z-30 mt-[100px]">
        <Lottie animationData={progress} />
      </div>
    </div>
  </>
  )
}


export default LoadingPage;