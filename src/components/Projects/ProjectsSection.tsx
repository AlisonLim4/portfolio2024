import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import { getProjects } from "../../pages/api/projects";
import ProjectCard from "../Project/ProjectCard";

const ProjectsSection = () => {
  // Seleciona somente os três primeiros projetos
  const firstThreeProjects = getProjects().slice(0, 3);

  return (
    <section
      className=" bg-[#0c0c0c] pt-7 px-10  md:pt-12 
    lg:pt-16 pb-7 lg:pb-16 text-white"
    >
      <TitleSection title="Projetos" textBg="Projetos" />
      <div className="pt-7 lg:pt-16 lg:flex lg:flex-col lg:gap-6">
        {firstThreeProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsSection;
