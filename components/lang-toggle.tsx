"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "./craft";

export function LangToggle() {
   const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const nextLocale = locale === "en" ? "fr" : "en";

  return (
    <Button
      variant="ghost" // instead of ghost
      size="icon"
      asChild
      aria-label="Toggle language"
      className="relative rounded-full border shadow-sm"
    >
      <Link  href={pathname} locale={nextLocale} >
        <Image
          src="https://flagcdn.com/us.svg"
          alt="English"
          width={20}
          height={20}
          className={cn(
            "absolute h-[1.75rem] w-[1.75rem] transition-all",
            locale === "en" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
          )}
        />
        <Image
          src="https://flagcdn.com/fr.svg"
          alt="Français"
          width={20}
          height={20}
          className={cn(
            "absolute h-[1.2rem] w-[1.5rem] transition-all",
            locale === "fr" ?  "-rotate-90 scale-0" : "rotate-0 scale-100"
          )}
        />
      </Link>
    </Button>
  );
}
