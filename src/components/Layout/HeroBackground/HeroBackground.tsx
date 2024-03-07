import React from "react";

const HeroBackground = ({ children }: any) => {
  return (
    <div>
      <div
        // className=" bg-cover w-[1600px] h-[100vh] relative"
        className=" bg-contain w-full"
        style={{
          backgroundImage: "url(/images/background.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-[70%]">{children}</div>
      </div>
    </div>
  );
};

export default HeroBackground;
