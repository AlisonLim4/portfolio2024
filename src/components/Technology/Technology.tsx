import Image, { StaticImageData } from "next/image";
import React from "react";

interface TechnologyProps {
  icon: StaticImageData;
  legend: string;
}
const Technology = (props: TechnologyProps) => {
  return (
    <div className="flex flex-col items-center border-2 border-[#7564ff] rounded-lg w-[90px] h-[95px] p-3">
      <Image src={props.icon} width={50} height={50} alt="Tecnologia Icone" />
      <span className="font-bold text-[12px] text-[#9664FF]">
        {props.legend}
      </span>
    </div>
  );
};

export default Technology;
