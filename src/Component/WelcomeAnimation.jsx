import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../Repository/Welcome.json";

const WelcomeAnimation = () => {
  const [showText, setShowText] = useState(false);
  const lottieRef = useRef();

  useEffect(() => {
    // Lấy thời lượng animation từ file JSON
    const duration = (animationData.op - animationData.ip) / animationData.fr * 1000;
    const timer = setTimeout(() => setShowText(true), duration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!showText ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          style={{ width: 400, height: 400 }}
        />
      ) : (
        <h1 className="text-4xl font-bold text-center mt-8">Xin chào nhân loại</h1>
      )}
    </div>
  );
};

export default WelcomeAnimation;