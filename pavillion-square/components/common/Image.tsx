import React from "react";
import type { StaticImageData } from "next/image";

interface CustomImageProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "src" | "width" | "height"
  > {
  src: string | StaticImageData;
  alt: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean; // Custom prop to simulate next/image fill
  sizes?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Image: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  style,
  className,
  ...props
}) => {
  const isStatic = typeof src !== "string";
  const imgSrc = isStatic ? src.src : src;
  const imgWidth = width ?? (isStatic && !fill ? src.width : undefined);
  const imgHeight = height ?? (isStatic && !fill ? src.height : undefined);

  const imgStyle: React.CSSProperties = {
    objectFit: "cover",
    ...(fill
      ? {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }
      : {}),
    ...style,
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={fill ? undefined : imgWidth}
      height={fill ? undefined : imgHeight}
      sizes={sizes}
      style={imgStyle}
      className={className}
      {...props}
    />
  );
};

export default Image;
