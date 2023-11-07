import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';


const LoadingPage = () => {


  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_S3_URL}Effect/Loading+Bar/progress.json`);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error fetching animation data:', error);
      }
    };

    fetchAnimationData();
  }, []);

  const cursorLink = import.meta.env.VITE_S3_URL + 'MousePointer/navigation_small.png'; //마우스 커서 기본
  return(
  <>
    <div 
      className="absolute inset-0 bg-black opacity-50 z-30"
      style={{ cursor: `url(${cursorLink}), auto` }}  
    ></div>
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center z-30" 
      style={{ backgroundImage: `url('${import.meta.env.VITE_S3_URL}Introduce/background.png')`, cursor: `url('${cursorLink}'), auto` }}
>
      <div className="text-center z-30">
        <div>
          <h1 className="text-5xl font-bold text-[#fff] font-['passero-one'] pb-5">Explore New Language with</h1>
          <h2 className="text-8xl mt-2 font-extrabold text-[#FFE58A] font-['passero-one']">LingoTown</h2>
          <img className='ml-[520px] mt-[-120px]' src={`${import.meta.env.VITE_S3_URL}Effect/Loading+Bar/shineEffect.png`}/>
        </div>
      </div>
      <div className="z-30 mt-[100px]">
        <Lottie animationData={animationData} />
      </div>
    </div>
  </>
  )
}


export default LoadingPage;