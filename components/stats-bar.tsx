import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <section
      className="bg-[#F7FBFF] px-6 py-8 md:px-10 lg:px-[60px]"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#D4EAFA] bg-white px-4 py-6 text-center shadow-[0_6px_22px_rgba(123,196,226,0.12)]"
            >
              <p className="font-heading text-5xl font-bold tabular-nums tracking-tight text-[#1E5F8A]">
                {stat.value}
              </p>
              <p className="mt-2 max-w-48 text-[11px] font-normal uppercase leading-relaxed tracking-[0.18em] text-[#6B8599]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
