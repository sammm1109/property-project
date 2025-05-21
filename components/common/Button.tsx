import { StaticImageData } from "next/image";
import Image from "./Image";

interface ButtonProps {
  label: string;
  onClickFunction: () => void;
  alt?: string;
  src?: string | StaticImageData;
  imageWidth?: number;
  customBtnStyle?: string;
  customLabelStyle?: string;
}

export function Button({
  label,
  onClickFunction,
  alt = "image",
  src,
  imageWidth = 35,
  customBtnStyle = "btn",
  customLabelStyle = "text-white text-lg",
}: ButtonProps) {
  return (
    <button
      onClick={onClickFunction}
      className={`flex gap-[0.5] md:gap-2 bg-green-400 shadow-sm cursor-pointer ${customBtnStyle} `}
    >
      {src && <Image src={src} width={imageWidth} alt={`icon_${alt}`} />}

      <span className={`font-medium ${customLabelStyle}`}>{label}</span>
    </button>
  );
}
