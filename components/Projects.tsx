"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useEffect } from "react";
import Project from "./Project";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfClick, setTimeOfClick } =
    useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfClick]);
  return (
    <section ref={ref} id="projects" className="mt-28 scroll-mt-28">
      <SectionHeading className="mt-4 text-center " as={"h2"}>
        Projects
      </SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
