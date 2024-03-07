import React from "react";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className=" px-[30px] text-white">
      <div className="">
        <span className="block text-[#E8EEF2] pb-1">Olá, eu sou</span>
        <span className="text-4xl font-semibold block leading-[0.8] ">
          <span className="text-[#7564FF] text-6xl font-bold">A</span>
          lison
          <span className="text-[#7564FF] text-6xl font-bold ">L</span>
          ima
        </span>
        <p className="">Desenvolvedor Front-end & UI Designer</p>
        <div className="flex gap-5 pt-5">
          <Button text={"sobre mim"} filled />
          <Button text={"contrate-me"} />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
