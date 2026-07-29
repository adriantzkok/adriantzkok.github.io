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
    <div className={cn("relative h-full w-full", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
export default ProjectImage;
