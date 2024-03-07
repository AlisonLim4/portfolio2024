import useMedia from "@/Hooks/useMedia";
import { useState } from "react";

const HeaderNav = () => {
  const mobile = useMedia("(max-width: 750px)");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {mobile && (
        <button
          className={`mobile_button text-white px-2 py-3 ${
            mobileMenu && "mobileButton_active"
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile && "navMobile"} ${
          mobile && !mobileMenu && "hidden"
        }  absolute h-full w-full py-4 top-[76px] left-0`}
      >
        <ul className=" flex flex-col gap-3 pt-4 text-sm text-white font-bold text-[--color-gray] ">
          <li className="navLink ">
            <a href="#"> Sobre mim</a>
          </li>
          <li className="navLink">
            <a href="#"> Serviços</a>
          </li>
          <li className="navLink">
            <a href="#"> Projetos</a>
          </li>
          <li className="navLink">
            <a href="#"> Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNav;
