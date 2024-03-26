import React from "react";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="relative px-[30px] md:px-[80px] lg:px-[120px] py-4 flex justify-between items-center w-full bg-[rgba(0,0,0,0.5)]">
      <div className="logo_container font-bold text-[40px] text-[#C4FF64]">
        AL
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
