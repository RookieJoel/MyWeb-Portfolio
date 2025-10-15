import { motion } from "framer-motion";
import { FiGithub, FiMail, FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../data/index";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [onHover, setOnHover] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (href: string ,  event?: React.MouseEvent) => {
    event?.preventDefault();
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    
    if (isOpen) {
      toggleMenu(); // ปิดเมนูเฉพาะตอนที่เมนูเปิดอยู่
    }
  };

  const scrollToSectionDesktop = (href: string, event?: React.MouseEvent) => {
    event?.preventDefault();
    
    // ให้เวลา DOM render เสร็จก่อน
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="transition-all duration-300 fixed w-full z-50 bg-gray-800 text-white">
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
          className="ml-4 md:ml-10 text-2xl font-bold"
          onMouseEnter={() => setOnHover(!onHover)}
          onMouseLeave={() => setOnHover(!onHover)}
        >
          My Portfolio
          {onHover && (
            <motion.span
              className="ml-2 text-yellow-400"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "decay",
                stiffness: 300,
                damping: 20,
                duration: 0.3,
              }}
            >
              Suttanop
            </motion.span>
          )}
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
                  onClick={() => scrollToSection(item.href)}
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
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        },
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
        <div className="hidden md:flex items-center space-x-4 mr-4 md:mr-10">
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
            href="https://github.com/RookieJoel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
          </motion.a>

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
            onClick={(e) => scrollToSectionDesktop('#contact', e)}
            className="cursor-pointer bg-transparent border-none p-0"
            type="button"
          >
            <FiMail className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
          </motion.button>
        </div>
        {/* burger menu */}
        <div className="flex md:hidden items-center ml-2">
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
        className="md:hidden absolute top-full left-0 bg-gray-800 text-white w-full overflow-hidden z-40"
      >
        <ul className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="relative hover:text-yellow-400 transition-colors duration-300 font-medium"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="py-4 border-t border-amber-300 ">
          <div className="flex space-x-4 ml-4 justify-center">
            <motion.a 
              whileHover={{ scale: 1.2 }} 
              href="https://github.com/RookieJoel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
            </motion.a>

            <motion.button 
              whileHover={{ scale: 1.2 }} 
              onClick={(e) => scrollToSection('#contact', e)}
              className="cursor-pointer bg-transparent border-none p-0"
              type="button"
            >
              <FiMail className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
            </motion.button>

          </div>
          <div className="mt-4 px-4">
            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-5 w-full px-4 block bg-yellow-400 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
