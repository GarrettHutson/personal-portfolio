"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
export default function Intro() {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              width={100}
              height={100}
              quality={100}
              priority={true}
              src="/garrett2.jpg"
              alt="Picture of the author"
              className="rounded-full border-2 border-white object-cover"
            ></Image>
          </motion.div>
          <motion.span
            className="absolute -left-2 top-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>

        <motion.h1
          className="mb-10 mt-4 w-full px-4 text-center text-2xl font-medium !leading-[1.5] sm:text-4xl lg:w-1/2 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-extrabold">Hi there, I'm Garrett.</span> I'm a{" "}
          <span className="font-extrabold">developer</span> based in an
          <span className="font-bold italic"> Airstream.</span> I enjoy building{" "}
          <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>
      </div>
      <motion.div
        className="text-large flex flex-col items-center justify-center gap-2 font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex cursor-pointer items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact{" "}
          <BsArrowRight className="opacity-50 group-hover:translate-x-1" />
        </Link>
        <a
          href="/resume.pdf"
          download={true}
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-white  px-7 py-3  outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
        >
          Download Resume{" "}
          <HiDownload className="opacity-50 group-hover:translate-y-1 group-hover:animate-spin" />
        </a>
        <a
          className=" flex cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 outline-none transition hover:scale-110 hover:text-gray-950 focus:scale-110 active:scale-105"
          href="https://www.linkedin.com/in/garretthutson/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className=" flex cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 outline-none transition hover:scale-110 hover:text-gray-950 focus:scale-110 active:scale-105"
          href="https://www.github.com/garretthutson"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
