export default function Stats() {
  const stats = [
    { k: '34%', v: 'AHT reduction', d: 'Customer support copilot' },
    { k: '200ms', v: 'P95 retrieval', d: 'Search over 2M+ items' },
    { k: '99.9%', v: 'Uptime', d: 'Production deployments' },
    { k: '10x', v: 'Faster prototyping', d: 'From brief to demo' },
  ]
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl font-semibold text-white">{s.k}</div>
            <div className="text-sm text-slate-300/90">{s.v}</div>
            <div className="mt-1 text-xs text-slate-400">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
