import { Dictionary } from "@/lib/i18n/getDictionary";

type TrustSignalsProps = {
  dict: Dictionary;
};

const icons = [
  <svg key="lang" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg key="loc" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  <svg key="check" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  <svg key="cal" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
];

export function TrustSignals({ dict }: TrustSignalsProps) {
  return (
    <section>
      <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {dict.trust.title}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dict.trust.points.map((point, i) => (
          <div
            key={i}
            className={`animate-fade-in-up stagger-${i + 1} group rounded-2xl border border-warm-200 bg-white p-6 transition-all hover:border-warm-300 hover:shadow-card`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warm-100 text-rose transition-colors group-hover:bg-rose/10">
              {icons[i]}
            </div>
            <p className="mt-4 text-sm font-medium leading-relaxed text-ink/70">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
