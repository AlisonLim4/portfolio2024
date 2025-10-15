import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import Servico from "../Servico/Servico";
import image from "../../../public/images/icon_web_design.png";
const Servicos = () => {
  return (
    <section className="services  bg-black pt-7 px-10  md:pt-12 lg:pt-16">
      <TitleSection textBg="Serviços" title="Serviços" />
      <div className="pt-7 pb-7 flex flex-wrap justify-center gap-5 lg:pt-16 lg:pb-16">
        <Servico
          icon={image}
          title="Web Design"
          legend="Desenvolvimento de website responsivo e elegante"
        />
        <Servico
          icon={image}
          title="Web Design"
          legend="Desenvolvimento de website responsivo e elegante"
        />
        <Servico
          icon={image}
          title="Web Design"
          legend="Desenvolvimento de website responsivo e elegante"
        />
        <Servico
          icon={image}
          title="Web Design"
          legend="Desenvolvimento de website responsivo e elegante"
        />
      </div>
    </section>
  );
};

export default Servicos;
