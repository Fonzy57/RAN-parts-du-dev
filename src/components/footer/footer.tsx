// REACT & NEXT
import Link from "next/link";
import Image from "next/image";

// COMPONENTS

// CONFIG
import { version } from "../../config/version";
import { formations } from "@/config/formations";

const year = new Date().getFullYear();

const about = [
  {
    name: "accueil",
    label: "Accueil",
    url: "/",
  },
  {
    name: "equipe",
    label: "L'équipe",
    url: "/equipe",
  },
];

const Footer = () => {
  const titleStyle =
    "font-cera uppercase font-bold text-xl text-text cursor-default";
  const listStyle = "mt-4 text-text flex flex-col gap-y-3";

  return (
    <div className="bg-main pt-14 pb-6 px-5 sm:pt-20 lg:pt-8">
      <div className="flex flex-col justify-center items-center mx-auto lg:flex-row lg:justify-between lg:w-[1325px] xl:w-[1560px]">
        <Image
          src="/images/logo-nav.png"
          width={170}
          height={170}
          alt="Logo de l'équipe RAN-parts du Dev"
        />
        <div className="flex flex-col w-full justify-center mt-14 gap-y-10 sm:flex-row sm:gap-x-20 lg:w-1/2 lg:justify-center lg:gap-x-40">
          <div className="">
            <p className={titleStyle}>A propos</p>
            <div className={listStyle}>
              {about.map((item, index) => {
                return (
                  <Link
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary active:text-secondary-hover transition duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-x-3">
                      <p>{item.label}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="">
            <p className={titleStyle}>Metz Numeric School</p>
            <div className={listStyle}>
              <Link
                href="https://www.metz-numeric-school.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary active:text-secondary-hover transition duration-300 ease-in-out"
              >
                <div className="flex items-center gap-x-3">
                  <p>Accueil</p>
                </div>
              </Link>
              {formations.map((item, index) => {
                return (
                  <Link
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary active:text-secondary-hover transition duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-x-3">
                      <p>{item.titre}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className="text-text text-xs text-center mt-20 lg:mt-14 xl:mt-16">
        © RAN-parts du Dev {year} - Tous droits réservés | v{version}
      </p>
    </div>
  );
};

export default Footer;
