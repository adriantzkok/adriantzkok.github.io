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
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className={cn(
          "object-contain transition-transform duration-300 group-hover:scale-105",
          className,
        )}
      />
    </div>
  );
}
export default ProjectImage;
