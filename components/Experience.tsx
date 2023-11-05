"use client";

import SectionHeading from "./section-heading";

import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

export default function Experience() {
  // const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfClick, setTimeOfClick } =
    useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfClick > 1000) {
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection, timeOfClick]);
  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 flex scroll-mt-28 flex-col items-center text-center sm:mb-40"
    >
      <SectionHeading className="mb-28">My experience</SectionHeading>
      <VerticalTimeline animate={true} lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                id={index.toString()}
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #f3f4f6",
                }}
                date={item.date}
                icon={item.icon}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-0 font-normal">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
