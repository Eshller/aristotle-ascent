import Link from "next/link";
import { SECTION, SITE_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-600">
        404
      </p>
      <h1 className="mt-2 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
        This page isn&apos;t here
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The link may be outdated, or the page may have moved.
      </p>
      <Link
        href={SECTION.home}
        className="mt-10 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-600"
      >
        Back to {SITE_NAME}
      </Link>
    </div>
  );
}
