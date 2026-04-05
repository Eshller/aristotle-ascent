import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "sm" | "lg" | "icon";

const variantClasses: Record<Variant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/80",
  outline:
    "border border-border bg-transparent hover:bg-muted hover:text-foreground",
  ghost:
    "hover:bg-muted hover:text-foreground",
};

const sizeClasses: Record<Size, string> = {
  default: "h-8 gap-1.5 px-2.5",
  sm: "h-7 gap-1 px-2.5 text-[0.8rem]",
  lg: "h-9 gap-1.5 px-2.5",
  icon: "size-8",
};

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly variant?: Variant;
  readonly size?: Size;
}

export function LinkButton({
  variant = "default",
  size = "default",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-lg text-sm font-medium transition-all select-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
