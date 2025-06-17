import {motion} from 'framer-motion'
import Spline from '@splinetool/react-spline';
export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* left content */}
      <div className="flex-1 flex flex-col items-center lg:items-start justify-center p-6 md:p-10 z-10 text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xs sm:max-w-md lg:max-w-lg"
        >
          Explore my projects, skills, and experiences. Let's connect and create something amazing together!
        </motion.p>
      </div>
      
      {/* right with spline - responsive container */}
      <div className="flex-1 relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] flex items-center justify-center">
        {/* Mobile/Tablet View */}
        <div className="lg:hidden w-full h-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
          <Spline className="w-full h-full" scene="https://prod.spline.design/vEutDHAMNs-Zpz-D/scene.splinecode" />
        </div>
        
        {/* Desktop View - with overflow positioning */}
        <div className="hidden lg:block absolute inset-0 xl:right-[-28%] xl:scale-110">
          <Spline className="w-full h-full" scene="https://prod.spline.design/vEutDHAMNs-Zpz-D/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}
