
import { FiGithub, FiMail, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-20 bg-gray-800 text-white">
        <p className="text-sm">
            © {new Date().getFullYear()} Suttanop Chanah. All rights reserved.
        </p>
        <p className="text-xs">
            Made with ❤️ using React and Tailwind CSS
        </p>
         <div className="py-4 border-t border-amber-300 ">
          <div className="flex space-x-4 ml-4 justify-center">
            <motion.a whileHover={{ scale: 1.2 }} href="">
              <FiGithub className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }} href="">
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
    </div>
    </div>
  )
}
