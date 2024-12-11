import { TeamMembersProps } from "@/config/team";
import { CustomIcon } from "../icons/icon";
import { IconName } from "../icons/icon.enum";

const TeamCard = ({ nom, prenom, ran, linkedin }: TeamMembersProps) => {
  return (
    <div className="border border-secondary rounded-lg py-8 px-6 flex flex-col items-center justify-center gap-4 hover:shadow-full-main transition-all duration-300 ease-in-out">
      <div className="w-[100px] h-[100px] bg-main rounded-full flex items-center justify-center">
        <CustomIcon name={IconName.User} size={40} />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg">{prenom}</p>
        <p className="text-xl font-semibold">{nom}</p>
      </div>
      <p>RAN {ran}</p>
      {/* TODO VOIR SI ON GARDE LE LINKEDIN */}
      {/* {linkedin !== null && <CustomIcon name={IconName.Linkedin} size={32} />} */}
    </div>
  );
};

export default TeamCard;
