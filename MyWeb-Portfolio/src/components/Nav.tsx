import {motion} from 'framer-motion';
import {FiGithub, FiMail, FiLinkedin} from 'react-icons/fi';

export default function Nav() {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '#' }
  ];
  
  return (
    <nav 
    className="transition-all duration-300 absolute w-full flex justify-between items-center p-4 bg-gray-800 text-white">
      <motion.div 
      initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ 
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.2,
      duration: 0.5 
    }}
      
      className="ml-10 text-2xl font-bold">
        My Portfolio
      </motion.div>
      <ul className="flex space-x-10">
  {navItems.map((item) => (
    <li key={item.name} className="relative group">
      <motion.a
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: 0.1 * navItems.indexOf(item)
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
            hover: { scaleX: 1, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 30 } },
          }}
          style={{ display: 'block' }}
        />
      </motion.a>
    </li>
  ))}
</ul>


  {/* button section */}
  <div className="mr-10 flex items-center space-x-4">
    <motion.a 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay: 0.5
    }}
    href="">
      <FiGithub className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
    </motion.a>

    <motion.a 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay: 0.5
    }}
    href="">
      <FiMail className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
    </motion.a>

    <motion.a 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay: 0.5
    }}
    href="">
      <FiLinkedin className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
    </motion.a>
    
  </div>
</nav>
  )
}
