export default function Process() {
  const steps = [
    {
      k: '01',
      t: 'Discovery sprint',
      d: 'We clarify constraints, success metrics, and data sources. You get clear scope + timeline.',
    },
    { k: '02', t: 'Prototype', d: 'Clickable UX + a thin working slice. We validate the core interaction quickly.' },
    { k: '03', t: 'Build', d: 'Ship incrementally: agents, RAG, evals, and telemetry wired from day one.' },
    { k: '04', t: 'Launch + scale', d: 'Hardening, guardrails, and performance tuning for production reliability.' },
  ]

  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">How we work</h2>
        <p className="mt-3 text-slate-300/90">A transparent, low-ceremony path from idea to production.</p>
      </div>

      <ol className="mt-12 grid gap-6 md:grid-cols-2">
        {steps.map((s) => (
          <li key={s.k} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(168,85,247,0.08)_40%,transparent_70%)]" />
            <div className="relative">
              <div className="text-sm font-mono text-fuchsia-400">{s.k}</div>
              <h3 className="mt-1 text-lg font-semibold text-white">{s.t}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
