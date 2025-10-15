import useMedia from "@/Hooks/useMedia";
import { useState } from "react";

const HeaderNav = () => {
  const mobile = useMedia("(max-width: 767px)");
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
        }  absolute md:static  h-full md:h-auto w-full md:w-auto py-4 top-[76px] left-0`}
      >
        <ul
          className={`flex flex-col px-10 md:flex-row gap-3 md:gap-5 pt-4 text-sm md:text-lg text-white font-bold text-[--color-gray]`}
        >
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
