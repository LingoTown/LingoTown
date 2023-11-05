import React, {useEffect, useState} from "react";
import { motion } from 'framer-motion';


const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
      x:0,
      y:0
  });
  console.log(mousePosition);

  useEffect(()=>{
    // 마우스 위치 추적 -> cursor 따라가기
    const mouseMove = (e:any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  },[])

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20
    }
  }
  return (
    <motion.div 
      className="z-20 h-10 w-10 fixed top-0 left-0"
      style={{ backgroundImage: `url('../../../navigation.png')`, backgroundSize: 'cover' }}
      variants={variants}
      animate="default"
    />
  )
}


export default Cursor;