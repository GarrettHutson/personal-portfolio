"use client"
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative z-[999]">
      <motion.div className="fixed left-1/2 top-0 h-20 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/30 backdrop-blur-sm sm:top-6 sm:h-14 sm:w-[36rem] sm:rounded-full "
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x:"-50%", opacity: 1 }}
      ></motion.div>
    </header>
  );
}
