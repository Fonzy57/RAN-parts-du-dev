import TeamCard from "@/components/card/team-card";
import Seo from "@/components/seo/seo";
import { teamMembers } from "@/config/team";

const Equipe = () => {
  return (
    <>
      <Seo page="equipe" />
      <div className="">
        <h1 className="font-montserrat text-center font-semibold text-secondary uppercase pt-10 text-4xl sm:pt-14 sm:text-5xl md:text-6xl lg:pt-20 lg:text-8xl">
          Notre équipe
        </h1>
        <div className="px-5 text-white w-full mx-auto mt-8 flex flex-col gap-y-4 sm:text-lg sm:mt-10 md:px-0 md:text-left md:w-[700px] lg:mt-12 ">
          <p className="text-justify">
            Nous sommes une équipe dynamique et passionnée, réunissant des
            talents issus des différentes classes de Metz Numeric School. Chacun
            de nous apporte ses compétences, son énergie et sa créativité pour
            relever les défis du hackathon.
          </p>
          <p className="text-justify">
            Notre force réside dans notre diversité : des parcours variés, des
            idées innovantes et une collaboration qui fait la différence.
            Ensemble, nous avons imaginé et développé un projet ambitieux,
            reflet de notre engagement pour le numérique et la cybersécurité.
          </p>
          <p className="text-justify">Découvrez les membres de l’équipe ! 👇</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 max-w-[1560px] mx-auto mt-12 px-5 pb-32 sm:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:px-0 xl:gap-10">
        {teamMembers
          .slice()
          .sort((a, b) => a.nom.localeCompare(b.nom))
          .map((member, index) => {
            return (
              <TeamCard
                key={index}
                nom={member.nom}
                prenom={member.prenom}
                ran={member.ran}
                linkedin={member.linkedin ? member.linkedin : null}
              />
            );
          })}
      </div>
    </>
  );
};

export default Equipe;
