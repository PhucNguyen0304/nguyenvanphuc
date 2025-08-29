import React, { useRef } from "react";
import { FaCode, FaServer, FaDatabase, FaEthereum } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const FullstackRemoteEngineer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variants cho các card kỹ năng
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 60, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: { scale: 1.08, boxShadow: "0 8px 32px 0 rgba(132,0,255,0.15)" },
  };

  return (
    <div className="flex flex-col md:flex-row text-white rounded-lg mx-auto gap-12">
      {/* Cột trái: Giới thiệu */}
      <motion.div
        ref={ref}
        initial={{ x: -120, opacity: 0, scale: 0.85 }}
        animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.1, duration: 1, ease: "easeOut" }}
        className="md:w-1/2 flex flex-col justify-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="w-48 inline-block text-orange-400 px-4 py-2 bg-orange-200/10 border border-orange-500/10 rounded-xl text-lg font-semibold mb-3 tracking-wide"
        >
          3 Tháng Thực Tập
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="my-8 text-gray-300 text-3xl md:text-5xl font-extrabold leading-snug"
        >
          <span className="text-orange-400">JAVA </span>BACKEND DEVELOPER
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
          className="text-gray-300 text-lg font-bold leading-relaxed"
        >
          Mình tạo ra những sản phẩm kỹ thuật số bằng khả năng làm việc với
          frontend đến backend, database đến deployment. Nhưng tâm huyết nhất là
          backend.
        </motion.p>
      </motion.div>

      {/* Cột phải: Grid kỹ năng */}
      <div className="md:w-1/2 grid grid-cols-2 gap-6">
        {/* Backend */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center bg-green-500/10 backdrop-blur-md p-6 rounded-xl border border-[rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer shadow-md"
        >
          <FaServer className="text-green-400 text-4xl mb-2 drop-shadow-md" />
          <span className="mt-2 text-lg font-medium text-white">Backend</span>
        </motion.div>

        {/* Database */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-6 rounded-xl border border-[rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer shadow-md"
        >
          <FaDatabase className="text-purple-400 text-4xl mb-2 drop-shadow-md" />
          <span className="mt-2 text-lg font-medium text-white">Database</span>
        </motion.div>

        {/* Frontend */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center bg-blue-500/10 backdrop-blur-md p-6 rounded-xl border border-[rgba(21,118,237,0.1)] transition-all duration-300 cursor-pointer shadow-md"
        >
          <FaCode className="text-blue-400 text-4xl mb-2 drop-shadow-md" />
          <span className="mt-2 text-lg font-medium text-white">Frontend</span>
        </motion.div>
      </div>
    </div>
  );
};

export default FullstackRemoteEngineer;
