import React from "react";

const Css3Icon = (props: any) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height={props.size}
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
      <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
    </svg>
  );
};
export default Css3Icon;
