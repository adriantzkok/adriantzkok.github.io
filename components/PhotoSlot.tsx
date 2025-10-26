import React from "react";

interface PhotoSlotProps {
  src?: string;
  alt?: string;
  size?: number; // px
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
        "inline-flex items-center justify-center rounded-full overflow-hidden bg-gray-100 " +
        className
      }
      style={{ width: size, height: size }}
      aria-hidden={!src}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-gray-500">
          🖼️
        </div>
      )}
    </div>
  );
}
