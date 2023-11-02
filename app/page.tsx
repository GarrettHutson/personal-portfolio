import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
      </div>
    </main>
  );
}
