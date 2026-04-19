import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

export const NavbarLogo = memo(function NavbarLogo({
  href,
  src,
  alt,
  width,
  height,
  className,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) {
  return (
    <Link href={href} className="group flex items-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority
      />
    </Link>
  );
});
