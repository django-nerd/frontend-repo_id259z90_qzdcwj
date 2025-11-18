import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_20%_10%,rgba(148,163,184,0.10),transparent_60%),radial-gradient(40%_30%_at_80%_0%,rgba(148,163,184,0.08),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-slate-200/80">Now booking Q1/Q2 2025</span>
        </div>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Practical AI, built in Kathmandu.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-300/90 sm:text-lg">
          Products, agents, and retrieval systems that ship. Less noise, more outcomes.
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Start a project
          </a>
          <a href="#work" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white/80 hover:text-white">
            See case studies →
          </a>
        </div>
      </div>
    </section>
  )
}
