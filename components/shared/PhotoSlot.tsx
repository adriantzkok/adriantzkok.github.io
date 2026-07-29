import Image from "next/image";

interface PhotoSlotProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function PhotoSlot({
  src,
  alt = "Photo",
  size = 120,
  className = "",
}: PhotoSlotProps) {
  return (
    <div
      className={
        "inline-flex items-center justify-center overflow-hidden rounded-full bg-muted " +
        className
      }
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
