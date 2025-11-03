import Image from "next/image";
import { cn } from "@/lib/utils";

function ProjectImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className="object-contain group-hover:scale-105 transition-transform duration-300"
        onError={() => {
          console.error("Image failed to load:", src);
        }}
      />
    </div>
  );
}
export default ProjectImage;
