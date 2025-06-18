import { useScroll, useTransform, motion } from "framer-motion";

export default function Parallax() {
    const { scrollYProgress } = useScroll();
    const adjustMountains3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const adjustMountains2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const adjustMountains1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const adjustPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  return (
    <section className="absolute inset-0 bg-fixed bg-cover bg-center">
        <div className="relative h-screen overflow-hidden">
            <div 
                className="absolute inset-0 w-full h-screen -z-50 bg-[url('/assets/sky.jpg')] bg-no-repeat bg-cover bg-bottom">
            </div>
            <motion.div 
                style={{ y: adjustMountains3 }}
                className="absolute inset-0 -z-40 bg-[url('/assets/mountain-3.png')] bg-no-repeat bg-cover bg-bottom"/>
            <motion.div 
                style={{ y: adjustMountains2 }}
                className="absolute inset-0 -z-30 bg-[url('/assets/mountain-2.png')] bg-no-repeat bg-cover bg-bottom"/>
            <motion.div 
                style={{ y: adjustMountains1 }}
                className="absolute inset-0 -z-20 bg-[url('/assets/mountain-1.png')] bg-no-repeat bg-cover bg-bottom"/>
            <motion.div 
                style={{ y: adjustPlanets }}
                className="absolute inset-0 -z-10 bg-[url('/assets/planets.png')] bg-no-repeat bg-cover bg-bottom "/>
            <div className="absolute inset-0 bg-black opacity-40 -z-5"></div>
        </div>
    </section>
  )
}
