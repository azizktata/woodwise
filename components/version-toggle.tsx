"use client";

import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const versions = [
  { label: "M", title: "Main", prefix: "" },
  { label: "V1", title: "Version 1", prefix: "/1" },
  { label: "V2", title: "Version 2", prefix: "/2" },
];

export function VersionToggle() {
  const pathname = usePathname(); // path without locale, e.g. "/1/pages/about"

  const currentVersion = pathname.startsWith("/2")
    ? "2"
    : pathname.startsWith("/1")
    ? "1"
    : "main";

  const basePath =
    pathname.startsWith("/1") || pathname.startsWith("/2")
      ? pathname.slice(2) || "/"
      : pathname;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 rounded-full bg-white/90 shadow-lg border border-gray-200 px-1.5 py-1.5 backdrop-blur-sm">
      {versions.map(({ label, title, prefix }) => {
        const versionKey = prefix === "" ? "main" : prefix.slice(1);
        const href = prefix === ""
          ? basePath
          : prefix + (basePath === "/" ? "" : basePath);
        const isActive = currentVersion === versionKey;
        return (
          <Link
            key={label}
            href={href as any}
            title={title}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold transition-all",
              isActive
                ? "bg-[#0d7f40] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
