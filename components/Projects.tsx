import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { title } from "process";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center">
      <SectionHeading className="mt-4" as={"h2"}>
        Projects
      </SectionHeading>
      <>
        {projectsData.map((project: (typeof projectsData)[number], i) => (
          <div className="flex  w-1/2" key={i}>
            <div className="flex flex-col ">
              <SectionHeading className="text-normal font-normal" as={"h3"}>
                {project.title}
              </SectionHeading>
              <div>{project.description}</div>
              <ul className="flex">
                {project.tags.map((tag, i) => (
                  <li
                    className="rounded-full border-2 border-black/10 bg-slate-300 p-2"
                    key={i}
                  >
                    {" "}
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                width={200}
                height={200}
                src={project.imageUrl}
                alt="project image"
              />
            </div>
          </div>
        ))}
      </>
    </section>
  );
}
