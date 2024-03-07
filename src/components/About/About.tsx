import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import foto from "../../../public/images/image_ai.jpeg";
import html_icon from "../../../public/images/FaHtml5.png";
import Image from "next/image";
import Technology from "../Technology/Technology";
const About = () => {
  return (
    <section className="about bg-[#0C0C0C]">
      <TitleSection title="Um pouco sobre mim" textBg="sobre mim" />
      <div className="content pt-4 text-white px-[30px]">
        <div className="max-w-[600px]">
          <Image
            src={foto}
            alt="foto"
            width={1024}
            height={1024}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg mt-4">
            Eu sou <span className=" text-[#7564FF]">Alison Lima</span>,
            desenvolvedor front-end e UI Design
          </p>
          <p>
            Sou um profissional focado no Desenvolvimento Front-end, Web Design
            e na criação de aplicações modernas, atrativas e responsivas, sempre
            aplicando boas práticas de desenvolvimento e design.
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
        <div className="my-5 text-center text-2xl font-bold">
          <h2>Tecnologias</h2>
        </div>
        <div className="knowledges mt-4 pb-4 flex flex-wrap justify-between gap-4">
          <Technology icon={html_icon} legend="HTML 5" />
          <Technology icon={html_icon} legend="CSS 3" />
          <Technology icon={html_icon} legend="Javascript" />
          <Technology icon={html_icon} legend="Tailwind" />
          <Technology icon={html_icon} legend="Next.JS" />
          <Technology icon={html_icon} legend="Vue.JS" />
        </div>
      </div>
    </section>
  );
};

export default About;
