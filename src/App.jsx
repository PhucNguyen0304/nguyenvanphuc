import HeroSection from "./Component/HeroSection";
import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./Repository/Welcome.json";
import Navbar from "./Component/NavBar";
import Squares from "./Component/Squares";
import ScrollReveal from "./Component/ScrollReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import FullstackRemoteEngineer from "./Component/FullstackRemoteEngineer";
import ChromaGrid from "./Component/ChromaGrid";
import javaLogo from "./Repository/logojava.png";
import springLogo from "./Repository/logospring.png";
import microLogo from "./Repository/microservies logo.png";
import mysql from "./Repository/mysqllogo.png";
import kafka from "./Repository/kafka4.png";
import webSocket from "./Repository/websocket logo.svg";
import docker from "./Repository/docker.png";
import github from "./Repository/github logo.svg";
import swagger from "./Repository/Swagger-logo.png";
import sonar from "./Repository/sona chinh thuc.jfif";
import html from "./Repository/html logo.png";
import css from "./Repository/CSS3_logo.svg";
import js from "./Repository/js logo.png";
import react from "./Repository/react js logo.png";
import tailwind from "./Repository/tailwind4.jpg";
import node from "./Repository/nodejs.jfif";
import express from "./Repository/express.png";
import mongo from "./Repository/mongo.png";
import { motion } from "framer-motion";
import Projects from "./Component/Projects";
import SpotlightCard from "./Component/SpotlightCard.jsx";
import Project1 from "./Component/Project1.jsx";
import Project2 from "./Component/Project2.jsx";
import MagicBento from "./Component/MagicBento.jsx";
import Particles from "./Component/Particles.jsx";
import { FaShareAlt } from "react-icons/fa";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
const App = () => {
  const [showText, setShowText] = useState(false);
  const lottieRef = useRef();
  const items = [
    {
      image: javaLogo,
      title: "Java",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: springLogo,
      title: "Spring Boot",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: microLogo,
      title: "Microservices",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: mysql,
      title: "MySQL",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: kafka,
      title: "Kafka",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: webSocket,
      title: "Websocket",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: docker,
      title: "Docker",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: github,
      title: "Github",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: swagger,
      title: "Swawgger",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: sonar,
      title: "SonarQube",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: html,
      title: "HTML",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: css,
      title: "CSS",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },

    {
      image: react,
      title: "ReactJS",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: tailwind,
      title: "TailwindCSS",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: node,
      title: "Node.js",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: express,
      title: "Express.js",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
    {
      image: mongo,
      title: "MongoDB",
      subtitle: "",
      handle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "",
    },
  ];
  useEffect(() => {
    // Lấy thời lượng animation từ file JSON
    //const duration = (animationData.op - animationData.ip) / animationData.fr * 1000;
    const duration = 4000;

    const timer = setTimeout(() => setShowText(true), duration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!showText ? (
        <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
          {/* Particles background */}
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={["#ffffff", "#ccccff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          {/* Lottie animation on top */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop={false}
              style={{ width: 400, height: 400 }}
            />
          </div>
        </div>
      ) : (
        <div className="min-h-screen w-full flex flex-col items-center justify-start bg-black text-white">
          <div className="relative w-full">
            {/* Squares nằm dưới nhưng vẫn nhận hover */}
            <div className="absolute inset-0 z-0">
              <Squares
                speed={0.5}
                squareSize={40}
                direction="diagonal"
                borderColor="rgba(179, 179, 179, 0.4)"
                hoverFillColor="#1a1a1a"
              />
            </div>
            <Navbar />

            {/* HeroSection nằm trên nhưng không che hoàn toàn */}
            <div className="relative z-10 bg-[rgba(29,23,47,0.5)]">
              <HeroSection />
            </div>
          </div>

          {/* About me */}
          <div  id="about" className="bg-gradient-to-r from-[#263a62] via-[#1f2a44] to-[#0f1828] py-14 flex items-center justify-center">
            {" "}
            <div className="w-[70%] flex  flex-col text-gray-300">
              <FontAwesomeIcon
                icon={faCode}
                size="lg"
                className="text-orange-500 opacity-30 font-black text-3xl transition-transform duration-300 group-hover:scale-125"
              />
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={10}
                blurStrength={50}
              >
                Là sinh viên mới ra trường đang định hướng phát triển sự nghiệp
                theo mảng Backend Developer, luôn nỗ lực học hỏi để hoàn thiện
                kỹ năng chuyên môn cũng như các kỹ năng mềm.
              </ScrollReveal>
            </div>
          </div>

          {/* Stack */}
          {/* <div className="py-36 w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,182,193,0.1)_2%,rgba(186,85,211,0.1)_20%,rgba(255,204,200,0.15)_50%,rgba(10,10,20,0.95)_100%)] rounded-lg flex justify-center">
            <div className="w-[70%]">
              <FullstackRemoteEngineer />
            </div>
          </div> */}
          <div id="developer" className="relative py-36 w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,182,193,0.1)_2%,rgba(186,85,211,0.1)_20%,rgba(255,204,200,0.15)_50%,rgba(10,10,20,0.95)_100%)] rounded-lg flex flex-col justify-center items-center overflow-hidden">
            {/* java developer */}
            <div className="mx-auto flex justify-center items-center">
              {/* Hình tròn ở góc trên bên trái */}
              <div className="absolute top-[8%] left-[10%] w-12 h-12 rounded-full bg-orange-200/30 animate-float-wide"></div>

              {/* Hình vuông gần trung tâm */}
              <div className="absolute top-[40%] left-[48%] w-10 h-10 bg-orange-200/30 animate-float-rotate"></div>

              {/* Hình tam giác */}
              <div className="absolute top-[20%] left-[70%] w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[42px] border-b-orange-300/30 animate-float-rotate"></div>

              {/* Hình tròn nhỏ bên phải */}
              <div className="absolute top-[70%] left-[80%] w-8 h-8 rounded-full bg-blue-300/30 animate-float-fast"></div>

              {/* Hình vuông nhỏ bên dưới trái */}

              {/* Hình tam giác nhỏ bên dưới phải */}

              {/* Hình tròn lớn ở giữa phải */}
              <div className="absolute top-[50%] left-[85%] w-4 h-4 rounded-full bg-orange-300/30 animate-float-wide"></div>

              <div className="w-[70%] relative z-10">
                <FullstackRemoteEngineer />
              </div>
            </div>

            {/* cac cong nghe chính */}
            <h2 className=" mx-auto py-20 font-semibold text-gray-300 text-3xl">
              CÔNG NGHỆ SỬ DỤNG
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px 0 rgba(132,0,255,0.15)",
              }}
              className="w-[70%] rounded-2xl shadow-xl border border-blue-500/20 bg-gradient-to-br from-[#232946] via-[#1a1f27] to-[#0d1117] p-8 transition-all duration-500"
            >
              <div
                style={{
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                  opacity: 1,
                }}
              >
                <ChromaGrid
                  items={items}
                  radius={300}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>
            </motion.div>
          </div>

          {/* Project cá nhân        */}
          <div id="projects" className="w-full bg-gradient-to-br from-[#554b6c] via-[#252525] to-[#403854] flex flex-col justify-center items-center gap-y-8 py-12">
            <h2 className=" mx-auto font-semibold text-gray-300 text-3xl">
              DỰ ÁN CÁ NHÂN
            </h2>
            <div className="w-[70%]">
              <Project1 />
            </div>
            <div className="w-[70%]">
              <Project2 />
            </div>
          </div>

          {/* Contact */}
          <div id = "contact"
            style={{
              width: "100%",
              height: "850px",
              position: "relative",
              overflow: "hidden",
              background:
                "radial-gradient(circle at 30% 70%, rgba(132, 0, 255, 0.15), rgba(0, 0, 0, 0.95))",
            }}
          >
            {/* Particles as background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            >
              <Particles
                particleColors={["#ffffff", "#ccccff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>

            {/* Title + Button: Đặt phía trên MagicBento, căn giữa, nổi bật */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full h-[400px] flex flex-col items-center justify-center text-center px-4 z-20 pointer-events-none"
            >
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-300 pointer-events-auto shadow-lg"
                whileHover={{ scale: 1.08 }}
              >
                <FaShareAlt className="text-white text-base" />
                Kết Nối Với Tôi
              </motion.button>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
                className="mt-6 text-5xl font-bold drop-shadow-lg"
              >
                <span className="text-blue-500">LET'S</span>{" "}
                <span className="text-white">CONNECT</span>
              </motion.h1>
            </motion.div>

            {/* MagicBento on top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative pt-[100px] z-10 w-full h-[1000px] flex justify-center items-center"
            >
              <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
