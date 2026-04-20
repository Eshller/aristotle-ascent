import type { Metadata } from "next";
import Link from "next/link";
import { SECTION, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights",
  description: `Notes on admissions, funding, and global study — ${SITE_NAME}, ${SITE_TAGLINE}.`,
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-2xl flex-1 px-4 py-16 sm:px-6 lg:py-24">
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-600">
        In progress
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Field notes &amp; guides
      </h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        We&apos;re drafting practical articles on applications, scholarships, and moving abroad—
        written for students and families, not algorithms. Subscribe to the newsletter when it
        launches, or reach out if you need help now.
      </p>
      <Link
        href={SECTION.contact}
        className="mt-8 inline-flex text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
      >
        Start a conversation →
      </Link>
      <p className="mt-12 border-t border-border pt-10">
        <Link
          href="/"
          className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          ← Home
        </Link>
      </p>
    </div>
  );
}
