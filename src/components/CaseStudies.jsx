export default function CaseStudies() {
  const cases = [
    {
      tag: 'Fintech',
      title: 'Multilingual support copilot for a leading wallet',
      blurb:
        'Deployed a Nepali/English LLM copilot with guardrails and human-in-the-loop. Cut average handle time by 34% and improved CSAT +18%.',
      meta: 'RAG • Evals • Tools • Observability',
    },
    {
      tag: 'E‑commerce',
      title: 'Vector search + retrieval over 2M SKUs in under 200ms',
      blurb:
        'Built a resilient retrieval layer with hybrid search and freshness-aware ranking. Conversion uplift of 7.2% across long-tail queries.',
      meta: 'Hybrid RAG • Re-rankers • MLOps',
    },
    {
      tag: 'Gov/NGO',
      title: 'Voice-to-LLM IVR for public services in Nepali',
      blurb:
        'Low-connectivity optimized pipeline with on-device VAD and streaming. Reduced drop-offs by 23% in pilot districts.',
      meta: 'ASR • TTS • Agents • Telephony',
    },
  ]

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected work</h2>
          <p className="mt-2 text-slate-300/90">Evidence over hype. Real systems delivering measurable outcomes.</p>
        </div>
        <a href="#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5 md:inline-flex">Start a project</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="aspect-[16/10] bg-[radial-gradient(1200px_600px_at_-10%_-20%,#4f46e50a,transparent),linear-gradient(180deg,#0b1220,#0b1220)]">
              <svg viewBox="0 0 200 200" className="h-full w-full opacity-[0.35] mix-blend-overlay">
                <defs>
                  <pattern id={`dots-${i}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots-0)" className="text-white/10" />
              </svg>
            </div>
            <div className="p-5">
              <div className="mb-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                {c.tag}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:underline underline-offset-4">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{c.blurb}</p>
              <div className="mt-4 text-xs text-slate-400">{c.meta}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
