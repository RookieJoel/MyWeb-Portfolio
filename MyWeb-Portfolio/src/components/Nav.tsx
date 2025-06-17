import { motion } from "framer-motion";
import { FiGithub, FiMail, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="transition-all duration-300 absolute w-full z-50 bg-gray-800 text-white">
      <div className="flex items-center w-full p-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
            duration: 0.5,
          }}
          className="ml-10 text-2xl font-bold"
        >
          My Portfolio
        </motion.div>
        <div className="flex-1 flex justify-center">
          <ul className="hidden lg:flex space-x-10">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <motion.a
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.1 * navItems.indexOf(item),
                  }}
                  key={item.name}
                  href={item.href}
                  className="relative hover:text-yellow-400 transition-colors duration-300"
                  whileHover="hover"
                >
                  {item.name}
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 rounded origin-left"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 0, opacity: 0 }}
                    variants={{
                      hover: {
                        scaleX: 1,
                        opacity: 1,
                        transition: { type: "spring", stiffness: 400, damping: 30 },
                      },
                    }}
                    style={{ display: "block" }}
                  />
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
        {/* Social icons */}
        <div className="hidden md:flex items-center space-x-4 mr-10">
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.2 }}
            href=""
          >
            <FiGithub className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.2 }}
            href=""
          >
            <FiMail className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.2 }}
            href=""
          >
            <FiLinkedin className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
          </motion.a>
        </div>
        {/* burger menu */}
        <div className="md:flex lg:hidden items-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? (
              <FiX className="text-yellow-400" />
            ) : (
              <FiMenu className="text-yellow-400" />
            )}
          </motion.button>
        </div>
      </div>
      {/* dropdown menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="absolute top-16 right-0 bg-gray-800 text-white w-full md:w-auto md:static md:flex md:items-center md:space-x-10 overflow-hidden"
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 p-4 md:p-0">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="relative hover:text-yellow-400 transition-colors duration-300 font-medium"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="py-4 border-t border-amber-300 ">
          <div className="flex space-x-4 ml-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href=""
            >
              <FiGithub className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href=""
            >
              <FiMail className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.5,
              }}
              whileHover={{ scale: 1.2 }}
              href=""
            >
              <FiLinkedin className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
            </motion.a>
            </div>
            <button 
            onClick={toggleMenu}
            className="mt-5 w-full px-4 mx-3 block bg-yellow-400 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
              Contact Me
            </button>
        </div>
      </motion.div>
    </nav>
  );
}
