import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import Project from "../Project/Project";
import thumb from "../../../public/images/projeto.png";

const Projects = () => {
  return (
    <section>
      <TitleSection title="Projetos" textBg="Projetos" />
      <div>
        <Project
          thumbnail={thumb}
          title="BookWise"
          description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
          technologies={["Javascript", "React.Js", "Tailwind"]}
        />
      </div>
    </section>
  );
};

export default Projects;
