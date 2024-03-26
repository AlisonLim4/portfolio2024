import Image from "next/image";
import React from "react";

interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  tags: string[];
  source_code?: string;
  demo?: string;
}

const ProjectCard = (project: Project) => {
  return (
    <div className="mt-5 w-full md:flex md:flex-col md:items-center lg:flex-row lg:items-start ">
      <div className="project_thumb xl:w-[600px] ">
        <Image
          className=" rounded-xl "
          src={project.image}
          width={600}
          height={600}
          alt={`Thumbnail ${project.name}`}
        />
      </div>

      <div className="lg:ml-14 lg:pt-[18px] lg:flex lg:flex-col lg:gap-3 lg:w-1/2 ">
        <div className="mt-5 md:text-center lg:mt-0 lg:text-start  lg:flex lg:flex-col ">
          <h1 className="text-[#F9FAFB] font-bold text-lg ">{project.name}</h1>
          <p className="text-[#9CA3AF] mt-2 lg:my-6 w-full ">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-3 md:justify-center lg:justify-start ">
          {project.tags &&
            project.tags.map((tag: string, index: number) => (
              <div
                key={index}
                className="bg-[#211961] text-[#B5ACFA] px-3 py-1 rounded-lg w-max"
              >
                {tag}
              </div>
            ))}
        </div>

        <div className="mt-5 md:text-center lg:text-start  ">
          <a href={project.demo} className="text-[#D9D9D9] ">
            {" "}
            Ver projeto{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
