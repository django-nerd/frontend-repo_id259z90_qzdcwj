import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavItem({ children }) {
  return (
    <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 p-[2px] shadow-[0_0_40px_-10px_rgba(168,85,247,0.8)]">
              <div className="h-full w-full rounded-[10px] bg-slate-900/90 backdrop-blur"></div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-fuchsia-400" />
              <span className="text-white font-semibold tracking-tight">Himalaya AI</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavItem>Work</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Process</NavItem>
            <NavItem>About</NavItem>
          </nav>

          <div className="hidden md:flex">
            <a href="#" className="inline-flex items-center rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 border border-white/10 transition-all">
              Book a call
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 md:hidden">
            <NavItem>Work</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Process</NavItem>
            <NavItem>About</NavItem>
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 border border-white/10 transition-all">
              Book a call
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
