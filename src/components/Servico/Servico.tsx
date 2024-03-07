import Image, { StaticImageData } from "next/image";
import React from "react";

interface serviceProps {
  icon: StaticImageData;
  title: string;
  legend: string;
}

const Servico = (props: serviceProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-center font-bold w-[150px] h-[140px]  bg-[rgba(117,100,255,.2)] rounded-[20px]">
      <Image src={props.icon} width={65} height={65} alt="ícone serviço" />
      <span className="text-[15px]">{props.title}</span>
      <p className="text-[10px]">{props.legend}</p>
    </div>
  );
};

export default Servico;
