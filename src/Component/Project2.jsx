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
        <h1 className="text-2xl font-bold">Website Bán Nội Thất</h1>
        <div className="flex gap-2">
          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
            1/2025 - 4/2025
          </span>
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            Đồ Án Tốt Nghiệp
          </span>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">:Key Responsibilities</h2>
        <ul className="space-y-2 text-sm list-disc pl-4">
  <li>Phát triển và triển khai nền tảng thương mại điện tử sử dụng <strong>ReactJS</strong> và <strong>TailwindCSS</strong> cho giao diện người dùng, kết hợp <strong>Node.js</strong>, <strong>Express.js</strong> và <strong>MongoDB</strong> cho hệ thống backend.</li>
  <li>Tích hợp cổng thanh toán <strong>ví điện tử MoMo</strong> để xử lý giao dịch trực tuyến an toàn và tiện lợi.</li>
  <li>Triển khai tính năng <strong>chat thời gian thực</strong> nhằm tăng cường tương tác giữa người dùng và quản trị viên, cải thiện chất lượng hỗ trợ khách hàng.</li>
  <li>Xây dựng hệ thống <strong>xác thực người dùng</strong> sử dụng <strong>bcrypt</strong> để mã hóa mật khẩu và <strong>JWT</strong> để quản lý phiên đăng nhập an toàn, tuân thủ tiêu chuẩn bảo mật hiện hành.</li>
  <li>Triển khai thành công ứng dụng với <strong>frontend</strong> được host trên <strong>Vercel</strong> và <strong>backend</strong> trên <strong>Render</strong>, đảm bảo hệ thống luôn sẵn sàng hoạt động tại:  
    <a href="https://moho-ec.vercel.app" target="_blank" className="text-blue-500 underline">https://moho-ec.vercel.app</a>
  </li>
</ul>

        
      </div>
    </motion.div>
  );
};

export default Project2;
