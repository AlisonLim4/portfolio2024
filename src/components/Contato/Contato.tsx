import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import Input from "../Form/Input";
import Button from "../Button/Button";

const Contato = () => {
  return (
    <section className="mt-8">
      <TitleSection title="Contato" textBg="Contato" />
      <div className="px-[30px]">
        <form className=" mt-8 flex flex-col gap-5">
          <Input placeholder="Assunto" type="text" />
          <Input placeholder="example@email.com" type="email" />
          <Input placeholder="Mensagem" type="textarea" />
        </form>
        <button className="bg-[#7564FF] rounded-lg px-[14px] py-[12px] text-white mt-5">
          Enviar mensagem
        </button>
      </div>
    </section>
  );
};

export default Contato;
