import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import foto from "../../../public/images/image_ai.jpeg";
import html_icon from "../../../public/images/FaHtml5.png";
import Image from "next/image";
import Technology from "../Technology/Technology";
//icones
import HtmlIcon from "../icons/HtmlIcon";
import Css3Icon from "../icons/Css3Icon";
import JavascriptIcon from "../icons/JavascriptIcon";
import ReactIcon from "../icons/ReactIcon";
import NextIcon from "../icons/NextIcon";
import AngularIcon from "../icons/AngularIcon";
import VueIcon from "../icons/VueIcon";
import TailwindIcon from "../icons/TailwindIcon";
import BootstrapIcon from "../icons/BootstrapIcon";
import FigmaIcon from "../icons/FigmaIcon";
HtmlIcon;
const About = () => {
  const technologies = [
    {
      icon: <HtmlIcon />,
      name: "HTML 5",
    },
    {
      icon: <Css3Icon />,
      name: "CSS 3",
    },
    {
      icon: <JavascriptIcon />,
      name: "Javascript",
    },
    {
      icon: <ReactIcon />,
      name: "React.Js",
    },
    {
      icon: <NextIcon />,
      name: "Next.Js",
    },
    {
      icon: <AngularIcon />,
      name: "Angular",
    },
    {
      icon: <VueIcon />,
      name: "Vue.Js",
    },
    {
      icon: <TailwindIcon />,
      name: "Tailwind",
    },
    {
      icon: <BootstrapIcon />,
      name: "Bootstrap",
    },
    {
      icon: <FigmaIcon />,
      name: "Figma",
    },
  ];

  return (
    <section className="about  bg-[#0C0C0C] pt-7 md:pt-12 lg:pt-16 ">
      <TitleSection title="Um pouco sobre mim" textBg="sobre mim" />
      <div className="content flex flex-col lg:justify-between lg:gap-7 xl:flex-row  items-center h-max  pt-4  px-[30px] md:px-[80px] lg:pt-7 lg:px-[120px] text-stone-300 ">
        <div className="max-w-[600px] md:w-[566px] lg:hidden xl:block xl:h-full mt-7   ">
          <Image
            src={foto}
            alt="foto"
            width={1024}
            height={1024}
            className="rounded-md"
          />
        </div>

        <div className=" xl:ml-6">
          <div className="flex flex-col gap-2 pt-5 text-center xl:text-left ">
            <p className="font-bold text-lg ">
              Eu sou <span className=" text-[#7564FF]">Alison Lima</span>,
              desenvolvedor front-end e UI Design
            </p>
            <p className="xl:max-w-[100ch]">
              Sou um profissional focado no Desenvolvimento Front-end, Web
              Design e na criação de aplicações modernas, atrativas e
              responsivas, sempre aplicando boas práticas de desenvolvimento e
              design.
            </p>
            <p>
              Graduado em Análise de Sistemas e pós graduando em Desenvolvimento
              Web Full Stack e MBA em Gestão de Projetos em TI.
            </p>
            <p>
              Utilizando poderosas tecnologias, meu objetivo é destacar seu
              projeto da melhor forma possível. Vamos tirar suas ideias do papel
              juntos!
            </p>
          </div>
          <div className="my-5 text-center xl:text-left text-2xl font-bold lg:mt-12">
            <h2>Tecnologias</h2>
          </div>
          <div className="knowledges mt-4 pb-4 flex flex-wrap justify-center gap-4 xl:justify-normal xl:gap-[30px]">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center border-2 border-[#7564ff] text-[#9664FF] rounded-lg w-[90px] h-[95px] p-3"
              >
                {tech.icon}
                <span className="font-bold text-[12px] ">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
