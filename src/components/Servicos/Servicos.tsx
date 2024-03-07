import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import Servico from "../Servico/Servico";
import image from "../../../public/images/icon_web_design.png";
const Servicos = () => {
  return (
    <section className="bg-black">
      <TitleSection textBg="Serviços" title="Serviços" />
      <div className="mt-6 flex flex-wrap justify-center gap-5">
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
