// NEXT
import Link from "next/link";

// COMPONENTS
import { LinkButton } from "@/components/button/link-button";
import FormationCard from "@/components/card/formation-card";
import BaseImage from "@/components/image/base-image";
import Seo from "@/components/seo/seo";

// CONFIG
import { formations } from "@/config/formations";

export default function Home() {
  return (
    <>
      <Seo page="home" />
      <section className="px-5 pt-10 w-full sm:pt-14 md:pt-20">
        <h1 className="font-montserrat text-center font-semibold text-secondary text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          RAN-parts du Dev
        </h1>
        <div className="flex flex-col-reverse mt-8 items-center justify-center gap-x-20 sm:mt-20 md:flex-row md:mt-24 lg:px-0 lg:w-[1200px] lg:mx-auto lg:mt-32 xl:w-[1400px]">
          <div>
            <p className="lg:text-lg max-w-[700px] mt-8">
              Notre équipe,{" "}
              <span className="font-bold text-secondary">RAN-parts du Dev</span>
              , est composée de membres venus des différentes classes RAN de{" "}
              <Link
                href="https://www.metz-numeric-school.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline hover:text-secondary-hover active:no-underline transition-all duration-300 ease-in-out"
              >
                Metz Numeric School
              </Link>
              , de la RAN 1 à la RAN 4. On a tous des parcours et des
              compétences variés, et c’est ce qui fait notre force. Pendant ce
              hackathon, on est là pour partager nos idées, travailler ensemble,
              et donner le meilleur de nous-mêmes. Notre objectif : montrer
              qu’avec de la motivation et un bon esprit d’équipe, on peut créer
              quelque chose de vraiment innovant !
            </p>
            <div className="w-max mx-auto mt-10">
              <LinkButton url="/equipe">Voir notre équipe</LinkButton>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-[700px]">
            <BaseImage
              src={`/images/members/ran-parts-du-dev.webp`}
              width={700}
              height={500}
              alt="Logo de l'équipe RAN-parts du Dev"
              className="rounded-lg shadow-full-main sm:shadow-photo"
            />
          </div>
        </div>
      </section>

      <section className="mt-20 px-5 sm:mt-28 lg:mt-32">
        <h2 className="text-center font-semibold text-secondary text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
          Escape game
        </h2>
        <div className="flex flex-col items-center gap-y-8 mt-10 md:w-1/2 md:mx-auto lg:text-lg">
          <p className="text-justify">
            Créé dans le cadre d’un hackathon au sein de{" "}
            <Link
              href="https://www.metz-numeric-school.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline hover:text-secondary-hover active:no-underline transition-all duration-300 ease-in-out"
            >
              Metz Numeric School
            </Link>
            , notre escape game a été imaginé pour sensibiliser aux métiers du
            numérique et à la cybersécurité, tout en rendant l’apprentissage
            ludique et captivant. Grâce à des énigmes interactives et des
            scénarios immersifs, vous plongerez dans un univers où chaque défi
            est une opportunité d’en apprendre plus sur ces domaines
            passionnants.
          </p>
          <p className="text-justify">
            Entièrement développé en HTML, CSS et JavaScript, ce projet reflète
            notre créativité, notre maîtrise technique et notre volonté de
            partager notre passion pour le numérique. Prêts à relever le défi ?
            🚀
          </p>
          {/* TODO CHANGER L'URL VERS LE SITE ESCAPE GAME */}
          <LinkButton url="#" blank={true}>
            Tenter l&apos;aventure
          </LinkButton>
        </div>
      </section>

      <section className="mt-20 px-5 sm:mt-28 lg:mt-32">
        <h2 className="text-center font-semibold text-secondary text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
          Metz Numeric School
        </h2>
        <p className="mt-10 text-justify md:w-1/2 md:mx-auto lg:text-lg">
          L&apos;école{" "}
          <Link
            href="https://www.metz-numeric-school.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline hover:text-secondary-hover active:no-underline transition-all duration-300 ease-in-out"
          >
            Metz Numeric School
          </Link>{" "}
          est l&apos;école de référence pour préparer les apprenants aux métiers
          du numérique dans les domaines de l&apos;informatique, de la
          cybersécurité et du marketing digital. Les formations proposées
          peuvent être réalisées en formation initiale (Post-Bac et demandeurs
          d&apos;emploi) ou en alternance dans le cadre d&apos;un contrat
          d&apos;apprentissage ou de professionnalisation (après un BAC+2 ou un
          BAC+3).
        </p>
        <div className="grid grid-cols-1 gap-5 max-w-[1200px] mx-auto mt-12 pb-32 sm:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {formations.map((formation, index) => {
            return (
              <FormationCard
                key={index}
                titre={formation.titre}
                description={formation.description}
                url={formation.url}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
