import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import Input from "../Form/Input";

const Contato = () => {
  return (
    <section className=" bg-black pt-7 pb-7 px-10 lg:mt-20 lg:px-[120px] w-full">
      <TitleSection title="Contato" textBg="Contato" />

      <div className=" mt-7 lg:mt-16  lg:flex ">
        <form className="flex flex-col gap-5 lg:w-[550px]">
          <Input placeholder="Assunto" type="text" />
          <Input placeholder="example@email.com" type="email" />
          <Input placeholder="Mensagem" type="textarea" />
        </form>
        {/* <div className=" ml-20 text-white">
          <h2>Instagram</h2>
          <h2>Linkedin</h2>
          <h2>Email</h2>
        </div> */}
      </div>
      <div>
        <button className="bg-[#7564FF] rounded-lg px-[14px] py-[12px] text-white mt-5">
          Enviar mensagem
        </button>
      </div>
    </section>
  );
};

export default Contato;
