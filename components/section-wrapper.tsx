import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  readonly id: string;
  readonly className?: string;
  readonly children: React.ReactNode;
  readonly alternate?: boolean;
}

export function SectionWrapper({
  id,
  className,
  children,
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        alternate && "bg-navy-900",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
