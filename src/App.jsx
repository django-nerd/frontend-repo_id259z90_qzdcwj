import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Showcase from './components/Showcase'
import Logos from './components/Logos'
import CTA from './components/CTA'

function App() {
  const grainSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <filter id="n">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#n)" opacity="0.35"/>
  </svg>`

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-fuchsia-500/30 selection:text-white">
      {/* Ambient gradient + grain */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(236,72,153,0.12),transparent),radial-gradient(1000px_500px_at_90%_-20%,rgba(99,102,241,0.12),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(grainSvg)}")`,
          }}
        />
      </div>

      <Navbar />
      <Hero />
      <Marquee />
      <Showcase />
      <Logos />
      <CTA />

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-xs text-slate-400/80">
        © {new Date().getFullYear()} Himalaya AI — Kathmandu, Nepal
      </footer>
    </div>
  )
}

export default App
