import React from "react";

interface inputProps {
  placeholder: string;
  type: string;
}
const Input = (props: inputProps) => {
  return (
    <>
      {props.type !== "textarea" && (
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={`bg-[#1F2937] rounded-lg placeholder:text-[#9CA3AF] pl-5 w-full outline-none 
          h-[56px] text-white focus:outline-[#7564FF]`}
        />
      )}

      {props.type === "textarea" && (
        <textarea
          placeholder={props.placeholder}
          className={`bg-[#1F2937] rounded-lg placeholder:text-[#9CA3AF] pl-5 w-full outline-none h-[140px]
         text-white focus:outline-[#7564FF]`}
        />
      )}
    </>
  );
};

export default Input;
