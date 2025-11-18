export default function Pricing() {
  const tiers = [
    {
      name: 'Sprint',
      price: '$8k',
      points: ['1–2 weeks', 'Discovery + prototype', '1 core workflow', 'Foundational evals'],
      badge: 'Fastest start',
    },
    {
      name: 'Build',
      price: '$24k',
      points: ['4–6 weeks', 'Agents/RAG + telemetry', 'Guardrails + security', 'Launch-ready'],
      featured: true,
      badge: 'Most popular',
    },
    {
      name: 'Scale',
      price: 'Custom',
      points: ['Long-term partnership', 'MLOps + perf tuning', 'SLAs + training', 'On-call support'],
      badge: 'For teams',
    },
  ]

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">Flexible engagement</h2>
        <p className="mt-3 text-slate-300/90">Start small, scale when it works. Transparent pricing, no lock-in.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <div
            key={i}
            className={`relative rounded-2xl border border-white/10 p-6 ${t.featured ? 'bg-gradient-to-b from-white/10 to-white/[0.06] shadow-[0_0_50px_-18px_#a78bfa]' : 'bg-white/[0.03]'}`}
          >
            {t.badge && (
              <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-300">
                {t.badge}
              </div>
            )}
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <div className="text-2xl font-semibold text-white/90">{t.price}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
              {t.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">Choose {t.name}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
