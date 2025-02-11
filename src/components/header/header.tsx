// REACT & NEXT
import Link from "next/link";

// CONFIG
import { navLinks } from "../../config/nav";
import Image from "next/image";
import getConfig from "next/config";
import BaseImage from "../image/base-image";

const Header = () => {
  return (
    <div
      className={`w-full min-h-[80px] flex justify-center items-center transition duration-300 ease-in-out bg-main border-b border-secondary`}
    >
      <div
        className={`flex items-center justify-between w-[1325px] mx-auto xl:w-[1560px] transition duration-300 ease-in-out`}
      >
        <Link href={"/"}>
          <BaseImage
            src={`/images/logo-browser.png`}
            width={55}
            height={55}
            alt="Logo de l'équipe RAN-parts du Dev"
          />
        </Link>
        <nav>
          <ul className="flex gap-8 font-cera uppercase ">
            {navLinks.map((navitem, index) => {
              return (
                <li key={index}>
                  <Link
                    href={navitem.url}
                    className={`font-bold text-xl hover:text-secondary active:text-secondary-hover transition duration-300 ease-in-out`}
                  >
                    {navitem.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
