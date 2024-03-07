import React from "react";

interface ButtonProps {
  text: String;
  filled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`text-lg  py-2 px-5 text-white text-xs uppercase border-2 border-[#7564FF] ${
        props.filled && "bg-[#7564FF]"
      }`}
    >
      {props.text}
    </button>
  );
};

export default Button;
