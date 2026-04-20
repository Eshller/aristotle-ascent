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
        "py-20 md:py-24 lg:py-[120px]",
        resolvedTone === "soft" && "bg-[linear-gradient(180deg,var(--cream,#FDFAF2)_0%,var(--offwhite,#F7FBFF)_100%)]",
        resolvedTone === "paper" &&
          "bg-offwhite text-foreground",
        resolvedTone === "deep" &&
          "bg-navy-950 text-white [&_.text-gold-500]:text-gold-400",
        className
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-[60px]">
        {children}
      </div>
    </section>
  );
}
