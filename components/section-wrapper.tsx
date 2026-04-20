import { cn } from "@/lib/utils";

type SectionTone = "default" | "soft" | "deep" | "paper";

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
        "py-24 md:py-32 lg:py-40",
        resolvedTone === "soft" && "bg-muted/45",
        resolvedTone === "paper" &&
          "border-y border-border/60 bg-muted/35 text-foreground",
        resolvedTone === "deep" &&
          "bg-navy-950 text-white [&_.text-gold-500]:text-gold-400",
        className
      )}
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-5 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
