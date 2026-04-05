import { cn } from "@/lib/utils";

type SectionTone = "default" | "soft" | "deep";

interface SectionWrapperProps {
  readonly id: string;
  readonly className?: string;
  readonly children: React.ReactNode;
  /** @deprecated Use `tone` */
  readonly alternate?: boolean;
  readonly tone?: SectionTone;
}

export function SectionWrapper({
  id,
  className,
  children,
  alternate = false,
  tone,
}: SectionWrapperProps) {
  const resolvedTone: SectionTone =
    tone ?? (alternate ? "soft" : "default");

  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        resolvedTone === "soft" && "bg-muted/40",
        resolvedTone === "deep" &&
          "bg-navy-950 text-white [&_.text-gold-500]:text-gold-400",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
