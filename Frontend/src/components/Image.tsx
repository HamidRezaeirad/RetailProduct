import React from "react";
import { ImageProps } from "../interfaces/Image.props";

/**
 *
 * @param src string Image src property
 * @param style string Image style property
 * @param className string Image className property
 * @param alt string Image alt property
 * @param height string Image height property
 * @returns Image react component
 */
const Image: React.FC<ImageProps> = ({
  src,
  style,
  className,
  alt,
  height,
}) => {
  return (
    <>
      <img
        src={src}
        style={style}
        className={className}
        alt={alt}
        height={height}
      />
    </>
  );
};

export default Image;
