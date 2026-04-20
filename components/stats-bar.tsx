import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <section
      className="relative z-20 -mt-12 border-y border-border bg-card px-4 sm:-mt-16 sm:px-8 lg:-mt-20 lg:px-12"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-[min(100%,88rem)]">
        <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-4 py-12 text-center sm:px-8 sm:py-14 lg:py-16"
            >
              <p className="font-heading text-4xl font-medium tabular-nums tracking-tight text-navy-950 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[12rem] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
