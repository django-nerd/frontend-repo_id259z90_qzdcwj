export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-16 text-slate-400/80">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-white font-semibold">Himalaya AI</div>
          <p className="mt-2 text-sm">Kathmandu-based AI design & engineering. We build agents, copilots, and retrieval systems that actually ship.</p>
        </div>
        <div>
          <div className="text-white font-medium">Links</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#work" className="hover:text-white">Work</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#process" className="hover:text-white">Process</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium">Contact</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li>hello@himalaya.ai</li>
            <li>Kathmandu, Nepal</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium">Newsletter</div>
          <form className="mt-2 flex gap-2">
            <input placeholder="Your email" className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">Join</button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-xs">© {new Date().getFullYear()} Himalaya AI — Kathmandu, Nepal</div>
    </footer>
  )
}
