import { LinkButton } from "../button/link-button";
import { IconName } from "../icons/icon.enum";

interface FormationCardProps {
  titre: string;
  description: string;
  url: string;
}

const FormationCard = ({ titre, description, url }: FormationCardProps) => {
  return (
    <div className="border border-secondary rounded-lg py-8 px-6 flex flex-col items-center gap-8 hover:shadow-full-main transition-all duration-300 ease-in-out h-full">
      <h3 className="font-montserrat font-bold text-2xl">{titre}</h3>
      <p className="text-justify">{description}</p>
      <div className="mt-auto">
        <LinkButton url={url} blank={true} iconName={IconName.NewTab}>
          Voir les formations
        </LinkButton>
      </div>
    </div>
  );
};

export default FormationCard;
