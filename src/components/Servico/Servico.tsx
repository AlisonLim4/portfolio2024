import Image, { StaticImageData } from "next/image";
import React from "react";

interface serviceProps {
  icon: StaticImageData;
  title: string;
  legend: string;
}

const Servico = (props: serviceProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-center font-bold  w-[280px] h-[280px] md:w-[200px] md:h-[300px]  lg:w-[300px] lg:h-[300px] bg-[rgba(117,100,255,.2)] rounded-[20px]">
      <div className="image_container w-[120px]  lg:w-[120px]">
        <Image
          src={props.icon}
          width={400}
          height={400}
          alt="ícone serviço"
          className="w-full"
        />
      </div>
      <span className="mt-4 text-lg font-bold lg:text-2xl lg:mt-4">
        {props.title}
      </span>
      <p className="mt-4 text-[10px] lg: text-base lg:mt-4">{props.legend}</p>
    </div>
  );
};

export default Servico;
