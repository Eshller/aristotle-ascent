import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <section
      className="border-y border-border bg-card"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-10 text-center sm:px-6 lg:py-12"
            >
              <p className="font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
