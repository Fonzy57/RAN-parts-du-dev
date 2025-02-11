// ICONS FROM react-icons
import { FaRegUser, FaLinkedin } from "react-icons/fa6"; // Font Awesome 6 library
import { IoMdOpen } from "react-icons/io";

// ENUM & TYPING
import { IconName } from "./icon.enum";

interface CustomIconProps {
  size: number;
  name: IconName;
  className?: string;
  onClick?: any;
}

export const iconComponents = {
  [IconName.User]: FaRegUser,
  [IconName.Linkedin]: FaLinkedin,
  [IconName.NewTab]: IoMdOpen,
};

export const CustomIcon = ({
  size,
  name,
  className,
  onClick,
}: CustomIconProps) => {
  const Icon = iconComponents[name];

  return (
    <span className={className} onClick={onClick}>
      {Icon ? <Icon size={size} /> : null}
    </span>
  );
};
