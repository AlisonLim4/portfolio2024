import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import profile from "../../../public/images/Perfil.jpg";

const Hero = () => {
  return (
    <section className=" md:flex md:justify-between justify-center md:items-center text-center md:text-left md:py-[100px] px-[30px] md:px-[80px] lg:px-[120px] text-white">
      <div className="">
        <span className="block text-[#E8EEF2] pb-1 md:text-2xl lg:text-3xl ">
          Olá, eu sou
        </span>
        <span className="text-4xl md:text-[80px] lg:text-[90px]  font-semibold block leading-[0.8] ">
          <span className="text-[#7564FF] text-6xl md:text-[120px] lg:text-[140px] font-bold">
            A
          </span>
          lison
          <span className="text-[#7564FF] text-6xl md:text-[120px] lg:text-[140px] font-bold ">
            L
          </span>
          ima
        </span>
        <p className="md:text-[28px]">Desenvolvedor Front-end & UI Designer</p>
        <div className="flex justify-center md:justify-start gap-5 pt-5">
          <Button text={"sobre mim"} filled />
          <Button text={"contrate-me"} />
        </div>
      </div>

      <div className="profile-image md:w-[300px] h-[300px] xl:w-[430px] xl:h-[430px] rounded-full overflow-hidden">
        <Image src={profile} width={500} height={500} alt="Foto de perfil" />
      </div>
    </section>
  );
};

export default Hero;
