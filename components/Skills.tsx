"use client";
import { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref, inView } = useInView();
  const { setActiveSection, timeOfClick, setTimeOfClick } =
    useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfClick > 1000) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection, timeOfClick]);
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.06,
      },
    }),
  };
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 mt-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading> Skills </SectionHeading>
      <ul className="flex flex-wrap items-center justify-center gap-4">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="rounded-xl border-black/10 bg-gray-200 p-2"
            custom={index}
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
