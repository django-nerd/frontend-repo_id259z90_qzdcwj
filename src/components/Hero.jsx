import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.08),transparent_35%)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 backdrop-blur">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></div>
          <span className="text-xs font-medium text-slate-200/80">Now booking Q1/Q2 2025</span>
        </div>

        <h1 className="max-w-4xl bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          AI that feels handcrafted for Nepal
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300/90 sm:text-lg">
          We build production-grade AI apps, agents, and automations for ambitious Nepali brands and global teams operating in Kathmandu time.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(168,85,247,0.8)] transition-all hover:scale-[1.02]">
            Build with us
          </a>
          <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
            See our work
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950"></div>
    </section>
  )
}
