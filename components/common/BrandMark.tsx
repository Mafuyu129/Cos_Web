import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
};

export function BrandMark({ className, imageClassName }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "relative flex h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white shadow-soft",
        className
      )}
    >
      <Image
        src="/images/logos/pherada-logo-bg.jpg"
        alt="Pherada Cosmetics logo"
        fill
        sizes="56px"
        draggable={false}
        className={cn("decorative-media object-cover object-[center_31%]", imageClassName)}
        priority
      />
    </span>
  );
}
