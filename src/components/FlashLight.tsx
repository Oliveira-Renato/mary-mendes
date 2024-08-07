import Image, { StaticImageData } from "next/image";

interface FlashLightProps {
  src: StaticImageData;
  width: number;
  height: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
}

export default function FlashLight({
  src,
  width,
  height,
  top,
  left,
  right,
  bottom,
  zIndex = 0,
}: FlashLightProps) {
  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        right,
        bottom,
        zIndex,
      }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="Flash Light"
        className="object-cover"
      />
    </div>
  );
}
