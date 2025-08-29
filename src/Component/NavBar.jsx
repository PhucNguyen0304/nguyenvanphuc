import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full text-gray-300 font-bold z-50 bg-transparent"
    >
      <div
        className="mt-8 rounded-lg border border-white/20 bg-black/0 backdrop-blur-md shadow-lg mx-auto flex items-center justify-between py-4 px-6 
  w-[95%] sm:w-[80%] lg:w-[40%] transition-all duration-300"
      >
        {/* Logo + Domain */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded-full bg-white" />
          <span className="text-lg font-bold hover:scale-105 duration-75">
            Nguyễn Văn Phúc
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {[
            { label: "About me", target: "about" },
            { label: "Developer", target: "developer" },
            { label: "Projects", target: "projects" },
            { label: "Contact", target: "contact" },
          ].map(({ label, target }) => (
            <motion.li
              key={label}
              onClick={() => {
                const section = document.getElementById(target);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="text-gray-300 cursor-pointer font-extrabold transition duration-200 hover:text-orange-500"
            >
              {label}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
