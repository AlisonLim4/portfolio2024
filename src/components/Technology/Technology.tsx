import React from "react";
import HtmlIcon from "../icons/HtmlIcon";

interface Technology {
  Icon: JSX.Element;
  legend: string;
}
const Technology = (tech: Technology) => {
  return (
    <div className="flex flex-col items-center border-2 border-[#7564ff] rounded-lg w-[90px] h-[95px] p-3">
      {tech.Icon}
      <span className="font-bold text-[12px] text-[#9664FF]">
        {tech.legend}
      </span>
    </div>
  );
};

export default Technology;
