import React from "react";

interface TitleSectionProps {
  title: string;
  textBg: string;
}

const TitleSection = (props: TitleSectionProps) => {
  return (
    <div className=" title_section text-[20px] text-center text-white font-bold relative mt-5">
      <span className="text-[#7564FF] left-1/2 translate-x-1/2 opacity-20 text-6xl uppercase">
        {props.textBg}
      </span>
      <h2 className="absolute translate-x-[-50%] top-1/4 left-1/2 text-nowrap">
        {props.title}
      </h2>
    </div>
  );
};

export default TitleSection;
