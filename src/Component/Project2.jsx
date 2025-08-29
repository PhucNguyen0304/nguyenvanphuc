import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const Project2 = () => {
  return (
    <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 32px 8px rgba(255,128,0,0.25)",
          }}
          className="mx-auto bg-gradient-to-br from-[#2c313a] via-[#1a1f27] to-[#0d1117] cursor-pointer rounded-xl shadow-lg border border-gray-700 font-mono text-white p-6 relative transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_20px_4px_rgba(255,128,0,0.3)] hover:border-[2px] hover:border-orange-500 hover:bg-[#161b22]"
        >
      <div className="flex items-center justify-between bg-[#1f232b] px-4 py-2 rounded-t-xl">
        <div className="flex items-center gap-2">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">
            LIVE
          </span>
        </div>
        <FaBriefcase className="text-orange-500 text-xl" />
        <div className="flex items-center gap-2">
          <span className="text-orange-400 text-sm"></span>
          <div className="flex gap-1">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-red-500" />
          </div>
        </div>
      </div>

      {/* Title & Info */}
      <div className="mt-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hệ thống đặt vé sự kiện</h1>
        <div className="flex gap-2">
          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
            Hiện tại - 2024
          </span>
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            LizAI Vietnam
          </span>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">:Key Responsibilities</h2>
        <ul className="space-y-2 text-sm">
          <li>
            • Thiết kế và triển khai hệ thống đặt vé sử dụng Java và Spring boot
          </li>
          <li>
            • Tự động hóa quy trình build, test và deployment cho nhiều dự án
          </li>
          <li>
            • Áp dụng kiến trúc hệ thống phân tán thông qua mô hình
            microservices
          </li>
          <li>
            • Tích hợp SonarQube và Jacoco vào dự án để đảm bảo chất lượng code
            và test
          </li>
          <li>
            • Xây dựng hệ thống giám sát toàn diện với Grafana và Prometheus
          </li>
          <li>
            • Triển khai hệ thống logging tập trung sử dụng Loki và Promtail
          </li>
          <li>
            • Tạo dashboard trực quan cho việc theo dõi metrics và cảnh báo phục
            sự cố
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Project2;
