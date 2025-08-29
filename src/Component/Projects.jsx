import React from "react";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

const videos = Array(4).fill({
  title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  status: "Coming Soon",
  image: "/your-image-path.jpg", // Thay bằng ảnh thật hoặc ảnh nền mờ
});

const Projects = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#0a1f44] to-[#1c2e5a] text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-2">Video Mới nhất</h2>
      <p className="text-gray-300 mb-12 text-center">
        Đừng bỏ lỡ những video mới nhất của mình
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative bg-black/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Background image */}
            <div
              className="h-64 bg-cover bg-center blur-sm"
              style={{ backgroundImage: `url(${video.image})` }}
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <p className="text-sm font-medium">{video.title}</p>

              <div className="flex flex-col items-center">
                {/* Play button */}
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg mb-2 animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold">{video.status}</span>
              </div>

              {/* Social icons */}
              <div className="flex justify-center gap-4 mt-4">
                <FaTiktok className="text-xl text-white hover:text-pink-400 transition" />
                <FaYoutube className="text-xl text-white hover:text-red-500 transition" />
                <FaFacebookF className="text-xl text-white hover:text-blue-500 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
