import Image, { StaticImageData } from "next/image";
import React from "react";

interface projectProps {
  thumbnail: StaticImageData;
  title: string;
  description: string;
  technologies?: string[];
}
const Project = (props: projectProps) => {
  return (
    <div className="mt-5 px-[30px]">
      <div className="">
        <Image
          src={props.thumbnail}
          width={500}
          height={300}
          alt={`Thumbnail ${props.title}`}
        />
      </div>
      <div className="mt-5">
        <h1 className="text-[#F9FAFB] font-bold text-lg ">{props.title}</h1>
        <p className="text-[#9CA3AF] mt-2">{props.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {props.technologies &&
          props.technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-[#211961] text-[#B5ACFA] px-3 py-1 rounded-lg w-max"
            >
              {tech}
            </div>
          ))}
      </div>
      <div className="mt-5">
        <a href="#" className="text-[#D9D9D9] ">
          {" "}
          Ver projeto{" "}
        </a>
      </div>
    </div>
  );
};

export default Project;
