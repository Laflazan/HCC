"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPathname, getPath } from "@/lib/site";

export function CookieBanner() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:right-6 sm:w-full sm:max-w-md">
      <div className="rounded-2xl border border-border bg-background/95 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.12)] backdrop-blur-md">
        <p className="text-sm leading-6 text-foreground/80">
          {dictionary.cookieBanner.message}{" "}
          <Link
            href={getPath(locale, "contact")}
            className="text-gold transition-colors hover:text-gold/80"
          >
            {dictionary.cookieBanner.details}
          </Link>
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex h-10 items-center justify-center rounded-none border border-border bg-transparent px-5 text-sm text-foreground/80 transition-all duration-300 hover:bg-black/5 hover:text-foreground"
          >
            {dictionary.cookieBanner.reject}
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex h-10 items-center justify-center rounded-none border border-gold bg-transparent px-5 text-sm text-foreground transition-all duration-300 hover:bg-gold/10 hover:text-foreground"
          >
            {dictionary.cookieBanner.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
