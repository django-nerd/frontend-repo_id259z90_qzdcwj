export default function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-indigo-500/10 p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_40%)]"></div>
        <div className="relative">
          <h3 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            Let’s build something remarkable
          </h3>
          <p className="mt-2 max-w-2xl text-slate-300/90">
            Tell us about your idea, and we’ll propose a path to launch in days, not months.
          </p>
          <form className="mt-6 grid gap-4 sm:grid-cols-3">
            <input placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            <input placeholder="Email or WhatsApp" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(168,85,247,0.8)] transition-all hover:scale-[1.01]">
              Request proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
