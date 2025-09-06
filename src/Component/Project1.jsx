import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
const Project1 = () => {
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
        <h1 className="text-2xl font-bold">
          Hệ Thống Quản Lý Sự Kiện Và Người Dùng
        </h1>
        <div className="flex gap-2">
          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
            4/2025 - 7/2025
          </span>
          {/* <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            LizAI Vietnam
          </span> */}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mt-6">
  <h2 className="text-xl font-bold text-gray-800 mb-4 tracking-wide uppercase">
    Key Responsibilities
  </h2>

  <ul className="space-y-3 text-[15px] leading-relaxed list-disc pl-5 text-gray-700">
    <li>
      <strong className="text-red-500 font-semibold">Triển khai API RESTful</strong> bằng <strong className="font-semibold">Java</strong> và <strong className="font-semibold">Spring Boot</strong>, tuân thủ nguyên tắc viết mã sạch và kiến trúc <strong className="font-semibold">Spring MVC</strong>.
    </li>
    <li>
      Thiết kế và tối ưu hóa <strong className="font-semibold">cơ sở dữ liệu MySQL</strong> để quản lý hiệu quả dữ liệu sự kiện, người tham gia và tin nhắn.
    </li>
    <li>
      Kiến trúc hệ thống theo mô hình <strong className="font-semibold">Microservices</strong> nhằm tăng khả năng mở rộng và đơn giản hóa việc quản lý mã nguồn.
    </li>
    <li>
      Bảo mật các endpoint bằng <strong className="font-semibold">OAuth2</strong> và <strong className="font-semibold">JWT</strong> để xác thực và phân quyền người dùng.
    </li>
    <li>
      Tích hợp <strong className="font-semibold">Swagger API</strong> để tạo tài liệu API tự động, rõ ràng và dễ tương tác.
    </li>
    <li>
      Kích hoạt tính năng <strong className="font-semibold">nhắn tin thời gian thực</strong> giữa người tham gia bằng <strong className="font-semibold">WebSocket</strong>.
    </li>
    <li>
      Đảm bảo độ tin cậy của ứng dụng bằng <strong className="font-semibold">Unit Test</strong> và <strong className="font-semibold">Integration Test</strong>, kết hợp <strong className="font-semibold">SonarQube</strong> và <strong className="font-semibold">Jacoco</strong> để kiểm soát chất lượng mã.
    </li>
    <li>
      Sử dụng <strong className="font-semibold">Kafka</strong> để xử lý bất đồng bộ như thông báo email và đặt chỗ, giúp giảm độ trễ và tăng tốc độ phản hồi hệ thống.
    </li>
    <li>
      <strong className="font-semibold">Đóng gói ứng dụng bằng Docker</strong> để đơn giản hóa quy trình triển khai và vận hành.
    </li>
    <li>
      Công khai toàn bộ mã nguồn trên <strong className="font-semibold">GitHub</strong>, thể hiện tính minh bạch và chuyên nghiệp:
      <a
        href="https://github.com/PhucNguyen0304/Event-Booking-Central"
        target="_blank"
        className="text-blue-600 underline font-medium ml-1"
      >
        Xem dự án trên GitHub
      </a>
    </li>
  </ul>
</div>

    </motion.div>
  );
};

export default Project1;
