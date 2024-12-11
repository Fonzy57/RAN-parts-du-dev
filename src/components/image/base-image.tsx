// NEXT
import Image, { ImageProps } from "next/image";

// CONFIG
import getConfig from "next/config";
import { basePath } from "../../../next.config";

interface BaseImageProps extends Omit<ImageProps, "src"> {
  // Inherits Image props, except "src"
  src: string;
}

const BaseImage = ({ src, ...props }: BaseImageProps) => {
  return <Image src={`${basePath}${src}`} {...props} />;
};

export default BaseImage;
