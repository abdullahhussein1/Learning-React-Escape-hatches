import { motion, useScroll } from "framer-motion";

export default function Motion() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <motion.div
        className="size-40 rounded-full bg-sky-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ scale: 1 }}
        style={{ translateY: scrollYProgress }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1 }}
      />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
