import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="min-h-screen w-full bg-[#0a0a0f] text-white flex flex-col justify-center items-start px-8 py-16 font-sans relative">
      {/* Icon góc trái trên */}
      <div className="absolute top-6 left-6 text-orange-500 text-xl font-bold">{`/>`}</div>

      {/* Nội dung chính */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-lg leading-relaxed max-w-xl"
      >
        <p className="text-gray-300">Mình là <span className="font-semibold text-white">Lê Huy Thái</span>.</p>
        <p className="text-gray-300">
          Mình là một{" "}
          <span className="text-orange-500 font-semibold">Remote Software Engineer</span>.
        </p>
        <p className="text-gray-300">Mình muốn hoàn thiện bản thân hơn mỗi ngày.</p>
        <p className="text-gray-300">
          Và mình muốn chia sẻ điều đó bằng cách{" "}
          <span className="text-lime-400 font-semibold">Content Creator</span>.
        </p>
      </motion.div>

      {/* Logo góc phải dưới */}
      <div className="absolute bottom-6 right-6 w-6 h-6 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold text-sm">
        p
      </div>
    </section>
  );
};

export default AboutMe;
