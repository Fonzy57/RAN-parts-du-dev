// NEXT
import Link from "next/link";
import { ReactNode } from "react";

// COMPONENTS

// ENUM & TYPING
import { ButtonColor, ButtonSize, ButtonWidth } from "./button.enum";
import { Button } from "./button";
import { IconName } from "../icons/icon.enum";

export interface LinkButtonProps {
  children: ReactNode;
  url: string;
  blank?: boolean;
  color?: ButtonColor;
  width?: ButtonWidth;
  size?: ButtonSize;
  disabled?: boolean | undefined;
  className?: string;
  loading?: boolean;
  iconName?: IconName;
}

export const LinkButton = ({
  children,
  url,
  blank,
  color,
  width,
  size,
  disabled,
  className,
  iconName,
}: LinkButtonProps) => {
  let target = "_self";
  let rel = "";

  if (blank) {
    target = "_blank";
    rel = "noopener noreferrer";
  }

  return (
    <Link href={url} target={target} rel={rel}>
      <Button
        color={color}
        width={width}
        size={size}
        disabled={disabled}
        className={className}
        iconName={iconName}
      >
        {children}
      </Button>
    </Link>
  );
};
