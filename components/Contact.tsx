"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";
import { motion, useScroll } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { activeSection, setActiveSection, timeOfClick, setTimeOfClick } =
    useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfClick > 1000) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection, timeOfClick]);
  return (
    <section ref={ref} id="contact" className="my-28 w-[min(100%,38rem)]">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="mb-6">
        {" "}
        Reach out at{" "}
        <a href="mailto:hutsongarrett@gmail.com">hutsongarrett@gmail.com</a>
      </p>
      <form
        className="flex flex-col gap-2"
        action={async (formData) => {
          console.log(formData.get("email"));
          console.log(formData.get("message"));
          await sendEmail(formData);
        }}
      >
        <motion.input
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.5,
            },
          }}
          viewport={{
            once: true,
          }}
          name="email"
          required
          maxLength={500}
          placeholder="Email"
          className="rounded-sm border border-black/25 p-2 focus:border-none focus:outline-none focus:ring focus:ring-red-200"
          type="email"
        />
        <motion.textarea
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.2,
              duration: 0.5,
            },
          }}
          viewport={{
            once: true,
          }}
          name="message"
          required
          maxLength={500}
          placeholder="Message"
          className="h-24 rounded-sm border border-black/25 p-2 focus:border-none focus:outline-none focus:ring focus:ring-red-200"
          id=""
        ></motion.textarea>
        <motion.button
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.9,
            },
          }}
          viewport={{
            once: true,
          }}
          className="group flex max-w-fit items-center justify-center gap-2 self-center rounded-full border border-black/25 bg-gray-900 p-4 text-gray-200 transition-all hover:scale-110"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70  transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:animate-pulse" />{" "}
        </motion.button>
      </form>
    </section>
  );
}
