import { useState, useEffect } from "react";
import avatar from "../Repository/avatar.jfif";
import TiltedCard from './TiltedCard.jsx';
import { motion } from "framer-motion";
import CircularText from './CircularText .jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ShinyText from './ShinyText.jsx';

const HeroSection = () => {
  const phrases = ["Java Engineer", "Backend Developer"];
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentPhrase = phrases[phraseIndex];

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      // Gõ từng ký tự
      if (charIndex < currentPhrase.length) {
        setDisplayText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Bắt đầu xóa sau khi gõ xong
        setIsDeleting(true);
      }
    } else {
      // Xóa từng ký tự
      if (charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Chuyển sang từ tiếp theo
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, isDeleting ? 100 : 100); // tốc độ xóa nhanh hơn gõ

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, phraseIndex]);
  

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 text-center text-white">
      <motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
  className="mt-8 relative" // ✅ thêm relative để làm gốc định vị
>
  <TiltedCard
    imageSrc={avatar}
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Nguyễn Văn Phúc"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={20}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)", // nền đen mờ hơn
          borderRadius: "12px",
          padding: "8px 12px",
          color: "white",
          textAlign: "center",
          backdropFilter: "blur(4px)",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            marginTop: "12px",
            fontSize: "0.875rem",
            fontWeight: "600",
            letterSpacing: "0.05em",
          }}
        >
          Nguyễn Văn Phúc
        </p>
      </div>
    }
  />

  {/* Circular contact - đặt ở góc phải dưới */}
<motion.div 
initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
className="absolute -bottom-36 -right-24 p-4 cursor-pointer group">
  <div className="relative w-[200px] h-[200px]">
    {/* CircularText */}
    <CircularText
      text=" CONTACT ✫ ME ✫"
      onHover="speedUp"
      spinDuration={20}
      className="absolute top-0 left-0"
    />

    {/* Icon ở giữa */}
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <FontAwesomeIcon
        icon={faPaperPlane}
        size="lg"
        className="text-gray-300 transition-transform duration-300 group-hover:scale-125"
      />
    </div>
  </div>
</motion.div>


</motion.div>


      {/* Câu chào
      <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-400" >
        XIN CHÀO, MÌNH LÀ <span className="text-gray-400">PHÚC</span>
      </h1> */}
<motion.div
      initial={{scale: 0,y:40, opacity:0}}
      animate={{scale: 1,y: 0, opacity:1}}
      transition={{delay:1.5, duration: 0.4, ease: "easeOut" }}
className="mt-6 py-6 text-center text-3xl md:text-4xl font-extrabold md:flex md:gap-2">
  <div
  className="mb-2 md:mb-0 text-gray-300 drop-shadow-lg animate-fade-in tracking-wide">
        <ShinyText 
      text="XIN CHÀO, MÌNH LÀ PHÚC!" 
      disabled={false} 
      speed={3} 
      className='custom-class' 
    />
  </div>
</motion.div>




     <motion.p
     initial={{scale: 0,y:40, opacity:0}}
      animate={{scale: 1,y: 0, opacity:1}}
      transition={{delay:1.7, duration: 0.4, ease: "easeOut" }}
     className="text-xl md:text-3xl text-gray-300 font-semibold my-8">
  Mình là{" "}
  <span className="font-semibold">
    {displayText.split("").map((char, index) => (
      <span
        key={index}
        className={
          phraseIndex === 0
            ? "text-green-400"
            : phraseIndex === 1
            ? "text-orange-400"
            : ""
        }
      >
        {char}
      </span>
    ))}
  </span>
  <span className="animate-blink ml-1 font-extrabold">__</span>
</motion.p>



      {/* Nút CTA */}
      <motion.button
       initial={{scale: 0,y:40, opacity:0}}
      animate={{scale: 1,y: 0, opacity:1}}
      transition={{delay:2.1, duration: 0.4, ease: "easeOut" }}
      className="bg-white z-100 text-black px-6 py-3 rounded-full hover:bg-gray-300 hover:scale-125 transform transition-all font-medium">
        Khám phá
      </motion.button>
    </section>
  );
};

export default HeroSection;
